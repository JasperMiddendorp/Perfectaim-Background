// ==UserScript==
// @name         Perfectaim Background
// @namespace    http://tampermonkey.net/
// @version      0.1
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
});


GM_addStyle ( `
body { // make the body transparent
	background-color: #292c31d1 !important;
}

#header .container{ // to make the header look cleaner
	padding: 0px !important;
}

.navbar{ // navigation bar
	background-color: #292c31d1 !important;
}

.card{ // all the cards on member screen
	background-color: #22252a00 !important;
}

#header{ // header
	background: #292c31 !important;
}

.forum-post{ // forum posts
	background-color: #22252a00 !important;
	border-style: solid !important;
	border-width: 2px 10px 2px 10px !important;
	border-color: #00000052;
}

.container { // all text-containing boxes get a padding
	padding: 20px !important;
	background: #292c31d1 !important;
}

.fixed-header { // background replacer
	background-color: #292c31d1 !important;
    background: url('https://i.ibb.co/BTnRKtw/PABackground2.png') no-repeat center center fixed !important;
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
