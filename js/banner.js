var banner = document.getElementById('banner');
var bannerInner = banner.getElementsByClassName('bannerInner')[0];
var bannerDivs = bannerInner.getElementsByTagName("div");
var bannerImages = bannerInner.getElementsByTagName("img");
var focusList =document.getElementById('focusList');
var focusLis =  focusList.getElementsByTagName("li");
var leftBtn = document.getElementById('leftBtn');
var rightBtn = document.getElementById('rightBtn');
var data = null;
function delayLoad(){
    for(var i=0;i<bannerImages.length;i++){
        (function(i){
            var curImg = bannerImages[i];
            if(curImg.isload){return;}
            var tempImg = new Image();
            tempImg.src = curImg.getAttribute("trueSrc");
            tempImg.onload = function(){
                curImg.src = this.src;
                curImg.style.display = "block";
                tempImg = null;
                if(i==0){
                    utils.setCss(curImg.parentNode,"zIndex",1);
                    window.zhufengAnimate(curImg.parentNode,{opacity:1},200);
                }else{
                    utils.setCss(curImg.parentNode,"zIndex",0);
                }
            };
            curImg.isload = true;
        })(i)
    }
}
window.setTimeout(delayLoad,200);
//自动轮播
var timer = null;
var interval = 2000;
var step =0;
function autoMove(){
    if(step == bannerDivs.length-1){
        step = -1;
    }
    step++;
    setBanner();
}
timer = window.setInterval(autoMove,interval);
function setBanner(){
    for(var i=0;i<bannerDivs.length;i++){
        var curDiv = bannerDivs[i];
        if(i==step){
            utils.setCss(curDiv,"zIndex",1);
            window.zhufengAnimate(curDiv,{opacity:1},200,function(){
                var siblings = utils.siblings(this);
                for(var j=0;j<siblings.length;j++){
                    var curSibling = siblings[j];
                    utils.setCss(curSibling,"opacity",0)
                }
            })
        }else{
            utils.setCss(curDiv,"zIndex",0)
        }
    }
    for(var k=0;k<focusLis.length;k++){
        var curLi = focusLis[k];
        k===step ? curLi.className = "bg" : curLi.className = "";
    }
}
banner.onmouseover = function(){
    window.clearInterval(timer);
    leftBtn.style.display = rightBtn.style.display = "block"
};
banner.onmouseout = function(){
    timer = window.setInterval(autoMove,interval);
    leftBtn.style.display = rightBtn.style.display = "none"
};
rightBtn.onclick = autoMove;
leftBtn.onclick = function(){
    if(step ==0){
        step = bannerDivs.length
    }
    step --;
    setBanner();
};
function focusClick(){
    for(var i=0;i<focusLis.length;i++){
        var curLi = focusLis[i];
        curLi.index = i;
        curLi.onclick = function(){
            step = this.index;
            setBanner();
        }
    }
}
focusClick();

