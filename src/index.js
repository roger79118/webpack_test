// 主程式
// 載入模組
// import "./lib.js";
// 載入模組輸出的資料
// import {x, y} from "./lib.js";
// console.log(x, y);
// 載入模組預設輸出的資料
// import data from "./lib.js";
// console.log(data);
// 混合使用
// import data, {x, y} from "./lib.js";
// console.log(data, x, y);
// 載入自己建立的函式庫模組
// import lib from "./lib.js";
// let result=lib.add(3, 4);
// console.log(result);
// result=lib.multply(3, 4);
// console.log(result);
// import {pi} from "./lib.js";
// console.log(pi);

//Loader
// import "./style.css";
import "./style.scss";
//載入標題
import title from "./title.js";
//載入列表
import list from "./list.js";

//加入標題
document.body.appendChild(title);
//加入列表
document.body.appendChild(list);
