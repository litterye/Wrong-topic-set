//ajax方法封装
var xhr = new XMLHttpRequest();

xhr.ajax = function(type, url, data, callback) {
    url += "?time=" + new Date().getTime();
    // if (window.XMLHttpRequest) {
    //     xhr = new XMLHttpRequest();
    // } else {
    //     xhr = new ActiveXObject("Mcrosort.XMLHttp");
    // }
    var str = "";
    if (typeof data == "object") {
        for (var i in data) {
            str += "&" + i + "=" + data[i];
        }
    }

    if (type == "get") {
        xhr.open(type, url + str);
        xhr.send();
    } else if (type == "post") {
        xhr.open(type, url);
        xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded; charset=utf-8;");
        xhr.send(str);
    }
    xhr.onreadystatechange = function() {
        if (xhr.readyState == 4 && xhr.status == 200) {
            callback(xhr.responseText);
        }
    }

}