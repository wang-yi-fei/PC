var banner1 = document.getElementById('banner1');
var bannerImg = document.getElementById('bannerImg');
var left1 = document.getElementById('b');
var right1 = document.getElementById('a');
var setp=0;
function move1(){
    if(setp==3){
        console.log(1);
        setp=0;
        utils.setCss(bannerImg,'left',-setp*1000)
    }
    setp++;
    window.zhufengAnimate(bannerImg,{left:-setp*1000},400);
    console.log(utils.getCss(bannerImg,'left'))
}
banner1.onmouseover= function () {
    right1.style.display=left1.style.display='block'
};
banner1.onmouseout= function () {
    right1.style.display=left1.style.display='none'
};
right1.onclick=move1;
left1.onclick= function (){
    if(setp==0){
        setp=3;
        utils.setCss(bannerImg,'left',-setp*1000)
    }
    setp--;
    window.zhufengAnimate(bannerImg,{left:-setp*1000},400);
};

