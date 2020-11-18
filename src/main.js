let html = document.querySelector('#html');
let string = `/*你好,我是小敏，
 *接下来我要展示我的前端功底啦~
 *首先我要准备一个 div
 */
#div1{
    border: 1px solid red; 
    width: 200px;
    height: 200px;
}
/* 我要把这个 div 变成一个太极八卦图
 * 注意看啦，别眨眼~
 * 首先，我把 div 变成一个圆
 */
#div1{
    border-radius: 50%;
    box-shadow: 0 0 3px rgba(0,0,0,0.5);
    border:none;
}
/* 太极八卦是由黑色和白色两个部分组成
 * 即为阴阳
 * 而阴阳都化在了同一个圈子里，即为阴阳合一
 */
#div1{
    background: linear-gradient(90deg, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 50%, rgba(0,0,0,1) 50%, rgba(0,0,0,1) 100%);
}
/* 黑色中要有白色的小圆圈 */
#div1::before{
    width:100px;
    height:100px;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    background: #000;
    border-radius: 50%;
    background: radial-gradient(circle, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 25%, rgba(0,0,0,1) 25%, rgba(0,0,0,1) 100%);
}
/* 白色中也要有一个黑色的小圆圈
 * 这就是所谓的阴阳互化
 */
#div1::after{
    width:100px;
    height:100px;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    background: #fff;
    border-radius: 50%;
    background: radial-gradient(circle, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 25%, rgba(255,255,255,1) 25%, rgba(255,255,255,1) 100%);
}
`;
let string2 ='';
let n = 0;
html.innerHTML = string.substring(0,n);

 let step= ()=>{
    setTimeout(() => { 
        if(string[n]==="\n"){
            //如果是回车，则不照搬
            string2 += "<br>"
        }else if(string[n]===" "){
            //用来显示缩进的
            string2 += "&nbsp"
        }else{
            //是回车，则照搬
            string2 += string[n];
        }
        html.innerHTML = string2;
        //
        style.innerHTML = string.substring(0,n); 
        window.scrollTo(0,999999);
        html.scrollTo(0,999999);    
       if(n < string.length-1){
           //n 不是最后一个，就继续
           n = n+1;
        step(); 
       }
    },30);
 }
step()
