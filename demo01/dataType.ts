let e: unknown;

e = 7;

let s = "hahh";
// s = e as string; //类型断言
s = <string>e; // 或者写成这样

//void 表示空，一函数为，就表示没有返回值的函数
