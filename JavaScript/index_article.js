// ---------- 置頂推廣圖事件區 -------------

// is_mouseon_toppromote檢測是否滑鼠在上方(計時器用)，mouseon_timer(計時器停止用)，bgimg_left圖片半透明(TIMER裡面的This會抓不到圖)。
var is_mouseon_toppromote = false;
var mouseon_timer = 0;
var bgimg_left = "";
var bgimg_center = "";
var bgimg_right = "";
var mouseon_video = "";

// 先控制影片暫停「$(".mc_toppromote_grid>video")」是JQ先抓到影片，再用「[0]」變成JS使用.pause()方法。
$(".mc_toppromote_grid>video")[0].pause();
$(".mc_toppromote_grid>video")[1].pause();

// 滑鼠事件
$(".mc_toppromote_grid").on({

    // 滑鼠進入觸發一次。
    'mouseenter': function () {
        $(this).find(".toppromote_bgimg_left").css("background-size", "722px 400px");
        $(this).find(".toppromote_bgimg_center").css("background-size", "722px 400px");
        $(this).find(".toppromote_bgimg_right").css("background-size", "960px 400px");
        // $(".toppromote_bgimg_left").css("background-size", "960px 400px");
        $(this).find(".toppromote_prompt").css('opacity', 1);
        is_mouseon_toppromote = true;
        bgimg_left = $(this).find(".toppromote_bgimg_left");
        bgimg_center = $(this).find(".toppromote_bgimg_center")
        mouseon_video = $(this).find("video")[0];
        // 滑鼠進入計時器
        mouseon_timer = setTimeout(function () {
            if (is_mouseon_toppromote) {
                if (mouseon_video != undefined) {
                    mouseon_video.play();
                }
                $(bgimg_left).css('opacity', 0);
                $(bgimg_center).css('opacity', 0);
                $(".toppromote_prompt").css('opacity', 0);
            }
        }, 1000);
    },

    // 滑鼠出去觸發一次。
    'mouseleave': function () {
        $(this).find(".toppromote_bgimg_left").css("background-size", "640px 360px");
        $(this).find(".toppromote_bgimg_center").css("background-size", "640px 360px");
        $(this).find(".toppromote_bgimg_right").css("background-size", "864px 360px");
        $(this).find(".toppromote_bgimg_left").css('opacity', 1);
        $(this).find(".toppromote_bgimg_center").css('opacity', 1);
        $(this).find(".toppromote_prompt").css('opacity', 0);
        // 滑鼠移出停止計時器且改狀態
        clearTimeout(mouseon_timer);
        is_mouseon_toppromote = false;
        if (mouseon_video != undefined) {
            mouseon_video.pause();
        }
    }

})



// ---------- 時間倒數事件區 -------------

// 設定上線時間為現在的10年後。
// 利用.getTime()取得固定時間點(1970年1月1日0時0分0秒)的時間差。
var online_date = new Date("July 30, 2022 17:55:00").getTime();

var countdown_date = setInterval(function () {

    // 取得現在時間的時間差。
    var rightnow_date = new Date().getTime();

    // 取得上線時間與縣在時間的時間差。
    var countdown_distance = online_date - rightnow_date;

    // 用時間差反推日期、小時、分鐘、秒。
    var countdown_days = Math.floor(countdown_distance / (1000 * 60 * 60 * 24));
    var countdown_hours = Math.floor((countdown_distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var countdown_minutes = Math.floor((countdown_distance % (1000 * 60 * 60)) / (1000 * 60));
    var countdown_seconds = Math.floor((countdown_distance % (1000 * 60)) / 1000);


    var fix_seconds = countdown_seconds.toString().padStart(2, 0);
    var fix_minutes = countdown_minutes.toString().padStart(2, 0);
    var fix_hours = countdown_hours.toString().padStart(2, 0);
    var fix_days = countdown_days.toString().padStart(2, 0);

    for (var i = 0; i < 11; i++) {

        if (i == 2 || i == 5 || i == 8) {
            continue;
        } else {
            var timebox_tr = $(".toppromote_timebox").find("tr")[1];
            var timebox_td = $(timebox_tr).find(`td:nth-of-type(${i + 1})`);
            switch (i) {
                case 0:
                    timebox_td.html(fix_days.substring(0, 1));
                    break;
                case 1:
                    timebox_td.html(fix_days.substring(1, 2));
                    break;
                case 3:
                    timebox_td.html(fix_hours.substring(0, 1));
                    break;
                case 4:
                    timebox_td.html(fix_hours.substring(1, 2));
                    break;
                case 6:
                    timebox_td.html(fix_minutes.substring(0, 1));
                    break;
                case 7:
                    timebox_td.html(fix_minutes.substring(1, 2));
                    break;
                case 9:
                    timebox_td.html(fix_seconds.substring(0, 1));
                    break;
                case 10:
                    timebox_td.html(fix_seconds.substring(1, 2));
                    break;
                default:
                    break;

            }
        }
    }

    if (countdown_distance < 0) {
        toppromote_countdowndate.innerHTML = "即將上線，敬請期待";

        for (var i = 0; i < 11; i++) {
            if (i == 2 || i == 5 || i == 8) {
                continue;
            } else {
                var timebox_tr = $(".toppromote_timebox").find("tr")[1];
                var timebox_td = $(timebox_tr).find(`td:nth-of-type(${i + 1})`);
                timebox_td.html("0");
            }
        }

        clearInterval(countdown_date);
    }

}, 1000);



// ---------- 遊戲館列表詳細資料事件區 -------------

// is_mouseon_toppromote檢測是否滑鼠在上方(計時器用)，mouseon_timer(計時器停止用)，bgimg_left圖片半透明(TIMER裡面的This會抓不到圖)。
var is_mouseon_gamecell = false;
var mouseon_gamecelltimer = 0;
var mouseon_gamecellvideo = "";
var mouseon_gamecellframe = "";

// 先控制影片暫停「$(".gamelist_gamecelldetail>video")」是JQ先抓到影片，再用「[0]」變成JS使用.pause()方法。
for (var i = 0; i < $(".gamelist_gamecelldetail>video").length; i++) {
    $(".gamelist_gamecelldetail>video")[i].pause();
}

// 滑鼠事件
$(".gamelist_gamecell").on({

    // 滑鼠進入觸發一次。
    'mouseenter': function () {
        $(this).find(".toppromote_prompt").css('opacity', 1);

        is_mouseon_gamecell = true;
        mouseon_gamecellvideo = $(this).find("video")[0];
        mouseon_gamecellframe = $(this).find(".gamelist_gamecelldetail")[0];
        // 滑鼠進入計時器
        mouseon_gamecelltimer = setTimeout(function () {
            if (is_mouseon_gamecell) {
                if (mouseon_gamecellvideo != undefined) {
                    mouseon_gamecellvideo.play();
                }
                $(".toppromote_prompt").css('opacity', 0);
                $(mouseon_gamecellframe).css('height', "100%");
            }
        }, 1000);
    },

    // 滑鼠出去觸發一次。
    'mouseleave': function () {
        $(this).find(".toppromote_prompt").css('opacity', 0);
        $(this).find(".gamelist_gamecelldetail").css('height', "0");
        // 滑鼠移出停止計時器且改狀態
        clearTimeout(mouseon_gamecelltimer);
        is_mouseon_gamecell = false;
        if (mouseon_gamecellvideo != undefined) {
            mouseon_gamecellvideo.pause();
        }
    }

})


// ----------------------- 勝分榜成長 -----------------------

var winnerlist_Increasetimer = 0;
var winnerlist_tableislight = true;
var winnerlist_tablestructure = "<tr><td></td><td></td><td></td><td></td><td></td><td></td></tr>"

// 假資料區。
var fake_gamelist = ['Starbust', 'Divine Fortune', 'Twin Spin', 'Fruit Shop', 'Dead of Alive'];
var fake_playerlist = ['Jessica', 'Eve', 'Cathy', 'Amy', 'Tiffany'];
var fake_betlist = [100, 200, 500, 1000, 2000];
var fake_multiple = [69, 51, 271, 96, 511];
var fake_randomlist = [];

winnerlist_Increasetimer = setInterval(function () {
    var winnerlist_title = $(".mc_winnerlist").find("tr")[0];
    // 再標題後新增元素。
    $(winnerlist_title).after(winnerlist_tablestructure);

    // 給元素背景。
    if (winnerlist_tableislight) {
        var winnerlist_firstcell = $(".mc_winnerlist").find("tr")[1];
        $(winnerlist_firstcell).css("background-color", "var(--theme_searchbar_choose_color)");
        winnerlist_tableislight = false;
    } else {
        var winnerlist_firstcell = $(".mc_winnerlist").find("tr")[1];
        $(winnerlist_firstcell).css("background-color", "var(--theme_searchbar_background_color)");
        winnerlist_tableislight = true;
    }


    for (var i = 0; i < 5; i++) {
        fake_randomlist[i] = Math.floor(Math.random() * (4 - 0 + 1)) + 0;
    }

    for (var i = 0; i < 6; i++) {

        var winnerlist_firstcell = $(".mc_winnerlist").find("tr")[1];
        var winnerlist_givevalue = $(winnerlist_firstcell).find(`td:nth-of-type(${i + 1})`);

        switch (i) {
            case 0:
                winnerlist_givevalue.html(fake_gamelist[fake_randomlist[i]]);
                break;
            case 1:
                winnerlist_givevalue.html(fake_playerlist[fake_randomlist[i]]);
                break;
            case 2:
                const fake_date = new Date();
                var fix_minutes = fake_date.getMinutes().toString().padStart(2, 0);
                var fix_hours = fake_date.getHours().toString().padStart(2, 0);
                winnerlist_givevalue.html(`${fix_hours}:${fix_minutes}`);
                break;
            case 3:
                winnerlist_givevalue.html(fake_betlist[fake_randomlist[i]]);
                var fake_betfix = fake_betlist[fake_randomlist[i]];
                break;
            case 4:
                winnerlist_givevalue.html(fake_multiple[fake_randomlist[i]]);
                var fake_multiplefix = fake_multiple[fake_randomlist[i]];
                break;
            case 5:
                winnerlist_givevalue.html(fake_betfix * fake_multiplefix);
                if (fake_betfix * fake_multiplefix > 100000) {
                    winnerlist_givevalue.css("color", "var(--theme_color_gold)");
                    winnerlist_givevalue.css("font-weight", "500");
                }
                break;
            default:
                break;

        }
    }


    if ($(".mc_winnerlist").find("tr").length > 11) {
        var winnerlist_detach = $(".mc_winnerlist").find("tr")[11];
        $(winnerlist_detach).detach();
    }

}, 2000);


// ----------------------- 遊戲館類型選擇器 -----------------------


gamelist_filterselection("type0fall");

function gamelist_filterselection(gamefs) {

    filter_btnstyle = $(".mc_gamesearch_btngroup").find("div");

    if (gamefs == "type0fall") {
        $("#gamelist_showallid").css("display", "block");
        $("#gamelist_notshowallid").css("display", "none");
        $(filter_btnstyle[0]).prop("class","gamesearch_btnactive");
        for(var i = 1; i < 4; i++){
            $(filter_btnstyle[i]).prop("class"," ");
        }
        
    }else{
        $("#gamelist_showallid").css("display", "none");
        $("#gamelist_notshowallid").css("display", "block");
        $(filter_btnstyle[0]).prop("class"," ");

        var singletype_childbartitle = $('.mc_gamelist_singletype').find('.gamelist_childbartitle')[0];
        var singletype_title = $(singletype_childbartitle).find('p')[0];
        var singletype_icon = $(singletype_childbartitle).find('img')[0];

        switch (gamefs) {
            case "gamelist_originaltype":
                $(filter_btnstyle[1]).prop("class","gamesearch_btnactive");
                $(filter_btnstyle[2]).prop("class"," ");
                $(filter_btnstyle[3]).prop("class"," ");
                $(singletype_title).html("原創遊戲");
                $(singletype_icon).prop("src","./Image/GameList/Icon/gamelisticon_01.png");
                break;
            case "gamelist_classictype":
                $(filter_btnstyle[2]).prop("class","gamesearch_btnactive");
                $(filter_btnstyle[1]).prop("class"," ");
                $(filter_btnstyle[3]).prop("class"," ");
                $(singletype_title).html("經典老虎機");
                $(singletype_icon).prop("src","./Image/GameList/Icon/gamelisticon_02.png");
                break;
            case "gamelist_tabletype":
                $(filter_btnstyle[3]).prop("class","gamesearch_btnactive");
                $(filter_btnstyle[2]).prop("class"," ");
                $(filter_btnstyle[1]).prop("class"," ");
                $(singletype_title).html("真人牌桌");
                $(singletype_icon).prop("src","./Image/GameList/Icon/gamelisticon_03.png");
                break;
            default:
                break;

        }

        gamelist_allfilter = $(".gamelist_filter");

        for(var i = 0; i < gamelist_allfilter.length; i++){
            // 把所有元素的display設定為none
            if($(gamelist_allfilter[i]).css("display") == "block"){
                $(gamelist_allfilter[i]).css("display","none");
            }
    
            // 檢查className中有指定的名稱，再把指定的元素display設定為block
            if(gamelist_allfilter[i].className.indexOf(gamefs) > -1){
                $(gamelist_allfilter[i]).css("display","block");
            }
        }
        
    }
}


// ----------------------- 搜尋Bar -----------------------


function gamesearch_active(){

    var gamesearch_value = gamesearch_input.value.toUpperCase();

    var gamesearch_ul = document.getElementsByClassName("textbar_optionul")[0];
    var gamesearch_li = gamesearch_ul.getElementsByTagName('li');

    if(gamesearch_value == ""){
        gamesearch_ul.style.display = "none";
    }else{
        gamesearch_ul.style.display = "block";
    }

    var donfindcount = 0;
    for(var i = 0; i < gamesearch_li.length; i++){
        var gamesearch_a = gamesearch_li[i].getElementsByTagName('a')[0];
        var gamesearch_avalue = gamesearch_a.innerHTML;
        var gamesearch_dontfind = $(gamesearch_ul).find('p')[0];        
        if(gamesearch_avalue.toUpperCase().indexOf(gamesearch_value) > -1){
            gamesearch_li[i].style.display = "block";
            $(gamesearch_dontfind).text("");
            donfindcount = 0;
        }else{
            gamesearch_li[i].style.display = "none";
            donfindcount += 1;
            if(donfindcount == gamesearch_li.length){
                $(gamesearch_dontfind).text("未搜尋到相關遊戲館...");
            }
        }
    }

}