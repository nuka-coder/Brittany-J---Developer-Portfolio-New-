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

// Hide Navbar, Reveal Button
 // function hideNav() {
 //    $("#Navbar").toggleClass("nav-reveal");
 //    $("#Reveal-Btn").toggleClass("reveal-toggle");
 //  }

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
}

// Decoding Binary for About Section

function aboutDecode() {
  $("#about-text-1").addClass("decode1");
  $(".binary").css("display", "none");
}

// Revealing page
var toLoad;
function pageLoading() {
  toLoad = setTimeout(showPage, 1000);
}

function showPage() {
  $("#loading").css("display", "none");
  $("#page").fadeIn("slow");
}
