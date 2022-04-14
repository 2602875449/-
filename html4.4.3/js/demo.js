var video;
function init(){
    video = document.getElementById("video1");
    video.addEventListener("ended", function () {alert("播放结束。");},true)
}
function  play(){
    //播放视频
    video.play();
}
function  pause(){
    //暂停视频
    video.pause();
}
function load(){
    //重载视频
    video.load();
}
