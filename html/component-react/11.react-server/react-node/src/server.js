import React from 'react';
//
import { renderToString } from "react-dom/server"
//内置的http
var http = require("http");
import  App from "./App"

//创建服务器对象，并且启动监听器
http.createServer(function(request,response){
    //向浏览器端写头信息(状态码，当前页面的文档类型)
    response.writeHead(200,{'Content-Type':'text/html;charset=utf-8'});
    //渲染组件 成标签结构字符串
    const appHTML = renderToString(<App />);
    //向浏览器返回结果
    response.end(appHTML);
}).listen(8888);
//终端打印提示信息
console.log("Server running at http://127.0.0.1:8888/");
