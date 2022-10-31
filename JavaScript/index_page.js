var window_scrollinitial = 0;
window.scroll(0, 0);

var window_scrollmonitor = setInterval(function(){
    var window_nowscroll = window.scrollY;
    if(window_nowscroll != window_scrollinitial){
        window_scrollinitial = window_nowscroll;
        window_scroll_event();
    }
},10)

// split_video
var is_leavefullscreen = false;


// 滾動滾輪時，觸發事件。
//window.addEventListener('scroll', function () {
function window_scroll_event(){


    // Navigation bar effect on scroll
    const header_navbar = document.querySelector("header");
    // 當滾輪有滾動時，再header的標籤加入「navbar_sticky」的class，若回到最上方時，再進行移除。
    header_navbar.classList.toggle("navbar_sticky", window.scrollY > 0);
    nav_items_border.classList.toggle("nav_items_borderhidden", window.scrollY > 0);


    // console.log(window.scrollY);
    if (window.scrollY >= 25) {
        // 禁用後移、前移、觸控
        // 初始化swiper
        var swiper = document.querySelector('.swiper').swiper;
        // swiper.allowSlideNext = false;
        // swiper.allowSlidePrev = false;
        // swiper.allowTouchMove = false;
        swiper.disable();
        swiper2.disable();
    } else {
        // 啟動後移、前移、觸控
        // 初始化swiper
        var swiper = document.querySelector('.swiper').swiper;
        // swiper.allowSlideNext = true;
        // swiper.allowSlidePrev = true;
        // swiper.allowTouchMove = true;
        swiper.enable();
        swiper2.enable();
    }


    // 檢查是否有掛特定class的方式：
    // video_01_left_id.classList.contains("leave_left");

    if (window.scrollY == 0 && video_1_top.style.visibility == "hidden") {
        setTimeout(function () {
            if (window.scrollY == 0 && video_1_top.style.visibility == "hidden") {

                video_1_top.style.visibility = "visible";
                video_1_left.style.visibility = "hidden";
                video_1_right.style.visibility = "hidden";
                video_2_top.style.visibility = "visible";
                video_2_left.style.visibility = "hidden";
                video_2_right.style.visibility = "hidden";
                video_3_top.style.visibility = "visible";
                video_3_left.style.visibility = "hidden";
                video_3_right.style.visibility = "hidden";
                video_4_top.style.visibility = "visible";
                video_4_left.style.visibility = "hidden";
                video_4_right.style.visibility = "hidden";
                console.log("合併");

            }
        }, 1000);
    }



    // split_video
    // 滑鼠滾輪滾動時，才加入分開的class
    if (window.scrollY < 750) {

        // var swiper = document.querySelector('.swiper').swiper;
        // swiper.disable();

        // 小於750則顯示
        if (is_leavefullscreen == true) {
            // 整體顯示
            swiper_hidden.style.visibility = "visible";

            // 啟用swiper
            // var swiper = document.querySelector('.swiper').swiper;
            // swiper.enable();

            var body_background = document.querySelector("body");
            body_background.style.backgroundAttachment = "scroll";
            body_background.style.backgroundPosition = "center 0px";

            // 分割的影片顯示，準備關閉
            video_1_left.style.visibility = "visible";
            video_1_right.style.visibility = "visible";
            video_2_left.style.visibility = "visible";
            video_2_right.style.visibility = "visible";
            video_3_left.style.visibility = "visible";
            video_3_right.style.visibility = "visible";
            video_4_left.style.visibility = "visible";
            video_4_right.style.visibility = "visible";

            // 重制狀態
            is_leavefullscreen = false;
        }
        swiper_hidden.classList.toggle("swiper_backgroundhidden", window.scrollY > 25);  // 有滾動時，移除背後黑幕。

        // 文字控制
        text_content_01.style.left = -window.pageYOffset * 2 + 'px';
        text_content_02.style.left = -window.pageYOffset * 2 + 'px';
        text_content_03.style.left = -window.pageYOffset * 2 + 'px';
        text_content_04.style.left = -window.pageYOffset * 2 + 'px';

        // 小點控制
        slider_thumbs_control.style.right = -window.pageYOffset + 'px';


        if (window.scrollY > 0 && video_1_top.style.visibility == "visible") {

            video_1_left.style.visibility = "visible";
            video_1_right.style.visibility = "visible";
            video_1_top.style.visibility = "hidden";
            video_2_left.style.visibility = "visible";
            video_2_right.style.visibility = "visible";
            video_2_top.style.visibility = "hidden";
            video_3_left.style.visibility = "visible";
            video_3_right.style.visibility = "visible";
            video_3_top.style.visibility = "hidden";
            video_4_left.style.visibility = "visible";
            video_4_right.style.visibility = "visible";
            video_4_top.style.visibility = "hidden";
            console.log("分開");
        }

        // 01影片
        // video_01_left_id.classList.toggle("leave_left", window.scrollY > 0);
        // video_01_right_id.classList.toggle("leave_right", window.scrollY > 0);
        // 使用window.pageYOffset垂直滾動的值為向左移動的值，其中left所需為px，故後面加'px'。
        video_1_left.style.left = -window.pageYOffset * 2 + 'px';
        video_1_right.style.left = window.pageYOffset * 2 + 'px';
        // 02影片
        video_2_left.style.left = -window.pageYOffset * 2 + 'px';
        video_2_right.style.left = window.pageYOffset * 2 + 'px';
        // 03影片
        video_3_left.style.left = -window.pageYOffset * 2 + 'px';
        video_3_right.style.left = window.pageYOffset * 2 + 'px';
        // 04影片
        video_4_left.style.left = -window.pageYOffset * 2 + 'px';
        video_4_right.style.left = window.pageYOffset * 2 + 'px';

    } else if (window.scrollY > 750) {

        // 狀態更新
        is_leavefullscreen = true;

        // 禁用swiper
        // var swiper = document.querySelector('.swiper').swiper;
        // swiper.disable();

        var body_background = document.querySelector("body");
        body_background.style.backgroundAttachment = "fixed";
        body_background.style.backgroundPosition = "center -750px";

        // 關閉分割影片
        video_1_top.style.visibility = "hidden";
        video_2_top.style.visibility = "hidden";
        video_3_top.style.visibility = "hidden";
        video_4_top.style.visibility = "hidden";

        video_1_left.style.visibility = "hidden";
        video_1_right.style.visibility = "hidden";
        video_2_left.style.visibility = "hidden";
        video_2_right.style.visibility = "hidden";
        video_3_left.style.visibility = "hidden";
        video_3_right.style.visibility = "hidden";
        video_4_left.style.visibility = "hidden";
        video_4_right.style.visibility = "hidden";

        // 關閉整體
        swiper_hidden.style.visibility = "hidden";
    }


};

