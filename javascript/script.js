$(function(){

    // 메뉴 시작
    $(".nav > ul > li").mouseover(function(){
        $(".nav > ul > li > ul").stop().fadeIn(900);
        $("#header").addClass("on");
    });
    $(".nav > ul > li").mouseout(function(){
        $(".nav > ul > li > ul").stop().fadeOut(100);
        $("#header").removeClass("on");
    });
    // 메뉴 끝

    // 슬라이드 시작
    let currentindex = 0;
    $(".sliderwrap").append($(".sliding").first().clone(true));

    setInterval(function(){
        currentindex++;
        $(".sliderwrap").animate({marginLeft: -currentindex * 100 + "%"}, 600);

        if(currentindex == 3){
            setTimeout(function(){
                $(".sliderwrap").animate({marginLeft: 0}, 0);
                currentindex = 0;
            }, 700);
        }
    }, 3000);
    // 슬라이드 끝

    // 탭 시작
    let tabBtn = $(".tab-btn > ul > li");
    let tabCont = $(".tab-cont > div");

    tabCont.hide().eq(0).show();

    tabBtn.click(function(){
        const index = $(this).index();

        $(this).addClass("active").siblings().removeClass("active");
        tabCont.eq(index).show().siblings().hide();
    });
    // 탭 끝

    // 모달 레이어 팝업창 시작
    $(".popup-btn").click(function(){
        $(".popup-review").show();
    });
    $(".popup-close").click(function(){
        $(".popup-review").hide();
    });
    // 모달 레이어 팝업창 끝

});