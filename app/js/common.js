$(function() {

$(".preloader").delay(1000).fadeOut();

new WOW().init();
//------------------------------гамбургер-----------------------------
$('.hamburger--3dx').click(function() {
  $(this).toggleClass('is-active');
  $('.header__nav').toggleClass('header__nav-active');
  $('.header__top').toggleClass('header__top-menu');
});

//------------------------text---------------------------------------

$(".text").on("click", function(){
  if ($(this).hasClass('text-active')) {
    $(this).removeClass('text-active');
    $(".text i").removeClass('active');
  }
  else {
    $(this).addClass('text-active');
     $(".text i").addClass('active');
  }
});

//-------------------------скорость якоря---------------------------------------
  $(".header__nav_list").on("click","a", function (event) {
      event.preventDefault();
      var id  = $(this).attr('href'),
          top = $(id).offset().top;
      $('body,html').animate({scrollTop: top - 90}, 'slow', 'swing');

      $('.hamburger--3dx').removeClass('is-active');
      $('.header__top').removeClass('header__top-menu');
      $('.header__nav').removeClass('header__nav-active');
  });

//------------------------slick-------------------------------
$('.slider').slick({
  infinite: true,
  speed: 300,
  slidesToScroll: 1,
  dots: true,
  slidesToShow: 2,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        dots: true
      }
    }
  ]
});

//-------------------------------попандер---------------------------------------
  $('.modal').popup({transition: 'all 0.3s'});

//------------------------------------form-------------------------------------------
	$('input[type="tel"]').mask('+0 (000) 000-00-00');

	jQuery.validator.addMethod("phoneno", function(phone_number, element) {
	   return this.optional(element) || phone_number.match(/\+[0-9]{1}\s\([0-9]{3}\)\s[0-9]{3}-[0-9]{2}-[0-9]{2}/);
	}, "Enter your phone number");


  $(".header-form").validate({
    messages: {
      name: "Enter your Name",
      phone: "Enter your phone number",
    },
    rules: {
      "phone": {
        required: true,
        phoneno: true
      }
    },
    submitHandler: function(form) {
      var t = {
        name: jQuery(".header-form").find("input[name=name]").val(),
        phone: jQuery(".header-form").find("input[name=phone]").val(),
        subject: jQuery(".header-form").find("input[name=subject]").val()
      };
      ajaxSend('.header-form', t);
    }
  });

  $(".auction-form").validate({
    messages: {
      name: "Enter your Name",
      phone: "Enter your phone number",
    },
    rules: {
      "phone": {
        required: true,
        phoneno: true
      }
    },
    submitHandler: function(form) {
      var t = {
        name: jQuery(".auction-form").find("input[name=name]").val(),
        phone: jQuery(".auction-form").find("input[name=phone]").val(),
        subject: jQuery(".auction-form").find("input[name=subject]").val()
      };
      ajaxSend('.auction-form', t);
    }
  });


  $(".work-form").validate({
    messages: {
      name: "Enter your Name",
      phone: "Enter your phone number",
    },
    rules: {
      "phone": {
        required: true,
        phoneno: true
      }
    },
    submitHandler: function(form) {
      var t = {
        name: jQuery(".work-form").find("input[name=name]").val(),
        phone: jQuery(".work-form").find("input[name=phone]").val(),
        subject: jQuery(".work-form").find("input[name=subject]").val()
      };
      ajaxSend('.work-form', t);
    }
  });

  $(".consultation-form").validate({
    messages: {
      name: "Enter your Name",
      phone: "Enter your phone number",
    },
    rules: {
      "phone": {
        required: true,
        phoneno: true
      }
    },
    submitHandler: function(form) {
      var t = {
        name: jQuery(".consultation-form").find("input[name=name]").val(),
        phone: jQuery(".consultation-form").find("input[name=phone]").val(),
        subject: jQuery(".consultation-form").find("input[name=subject]").val()
      };
      ajaxSend('.consultation-form', t);
    }
  });

  $(".popular-form").validate({
    messages: {
      name: "Enter your Name",
      phone: "Enter your phone number",
    },
    rules: {
      "phone": {
        required: true,
        phoneno: true
      }
    },
    submitHandler: function(form) {
      var t = {
        name: jQuery(".popular-form").find("input[name=name]").val(),
        phone: jQuery(".popular-form").find("input[name=phone]").val(),
        subject: jQuery(".popular-form").find("input[name=subject]").val()
      };
      ajaxSend('.popular-form', t);
    }
  });

  $(".family-form").validate({
    messages: {
      name: "Enter your Name",
      phone: "Enter your phone number",
    },
    rules: {
      "phone": {
        required: true,
        phoneno: true
      }
    },
    submitHandler: function(form) {
      var t = {
        name: jQuery(".family-form").find("input[name=name]").val(),
        phone: jQuery(".family-form").find("input[name=phone]").val(),
        subject: jQuery(".family-form").find("input[name=subject]").val()
      };
      ajaxSend('.family-form', t);
    }
  });

  $(".luxurious-form").validate({
    messages: {
      name: "Enter your Name",
      phone: "Enter your phone number",
    },
    rules: {
      "phone": {
        required: true,
        phoneno: true
      }
    },
    submitHandler: function(form) {
      var t = {
        name: jQuery(".luxurious-form").find("input[name=name]").val(),
        phone: jQuery(".luxurious-form").find("input[name=phone]").val(),
        subject: jQuery(".luxurious-form").find("input[name=subject]").val()
      };
      ajaxSend('.luxurious-form', t);
    }
  });

  $(".children-form").validate({
    messages: {
      name: "Enter your Name",
      phone: "Enter your phone number",
    },
    rules: {
      "phone": {
        required: true,
        phoneno: true
      }
    },
    submitHandler: function(form) {
      var t = {
        name: jQuery(".children-form").find("input[name=name]").val(),
        phone: jQuery(".children-form").find("input[name=phone]").val(),
        subject: jQuery(".children-form").find("input[name=subject]").val()
      };
      ajaxSend('.children-form', t);
    }
  });

  $(".offers-form").validate({
    messages: {
      name: "Enter your Name",
      phone: "Enter your phone number",
    },
    rules: {
      "phone": {
        required: true,
        phoneno: true
      }
    },
    submitHandler: function(form) {
      var t = {
        name: jQuery(".offers-form").find("input[name=name]").val(),
        phone: jQuery(".offers-form").find("input[name=phone]").val(),
        subject: jQuery(".offers-form").find("input[name=subject]").val()
      };
      ajaxSend('.offers-form', t);
    }
  });

  $(".offers2-form").validate({
    messages: {
      name: "Enter your Name",
      phone: "Enter your phone number",
    },
    rules: {
      "phone": {
        required: true,
        phoneno: true
      }
    },
    submitHandler: function(form) {
      var t = {
        name: jQuery(".offers-form").find("input[name=name]").val(),
        phone: jQuery(".offers-form").find("input[name=phone]").val(),
        subject: jQuery(".offers-form").find("input[name=subject]").val()
      };
      ajaxSend('.offers-form', t);
    }
  });

  $(".center-one-form").validate({
    messages: {
      name: "Enter your Name",
      phone: "Enter your phone number",
    },
    rules: {
      "phone": {
        required: true,
        phoneno: true
      }
    },
    submitHandler: function(form) {
      var t = {
        name: jQuery(".center-one-form").find("input[name=name]").val(),
        phone: jQuery(".center-one-form").find("input[name=phone]").val(),
        subject: jQuery(".center-one-form").find("input[name=subject]").val()
      };
      ajaxSend('.center-one-form', t);
    }
  });

  $(".center-two-form").validate({
    messages: {
      name: "Enter your Name",
      phone: "Enter your phone number",
    },
    rules: {
      "phone": {
        required: true,
        phoneno: true
      }
    },
    submitHandler: function(form) {
      var t = {
        name: jQuery(".center-two-form").find("input[name=name]").val(),
        phone: jQuery(".center-two-form").find("input[name=phone]").val(),
        subject: jQuery(".center-two-form").find("input[name=subject]").val()
      };
      ajaxSend('.center-two-form', t);
    }
  });


  $(".center-three-form").validate({
    messages: {
      name: "Enter your Name",
      phone: "Enter your phone number",
    },
    rules: {
      "phone": {
        required: true,
        phoneno: true
      }
    },
    submitHandler: function(form) {
      var t = {
        name: jQuery(".center-three-form").find("input[name=name]").val(),
        phone: jQuery(".center-three-form").find("input[name=phone]").val(),
        subject: jQuery(".center-three-form").find("input[name=subject]").val()
      };
      ajaxSend('.center-three-form', t);
    }
  });

  $(".center-four-form").validate({
    messages: {
      name: "Enter your Name",
      phone: "Enter your phone number",
    },
    rules: {
      "phone": {
        required: true,
        phoneno: true
      }
    },
    submitHandler: function(form) {
      var t = {
        name: jQuery(".center-four-form").find("input[name=name]").val(),
        phone: jQuery(".center-four-form").find("input[name=phone]").val(),
        subject: jQuery(".center-four-form").find("input[name=subject]").val()
      };
      ajaxSend('.center-four-form', t);
    }
  });
	
  function ajaxSend(formName, data) {
    jQuery.ajax({
      type: "POST",
      url: "sendmail.php",
      data: data,
      success: function() {
        $(".modal").popup("hide");
        $("#thanks").popup("show");
        setTimeout(function() {
          $(formName).trigger('reset');
        }, 2000);
      }
    });
  }

//----------------------------------------fixed----------------------------------
$(window).scroll(function(){
    if($(this).scrollTop()>5){
        $('.header__top').addClass('header__top-active');
    }
    else if ($(this).scrollTop()<5){
        $('.header__top').removeClass('header__top-active');
    }
});

});

