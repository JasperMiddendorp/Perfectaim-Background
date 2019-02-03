// ==UserScript==
// @name         Perfectaim Background
// @namespace    http://tampermonkey.net/
// @version      1.0
// @description  I like to hit little kids and your mom
// @author       Atmos & Ohmega
// @match        https://chrome.google.com/webstore/detail/tampermonkey/dhdgffkkebhmkfjojejmpbldmpobfkfo?hl=en
// @include  https://perfectaim.io/*
// @require  http://code.jquery.com/jquery-3.3.1.min.js
// @grant    GM_addStyle
// ==/UserScript==
var $ = window.jQuery;

$(function() { // this removes the 2 scrolling banners from the member page
    $('#cs').remove();
    $('#csads').remove();
    // Changes "Atmos" into "BigDickHaver69"
    //$("body").children().each(function () {
    //    $(this).html( $(this).html().replace(/Atmos/g,"BigDickHaver69") );
    //});
    //
    // Changes CSS of an element
    //var status = $("span");
    //status.each(function(index) {
    //  if ($(this).text() == "VIP member") {$(this).attr("style", "color: #ff9c08 !important");}});
});


$("body").append ( `
    <div class="icon-flow">
    <a class="totop" href="#" onclick="goTop();return false;"></a>
    </div>
` );


GM_addStyle ( `
body {
	background-color: #292c31d1 !important;
}

.icon-flow{filter: drop-shadow(16px 16px 10px rgba(0,0,0,0.9));;position:fixed;right:5px;bottom:5px;z-index:9999;}
.icon-flow a.totop{background:url(https://i.imgur.com/YVZjSSi.png) no-repeat; z-index:99999;position:relative;display:block;width:90px;height:59px;}

#header .container{
	padding: 0px !important;
}
.navbar{
	background-color: #292c31d1 !important;
}
.card{
	background-color: #22252a00 !important;
}
#header{
	background: #292c31 !important;
}
.forum-post{
	background-color: #22252a00 !important;
	border-style: solid !important;
	border-width: 2px 10px 2px 10px !important;
	border-color: #00000052;
}

.col-lg-10 span:not(.badge),p,font,a:not(.btn btn-primary),h1,h2,h3,h4,h5,h6{
	color: white !important;
    background-color: rgba(0, 0, 0, 0) !important;
    font-family: Roboto !important;
}

.container {
	padding: 20px !important;
	background: #292c31d1 !important;
}

.bg-secondary {
	background-color: #00000000 !important;
}

.postcontainer{
	padding: 20px !important;
	background: #292c31d1 !important;
}

.post-card{
	background: #292c31d1 !important;
}

.fixed-header {
	background-color: #292c31d1 !important;
    background: url('https://i.imgur.com/WzOX3EE.jpg') no-repeat center center fixed !important;
    -webkit-background-size: auto !important;
    -moz-background-size: auto !important;
    -o-background-size: auto !important;
    background-size: auto !important;
    -webkit-background-repeat: repeat !important;
    -moz-background-repeat: repeat !important;
    -o-background-repeat: repeat !important;
    background-repeat: repeat !important;
    }
` );
