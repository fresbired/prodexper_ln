/*
    我的第一个JavaScript脚本
*/


//使用 JavaScript 把标题文本改成了 Hello world!。
const myHeading = document.querySelector("h1");
myHeading.textContent = "Hello world!";

const myImg = document.querySelector("img")
const LUKU_IMG = "images/luku.jpg";
const MERICIAL_IMG = "images/mericial.jpg";

myImg.onclick = () => {
    const myImgSrc = myImg.getAttribute("src")
    if (myImgSrc == LUKU_IMG) {
        myImg.setAttribute("src", MERICIAL_IMG)
    }
    else if (myImgSrc == MERICIAL_IMG) {
        myImg.setAttribute("src", LUKU_IMG)
    }
}

