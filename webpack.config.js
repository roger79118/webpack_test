const path=require("path");
module.exports={
    //mode
    mode:"development", //上線模式: production; 開發模式:development
    //entry
    entry:"./src/index.js",
    //output
    output:{
        filename:"main.js",
        path:path.resolve(__dirname, "dist")
    }
};