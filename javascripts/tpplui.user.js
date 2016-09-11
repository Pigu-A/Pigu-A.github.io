// ==UserScript==
// @name         TPP Live Updater Improver
// @namespace    me.pigdevil.tpplui
// @version      1.3
// @description  Make it easier to update things.
// @include      http://www.reddit.com/live/uaacu13x0zen*
// @author       pigdevil2010
// @run-at       document-end
// ==/UserScript==

var pw = 0;
var ph = 0;
var ofs = 0;
var upd = 0;
var sidebar = false;
var wh = $(window).height();
var timehover = false;

$("head").append('<style type="text/css">.content,header,#new-update-form,.liveupdate-listing,.usertext{margin-left:0 !important;max-width:none !important;}.liveupdate .body{width:80% !important;max-width:none !important;}#new-update-form{margin-top:5px}#twitch{position:fixed;display:table-cell}#chat{position:relative;top:-2px}aside{position:fixed;padding:5px;z-index:10;background:white;border:2px solid gray;opacity:1 !important}#currupd{float:right;margin-right:5px !important}.tabmenu{margin:-17px 0 0 120px !important}</style>');
$("#liveupdate-options").hide();
$(".footer-parent").before("<div id='updater'></div><div id='twitch'></div>");
$("[role='main']").appendTo($("#updater"));
ofs = $("#updater").offset()["top"];
$("#updater").css("width","60%").css("padding", 0).css("border", 0).css("float", "left");
$("#updater div").css("width","auto");
pw = $("#twitch").css("width","40%").css("float","right").css("left", $("#updater").width() + "px")
	.append('<object id="player" type="application/x-shockwave-flash" id="live_embed_player_flash" data="http://www.twitch.tv/widgets/live_embed_player.swf?channel=twitchplayspokemon" bgcolor="#000000"><param name="allowFullScreen" value="true" /><param name="allowScriptAccess" value="always" /><param name="allowNetworking" value="all" /><param name="movie" value="http://www.twitch.tv/widgets/live_embed_player.swf" /><param name="flashvars" value="hostname=www.twitch.tv&channel=twitchplayspokemon&auto_play=true&start_volume=80" /></object>')
	.append('<iframe id="chat" frameborder="0" src="http://twitch.tv/twitchplayspokemon/chat?popout="></iframe>')
	.width();
$("aside").outerWidth(pw).outerHeight(wh - ofs).css("top", ofs + "px").css("right", -(pw - 14) + "px").hide();
$('<button id="sidebtn" class="btn" type="button">Open Sidebar</button>').css("position","absolute").css("right", (pw + 10) + "px")
	.prependTo($("header"));
ph = Math.floor(pw * 9 / 16 + 30);
$("#player").attr("width", pw).attr("height", ph);
$("#chat").attr("width", pw).attr("height", wh - ofs - ph);
$("#liveupdate-statusbar").append('<p id="currupd">Current Updater: None</p>');

var btnbox = $("<div></div>").prependTo("#new-update-form");

function time(sec) {
    var offset = 0; //Set offset here
    var o = new Date().getTime() - new Date("2015/02/12 21:00:00 UTC").getTime() - offset; //Anniversary Red start time
    var oo = Math.floor(o / 86400000) + "d " + Math.floor(o % 86400000 / 3600000) + "h " + Math.floor(o % 3600000 / 60000) + "m ";
    return sec ? oo + Math.floor(o % 60000 / 1000) + "s" : oo;
}

$(document).ready(function(){
    function add(a, b) {
		$('<button class="btn" type="button">' + a + '</button>').appendTo(btnbox).click(function(){$(".usertext-edit textarea").val(b);});
	}
	$('<button id="timebtn" class="btn" type="button">Timestamp</button>').appendTo(btnbox).click(function(){$(".usertext-edit textarea").val(time(false));});
    add("Snark", "[Snark] ");
    add("Fluff", "[Fluff] ");
    add("Info", "[Info] ");
    add("Chat", "[Chat] ");
    add("Donation", "[Donation] ");
    add("Meta", "[Meta] ");
    
    $(document).scroll(function(){
        var twtop = Math.max(ofs - $(document).scrollTop(), 0);
        $("#chat").attr("height", wh - twtop - ph);
    	$("#twitch").css("top", twtop + "px");
        $("aside").css("top", twtop + "px").outerHeight(wh - twtop);
    });
    
    $(window).resize(function(){
        var twtop = Math.max(ofs - $(document).scrollTop(), 0);
        wh = $(window).height();
        pw = $("#twitch").css("left", $("#updater").width() + "px").width();
        ph = Math.floor(pw * 9 / 16 + 30);
        $("#twitch").css("top", twtop + "px");
		$("#player").attr("width", pw).attr("height", ph);
		$("#chat").attr("width", pw).attr("width", pw).attr("height", wh - twtop - ph);
        $("aside").outerWidth(pw).outerHeight(wh - twtop).css("top", twtop + "px");
        $("#sidebtn").css("right", (pw + 10) + "px");
        if(sidebar) $("aside").css("right", 0);
        else $("aside").css("right", -$("aside").outerWidth() + "px");
    });
    
    $("#sidebtn").click(function(){
        if(sidebar) {
            $("#sidebtn").html("Open Sidebar");
            $("aside").animate({right: -$("aside").outerWidth() + "px"},function(){$("aside").hide()});
        }
        else {
            $("#sidebtn").html("Close Sidebar");
            $("aside").show().animate({right: 0});
        }
        sidebar = !sidebar;
    });
    
    $("#timebtn").hover(function(){
        timehover = true;
        $("#timebtn").html(time(true));
    },function(){
        timehover = false;
        $("#timebtn").html("Timestamp");
    });
    
    setInterval(function(){
    	if(upd == 0) $.get("https://dl.dropboxusercontent.com/u/12559189/TPP/currentupdater.txt",function(data,status){
            if(status == "success") $("#currupd").html("Current Updater: " + data);
    	});
        if(timehover) $("#timebtn").html(time(true));
        upd = (upd + 1) % 60;
	}, 1000);
});
