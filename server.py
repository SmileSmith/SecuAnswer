#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""程序主进程"""
from http.server import BaseHTTPRequestHandler, HTTPServer
from urllib.parse import urlparse
from urllib.request import Request, urlopen
from urllib.error import HTTPError, URLError
from multiprocessing import Process
from os import path
import sys
import json
from src.units import adb, sqlite
from src.controllers import controller
from sogou_proxy import run_proxy_server

CURRENT_DIR = path.dirname(path.realpath(__file__))

PORT = 8080


class MyHandler(BaseHTTPRequestHandler):
    """处理各类请求的控制器"""

    def do_GET(self):
        """处理GET请求"""
        querypath = urlparse(self.path)
        apipath = querypath.path
        if apipath.startswith("/allinone/uc/answer"):
            self.proxy_pass("/allinone/uc/answer", "http://answer.sm.cn/answer",
                            Referer="http://answer.sm.cn/answer/index?activity=million", Host="answer.sm.cn")
        else:
            self.handle_static()

    def do_POST(self):
        """处理POST请求"""
        body = self.rfile.readline(int(self.headers['content-length']))
        datas = json.loads(str(body, 'UTF-8'))
        querypath = urlparse(self.path)
        apipath = querypath.path
        res = None
        if apipath.startswith("/reply-answer"):
            controller.handle_answer(apipath, datas)
        elif apipath.startswith('/reply-correct'):
            controller.save_correct_result(apipath, datas)
        elif apipath.startswith('/review-answer'):
            res = controller.get_review_datas()
        elif apipath.startswith('/toggle-ai'):
            controller.toggle_ai(datas)
        self.send_response_only(200)
        self.send_header('Content-type', 'json')
        self.send_header('Access-Control-Allow-Origin', '*')
        self.end_headers()
        if res:
            self.wfile.write(json.dumps(res).encode('utf-8'))
        else:
            self.wfile.write(b"ok")

    def proxy_pass(self, orgin_path, target_host_path, **my_headers):
        """反向代理"""
        headers = self.headers
        for key in my_headers:
            if headers.get(key):
                headers.replace_header(key, my_headers[key])
            else:
                headers.add_header(key, my_headers[key])
        # headers.replace_header("User-Agent", ANDROID_USER_AGENT)
        req = Request(self.path.replace(
            orgin_path, target_host_path), headers=headers)
        data = None
        try:
            res = urlopen(req)
        except HTTPError as http_error:
            print("%s - %s" % (http_error, target_host_path))
        except URLError as url_error:
            print("%s - %s" % (url_error, target_host_path))
        else:
            data = res.read()
            # TODO:当是AI自动代替的模式时，直接解析结果调用相关控制器逻辑
        finally:
            self.send_response_only(200)
            self.end_headers()
            if not data:
                self.wfile.write(b"console.log('Remote Server Error')")
            else:
                self.wfile.write(data)


    def handle_static(self):
        """处理静态文件请求"""
        send_reply = False
        querypath = urlparse(self.path)
        filepath, query = querypath.path, querypath.query

        if filepath.endswith('/'):
            filepath += 'index.html'
        if filepath.endswith(".html"):
            mimetype = 'text/html'
            send_reply = True
        if filepath.endswith(".jpg"):
            mimetype = 'image/jpg'
            send_reply = True
        if filepath.endswith(".gif"):
            mimetype = 'image/gif'
            send_reply = True
        if filepath.endswith(".png"):
            mimetype = 'image/png'
            send_reply = True
        if filepath.endswith(".ico"):
            mimetype = 'image/ico'
            send_reply = True
        if filepath.endswith(".js"):
            mimetype = 'application/javascript'
            send_reply = True
        if filepath.endswith(".css"):
            mimetype = 'text/css'
            send_reply = True
        if filepath.endswith(".json"):
            mimetype = 'application/json'
            send_reply = True
        if send_reply is True:
            # Open the static file requested and send it
            try:
                with open(path.realpath(CURRENT_DIR + '/' + filepath), 'rb') as file:
                    content = file.read()
                    self.send_response_only(200)
                    self.send_header('Content-type', mimetype)
                    self.end_headers()
                    self.wfile.write(content)
            except IOError:
                self.send_error(404, 'File Not Found: %s' % self.path)



def run_server(port=PORT):
    """启动本地服务器"""
    server_address = ('', port)
    httpd = HTTPServer(server_address, MyHandler)
    print('> Running Server On Port: ', port)
    print('> Press Ctrl + C to exit...\n')
    httpd.serve_forever()


def main():
    """主函数"""
    adb.init()
    sqlite.init_table()
    sub_process = Process(target=run_proxy_server)
    sub_process.start()
    run_server()
    
# start main at last ##########################################################


if __name__ == '__main__':
    main()
