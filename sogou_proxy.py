import socket
from http.server import BaseHTTPRequestHandler, HTTPServer
from urllib.parse import urlparse
from urllib.request import Request, urlopen
from urllib.error import HTTPError, URLError

ANDROID_USER_AGENT = "Mozilla/5.0 (Linux; Android 7.1.1; Google Pixel - \
7.1.0 - API 25 - 1080x1920 Build/NMF26Q; wv) AppleWebKit/537.36 (KHTML, like Gecko) \
Version/4.0 Chrome/52.0.2743.100 Mobile Safari/537.36 SogouSearch Android1.0 version3.0 AppVersion/5802"

PORT = 8888

socket.setdefaulttimeout(3.0) 

class MySogouPushHandler(BaseHTTPRequestHandler):
    """处理各类请求的控制器"""

    def do_GET(self):
        """处理GET请求"""
        querypath = urlparse(self.path)
        apipath = querypath.path
        if apipath.startswith("/allinone/sogou/api/anspush"):
            self.proxy_pass("/allinone/sogou/api/anspush", "https://wdpush.sogoucdn.com/api/anspush",
                            Referer="https://assistant.sogoucdn.com/v5/cheat-sheet?channel=bwyx", Host="wdpush.sogoucdn.com")

    def proxy_pass(self, orgin_path, target_host_path, **my_headers):
        """反向代理"""
        headers = self.headers
        for key in my_headers:
            if headers.get(key):
                headers.replace_header(key, my_headers[key])
            else:
                headers.add_header(key, my_headers[key])
        headers.replace_header("User-Agent", ANDROID_USER_AGENT)
        req = Request(self.path.replace(
            orgin_path, target_host_path), headers=headers)
        data = None
        try:
            res = urlopen(req, timeout=3)
        except HTTPError as http_error:
            print("%s - %s" % (http_error, target_host_path))
        except URLError as url_error:
            print("%s - %s" % (url_error, target_host_path))
        else:
            data = res.readline()
            # TODO:当是AI自动代替的模式时，直接解析结果调用相关控制器逻辑
        finally:
            self.send_response_only(200)
            self.end_headers()
            if not data:
                self.wfile.write(b"console.log('Remote Server Error')")
            else:
                self.wfile.write(data)

def run_proxy_server(port=PORT):
    """启动本地服务器"""
    server_address = ('', port)
    httpd = HTTPServer(server_address, MySogouPushHandler)
    print('> Running Server On Port: ', port)
    print('> Press Ctrl + C to exit...\n')
    httpd.serve_forever()
