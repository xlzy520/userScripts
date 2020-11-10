// ==UserScript==
// @name         GitHub Stars Astralapp
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  方便展示astralapp的笔记
// @author       You
// @match        https://app.astralapp.com/dashboard
// @grant        none
// @note         增加功能：除锚点以外链接新窗口打开
// ==/UserScript==

(function() {
  'use strict';
  const $ = function (query) {
    return document.querySelector(query)
  }
  const $All = function (query) {
    return document.querySelectorAll(query)
  }
  
  const addStyle = function (cssText) {
    const head = $('head')
    const styleTag = document.createElement('style')
    const cssTextNode = document.createTextNode(cssText)
    styleTag.appendChild(cssTextNode)
    head.appendChild(styleTag)
  }
  
  
  const cssText = '.CodeMirror-scroll{\n' +
    '  min-height: 50px!important;\n' +
    '  height: 50px!important;\n' +
    '}\n' +
    '\n' +
    '.star-info .bg-white.pin-b{\n' +
    '  bottom: unset;\n' +
    '}\n' +
    '.CodeMirror-wrap{\n' +
    '  box-shadow: 0 3px #ccc;\n' +
    '}\n' +
    '.repo-readme{\n' +
    '  margin-top: 120px;\n' +
    '}'
  
  
  addStyle(cssText)
  
  
  let isShow = false
  setTimeout(() => {
    $('.collection-cluster').addEventListener("click", () => {
      setTimeout(() => {
        let links = $All('.repo-readme a:not(.anchor)')
        links.forEach(link=>{
          link.target = '_blank'
        })
      }, 500)
      if (!isShow) {
        setTimeout(() => {
          $('.tracking-wide').click()
          isShow = true
        }, 500)
      }
      
    })
  }, 1000)
  
  
  // Your code here...
})();
