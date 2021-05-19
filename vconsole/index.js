  
  
  
  // ==UserScript==
  // @name         vConsole
  // @version      0.0.1
  // @description  移动端控制台调试
  // @author       执笔看墨花开
  // @icon         https://xlzy520.cn/img/favicon.png
  // @require      https://cdn.bootcss.com/jquery/3.4.1/jquery.min.js
  // @license      GPL
  // ==/UserScript==
  (function (w) {
    addScript('https://cdn.bootcdn.net/ajax/libs/vConsole/3.4.1/vconsole.min.js')
    function addScript(url) {
      const body = document.querySelector('body')
      const script = document.createElement('script')
      script.src = url
      script.onload = function (){
        window.vconsole = new window.VConsole()
      }
      body.appendChild(script)
    }
    function addLink(url) {
      const head = document.querySelector('head')
      const link = document.createElement('link')
      link.rel = 'stylesheet'
      link.href = url
      head.appendChild(link)
    }
    
    function addStyle(data){
      const head = document.querySelector('head')
      const style = document.createElement('style')
      style.innerHTML = data
      head.appendChild(style)
    }
    
   
  })();
