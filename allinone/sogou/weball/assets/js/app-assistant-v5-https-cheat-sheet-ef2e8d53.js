! function(n) {
	function e(t) {
		if (o[t]) return o[t].exports;
		var i = o[t] = {
			i: t,
			l: !1,
			exports: {}
		};
		return n[t].call(i.exports, i, i.exports, e), i.l = !0, i.exports
	}
	var o = {};
	e.m = n, e.c = o, e.d = function(n, o, t) {
		e.o(n, o) || Object.defineProperty(n, o, {
			configurable: !1,
			enumerable: !0,
			get: t
		})
	}, e.n = function(n) {
		var o = n && n.__esModule ? function() {
				return n.
				default
			} : function() {
				return n
			};
		return e.d(o, "a", o), o
	}, e.o = function(n, e) {
		return Object.prototype.hasOwnProperty.call(n, e)
	}, e.p = "/allinone/sogou/weball/assets/", e(e.s = 57)
}({
	1: function(n, e, o) {
		"use strict";
		! function() {
			function n(n) {
				if (document.cookie.length > 0) {
					var e = document.cookie.indexOf(n + "=");
					if (-1 !== e) {
						var e = e + n.length + 1,
							o = document.cookie.indexOf(";", e);
						return -1 === o && (o = document.cookie.length), decodeURIComponent(document.cookie.substring(e, o))
					}
				}
				return ""
			}
			function e() {
				try {
					return window.JSInvoker.getMid()
				} catch (n) {
					return ""
				}
			}
			function o() {
				try {
					return window.JSInvoker.h5.getMid()
				} catch (n) {
					return ""
				}
			}
			function t() {
				try {
					var t = e() || o();
					return w && t ? t : n("SGS_FE_WAID")
				} catch (n) {
					return ""
				}
			}
			function i(n, e) {
				var o = {
					pv: d + "//sa.sogou.com/pv",
					cl: d + "//sa.sogou.com/cl"
				};
				window.SGS_FE_DATA && 0 === window.SGS_FE_DATA.NODE_ENV.indexOf("dev") && (o = {
					pv: "/pv",
					cl: "/cl"
				});
				try {
					var i = {
						productid: "appsearch",
						ts: Date.now(),
						os: g,
						mid: t(),
						scenario: f,
						ab_test: window.ab_test || ""
					}, r = o[e || "cl"],
						a = [];
					for (var s in n) i[s] = n[s];
					for (var s in i) a.push(encodeURIComponent(s) + "=" + encodeURIComponent(i[s]));
					(new Image).src = r + "?" + a.join("&")
				} catch (n) {
					console.log(n)
				}
			}
			function r(n) {
				window.addEventListener("load", function() {
					debugger;
					setTimeout(function() {
						if (window.performance && window.performance.timing) {
							var e = window.performance.timing,
								o = {
									productid: c.felab,
									page: n,
									type: "timing",
									costPrevious: e.fetchStart - e.navigationStart,
									costDNS: e.domainLookupEnd - e.domainLookupStart,
									costTCP: e.connectEnd - e.connectStart,
									costRequest: e.responseStart - e.requestStart,
									costResponse: e.responseEnd - e.responseStart,
									costReqToRes: e.responseEnd - e.requestStart,
									costDOMParse: e.domInteractive - e.responseEnd,
									costWhitePage: e.domLoading - e.navigationStart,
									costT0: e.responseStart - e.navigationStart,
									costDOMReady: e.domInteractive - e.navigationStart,
									costOnLoad: e.loadEventEnd - e.navigationStart,
									costContentLoad: e.domContentLoadedEventEnd - e.domInteractive
								};
							o.timing = JSON.stringify(e), o.ua = window.navigator.userAgent, i(o)
						}
					}, 0)
				})
			}
			function a(n) {
				window.addEventListener("load", function() {
					debugger;
					setTimeout(function() {
						n.ua = window.navigator.userAgent, i(n)
					}, 0)
				})
			}
			function s(n) {
				window.performance && window.performance.timing ? r(n) : a({
					productid: c.felab,
					page: n,
					type: "notiming"
				}), a({
					productid: c.felab,
					page: n,
					type: "oncePbPerformance"
				}), a(window.Worker ? {
					productid: c.felab,
					page: n,
					type: "Worker"
				} : {
					productid: c.felab,
					page: n,
					type: "noWorker"
				})
			}
			var c = {
				felab: "sgsdevfe"
			}, d = location.protocol;
			window.SgsPb = window.SgsPb || {};
			var u = window.SgsPb,
				l = navigator.userAgent,
				p = null !== l.match(/(ios)|(iphone)|(ipod)|(ipad)/i),
				h = null !== l.match(/android/i),
				w = null !== l.match(/sogousearch/i),
				g = h ? "android" : p ? "ios" : "unknown",
				f = w ? "sgs" : "";
			u.directPb = i, u.pbPerformance = s
		}()
	},
	10: function(n, e, o) {
		n.exports = o.p + "images/xg_logo_none-6e22a37a.png"
	},
	11: function(n, e, o) {
		n.exports = o.p + "images/logo_hj_none-b48d4e2f.png"
	},
	12: function(n, e, o) {
		n.exports = o.p + "images/logo_zs_none-d72109e8.png"
	},
	13: function(n, e, o) {
		n.exports = o.p + "images/logo_hjsm-cd0b8aed.png"
	},
	2: function(n, e, o) {
		"use strict";

		function t(n, e, o) {
			if (!n) return console.log("Not exists"), !1;
			var t = null;
			document.addEventListener ? t = "addEventListener" : document.attachEvent && (t = "attachEvent", e = "on" + e), n[t](e, o)
		}
		function i(n) {
			return window.getComputedStyle(n, null)
		}
		function r(n, e) {
			var o = i(n),
				t = !0,
				r = !1,
				a = void 0;
			try {
				for (var s, c = _[Symbol.iterator](); !(t = (s = c.next()).done); t = !0) {
					var d = s.value,
						u = o.getPropertyValue("" + d + e);
					if (u) return u
				}
			} catch (n) {
				r = !0, a = n
			} finally {
				try {
					!t && c.
					return &&c.
					return ()
				} finally {
					if (r) throw a
				}
			}
			return !1
		}
		function a(n) {
			var e = n.split("(")[1],
				e = e.split(")")[0],
				e = e.split(","),
				o = e[0],
				t = e[1];
			e[2], e[3];
			return Math.round(Math.atan2(t, o) * (180 / Math.PI))
		}
		function s(n) {
			var e = r(n, "height");
			return -1 !== e.indexOf("px") && parseInt(e.split("px")[0])
		}
		function c(n) {
			n = n || window.event, n.preventDefault && n.preventDefault(), n.returnValue = !1
		}
		function d(n) {
			if (E[n.keyCode]) return c(n), !1
		}
		function u() {
			window.addEventListener && window.addEventListener("DOMMouseScroll", c, !1), window.onwheel = c, window.onmousewheel = document.onmousewheel = c, window.ontouchmove = c, document.onkeydown = d
		}
		function l() {
			window.removeEventListener && window.removeEventListener("DOMMouseScroll", c, !1), window.onmousewheel = document.onmousewheel = null, window.onwheel = null, window.ontouchmove = null, document.onkeydown = null
		}
		function p() {
			for (var n = 3, e = document.createElement("b"), o = e.all || []; e.innerHTML = "\x3c!--[if gt IE " + ++n + "]><i><![endif]--\x3e", o[0];);
			return n > 4 ? n : document.documentMode
		}
		function h(n, e, o, t, i) {
			var r = new Date,
				a = null;
			r.setTime(r.getTime() + 864e5 * o), a = n + "=" + encodeURIComponent(e) + ";expires=" + r.toUTCString(), t && (a += ";path=" + t), i && (a += ";domain=" + i), document.cookie = a
		}
		function w(n, e, o) {
			var t = new Date;
			t.setTime(t.getTime() - 1e4);
			var i = [n, "=nothing;expires=", t.toGMTString()];
			e && i.push(";domain=" + e), o && i.push(";path=" + o), document.cookie = i.join("")
		}
		function g(n) {
			if (document.cookie.length <= 0) return "";
			var e = document.cookie.indexOf(n + "=");
			if (-1 === e) return "";
			e = e + n.length + 1;
			var o = document.cookie.indexOf(";", e);
			o = -1 === o ? document.cookie.length : o;
			try {
				return decodeURIComponent(document.cookie.substring(e, o))
			} catch (n) {
				return ""
			}
		}
		function f(n, e) {
			-1 === n.className.indexOf(e) && (n.className += e)
		}
		function v(n, e) {
			var o = n.className;
			if (-1 !== o.indexOf(e)) {
				var t = o.split(" ");
				t.splice(t.indexOf(e), 1), n.className = t.join(" ")
			}
		}
		function m(n, e, o) {
			return e *= 2, o *= 2, ["http://img03.sogoucdn.com/v2/thumb", "/resize/w/" + e + "/h/" + o + "/t/2", "/crop/y/0/w/" + e + "/h/" + o, "/retype/ext/auto/q/75", "?appid=200556&url=" + encodeURIComponent(n)].join("")
		}
		function S(n, e) {
			var o = n.width,
				t = o / e;
			n.style.height = t + "px", n.style.width = o + "px", n.style.background = "#e2e2e2"
		}
		function y(n) {
			if (!Number.isInteger(n) || n <= 9999) return n;
			return n % 1e4 == 0 ? Math.floor(n / 1e4) + "w" : n % 1e3 == 0 ? Math.floor(n / 1e3) / 10 + "w" : n > 1e3 * Math.floor(n / 1e3) ? (Math.floor(n / 1e3) + 1) / 10 + "w" : Math.floor(n / 1e3) / 10 + "w"
		}
		function k(n) {
			for (var e = n || 5, o = "", t = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789", i = t.length, r = 0; r < e; r++) o += t.charAt(Math.floor(Math.random() * i));
			return o
		}
		var I = window.navigator.userAgent,
			b = /(ios)|(iphone)|(ipad)|(ipod)/i.test(I),
			J = /android/i.test(I),
			A = /sogousearch/i.test(I),
			T = /micromessenger/i.test(I),
			P = J ? "android" : b ? "ios" : "unknown",
			x = {
				ua: I,
				isIos: b,
				isAndroid: J,
				isSgs: A,
				isWechat: T,
				osType: P
			}, _ = ["-webkit-", "-moz-", "-ms-", "-o-", ""],
			C = {
				timeout: {
					response: 3e3,
					deadline: 6e3
				}
			}, N = {
				sgs: "appsearch"
			};
		Number.isInteger = Number.isInteger || function(n) {
			return "number" == typeof n && isFinite(n) && Math.floor(n) === n
		}, Array.isArray = Array.isArray || function(n) {
			return "[object Array]" === Object.prototype.toString.call(n)
		};
		var E = {
			37: 1,
			38: 1,
			39: 1,
			40: 1
		}, O = function() {
			var n = 0;
			return window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || function(e) {
				var o, t = (new Date).getTime();
				return o = Math.max(0, 16 - (t - n)), n = t + o, setTimeout(function() {
					e(t + o)
				}, o)
			}
		}();
		n.exports = {
			uaInfo: x,
			superagentConfig: C,
			pidMapper: N,
			defaultBase64Img: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mP4+u37PwAJpwPhC2EnZwAAAABJRU5ErkJggg==",
			getComputedStyle: i,
			getPropertyValue: r,
			getRotateAngle: a,
			getHeight: s,
			disableScroll: u,
			enableScroll: l,
			getIENumber: p,
			setCookie: h,
			getCookie: g,
			delCookie: w,
			addClass: f,
			removeClass: v,
			on: t,
			yuntuProcess: m,
			processPostInt: y,
			imgError: S,
			rAFShim: O,
			makeID: k
		}
	},
	4: function(n, e) {},
	5: function(n, e, o) {
		"use strict";
		! function() {
			window.SgsAPI = window.SgsAPI || {};
			var n = window.SgsAPI,
				e = navigator.userAgent,
				o = null !== e.match(/(ios)|(iphone)|(ipad)|(ipod)/i),
				t = null !== e.match(/android/i),
				i = !1,
				r = function(n) {
					try {
						JSON.parse(n)
					} catch (n) {}
				};
			n.init = function(e, o) {
				i || (n.initAllAPIs(e, o), i = !0)
			}, n.initAllAPIs = function(e, i) {
				if (o) {
					if (!i && !window.JSInvoker) return !1;
					n.sgsGetVersionCode = function() {
						try {
							if (window.JSInvoker.h5) {
								if (window.JSInvoker.h5.getVersionCode) return window.JSInvoker.h5.getVersionCode()
							} else if (window.JSInvoker.getVersionCode) return window.JSInvoker.getVersionCode()
						} catch (n) {
							return ""
						}
					}, n.openBookshelf = function() {
						try {
							window.JSInvoker.novel.openBookshelf()
						} catch (n) {}
					}, n.showToast = function(n) {
						setTimeout(function() {
							try {
								window.JSInvoker.toast(n)
							} catch (n) {}
						}, 5)
					}, n.openAnotherPage = function(n, e, o) {
						try {
							"novel" === n ? window.JSInvoker.openAnotherPage(n, encodeURIComponent(e)) : window.JSInvoker.openAnotherPage(n, e)
						} catch (n) {}
					}, n.showToast = function(n) {
						setTimeout(function() {
							try {
								window.JSInvoker.toast(n)
							} catch (n) {}
						}, 5)
					}, n.sgs = {
						shareToWechat: function(n, e) {
							try {
								window.JSInvoker.shareToWeixin ? window.JSInvoker.shareToWeixin(n, e) : window.JSInvoker.h5 && window.JSInvoker.h5.shareToWeixin && window.JSInvoker.h5.shareToWeixin(n, e)
							} catch (n) {}
						},
						shareToQQ: function(n, e) {
							try {
								window.JSInvoker.shareToQQ ? window.JSInvoker.shareToQQ(n, e) : window.JSInvoker.h5 && window.JSInvoker.h5.shareToQQ && window.JSInvoker.h5.shareToQQ(n, e)
							} catch (n) {}
						},
						shareToQzone: function(n, e) {
							try {
								window.JSInvoker.shareToQzone ? window.JSInvoker.shareToQzone(n, e) : window.JSInvoker.h5 && window.JSInvoker.h5.shareToQzone && window.JSInvoker.h5.shareToQzone(n, e)
							} catch (n) {}
						},
						shareToWeibo: function(n, e) {
							try {
								window.JSInvoker.shareToWeibo ? window.JSInvoker.shareToWeibo(n, e) : window.JSInvoker.h5 && window.JSInvoker.h5.shareToWeibo && window.JSInvoker.h5.shareToWeibo(n, e)
							} catch (n) {}
						},
						shareToCustomed: function(e, o, t) {
							var i = o.title || "搜狗搜索",
								r = o.desc || "搜狗搜索",
								a = o.icon || "http://app.sastatic.sogoucdn.com/logo/sogou.png",
								s = o.link || "http://sa.sogou.com";
							"wechat" === e || "Wechat" === e ? n.sgs.shareToWechat(JSON.stringify({
								title: i,
								description: r,
								img_url: a,
								url: s
							}), t) : "moment" === e || "Moment" === e ? n.sgs.shareToWechat(JSON.stringify({
								title: r,
								description: i,
								img_url: a,
								url: s,
								to_app: 8
							}), t) : "weibo" === e || "Weibo" === e ? n.sgs.shareToWeibo(JSON.stringify({
								title: r,
								description: i,
								img_url: a,
								url: s
							}), t) : "qq" === e || "Qq" === e ? n.sgs.shareToQQ(JSON.stringify({
								title: i,
								description: r,
								img_url: a,
								url: s
							}), t) : "qzone" !== e && "Qzone" !== e || n.sgs.shareToQzone(JSON.stringify({
								title: i,
								description: r,
								img_url: a,
								url: s
							}), t)
						}
					}, n.sgsIsNovelSub = function(n, e) {
						try {
							setTimeout(function() {
								window.JSInvoker.novel.isNovelSub(n, e)
							}, 5)
						} catch (n) {}
					}, n.addOriginalNovelItem = function(n, e) {
						try {
							window.JSInvoker.novel.addBook(n, e)
						} catch (n) {}
					}, n.addBookNovelVr = function(n, e) {
						try {
							window.JSInvoker.novel.addBookNovelVr(n, e)
						} catch (n) {}
					}, n.openFeedPage = function(n) {
						try {
							window.JSInvoker.weixin && window.JSInvoker.weixin.openWeixinNews ? window.JSInvoker.weixin.openWeixinNews(n) : window.JSInvoker.openWeixinNews(n)
						} catch (e) {
							r(n)
						}
					}, n.sgs.openAppScan = function(n) {}, n.sgs.openChannel = function(n) {}, n.sgs.openCartoonPage = function() {}
				} else if (t) {
					if (!i && !window.JSInvoker) return !1;
					n.openDatiAlertWindow = function() {
						try {
							return window.JSInvoker.openDatiAlertWindow()
						} catch (n) {
							return ""
						}
					}, n.sgsGetVersionCode = function() {
						debugger;
						try {
							return window.JSInvoker.getVersionCode()
						} catch (n) {
							return ""
						}
					}, n.openBookshelf = function() {
						try {
							window.JSInvoker.openBookshelf()
						} catch (n) {}
					}, n.showToast = function(n) {
						try {
							window.JSInvoker.showToast(n)
						} catch (n) {}
					}, n.openAnotherPage = function(n, e, o) {
						try {
							"novel" === n || "mishuo" === n ? window.JSInvoker.openAnotherPage(n, e) : "cartoon" === n && window.JSInvoker.cartoonOpenUrl(e, o)
						} catch (n) {}
					}, n.showToast = function(n) {
						try {
							window.JSInvoker.showToast(n)
						} catch (n) {}
					}, n.sgs = {
						shareToWechat: function(n, e) {
							try {
								window.JSInvoker.shareToWeixin(n, e)
							} catch (n) {}
						},
						shareToQQ: function(n, e) {
							try {
								window.JSInvoker.shareToQQ(n, e)
							} catch (n) {}
						},
						shareToQzone: function(n, e) {
							try {
								window.JSInvoker.shareToQzone(n, e)
							} catch (n) {}
						},
						shareToWeibo: function(n, e) {
							try {
								window.JSInvoker.shareToWeibo(n, e)
							} catch (n) {}
						},
						shareToCustomed: function(e, o, t) {
							var i = o.title || "搜狗搜索",
								r = o.desc || "搜狗搜索",
								a = o.icon || "http://app.sastatic.sogoucdn.com/logo/sogou.png",
								s = o.link || "http://sa.sogou.com";
							"wechat" === e || "Wechat" === e ? n.sgs.shareToWechat(JSON.stringify({
								title: i,
								description: r,
								img_url: a,
								url: s,
								to_app: 1
							}), t) : "moment" === e || "Moment" === e ? n.sgs.shareToWechat(JSON.stringify({
								title: i,
								description: r,
								img_url: a,
								url: s,
								to_app: 8
							}), t) : "weibo" === e || "Weibo" === e ? n.sgs.shareToWeibo(JSON.stringify({
								title: i,
								description: r,
								img_url: a,
								url: s
							}), t) : "qq" === e || "Qq" === e ? n.sgs.shareToQQ(JSON.stringify({
								title: i,
								description: r,
								img_url: a,
								url: s
							}), t) : "qzone" !== e && "Qzone" !== e || n.sgs.shareToQzone(JSON.stringify({
								title: i,
								description: r,
								img_url: a,
								url: s
							}), t)
						}
					}, n.sgsIsNovelSub = function(n, e) {
						try {
							return window.JSInvoker.isNovelSub(n)
						} catch (n) {}
					}, n.sgsAddGiftNovel = function(n, e) {
						try {
							return window.JSInvoker.addGiftNovel(n, e)
						} catch (n) {}
					}, n.addOriginalNovelItem = function(n, e) {
						try {
							window.JSInvoker.addNovelItem(n, e)
						} catch (n) {}
					}, n.addBookNovelVr = function(n, e, o) {
						try {
							window.JSInvoker.addVrNovel(n, e, o)
						} catch (n) {}
					}, n.openFeedPage = function(n) {
						try {
							window.JSInvoker.weixin_openWeixinNews(n)
						} catch (e) {
							r(n)
						}
					}, n.sgs.openAppScan = function(n) {
						try {
							window.JSInvoker.openQRCode(n)
						} catch (n) {
							console.log(n)
						}
					}, n.sgs.openChannel = function(n) {
						try {
							window.JSInvoker.openChannelUrl(JSON.stringify(n))
						} catch (n) {
							console.log(n)
						}
					}, n.sgs.openCartoonPage = function() {
						try {
							window.JSInvoker.openCartoonPage()
						} catch (n) {
							console.log(n)
						}
					}
				}
				n.getMid = function() {
					try {
						return window.JSInvoker.getMid()
					} catch (n) {
						return ""
					}
				}, e && e()
			}, n.forgeAllAPIs = function(e) {
				n.getMid = function() {
					return "65b5teaera"
				}, n.openFeedPage = function(n) {
					try {
						console.group("微信阅读页"), console.log(n), console.groupEnd()
					} catch (e) {
						console.log("微信阅读页"), console.log(n)
					}
				}, n.sgs = {}, n.sgs.shareToCustomed = function(n, e, o) {
					try {
						console.group("独立分享接口"), console.log(n), console.log(e), console.log(o), console.groupEnd()
					} catch (t) {
						console.log("独立分享接口"), console.log(n), console.log(e), console.log(o)
					}
				}, n.sgs.openAppScan = function(n) {
					try {
						console.group("打开后置摄像头扫描功能"), console.log(n), console.groupEnd()
					} catch (e) {
						console.log("打开后置摄像头扫描功能"), console.log(n)
					}
				}, n.sgs.openChannel = function(n) {
					try {
						console.group("打开垂搜页面"), console.log(JSON.stringify(n)), console.groupEnd()
					} catch (e) {
						console.log("打开垂搜页面"), console.log(n)
					}
				}, n.sgs.openCartoonPage = function() {
					try {
						console.group("打开native漫画垂搜"), console.groupEnd()
					} catch (n) {
						console.log("打开native漫画垂搜")
					}
				}, e && e()
			}
		}()
	},
	57: function(n, e, o) {
		"use strict";
		o(4), o(6), o(1);
		var t = o(2),
			i = function(n) {
				return n && n.__esModule ? n : {
					default: n
				}
			}(t);
		o(5);
		var r = o(9),
			a = o(10),
			s = o(11),
			c = o(12),
			d = o(13),
			u = "AppSogouAssistantCheatSheet",
			l = {}, p = {
				title: document.title,
				desc: document.title
			};
		window.SGS_FE_CBS = window.SGS_FE_CBS || {};
		var h = function(n) {
			return "bwyx" === n ? a : "hj" === n ? s : "cddh" === n ? r : "zscr" === n ? c : "hjsm" === n ? d : a
		}, w = function(n) {
			return "bwyx" === n ? "百万英雄" : "hj" === n ? "百万赢家" : "cddh" === n ? "冲顶大会" : "zscr" === n ? "芝士超人" : "hjsm" === n ? "黄金十秒" : "百万英雄"
		}, g = function(n) {
			return "bwyx" === n ? "西瓜视频/今日头条/抖音" : "hj" === n ? "花椒直播/快视频" : "cddh" === n ? "冲顶大会" : "zscr" === n ? "芝士超人/映客直播" : "hjsm" === n ? "一直播" : "西瓜视频/今日头条/抖音"
		}, f = function(n) {
			var e = "^.+\\?.*?\\b" + n + "=(.*?)(?:(?=&)|$|#)";
			if (new RegExp(e, "i").test(location.toString())) return RegExp.$1
		};
		window.toQuery = function() {
			debugger;
			SgsPb.directPb({
				productid: "appsearch",
				type: "CheatSheetToQuery",
				type_page: u
			})
		};
		var v = function() {
			var n = ["SogouSearchActivity", "ChannelWebViewActivity", "LogoActWebViewActivity"];
			return !(!window.JSInvoker || !window.JSInvoker.getJSInvokerTag || -1 === n.indexOf(window.JSInvoker.getJSInvokerTag()))
		}, m = function() {
			if (i.
			default.uaInfo.isAndroid && parseInt(SgsAPI.sgsGetVersionCode()) >= 6e3) SgsAPI.openDatiAlertWindow();
			else {
				var n = document.createElement("a");
				n.href = "sogousearch://openTab?id=4", n.style.display = "none", document.body.appendChild(n), n.click()
			}
		}, S = function() {
			$("#cancelShare").on("click", function() {
				SgsPb.directPb({
					productid: "appsearch",
					type: l.channel + "PopupShareCloseButton",
					type_page: u
				}), $("#shareMask").hide(), $("#shareVr").hide()
			}), $("#shareMask").on("click", function() {
				SgsPb.directPb({
					productid: "appsearch",
					type: l.channel + "PopupShareCloseMask",
					type_page: u
				}), $("#shareMask").hide(), $("#shareVr").hide()
			});
			for (var n = document.querySelectorAll("a[data-share-type]"), e = 0, o = n.length; e < o; ++e)! function(e, o) {
				i.
				default.on(n[e], "click", function() {
					var n = this.getAttribute("data-share-type");
					console.log(e + " : " + n);
					var o = "shareToCallback" + +new Date;
					window.SGS_FE_CBS[o] = function() {
						SgsPb.directPb({
							productid: "appsearch",
							type: l.channel + "ShareTo" + n + "Success",
							type_page: u
						})
					}, SgsPb.directPb({
						productid: "appsearch",
						type: l.channel + "ShareTo" + n,
						type_page: u
					}), SgsAPI.sgs.shareToCustomed(n, {
						title: p.title,
						desc: p.title,
						link: "http://sa.sogou.com/weball/page/felab/websocket/ws-channel-bwyx"
					}, "window.SGS_FE_CBS." + o)
					debugger;
				})
			}(e)
		}, y = function(n, e, o) {
			return '\n    <div class="process-mes" ' + (window.JSInvoker && window.JSInvoker.getJSInvokerTag && "WD_FloatWindow" === window.JSInvoker.getJSInvokerTag() ? 'style="display:none"' : "") + '>\n      <span class="process-back" id="' + n + 'AnswerBack"></span>\n    <div class="process-text">\n        <h4>' + o + '</h4>\n    </div>\n     </div>\n  '
		}, k = function(n, e, o, t) {
			var i = y(n, e, o),
				r = '\n  <div class="box-process-layout" id="' + n + '">\n    <div class="box-process box-process-info">\n      ' + i + '\n      <div class="box-wait-animate" style="display:none;">\n        <div class="wait-animate"><i></i><i></i><i></i></div>\n        正在等待下一题\n      </div>\n      <div class="box-wait-animate" id="zscrWaiting" style="display:none;">\n        <div class="wait-animate"><i></i><i></i><i></i></div>\n        欢迎大家，答题马上开始，加油！\n      </div>\n      <div class="list-answer" id="' + n + 'AnsList"></div>\n    </div>\n  </div>\n  ';
			document.getElementById("ansCon").innerHTML = r, $("#" + n + "Share").on("click", function() {
				SgsPb.directPb({
					productid: "appsearch",
					type: n + "PopupShare",
					type_page: u
				}), $("#shareMask").show(), $("#shareVr").show()
			}), $("#" + n + "OpenFloatWindow").on("click", function() {
				SgsPb.directPb({
					productid: "appsearch",
					type: n + "CheatSheetOpenFloatWindow",
					type_page: u
				}), m()
			}), $("#" + n + "AnswerBack").on("click", function() {
				SgsPb.directPb({
					productid: "appsearch",
					type: n + "CheatSheetAnswerBack",
					type_page: u
				}), location.href = "/v5/index"
			})
		}, I = function n(e) {
			var o = "http://localhost:8888/allinone/sogou/api/anspush?key=";
			o += "hj" === e ? "huajiao" : "bwyx" === e ? "xigua" : e;
			var t = [],
				i = $("#" + e + "AnsList").find(".box-answer");
			i.length >= 2 && i.slice(0, 2).each(function(n, e) {
				var o = $(e).attr("id");
				o && o.length && t.push(o)
			}), t.reverse(), o += t.length ? "&id=" + t.join(",") : "";
			$.ajax({
				url: o,
				xhrFields: {
					withCredentials: !0
				},
				dataType: "jsonp",
				jsonp: "wdcallback",
				cache: !1,
				type: "get",
				success: function(o) {
					try {
						if (0 === o.code && o.result && (o.result = JSON.parse(decodeURIComponent(escape(window.atob(o.result)))), o.result.length)) {
							for (var t = o.result, i = "", r = 0; r < t.length; ++r) {
								var a = JSON.parse(t[r]);
								if (a.title) {
									var s = "",
										c = a.title;
									/^\d{1,}\.{1}/i.test(a.title.trim()) && (s = -1 === a.title.indexOf(".") ? "" : a.title.split(".")[0] + ".", c = -1 === a.title.indexOf(".") ? a.title : a.title.substr(a.title.indexOf(s) + s.length)), $("#" + a.cd_id).length || (i = '\n                  <div class="box-answer" id="' + a.cd_id + '">\n                    <h4>\n                      ' + a.title + "\n                    </h4>\n                    <p>答案：<span>" + (a.result ? a.result : "汪仔也不太懂") + "</span>\n                    </p>\n                    <a " + (a.search_infos && a.search_infos.length > 0 && "" !== a.search_infos[0].summary ? "" : 'style="display:none"') + '\n                      class="check"\n                      href="https://wap.sogou.com/web/searchList.jsp?pid=sogou-clse-ddcbe25988981920-1000&w=1580&keyword=' + encodeURIComponent(c) + '"\n                      onclick="toQuery()"\n                    >\n                      ' + (a.search_infos && a.search_infos.length > 0 && a.search_infos[0].summary) + "\n                      <span>快速查看&gt;</span>\n                    </a>\n                  </div>\n                " + i, window.scrollTo(0, 0))
								}
							}
							if (i.length >= 2) {
								$("#" + l.channel + "AnsList").find(".box-answer").last().remove()
							}
							var d = document.getElementById(l.channel + "AnsList");
							d.innerHTML = i + d.innerHTML
						}
					} catch (n) {
						console.log(n)
					}
					setTimeout(function() {
						n(e)
					}, 500)
				},
				error: function(o, t, i) {
					setTimeout(function() {
						n(e)
					}, 500)
				}
			})
		}, b = function() {
			void 0 !== f("channel") ? l.channel = f("channel") : l.channel = "bwyx", void 0 !== f("name") ? l.channelName = f("name") : l.channelName = w(l.channel), void 0 !== f("appName") ? l.channelAppName = f("appName") : l.channelAppName = g(l.channel), void 0 !== f("icon") ? l.channelIcon = f("icon") : l.channelIcon = h(l.channel), S(), k(l.channel, l.channelIcon, l.channelName, l.channelAppName), I(l.channel)
		}, J = function() {
			if (!i.
			default.getCookie("APP-SGS-ID")) {
				debugger;
				var n = function() {
					try {
						if (window.JSInvoker && window.JSInvoker.getMid) return window.JSInvoker.getMid();
						if (window.JSInvoker && window.JSInvoker.h5 && window.JSInvoker.h5.getMid) return window.JSInvoker.h5.getMid();
						return "7d5f1515979422199%7C948922";
						throw new Error("no-mid")
					} catch (n) {
						return i.
						default.makeID(32)
					}
				}();
				i.
				default.setCookie("APP-SGS-ID", n, 360, "/", "localhost")
			}
		}, A = function() {
			SgsPb.directPb({
				productid: "appsearch",
				type: "pv",
				type_page: u
			}), J(), b(), SgsPb.directPb({
				productid: "appsearch",
				type: l.channel + "Pv",
				type_page: u
			})
		}, T = !1;
		window.ios_callback = function() {
			T || SgsAPI.init(A, !0), T = !0
		}, i.
		default.uaInfo.isIos && i.
		default.uaInfo.isSgs ? window.setTimeout(function() {
			T || window.ios_callback()
		}, 500) : window.ios_callback()
	},
	6: function(n, e) {},
	9: function(n, e, o) {
		n.exports = o.p + "images/logo_cd_none-586e21b4.png"
	}
});