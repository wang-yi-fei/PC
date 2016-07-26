(function () {
    var banner=document.getElementById('banner3');
    var bannerImg=document.getElementById('bannerImg3');
    var focusList=banner.getElementsByClassName('focusList')[0];
    var lis=focusList.getElementsByTagName('li');
    var right=banner.getElementsByClassName('right')[0];
    var left=banner.getElementsByClassName('left')[0];
    var spet=0;
    var timer=null;
    function move(){
        if(spet==4){
            spet=0;
            utils.setCss(bannerImg,'left',-spet*439)
        }
        spet++;
        window.zhufengAnimate(bannerImg,{left:-spet*439},400);
        jiaodian()
    }
    timer=window.setInterval(move,3000);
    function jiaodian(){
        var aa=spet==lis.length?0:spet;
        for(var i=0;i<lis.length;i++){
            if(i==aa){
                lis[i].className='bg'
            }else{lis[i].className=''
            }
        }
    }
    banner.onmouseover= function () {
        window.clearInterval(timer);
        right.style.display=left.style.display='block'
    };
    banner.onmouseout= function () {
        timer=window.setInterval(move,3000);
        right.style.display=left.style.display='none'
    };
    right.onclick=move;
    left.onclick= function (){
        if(spet==0){
            spet=4;
            utils.setCss(bannerImg,'left',-spet*439)
        }
        spet--;
        window.zhufengAnimate(bannerImg,{left:-spet*439},400);
    };
    function bbb(){
        for(var i=0;i<lis.length;i++){
            cur=lis[i];
            cur.index=i;
            cur.onclick= function () {
                spet=this.index;
                window.zhufengAnimate(bannerImg,{left:-spet*439},400);
                jiaodian()
            }
        }
    }
    bbb();
})();
(function () {
    var banner=document.getElementById('banner5');
    var bannerImg=document.getElementById('bannerImg5');
    var focusList=banner.getElementsByClassName('focusList')[0];
    var lis=focusList.getElementsByTagName('li');
    var right=banner.getElementsByClassName('right')[0];
    var left=banner.getElementsByClassName('left')[0];
    var spet=0;
    var timer=null;
    function move(){
        if(spet==4){
            spet=0;
            utils.setCss(bannerImg,'left',-spet*439)
        }
        spet++;
        window.zhufengAnimate(bannerImg,{left:-spet*439},400);
        jiaodian()
    }
    timer=window.setInterval(move,3000);
    function jiaodian(){
        var aa=spet==lis.length?0:spet;
        for(var i=0;i<lis.length;i++){
            if(i==aa){
                lis[i].className='bg'
            }else{lis[i].className=''
            }
        }
    }
    banner.onmouseover= function () {
        window.clearInterval(timer);
        right.style.display=left.style.display='block'
    };
    banner.onmouseout= function () {
        timer=window.setInterval(move,3000);
        right.style.display=left.style.display='none'
    };
    right.onclick=move;
    left.onclick= function (){
        if(spet==0){
            spet=4;
            utils.setCss(bannerImg,'left',-spet*439)
        }
        spet--;
        window.zhufengAnimate(bannerImg,{left:-spet*439},400);
    };
    function bbb(){
        for(var i=0;i<lis.length;i++){
            cur=lis[i];
            cur.index=i;
            cur.onclick= function () {
                spet=this.index;
                window.zhufengAnimate(bannerImg,{left:-spet*439},400);
                jiaodian()
            }
        }
    }
    bbb();
})();