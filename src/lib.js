// let x=3;
// let y=4;
// let data=x*y;
//console.log(data);
//export {x, y};
//export default data;
// export {data as default, x, y};

const lib={
    add:function(n1, n2){
        return n1+n2;
    },
    multply:function (n1, n2) {
        return n1*n2;
    }
};
const pi=3.14
export {lib as default, pi};