// ==UserScript==
// @name         LOFTER 增强助手（GITLOF.com）
// @namespace    https://github.com/gearkey
// @version      0.1
// @description  LOFTER 功能增强
// @author       Gearkey
// @match        *://*.lofter.com/*
// @icon         data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==
// @grant        none
// @license      GPL-3.0 License
// @require      https://l.bst.126.net/rsc/js/vcloud/jquery-1.11.3.js
// ==/UserScript==

(function() {
    'use strict';

    /* 替换发现为趋势 */
    $(".T8l0DVXfEIOM40wz1oG2-g\\=\\=:eq(1)").html("趋势");

    /* 添加 GITLOF 入口 */
    $(".jFAM0LRg9mN7mB\\+rkGwKCA\\=\\=:last").after('<div class="jFAM0LRg9mN7mB+rkGwKCA=="><a class="T8l0DVXfEIOM40wz1oG2-g==" target="_blank" href="https://www.gitlof.com/">GITLOF</a></div>');

    /* 添加音乐发布按钮 */
    $("#publishPostBar li:eq(2)").after('<li><a class="publishlink publishlink-music n20" href="#publish=music" bakhref="/blog/'+ $(".pv4KWWuL-\\+yL7II93F8--A\\=\\=").html() + '/new/music/">音乐</a></li>');

    $(".publishlink-music").click(function(){
        window.location.href="#publish=music";
        window.location.reload();
    });

})();