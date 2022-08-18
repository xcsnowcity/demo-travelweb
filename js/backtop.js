(function () {
    var backTop = document.getElementById('backTop');
    var timer;
    backTop.onclick = function () {
        clearInterval(timer);//开表先关
        timer = setInterval(function () {
            document.documentElement.scrollTop -= 80;
            if (document.documentElement.scrollTop <= 0) {
                clearInterval(timer);
            }
        }, 20)
    }

    window.onscroll=function(){
        var scrollTop = document.documentElement.scrollTop;
        if(scrollTop<=10){
            backTop.style.display='none';
        }else{
            backTop.style.display='block';
        }
    }
    
   
}())