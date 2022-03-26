

// Revealing page
var toLoad;
function pageLoading() {
  toLoad = setTimeout(showPage, 5000);
}

function showPage() {
  $("#loading").css("display", "none");
  $("#page").css("visibility", "visible");
}

// Page redirects - Project section
// Cycle Hostel
function openCH() {
  window.open("https://github.com/nuka-coder/Cycle-Hostel");
}
// Bareque Cocina
function openBareque() {
  window.open("https://github.com/nuka-coder/Bareque-Cocina-Restaurant-NukaFork");
}
// Github Button
function openGithub() {
  window.open("https://github.com/nuka-coder");
}

// Modal reveals

function revealModal1() {
  $(".modal1").css("display", "flex");
}
function revealModal2() {
  $(".modal2").css("display", "flex");
}
function revealModal3() {
  $(".modal3").css("display", "flex");
}

// Modal close
  $(".modal").on("click", function() {
    $(".modal").css("display", "none");
  });

// Design Modals

$(".design-links").on("click", revealDesign());

function revealDesign() {

  const design1 = $(".design1");
  const design2 = $(".design2");
  const design3 = $(".design3");

  design1.on("click", function() {
    $(".design-modal1").css("display", "flex");
  });

  design2.on("click", function() {
    $(".design-modal2").css("display", "flex");
  });

  design3.on("click", function() {
    $(".design-modal3").css("display", "flex");
  });

}

// Navbar //

var navbar = document.getElementById("Navbar");
var navRevealBtn = document.getElementById("Reveal-Btn");
var lowerHeader = document.querySelector(".lower-header");

// Reveal Navbar
function revealNavbar(e) {
   navbar.classList.toggle("nav-reveal");
   //toggles visibility of nav btn
   navRevealBtn.classList.toggle("reveal-toggle");
   //e.preventDefault();
 }

// Navbar Fixed on scroll
//
// var elementPosition = $('#Nav-Section').offset();
// $(window).scroll(function(){
//         if($(window).scrollTop() > elementPosition.top){
//               $('#Nav-Section').css('position','fixed');
//               $('#Nav-Section').css('top','8%');
//         } else {
//             $('#Nav-Section').css('position','absolute');
//         }
// });

// Hamburger Menu Display On Click

function assembleBurger() {
  $(".hamburger-ingredients-div").slideToggle();
  fixedHeader();
  $(".nav-section").toggleClass("nav-section-hide");
}

// Function for fixing header

function fixedHeader() {
  $(".header-blog").toggleClass("header-blog-fix");
  $(".scrolling-text").toggleClass("scrolling-text-fix");
  $(".hamburger-ingredients-div").toggleClass("hamburger-ingredients-fix");
  $(".hamburger-menu").toggleClass("hamburger-menu-fix");
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
// Mobile workflow text click listeners
function revealWorkflowText1() {
  $(".workflow-text1").slideToggle();
}
function revealWorkflowText2() {
  $(".workflow-text2").slideToggle();
  $(".design-examples-mobile").slideToggle();
}
function revealWorkflowText3() {
  $(".workflow-text3").slideToggle();
}

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
