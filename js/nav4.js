(function () {
    var nav4Ul = document.getElementById('nav4-ul');
    var lis = nav4Ul.querySelectorAll('li');
    var nav4 = document.getElementById('nav4');
    var rightTabs = nav4.querySelectorAll('.right');
    //mouseenter 、mouseleave不会冒泡（bubble），也就是说当指针从它的子层物理空间移到它的物理空间上，或反过来，都不会触发
    //而mouseover、mouseout 冒泡，只要有进入和离开就会出触发,无论是从父元素到子元素还是子元素到父元素，或者是只对父元素进行操作（换句话说，会触发mouseenter和mouseleave的时候一定会触发mouseover和mouseout）
    //所以事件委托需要用mouseover而不是mouseenter
    nav4Ul.onmouseover = function (e) {
        if (e.target.tagName.toLowerCase() == 'li') {
            var name = e.target.getAttribute('data-li');
            for (var i = 0; i < rightTabs.length; i++) {
                var rightTabsLi=rightTabs[i].getAttribute('data-li');
                if (rightTabsLi== name) {
                    rightTabs[i].className = 'right'+(i+1)+' right current';
                } else {
                    rightTabs[i].className ='right'+(i+1)+' right';
                }
            }
        }
    }

    nav4.onmouseleave=function(){
        for (var i = 0; i < rightTabs.length; i++) {
            rightTabs[i].className ='right'+(i+1)+' right';
        }
    }
})()