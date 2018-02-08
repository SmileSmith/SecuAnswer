$(function() {
  function parseUrl() {
    var query = {};
    var urlSearch = window.location.search || "";
    var queryStr = urlSearch.split("?")[1];
    if (queryStr) {
      var queryArr = queryStr.split("&");
      queryArr.forEach(function(val) {
        var key = val.split("=")[0];
        var value = val.split("=")[1];
        if (key && value) {
          query[key] = decodeURIComponent(value);
        }
      });
    }
    return query;
  }
  function urlMaker() {
    var url = "//secr.baidu.com/nv/{path}/answer";
    var path = parseUrl().app;
    if (path) {
      url = url.replace("{path}", path);
    } else {
      url = "//secr.baidu.com/nv/xiguashipin/answer";
    }
    return url;
  }
  var url = urlMaker();
  var socket = io.connect(url, {
    path: "/nv/answer.sock",
    transports: ["polling"]
  });
  socket.on("answer", function(data) {
    if (data.step == 0) {
      data.options = data.answers.map((answer) => {
        return answer.text;
      });
      data.question.round = data.question.questionId
      $.ajax({
        type:'POST',
        url:'http://localhost:8080/reply-answer-baidu',
        headers: {
          "Content-Type": "application/json;charset=utf-8",
          "dataType": "json"
        },
        data: JSON.stringify(data),
        success:function(response,status,xhr){
          // console.log("reply success ..." + JSON.stringify(data));
        }
      });
      stepOne(data);
    } else if (data.step == 1) {
      stepTow(data);
    } else if (data.step == 2) {
      if (data.result === 9999) return;
      var totalProp = 0
      data.options = data.answers.map((answer, index) => {
        totalProp += answer.prop;
        return answer.text;
      });
      data.results = data.answers.map((answer) => {
        answer.prop = parseFloat((answer.prop / totalProp).toFixed(2))
        return answer
      });
      data.question.round = data.question.questionId
      $.ajax({
        type:'POST',
        url:'http://localhost:8080/reply-answer-baidu',
        headers: {
          "Content-Type": "application/json;charset=utf-8",
          "dataType": "json"
        },
        data: JSON.stringify(data),
        success:function(response,status,xhr){
          // console.log("reply success ..." + JSON.stringify(data));
        }
      });
      stepThree(data);
    } else if (data.step == 3) {
      stepFour(data);
    } else if (data.step == 5) {
      nostart();
    } else {
      steperror();
    }
  });
  function stepOne(data) {
    spliHtml(
      data.question.questionId + "." + data.question.text,
      data.answers,
      "社会我Dan哥，人美话还多"
    );
    $(".loaddingbox").removeClass("noshow");
  }

  function stepTow(data) {
    spliHtml(
      data.question.questionId + "." + data.question.text,
      data.answers,
      data.tips
    );
  }

  function stepThree(data) {
    spliHtml(
      data.question.questionId + "." + data.question.text,
      data.answers,
      data.tips,
      Number(data.result) + 1
    );
    $(".loaddingbox").addClass("noshow");
  }

  function stepFour(data) {
    endshow(
      data.question.questionId + "." + data.question.text,
      data.answers,
      data.tips,
      { dqa: data.result, finalindex: data.final_index }
    );
  }

  var scrollStart = 0;
  function nostart(data) {
    var html = [
      '<div class="broadcast-text-wrap">',
      '<p class="broadcast-text-animite">我是机器哥dandan，外号Dan哥</p>',
      '<p class="broadcast-text-animite">欢迎围观我的答题直播</p>',
      '<p class="broadcast-text-animite">通过答题来锻炼我的AI大脑</p>',
      '<p class="broadcast-text-animite">百分比是我分析的答案准确率</p>',
      '<p class="broadcast-text-animite">红色突出答案是我最终的选择</p>',
      '<p class="broadcast-text-animite">请大家给我加油，老铁666</p>',
      "</div>"
    ].join("");
    if (!scrollStart) {
      spliHtml(
        "Dan哥热身中，题目还在路上...",
        [
          { text: "暂无答案", prop: "0" },
          { text: "暂无答案", prop: "0" },
          { text: "暂无答案", prop: "0" }
        ],
        html
      );
      scrollStart = 1;
      scrollAnimateTimer = setInterval(talkAnimate, 2500);
    }
  }

  function steperror(data) {}
  // 页面刷新时时
  function spliHtml(title, answer, showText, high) {
    clearInterval(scrollAnimateTimer);
    scrollStart = 0;
    // 显示title部分
    $(".querytitle").html(title);
    // 拼接答案list
    var answerStr = "";
    var chose = ["A. ", "B. ", "C. ", "D. "];
    for (var i = 0; i < answer.length; i++) {
      if (high - 1 !== 9999) {
        answerStr +=
          "<p class='answerText'>" +
          chose[i] +
          answer[i].text +
          "<span class='care'>" +
          answer[i].prop +
          "%</span></p>";
      } else {
        answerStr +=
          "<p class='answerText'>" +
          chose[i] +
          answer[i].text +
          "<span class='care'>" +
          answer[i].prop +
          "</span></p>";
      }
    }
    $(".answerBox").html(answerStr);

    $(".broadcast-text").html(showText);

    if (high && high - 1 !== 9999) {
      $($(".answerText").get(high - 1)).addClass("active highborder");
    }
  }

  function endshow(title, answer, showText, high) {
    clearInterval(scrollAnimateTimer);
    // 显示title部分
    $(".querytitle").html(title);
    // 拼接答案list
    var answerStr = "";
    var chose = ["A. ", "B. ", "C. ", "D. "];
    for (var i = 0; i < answer.length; i++) {
      var propText = "";
      var boxClass = "";
      if (i == high.finalindex) {
        propText = "正确";
        boxClass = "answerText hiok";
      } else if (
        i == Number(high.dqa) &&
        high.finalindex !== Number(high.dqa)
      ) {
        propText = "错误";
        boxClass = "answerText active";
      } else {
        boxClass = "answerText";
      }
      answerStr +=
        "<p class='" +
        boxClass +
        "'>" +
        chose[i] +
        answer[i].text +
        "<span class='care'>" +
        propText +
        "</span></p>";
    }
    $(".answerBox").html(answerStr);
    $(".broadcast-text").html(showText);
  }

  // 首页播报动
  var boxTran = $(".broadcast-text-wrap");
  var tranValue = 0;
  var maxHeight = boxTran.offset().height;
  var perStep = boxTran.find(".broadcast-text-animite").offset().height;
  var scrollAnimateTimer;
  function talkAnimate() {
    boxTran = $(".broadcast-text-wrap");
    if (boxTran.find(".broadcast-text-animite").length == 0) {
      return;
    }
    maxHeight = boxTran.offset().height;
    perStep = 22;
    tranValue = tranValue - perStep;
    if (tranValue + maxHeight <= 0) {
      tranValue = 0;
      boxTran.css({ transform: "translateY(0px)" });
    } else {
      boxTran.css({ transform: "translateY(" + tranValue + "px)" });
    }
  }
});
