$(document).ready(function(){
    $(window).scroll(function(){
        // sticky navbar on scroll script
        if(this.scrollY > 20){
            $('.navbar').addClass("sticky");
        }else{
            $('.navbar').removeClass("sticky");
        }
        
        // scroll-up button show/hide script
        if(this.scrollY > 500){
            $('.scroll-up-btn').addClass("show");
        }else{
            $('.scroll-up-btn').removeClass("show");
        }
    });

    // slide-up script
    $('.scroll-up-btn').click(function(){
        $('html').animate({scrollTop: 0});
        // removing smooth scroll on slide-up button click
        $('html').css("scrollBehavior", "auto");
    });

    $('.navbar .menu li a').click(function(){
        // applying again smooth scroll on menu items click
        $('html').css("scrollBehavior", "smooth");
    });

    // toggle menu/navbar script
    $('.menu-btn').click(function(){
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    });

    // typing text animation script
    var typed = new Typed(".typing", {
        strings: ["Developer", "Blogger", "Designer", "Freelancer"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });

    var typed = new Typed(".typing-2", {
        strings: ["Developer", "Blogger", "Designer", "Freelancer"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });

    // owl carousel script
    $('.carousel').owlCarousel({
        margin: 20,
        loop: true,
        autoplay: true,
        autoplayTimeOut: 2000,
        autoplayHoverPause: true,
        responsive: {
            0:{
                items: 1,
                nav: false
            },
            600:{
                items: 2,
                nav: false
            },
            1000:{
                items: 3,
                nav: false
            }
        }
    });
});

var currentDate = new Date();
var weekday = [];
weekday[0] = "Sunday";
weekday[1] = "Monday";
weekday[2] = "Tuesday";
weekday[3] = "Wednesday";
weekday[4] = "Thursday";
weekday[5] = "Friday";
weekday[6] = "Saturday";

var currentDay = weekday[currentDate.getDay()];

var currentTimeHours = currentDate.getHours();
currentTimeHours = currentTimeHours < 10 ? "0" + currentTimeHours : currentTimeHours;
var currentTimeMinutes = currentDate.getMinutes();
var timeNow = currentTimeHours + "" + currentTimeMinutes;

var currentDayID = "#" + currentDay; //gets todays weekday and turns it into id
$(currentDayID).toggleClass("today"); //this works at hightlighting today

var openTimeSplit = $(currentDayID).children('.opens').text().split(":");

var openTimeHours = openTimeSplit[0];
openTimeHours = openTimeHours < 10 ? "0" + openTimeHours : openTimeHours;

var openTimeMinutes = openTimeSplit[1];
var openTimex = openTimeSplit[0] + openTimeSplit[1];

var closeTimeSplit = $(currentDayID).children('.closes').text().split(":");

var closeTimeHours = closeTimeSplit[0];
closeTimeHours = closeTimeHours < 10 ? "0" + closeTimeHours : closeTimeHours;

var closeTimeMinutes = closeTimeSplit[1];
var closeTimex = closeTimeSplit[0] + closeTimeSplit[1];

if (timeNow >= openTimex && timeNow <= closeTimex) {
    $(".openorclosed").toggleClass("open");
} else {
    $(".openorclosed").toggleClass("closed");
}