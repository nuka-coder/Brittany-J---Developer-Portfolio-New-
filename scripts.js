

// Revealing page
var toLoad;
function pageLoading() {
  toLoad = setTimeout(showPage, 5000);
}

function showPage() {
  $("#loading").css("display", "none");
  $("#page").css("display", "inherit");
}



// Navbar //

var navbar = document.getElementById("Navbar");
var navRevealBtn = document.getElementById("Reveal-Btn");
var hideNavbar = document.getElementById("Hide-Navbar");

// Reveal Navbar
function revealNavbar(e) {
   navbar.classList.toggle("nav-reveal");
   navRevealBtn.classList.toggle("reveal-toggle");
   e.preventDefault();
 }

// Navbar Fixed on scroll

var elementPosition = $('#Nav-Section').offset();
$(window).scroll(function(){
        if($(window).scrollTop() > elementPosition.top){
              $('#Nav-Section').css('position','fixed');
              $('#Nav-Section').css('top','8%');
        } else {
            $('#Nav-Section').css('position','absolute');
        }
});

// Hamburger Menu Display On Click

function assembleBurger() {
  $(".hamburger-ingredients-div").slideToggle();
  $(".hamburger-menu").css("width", "7.5em");
  fixedHeader();
}

// Function for fixing header

function fixedHeader() {
  $(".header-blog").toggleClass("header-blog-fix");
  $(".scrolling-text").toggleClass("scrolling-text-fix");
  $(".hamburger-ingredients-div").toggleClass("hamburger-ingredients-fix");
  $(".hamburger-menu").toggleClass("hamburger-menu-fix");
}

// Decoding Binary for About Section

function aboutDecode() {
  $("#about-text-1").addClass("decode1");
  $(".binary").css("display", "none");
}

// Hover Effect for source code btns

var sourceBtn = $(".source-code-btn");

sourceBtn.hover(function(){
  $(this).css("background-color", "var(--primary1)");
  $(this).children('a').css("color", "var(--base3)");
}, function(){
  $(this).css("background-color", "var(--base3)");
  $(this).children('a').css("color", "var(--primary1)");
});

// Slide effect for Workflow text
// put this in for loop later because this is redundant code

$("#about-list-title1").on("click", function() {
  $("#about-list-title1").addClass("title-toggle");
  $("#about-list-title2").removeClass("title-toggle");
  $("#about-list-title3").removeClass("title-toggle");
  $(".about-list-p1").slideToggle()
  $(".about-list-p2").slideUp();
  $(".about-list-p3").slideUp();
})

$("#about-list-title2").on("click", function() {
  $("#about-list-title2").addClass("title-toggle");
  $("#about-list-title1").removeClass("title-toggle");
  $("#about-list-title3").removeClass("title-toggle");
  $(".about-list-p2").slideToggle();
  $(".about-list-p1").slideUp();
  $(".about-list-p3").slideUp();
})

$("#about-list-title3").on("click", function() {
  $("#about-list-title3").addClass("title-toggle");
  $("#about-list-title1").removeClass("title-toggle");
  $("#about-list-title2").removeClass("title-toggle");
  $(".about-list-p3").slideToggle();
  $(".about-list-p1").slideUp();
  $(".about-list-p2").slideUp();
})
