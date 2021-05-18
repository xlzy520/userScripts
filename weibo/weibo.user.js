// ==UserScript==
// @name         微博打印出我的收藏
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        https://weibo.com/fav*
// @match        https://weibo.com/u/*
// @grant        none
// @require      https://cdn.bootcdn.net/ajax/libs/jquery/3.5.1/jquery.min.js
// @require      file:///Users/xxx/Documents/webstormProjects/userScripts/weibo/printThis.js
// @require      file:///Users/xxx/Documents/webstormProjects/userScripts/weibo/weibo.user.js
// ==/UserScript==


const btn = '<button id="lzPrint" style="position: fixed; color: #20a0ff;right: 20px;top: 20px;z-index: 99999"">打印</button>'
function printPdf() {
  // $('body').printThis({
    $('.WB_feed.WB_feed_v3.WB_feed_v4').printThis({
    importCSS: true,
    // loadCSS: "https://img.t.sinajs.cn/t6/style/css/module/list/comb_WB_feed.css?version=40c445261b223d2b",
  });
}
$('body').append(btn)

$('#lzPrint').click(() => {
  printPdf()
})
