/*
 *
 *  Copyright (c) 2020 Puerto Parrot. Written by Dimitri Mostrey for https// www.puertoparrot.com
 *  Contact me at admin@puertoparrot.com or admin@puertoparrot.com
 *
 */
const $ = require('jquery');
$(document).ready(function () {


    //stick in the fixed 100% height behind the navbar but don't wrap it
    $('#slide-nav.navbar-inverse').after($('<div class="inverse" id="navbar-height-col"></div>'));

    $('#slide-nav.navbar-default').after($('<div id="navbar-height-col"></div>'));

    // Enter your ids or classes
    const toggler = '.navbar-toggle';
    const togglerLinks = '.navbar-toggle-link';
    const pagewrapper = '#page-content';
    const navigationwrapper = '.navbar-header';
    //const menuwidth = '100%'; // the menu inside the slide menu itself
    const slidewidth = '80%';
    const menuneg = '-100%';
    const slideneg = '-80%';
    const slideNav = $("#slide-nav");


    slideNav.on("click", toggler, function () {
        const selected = $(this).hasClass('slide-active');
        const slideMenu = $('#slidemenu');

        slideMenu.stop().animate({
            left: selected ? menuneg : '0px'
        });
        $('#navbar-height-col').stop().animate({
            left: selected ? slideneg : '0px'
        });
        $(pagewrapper).stop().animate({
            left: selected ? '0px' : slidewidth
        });
        $(navigationwrapper).stop().animate({
            left: selected ? '0px' : slidewidth
        });
        $(this).toggleClass('slide-active', !selected);
        slideMenu.toggleClass('slide-active');

        $('#page-content, .navbar, body, .navbar-header').toggleClass('slide-active');
    });

    slideNav.on("click", togglerLinks, function () {
        const slideMenu = $('#slidemenu');

        slideMenu.stop().animate({
            left: menuneg
        });
        $('#navbar-height-col').stop().animate({
            left: slideneg
        });
        $(pagewrapper).stop().animate({
            left: '0'
        });
        $(navigationwrapper).stop().animate({
            left: '0'
        });
        $(toggler).toggleClass('slide-active', false);
        slideMenu.toggleClass('slide-active');

        $('#page-content, .navbar, body, .navbar-header').toggleClass('slide-active');
    });

    const selected = '#slidemenu, #page-content, body, .navbar, .navbar-header';
    $(window).on("resize", function () {
        if ($(window).width() > 767 && $('.navbar-toggle').is(':hidden')) {
            $(selected).removeClass('slide-active');
        }
    });
});
