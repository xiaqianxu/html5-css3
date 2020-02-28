//1.初始化数据
var allHash = init();
var keys = allHash["keys"];
var hash = allHash["hash"];
//2.生成键盘
generateKeyboard(keys, hash);

//3.监听用户输入的键盘
listenToUser(hash);

function listenToUser(hash) {
  document.onkeypress = function(aa) {
    var key = aa["key"];
    console.log("aa---" + aa["key"]);
    var webSite = hash[key];
    // 模拟用户在地址栏输入
    // location.href = "http://" + webSite;
    // 在新窗口打开
    window.open("http://" + webSite, "_blank");
  };
}

// 遍历keys，生成kbd标签
function generateKeyboard(keys, hash) {
  for (let index = 0; index < keys["length"]; index++) {
    var div1 = createTag("div");
    div1.className = "row";
    mainDiv.appendChild(div1);
    var row = keys[index];
    for (let index2 = 0; index2 < row.length; index2++) {
      var div2 = createTag("kbd");
      div2.className = "kbd";
      var mySpan = createSpan(row[index2]);
      var button1 = createButton(row[index2]);
      var myImg = createImg(hash[row[index2]]);
      div2.appendChild(mySpan);
      div2.appendChild(myImg);
      div2.appendChild(button1);
      div1.appendChild(div2);
    }
  }
}

function createImg(domain) {
  var myImg = createTag("img");
  if (domain) {
    myImg.src = "http://" + domain + "/favicon.ico";
  } else {
    myImg.src = "//i.loli.net/2017/11/10/5a05afbc5e183.png";
  }
  myImg.onerror = function(cc) {
    console.log("图片下载失败");
    cc.target.src = "//i.loli.net/2017/11/10/5a05afbc5e183.png";
  };
  return myImg;
}

function createButton(id) {
  var button = createTag("button");
  button.textContent = "编辑";
  button.id = id;
  button.onclick = function(bbb) {
    var key = bbb["target"]["id"];
    // console.log(bbb["target"]);
    //得到button的上个元素
    var img2 = bbb["target"].previousSibling;
    var newWebSite = prompt("请输入新网址");
    hash[key] = newWebSite;
    img2.src = "http://" + newWebSite + "/favicon.ico";
    img2.onerror = function(dd) {
      dd.target.src = "//i.loli.net/2017/11/10/5a05afbc5e183.png";
    };
    // 将变更后的地址存到localStotage中
    localStorage.setItem("zz", JSON.stringify(hash));
  };
  return button;
}

function init() {
  var keys = {
    "0": {
      0: "q",
      1: "w",
      2: "e",
      3: "r",
      4: "t",
      5: "y",
      6: "u",
      7: "i",
      8: "o",
      9: "p",
      length: 10
    },
    "1": {
      0: "a",
      1: "s",
      2: "d",
      3: "f",
      4: "g",
      5: "h",
      6: "j",
      7: "k",
      8: "l",
      length: 9
    },
    "2": {
      0: "z",
      1: "x",
      2: "c",
      3: "v",
      4: "b",
      5: "n",
      6: "m",
      length: 7
    },
    length: 3
  };
  var hash = {
    q: "qq.com",
    w: "weibo.com",
    e: "ele.com",
    r: "renren.com",
    t: "tianya.com",
    y: "youtubo.com",
    u: "uc.com",
    i: "iqiyi.com",
    o: "opera.com",
    p: undefined,
    a: "acfun.com",
    s: "souhu.com",
    d: undefined,
    z: "zhihu.com",
    m: "www.macdonald.cn",
    b: "baidu.com"
  };
  //   取出localStorage中的zz对应的hash
  var hasInLocalStorage = getFromLocalStorage("zz");
  if (hasInLocalStorage) {
    var hash = hasInLocalStorage;
  }
  return {
    keys: keys,
    hash: hash
  };
}
function getFromLocalStorage(name) {
  return JSON.parse(localStorage.getItem(name) || "null");
}
function createTag(tagName) {
  return document.createElement(tagName);
}

function createSpan(textContent) {
  var span = createTag("span");
  span.textContent = textContent;
  span.className = "text";
  return span;
}
