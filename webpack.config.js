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
    },
    //module loading
    module:{
        rules:[
            //CSS rule
            // { 
            //     test:/\.css$/i,
            //     use:["style-loader", "css-loader"]
            // }
            //SASS rule
            { 
                test:/\.scss$/i,
                use:["style-loader", "css-loader", "sass-loader"]
            }
        ]
    }
};