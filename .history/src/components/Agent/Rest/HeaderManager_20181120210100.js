function HeaderManger(headersList){
    var headers={

    }
    return{
        getHeaders:function(){
            return headers;
        },
        addHeaders:function(headers){
            if (extraHeaders) {
                for (var property in extraHeaders) {
                    reqObj.headers[property] = extraHeaders[property];
                }
            }
        }
    }
}