//--------------------------------   swiper_full_video   -------------------------------- 

var swiper = new Swiper(".bg_slider_thumbs", {
    loop: false,
    spaceBetween: 0,  // 可以設定小選單之間的間距。
    slidesPerView: 0,  // 可以調整一個頁面中要有幾個小選單，設0則按CSS樣式設定。
    // freeMode: true,
    // watchSlidesProgress: true,
});

var swiper2 = new Swiper(".bg_slider", {
    loop: false,
    spaceBetween: 0,  // 調整上方大選單的間距。

    // 可以控制滑鼠禁用。
    // allowTouchMove = false;
    

    // 加入自動運作選項。
    autoplay: {
        delay: 9500,
        // delay: 1000000,
        disableOnInteraction: false
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true
    },
    // navigation: {
    //     nextEl: ".swiper-button-next",
    //     prevEl: ".swiper-button-prev",
    // },
    thumbs: {
        swiper: swiper,
    },
});




//--------------------------------   swiper_gamelistbar_controller   -------------------------------- 

// 原創遊戲類
var swiper_original = new Swiper(".gamelist_original", {
    slidesPerView: 5,
    spaceBetween: 37,
    slidesPerGroup: 1,
    loop: true,
    loopFillGroupWithBlank: false,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
        type: 'progressbar',
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});

swiper_original.allowTouchMove = false;


// 經典老虎機
var swiper_classic = new Swiper(".gamelist_classic", {
    slidesPerView: 5,
    spaceBetween: 37,
    slidesPerGroup: 1,
    loop: true,
    loopFillGroupWithBlank: false,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
        type: 'progressbar',
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});

swiper_classic.allowTouchMove = false;


// 真人牌桌
var swiper_table = new Swiper(".gamelist_table", {
    slidesPerView: 5,
    spaceBetween: 37,
    slidesPerGroup: 1,
    loop: true,
    loopFillGroupWithBlank: false,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
        type: 'progressbar',
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },

});

swiper_table.allowTouchMove = false;


//--------------------------------   swiper_supplier_controller   -------------------------------- 


// 供應商。
var swiper_supplier = new Swiper(".mc_supplierlist_swiperbar", {
    slidesPerView: 7,
    spaceBetween: 17,
    slidesPerGroup: 1,
    loop: true,
    loopFillGroupWithBlank: false,
    // pagination: {
    //     el: ".swiper-pagination",
    //     clickable: true,
    //     type: 'progressbar',
    // },
    // navigation: {
    //     nextEl: ".swiper-button-next",
    //     prevEl: ".swiper-button-prev",
    // },

    autoplay: {
        delay: 0,
        waitForTransition: true,
    },
    speed: 2000,
});

swiper_supplier.allowTouchMove = false;
