'use strict';
import 'semantic-ui/semantic.min.css!';
import React from 'react';
import ReactDom from  'react-dom';
import CommentBox from  './comment/CommentBox';

//模拟从服务器获取到的json格式的数据
var comments=[
    {"author":"王皓","date":"5分钟前","text":"我们去玩吧"},
    {"author":"小红","date":"3分钟前","text":"今天天气真好！"},
    {"author":"陆超","date":"1分钟前","text":"今天很适合郊游`~"}
]

ReactDom.render(
<CommentBox url={comments}/>,//利用数组模拟数据
//<CommentBox url="app/comment.json"/>,//模拟从服务器端返回的json文件
    document.getElementById('app')
);
