const path=require("path");
module.exports={
    //mode
    mode:"production", //預設值: production
    //entry
    entry:"./src/index.js",
    //output
    output:{
        filename:"main.js",
        path:path.resolve(__dirname, "dist")
    }
};