// 파일명 : main.js
// 기능 : 
// 작성날짜 : 2024.01.10
// 작성자 : 윤라영

$(document) .ready(function(){
    $('.nv1 div .main1, .sub').mouseover(function(){
        $('.sub').css('display', 'black');
    });
    $('.nv1 div .main1, .sub').mouseover(function(){
        $('.sub').css('display', '');
    });
    $('.a1, .sub1').mouseover(function(){
        $('.sub1').css('display', 'black');
    });
    $('.a1, .sub1').mouseover(function(){
        $('.sub1').css('display', '');
    });
});
