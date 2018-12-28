function HeaderManger(headersList){
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
        }
        remove

    }
}