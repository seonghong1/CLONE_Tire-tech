$(document).ready(function(){
    $("ul.navbar_gnb,.sub_shadow").on('mouseover mouseleave',function(aa){
        if($(window).width() > 1169){
        if(aa.type == 'mouseover'){
            $("ul.sub").stop().fadeIn();
            $(".sub_shadow").stop().slideDown();
        } else{
            $("ul.sub").stop().fadeOut(200,function(){
                $("ul.sub").removeAttr('style')//함수 실행뒤에 지저분한 스타일이 남아있는 요소를 제거
            });
            $(".sub_shadow").stop().slideUp(200,function(){
                $(".sub_shadow").removeAttr('style')
             });
        }
        }

    })



    //모바일 상태에서 서브메뉴 나오게하기

    const $mainBtn = $(".navbar_gnb > li a")// 모바일 메뉴
    if($(window).width() < 1170){
    $mainBtn.click(function(){
        if( !$(this).parent().hasClass('on')){//클릭한 a의 부모 li에 클라스 on이 없을때 적용
        $("ul.sub").slideUp()
        $(".navbar_gnb > li").removeClass('on')
        //$(this).parent().siblings().children("ul.sub").slideUp()
        //$(this).parent().siblings().removeClass('on')

        $(this).parent().addClass('on')
        $(this).siblings('ul.sub').slideDown();
        

    }else{//클릭한 부분이 이미 열려있는 상태일때 (클릭한 부분에 on이 없을때)
        $(this).siblings('ul.sub').slideUp();
        $(this).parent().removeClass('on')
        
    }
    })
}
//.trigger클릭시 모바일 메뉴 등장
$(".trigger").click(function(){
    $(this).toggleClass("open")
    
    if($(this).hasClass("open")){
        $('.gnb').animate({right:0},400)
        $('header').animate({left:-250},400)
    }else{
        $('.gnb').animate({right:-250},200)
        $('header').animate({left:0},200)
    }
})
    //모바일 상태에서 서브메뉴를 열고 창 크기를 늘리면 텍스트가 그대로 보임
$(window).resize(function(){
    if($(window).width() > 1169){
        $("ul.sub").removeAttr("style")
        $(".navbar_gnb > li").removeClass("on")
    }
})















});


/*
    mouseenter / mouseleave    - 자식요소가 있으면 해당 자식요소 제외

    mouseover / mouseout        - 자식요소가 있으면 해당 자식요소 포함

*/ 