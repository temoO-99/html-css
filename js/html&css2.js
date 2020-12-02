/* global $ */

$(function(){

//    'use strict';
    
    $('.lin').click(function(){
        $('ul').toggle();
    });

    $(".lin").hover(function(){$(this).css("cursor","pointer")});
    
    $(".lo").hover(
    function(){
        $("button").show();
    },
    function(){
       $("button").css("display","none"); 
    });
});