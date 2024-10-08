let passwordInput = document.getElementById("txtPassword"),
  toggle = document.getElementById("btnToggle"),
  icon = document.getElementById("eyeIcon");

$("#btnToggle").on("click", function () {
  if (passwordInput.type === "password") {
    passwordInput.type = "text";
    icon.classList.add("fa-eye-slash-icon");
    //toggle.innerHTML = 'hide';
  } else {
    passwordInput.type = "password";
    icon.classList.remove("fa-eye-slash-icon");
    //toggle.innerHTML = 'show';
  }
});

//toggle.addEventListener('click', togglePassword, true);
// passwordInput.addEventListener('keyup', checkInput, false);

function moveToNext(current, nextFieldID) {
  if (current.value.length === current.maxLength) {
    document.getElementById(nextFieldID).focus();
  }
}

function moveToPrevious(event, prevFieldID) {
  if (event.key === "Backspace" && !event.target.value) {
    document.getElementById(prevFieldID).focus();
  }
}

$(".net-banking").on("click", function () {
  // $(".net-banking .form-check-input").attr("checked", false);
  $(".net-banking").removeClass("activeProduct");
  $(this).addClass("activeProduct");
  // $(".net-banking .form-check-input").attr("checked", true);
  // $(".grayNone").hide()
  // $(".activeNone").show()

  // $(".bank-building").css("color", "#0D9161 !important");
});

// $("#nextButton").on("click", function() {

//     $(".select-schedule").click();
// })

$(document).ready(function () {
  $(".read-more").click(function (e) {
    e.preventDefault();

    $(".text-block").slideToggle();

    var text = $(this).text();
    $(this).text(text == "Show Less" ? "Show More" : "Show Less");
  });

  $(".imgBox").on("click", function () {
    $(".imgBox img").toggleClass("rotateImg180");
  });
});

// $(document).ready(function() {
//     // $(".menu-button").click(function () {
//     //     $(".menu-bar").toggleClass("open");
//     //     $(".leftmenu").toggleClass("openmenu");
//     // })
//     let appendEntries = $(".appendEntries");
//     console.log(appendEntries);

//     $(".tableShowEntries .dt-length").appendTo(appendEntries);
// })

// function showPanel() {

//     $(".showPanleDiv").show();

// }

var i = 0;

function move() {
  if (i == 0) {
    i = 1;
    var elem = document.getElementById("myBar");
    var width = 1;
    var id = setInterval(frame, 10);

    function frame() {
      if (width >= 100) {
        clearInterval(id);
        i = 0;
      } else {
        width++;
        elem.style.width = width + "%";
      }
    }
  }
}

$(".bg-accept").on("click", function () {
  $("#profile-tab").click();
});

$(".bg-accept2").on("click", function () {
  $("#contact-tab").click();
});

$("#dropdown").on("click", function () {
  $(this).toggleClass("active");
  $(".right-dropdown").toggleClass("toggle-class");
  $(".right-icon").toggleClass("activeClass");
});

// function dropdown() {

//     document.getElementById("imgactive").style.display = "inline-block";
//     document.getElementById("hideClick").style.display = "none";

// }

$(".send-otp-phone-number").on("click", function () {
  $(".show-input").show();
});
$(".send-otp").on("click", function () {
  $(".right-otp").show();
});

const menuButton = document.querySelector(".right-icon");
const menu = document.querySelector(".right-dropdown");

document.addEventListener("click", (event) => {
  if (!menu.contains(event.target) && !menuButton.contains(event.target)) {
    menu.classList.remove("toggle-class");
    $(".right-icon img").removeClass("activeClass");
    $(".right-icon").removeClass("activeClass");
    $("#dropdown").removeClass("active");
  }
});

$(document).ready(function () {
  $(".leftnav").click(function () {
    $(".menu-bar").toggleClass("open");
    $(".leftmenu").toggleClass("openmenu");
  });
});

$(document).click(function (e) {
  var container = $(".menu-button, .leftnav");
  if (
    !container.is(e.target) && // if the target of the click isn't the container...
    container.has(e.target).length === 0
  ) {
    // ... nor a descendant of the container
    $(".menu-bar").removeClass("open");
    $(".leftmenu").removeClass("openmenu");
  }
});
$(function () {
  $('[data-bs-toggle="tooltip"]').tooltip();
});

$(".dropdown").hover(function () {
  $(".dropdown-toggle", this).trigger("click");
});
