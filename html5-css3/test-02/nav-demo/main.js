keys = {
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
hash = {
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
console.log(localStorage.getItem("zz"));
hasInLocalStorage = JSON.parse(localStorage.getItem("zz") || "null");
if (hasInLocalStorage) {
  hash = hasInLocalStorage;
}
// 遍历keys，生成kbd标签
index = 0;
while (index < keys["length"]) {
  div1 = document.createElement("div");
  div1.className = "row";
  mainDiv.appendChild(div1);
  row = keys[index];
  // console.log(row);
  index2 = 0;
  while (index2 < row.length) {
    div2 = document.createElement("kbd");
    div2.textContent = row[index2];
    div2.className = "kbd";
    button1 = document.createElement("button");
    button1.textContent = "编辑";
    button1.id = row[index2];
    button1.onclick = function(bbb) {
      key = bbb["target"]["id"];
      newWebSite = prompt("请输入新网址");
      hash[key] = newWebSite;
      // 将变更后的地址存到localStotage中
      localStorage.setItem("zz", JSON.stringify(hash));
    };
    div2.appendChild(button1);
    div1.appendChild(div2);

    index2 = index2 + 1;
  }

  index = index + 1;
}
//监听鼠标按下事件
document.onkeypress = function(aa) {
  key = aa["key"];
  webSite = hash[key];
  // 模拟用户在地址栏输入
  // location.href = "http://" + webSite;
  // 在新窗口打开
  window.open("http://" + webSite, "_blank");
};
