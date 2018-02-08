window.sm = window.sm || {};
$.ajax({
    type: 'get',
    async: false,
    url:'./uc/answer/index?activity=million#/index',
    success: (data)=> {
        // insert sm.COMMON_PARAMS
        var params_code = data.match(/(sm\.COMMON_PARAMS[\s\S]*?)<\/script>/)[1];
        try {
            eval(params_code);
            // change api to nginx proxy_pass
            sm.COMMON_PARAMS.API =  { 
                current: './uc/answer/curr?format=json&activity=million', 
                review: './uc/answer/detail?format=json', 
                index: './uc/answer/index?format=json' 
            };
            sm.COMMON_PARAMS.banner = "//sm01.alicdn.com/L1/272/6837/static/wap/img/dream/million.png";
        } catch(e) {
            console.log(e);
        }
    }
});