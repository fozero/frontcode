import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';


// index.js入口文件

let data = [
 {id: 0, text: '吃饭唱歌打豆豆1', complete: false},
 {id: 1, text: '吃饭唱歌打豆豆2', complete: false},
 {id: 2, text: '吃饭唱歌打豆豆3', complete: true},
]

ReactDOM.render(<App data={data}/>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
