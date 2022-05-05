// var index = 0;
// doStart();// 默认开启
//
// // 自动轮播效果
// function doStart(){
//     myTime = setInterval(function(){
//         //让上一张淡出
//         imgOut(index);
//         index = ++index%4;
//         //让下一张淡入
//         imgIn(index);
//     },3000);
// }
//
// // 鼠标移入暂停轮播;移出继续
// $("#did").mouseover(function(){
//     clearInterval(myTime);
// }).mouseout(function(){
//     doStart();
// });
//
// // 右箭头单击事件
// $("#right").click(function(){
//
//     //让上一张淡出
//     imgOut(index);
//     index = ++index%4;
//     //让下一张淡入
//     imgIn(index);
// });
//
// // 左箭头单击事件
// $("#left").click(function(){
//
//     //让上一张淡出
//     imgOut(index);
//     index--;
//     if(index < 0){
//         index = 3;
//     }
//     //让下一张淡入
//     imgIn(index);
// });
//
// // 灰点事件
// $("li").mouseover(function(){// 鼠标移入
//     dotIn(this);
// }).mouseout(function(){// 鼠标移出
//     dotOut(this);
// }).click(function(){// 单击
//     // 不同的灰点单击才变换
//     if(index !=  $(this).index()){
//         imgOut(index);// 当前的淡出
//         index = $(this).index();
//         imgIn(index);// 小圆点对应的淡入
//     }
// });
// // 图片淡入
// function imgIn(num){
//     $("img").eq(num).animate({"opacity":1},1000);
//     dotIn( $("li").eq(num));// 对应灰点亮起
// }
// // 图片淡出
// function imgOut(num){
//     $("img").eq(num).animate({"opacity":0},1000);
//     dotOut( $("li").eq(num));// 对应灰点暗去
// }
// // 小灰点亮
// function dotIn(dot){
//     $(dot).css({"background":"hsla(0,0%,100%,.4)","borderColor":"rgba(0,0,0,0.4)"});
// }
// // 小灰点暗
// function dotOut(dot){
//     $(dot).css({"background":"rgba(0,0,0,.4)","borderColor":"hsla(0,0%,100%,.3)"});
// }
