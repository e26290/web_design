// 偵測螢幕的高度
$(window).scroll(function (e) {
    let winScrollTop = $(window).scrollTop();
    console.log(winScrollTop);
    // banner bg 拉長變形, b-title 向右移動
    if (winScrollTop > 0) {
        $(".red-mask").addClass('moveScale');
        // $(".b-content").css('justify-content','flex-end').addClass('moveRight');
        $(".b-title").addClass('moveRight');
    } else {
        $(".red-mask").removeClass('moveScale');
        // $(".b-content").css('justify-content', 'center');
        $(".b-title").removeClass('moveRight');
    }
    if (winScrollTop > 111) {
        $(".main").css('display', 'block').addClass('moveShow');
    } else {
        $(".main").css('display', 'none').removeClass('moveShow');
    }
    if (winScrollTop > 600) {
        $(".b-title").addClass('moveUpH1');
        $(".main").addClass('moveUpText');
    } 
    else {
        $(".b-title").removeClass('moveUpH1');
        $(".main").removeClass('moveUpText');
    }
});