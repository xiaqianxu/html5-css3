//加载动画
setTimeout(function() {
  siteWelcome.classList.remove("active");
}, 1000);

//滑动鼠标时导航条变矮
window.onscroll = function() {
  //用户滑动窗口时触发一个函数
  if (window.scrollY > 0) {
    //获得窗口滚动的高度
    topNavBar.classList.add("sticky");
  } else {
    topNavBar.classList.remove("sticky");
  }
};

//点击部分导航栏出现子导航
let liTags = document.querySelectorAll("nav.menu>ul>li"); //接受一个选择器，返回该选择器对应的所有元素
// let liTags = document.getElementsByClassName("menuTrigger");
for (let i = 0; i < liTags.length; i++) {
  liTags[i].onmouseenter = function(eve) {
    //鼠标进入时会触发一个函数
    liTags[i].classList.add("active");
  };
  liTags[i].onmouseleave = function(eve) {
    //当鼠标离开时会触发一个函数
    liTags[i].classList.remove("active");
  };
}

// 点击导航栏跳转到对应的标签栏
let aTags = document.querySelectorAll("nav.menu>ul>li>a");
for (let i = 0; i < aTags.length; i++) {
  console.log(aTags[i]);
  aTags[i].onclick = function(eve) {
    eve.preventDefault(); //阻止默认事件
    let href = aTags[i].getAttribute("href"); //获得用户在这个标签上写的原文
    let element = document.querySelector(href);
    console.log(element);
    let top = element.offsetTop; //获得一个元素距离页面顶部的像素数
    window.scrollTo(0, top - 80); //滑动到某个位置（左右，上下）
  };
}
