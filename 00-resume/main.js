// function animate(time) {
//   requestAnimationFrame(animate);
//   TWEEN.update(time);
// }
// requestAnimationFrame(animate);

//1.加载动画
setTimeout(function() {
  siteWelcome.classList.remove("active");
}, 1000);

//2.滑动鼠标时导航条变矮
window.onscroll = function() {
  //用户滑动窗口时触发一个函数
  if (window.scrollY > 0) {
    //获得窗口滚动的高度
    topNavBar.classList.add("sticky");
  } else {
    topNavBar.classList.remove("sticky");
  }

  //5.当对应的内容滑动到屏幕中间时高亮显示
  let dataTags = document.querySelectorAll("[data-x]");
  let minIndex = 0;
  for (let i = 0; i < dataTags.length; i++) {
    //找距离顶部最近的标签
    if (
      Math.abs(dataTags[i].offsetTop - window.scrollY) -
        Math.abs(dataTags[minIndex].offsetTop - window.scrollY) <
      0
    ) {
      minIndex = i;
    }
  }
  for (let j = 0; j < dataTags.length; j++) {
    dataTags[j].classList.remove("active");
  }
  dataTags[minIndex].classList.add("active");

  //将对应导航的li高亮，先找href为对应id的a标签
  let id = dataTags[minIndex].id;
  // a[href="#about"]
  let aTag = document.querySelector('a[href="#' + id + '"]');
  //找到a标签对应的li并加active属性
  let li = aTag.parentNode;
  for (let x = 0; x < li.parentNode.children.length; x++) {
    li.parentNode.children[x].classList.remove("highlight");
  }
  li.classList.add("highlight");
  console.log(li);
};

//3.点击部分导航栏出现子导航
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

// 4.点击导航栏跳转到对应的标签栏
let aTags = document.querySelectorAll("nav.menu>ul>li>a");
for (let i = 0; i < aTags.length; i++) {
  aTags[i].onclick = function(eve) {
    eve.preventDefault(); //阻止默认事件
    let href = aTags[i].getAttribute("href"); //获得用户在这个标签上写的原文
    let element = document.querySelector(href);
    let top = element.offsetTop; //获得一个元素距离页面顶部的像素数

    //tween缓慢滑动
    // let currentTop = window.scrollY; // 当前距离顶部的高度
    // let targetTop = top - 80; //需要移动的高度
    // const coords = { y: currentTop };
    // const tween = new TWEEN.Tween(coords)
    //   .to({ y: targetTop }, 1000)
    //   .easing(TWEEN.Easing.Quadratic.Out)
    //   .onUpdate(() => {
    //     window.scrollTo(0, coords.y);
    //   })
    //   .start();

    //缓慢滑动
    let n = 25; // 动多少次
    let duration = 500 / n; //多久动一次
    let currentTop = window.scrollY; // 当前距离顶部的高度
    let targetTop = top - 80; //需要移动的高度
    let distance = (targetTop - currentTop) / n; //每次需要移动的高度
    let j = 0;
    let id = setInterval(() => {
      //每隔一定时间持续执行
      j = j + 1;
      if (j === n) {
        window.clearInterval(id); //停止移动
      }
      window.scrollTo(0, currentTop + distance * j);
    }, duration);
    // window.scrollTo(0, top - 80); //滑动到某个位置（左右，上下）
  };
}
