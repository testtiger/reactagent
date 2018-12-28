var HeaderManager=(function (){
    var headers={

    }
    return{
        getHeaders:function(){
            return headers;
        },
        addHeaders: function (extraHeaders){
            if (extraHeaders) {
                for (var property in extraHeaders) {
                    headers[property] = extraHeaders[property];
                }
            }
        },
        clearHeaders:function(){
            headers={};
        },
        removeHeader:function(key){
            if (key in headers){
                delete headers.key
            }
        },
        clearOtherHeaders: function (extraHeaders){

        }

    }
})