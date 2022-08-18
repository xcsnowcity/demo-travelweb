(function () {
    var ul = document.getElementById('carousel');
    var left = document.getElementById('left');
    var right = document.getElementById('right');
    var cloneNode = ul.firstElementChild.cloneNode(true);
    ul.appendChild(cloneNode);
    var idx = 0;
    var dots = document.getElementById('dots')
    var lis = dots.getElementsByTagName('li');
    var lock=true;
    var imageBanner=document.getElementById('imageBanner');
    function curdot() {
        for (var i = 0; i < 5; i++) {
            // 排他操作用遍历
            if(i==(-idx)%5){
                lis[i].className='cur';
            }else{
                lis[i].className='';
            }
        }
    }
    
    function rightClickHandler() {
        if(!lock) return;
        lock=false;
        ul.style.transition = 'transform .6s ease 0s';
        idx--;
        if (idx == -5) {
            setTimeout(function () {
                ul.style.transition = 'none';
                ul.style.transform = 'none';
                idx = 0;
            }, 600)
        }
        ul.style.transform = 'translateX(' + idx * 1355 + 'px)';
        curdot();
        setTimeout(function(){
            lock = true;
        },600)
    }

    right.onclick = rightClickHandler;

    left.onclick = function () {
        if(!lock) return;//事件监听的时候注意函数节流，避免过量触发
        lock=false;
        if (idx == 0) {
            ul.style.transition = 'none';
            ul.style.transform = 'translateX(' + (-5) * 1355 + 'px)';
            idx = -4;
            setTimeout(function () {
                ul.style.transition = 'transform .6s ease 0s';
                ul.style.transform = 'translateX(' + (-4) * 1355 + 'px)';
            }, 0)
        } else {
            idx++;
            ul.style.transition = 'transform .6s ease 0s';
            ul.style.transform = 'translateX(' + idx * 1355 + 'px)';
        }
        curdot();
        setTimeout(function(){
            lock=true;
        },600)
    }

    dots.onclick=function(e){
        //事件委托/代理的时候，一定要监听会冒泡的事件，这样触发子元素后，经过冒泡，父元素才能捕获到事件的发生
        if(e.target.tagName.toLowerCase()=='li'){
            var dotsN=e.target.getAttribute('data-n');
            idx=(-dotsN);
            curdot();
            ul.style.transition = 'transform .6s ease 0s';
            ul.style.transform = 'translateX(' + idx * 1355 + 'px)';

        }
    }

    var timer = setInterval(rightClickHandler,1500);

    ul.onmouseenter=function(){
        //mouseenter 、mouseleave不会冒泡（bubble），也就是说当指针从它的子层物理空间移到它的物理空间上，或反过来，都不会触发
        //而mouseover、mouseout 冒泡，只要有进入和离开就会出触发,无论是从父元素到子元素还是子元素到父元素，或者是只对父元素进行操作（换句话说，会触发mouseenter和mouseleave的时候一定会触发mouseover和mouseout）
        clearInterval(timer);
    }

    ul.onmouseleave=function(){
        clearInterval(timer);
        timer = setInterval(rightClickHandler,1500);
    }


})()