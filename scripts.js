

// Revealing page
var toLoad;
function pageLoading() {
  toLoad = setTimeout(showPage, 1000);
}

function showPage() {
  $("#loading").css("display", "none");
  $("#page").fadeIn("slow");
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
        } else {
            $('#Nav-Section').css('position','absolute');
        }
});

// Hamburger Menu Display On Click

function assembleBurger() {
  $(".hamburger-ingredients-div").slideToggle();
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
