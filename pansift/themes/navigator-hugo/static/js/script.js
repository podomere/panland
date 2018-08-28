

(function ($) { "use strict";

  /* ========================================================================= */
  /*	Page Preloader
  /* ========================================================================= */

  // window.load = function () {
  // 	document.getElementById('preloader').style.display = 'none';
  // }

  /* $(window).on("load",function(){
     $('#preloader').fadeOut('slow',function(){$(this).remove();});
     }); */

  /* ========================================================================= */
  /*	Portfolio Filtering Hook
  /* =========================================================================  */
  /* $('.play-icon i').click(function() {
     var video = '<iframe allowfullscreen src="' + $(this).attr('data-video') + '"></iframe>';
     $(this).replaceWith(video);
     }); */

  /* ========================================================================= */
  /*	Portfolio Filtering Hook
  /* =========================================================================  */

  /* var portfolio_item = $('.portfolio-items-wrapper');
     if (portfolio_item.length) {
     var mixer = mixitup(portfolio_item);
     }; */


  /* ========================================================================= */
  /*	Testimonial Carousel
  /* =========================================================================  */

  //Init the slider
  /* $('.testimonial-slider').slick({
     slidesToShow: 2,
     slidesToScroll: 1,
     infinite: true,
     arrows:false,
     autoplay: true,
     autoplaySpeed: 2000,
     responsive: [
     {
     breakpoint: 600,
     settings: {
     slidesToShow: 1,
     slidesToScroll: 2
     }
     },
     {
     breakpoint: 480,
     settings: {
     slidesToShow: 1,
     slidesToScroll: 1
     }
     }
     ]
     }); */


  /* ========================================================================= */
  /*	Clients Slider Carousel
  /* =========================================================================  */

  //Init the slider
  /*$('.clients-logo-slider').slick({
    infinite: true,
    arrows:false,
    autoplay: true,
    autoplaySpeed: 2000,
    slidesToShow: 5,
    slidesToScroll: 1,
    });*/




  /* ========================================================================= */
  /*	Company Slider Carousel
  /* =========================================================================  */
  /*$('.company-gallery').slick({
    infinite: true,
    arrows:false,
    autoplay: true,
    autoplaySpeed: 2000,
    slidesToShow: 5,
    slidesToScroll: 1,
    });*/


  /* ========================================================================= */
  /*	Awars Counter Js
  /* =========================================================================  */
  /*$('.counter').each(function() {
    var $this = $(this),
    countTo = $this.attr('data-count');

    $({ countNum: $this.text()}).animate({
    countNum: countTo
    },

    {

    duration: 1500,
    easing:'linear',
    step: function() {
    $this.text(Math.floor(this.countNum));
    },
    complete: function() {
    $this.text(this.countNum);
  //alert('finished');
  }

  });  



  }); */




  /* ========================================================================= */
  /*   Contact Form Validating
  /* ========================================================================= */


  /*$('#contact-submit').click(function (e) { */

  //stop the form from being submitted
  //e.preventDefault();

  /* declare the variables, var error is the variable that we use on the end
     to determine if there was an error or not */
  /*var error = false;
    var name = $('#name').val();
    var email = $('#email').val();
    var subject = $('#subject').val();
    var message = $('#message').val(); */

  /* in the next section we do the checking by using VARIABLE.length
     where VARIABLE is the variable we are checking (like name, email),
     length is a JavaScript function to get the number of characters.
     And as you can see if the num of characters is 0 we set the error
     variable to true and show the name_error div with the fadeIn effect. 
     if it's not 0 then we fadeOut the div( that's if the div is shown and
     the error is fixed it fadesOut. 

     The only difference from these checks is the email checking, we have
     email.indexOf('@') which checks if there is @ in the email input field.
     This JavaScript function will return -1 if no occurrence have been found.*/
  /*if (name.length == 0) {
    var error = true;
    $('#name').css("border-color", "#D8000C");
    } else {
    $('#name').css("border-color", "#666");
    }
    if (email.length == 0 || email.indexOf('@') == '-1') {
    var error = true;
    $('#email').css("border-color", "#D8000C");
    } else {
    $('#email').css("border-color", "#666");
    }
    if (subject.length == 0) {
    var error = true;
    $('#subject').css("border-color", "#D8000C");
    } else {
    $('#subject').css("border-color", "#666");
    }
    if (message.length == 0) {
    var error = true;
    $('#message').css("border-color", "#D8000C");
    } else {
    $('#message').css("border-color", "#666");
    }*/

  //now when the validation is done we check if the error variable is false (no errors)
  /*if (error == false) {
  //disable the submit button to avoid spamming
  //and change the button text to Sending...
  $('#contact-submit').attr({
  'disabled': 'false',
  'value': 'Sending...'
  });*/

  /* using the jquery's post(ajax) function and a lifesaver
     function serialize() which gets all the data from the form
     we submit it to send_email.php */
  /*$.post("sendmail.php", $("#contact-form").serialize(), function (result) {
  //and after the ajax request ends we check the text returned
  if (result == 'sent') {
  //if the mail is sent remove the submit paragraph
  $('#cf-submit').remove();
  //and show the mail success div with fadeIn
  $('#mail-success').fadeIn(500);
  } else {
  //show the mail failed div
  $('#mail-fail').fadeIn(500);
  //re enable the submit button by removing attribute disabled and change the text back to Send The Message
  $('#contact-submit').removeAttr('disabled').attr('value', 'Send The Message');
  }
  });
  }
  }); */


  /* ========================================================================= */
  /*	On scroll fade/bounce effect
  /* ========================================================================= */
  /* var scroll = new SmoothScroll('a[href*="#"]'); */

  /* ========================================================================= */
  /*	Header Scroll Background Change
  /* ========================================================================= */	

  $(window).scroll(function() {    
    var scroll = $(window).scrollTop();
    //console.log(scroll);
    if (scroll > 200) {
      //console.log('a');
      $(".navigation").addClass("sticky-header");
    } else {
      //console.log('a');
      $(".navigation").removeClass("sticky-header");
    }});

  /* ========================================================================= */
  /*	if Video is present?
  /* ========================================================================= */	

  // NOTE ABOUT USING THE NATIVE JAVASCRIPT VERSUS JQUERY LENGTH CHECKS AS IOS8 BUG FOR LENGTH


  if(document.getElementById("video-js") !== null){
  //if ($('.video-js').length) {
    setTimeout(function(){ 
      $('.video-js')[0].player.on('ended', function() {
        dataLayer.push({'event': 'finished_watching_explainer', 'category':'Visitor', 'action':'Video Watched', 'label':'Video','value':'1'})
      });
      $('.video-js')[0].player.on('play', function() {
        dataLayer.push({'event': 'started_watching_explainer', 'category':'Visitor', 'action':'Video Played', 'label':'Video','value':'1'})
      });
      var overlay_content = '<div><h3><a style="text-align: center; font-weight: bold; color: white !important;" href="https://client.pansift.com/clients/sign_up">No credit card required.<br> Try a quick test flight !</a></h3></div>';
      $('.video-js')[0].player.overlay({
        overlays: [{
                    start: 'pause',
        content: overlay_content,
        end: 'playing',
        align: 'top'
                  }, {
                    start: '59',
        content: overlay_content,
        end: '61',
        align: 'top'
                  }]
      });
    }, 1000);
  }

  if(document.getElementById("mapid") !== null){
  //if ($('#mapid').length) {
    var mymap = null;
    var  mymap = L.map('mapid',{zoomControl: false, minZoom: 2, maxZoom: 2, zoom: 2}).setView([53, 6], 2);
    L.tileLayer('https://api.mapbox.com/styles/v1/pansift/cjj4p9yei4ig22srzi0315fpm/tiles/256/{z}/{x}/{y}?access_token=pk.eyJ1IjoicGFuc2lmdCIsImEiOiJjamo0NTZmcGUxZ2d1M2txZzFlYWFzcWF5In0.SP3kz57m0HFfNU_EubbMYA').addTo(mymap);
    function new_challenge(lat,lng) {
      var popup = L.popup({closeButton:false})
        .setLatLng([lat, lng])
        .setContent("<center><b>Practice Simulation Taken</b></center>")
        .openOn(mymap);
      L.marker([lat, lng], {zIndexOffset: 1000}).addTo(mymap);
    }
    $.get("https://sim.pansift.com/pracsimlocs?max=1000", function(data, status, xhr){
      // console.log(data);
      // console.log(xhr.status);
      if (data !== undefined && Array.isArray(data) && xhr.status === 200){
        var numData = data.length;
        var halfData = Math.floor(numData/2)
      // console.log(numData);
      var index = 0;
    for (index = 0; index < Math.floor(data.length/2); index++) {
      var lat = data[index].split(',')[0];
      var lng = data[index].split(',')[1];
      L.marker([lat, lng], {opacity: 0.7}).addTo(mymap);
    }
    var secondindex = halfData;
    setInterval(function() {
      var lat = data[secondindex].split(',')[0];
      var lng = data[secondindex].split(',')[1];
      new_challenge(lat,lng);
      // console.log(data[index]);
      secondindex = (secondindex + 1) % (numData);
    }, (Math.floor(Math.random() * (10000 - 4000 + 1) + 4000)));
      }
    });
  }

  if(document.getElementById("aa-input-container") !== null){
  //if ($('#aa-input-container').length) {
    var al_client = algoliasearch('AJV2LM71WS', 'afe14bbaabe07eb4792c82ca6bda3449');
    var al_index = al_client.initIndex('Skill');
    //initialize autocomplete on search input (ID selector must match)

    function al_autocomplete(){
      autocomplete('#aa-search-input',
          { hint: false }, {
                             source: autocomplete.sources.hits(al_index, {hitsPerPage: 7}),
        //value to be displayed in input control after user's suggestion selection
        displayKey: 'name',
        //hash of templates used when rendering dataset
        templates: {
          //'suggestion' templating function used to render a single suggestion
          suggestion: function(suggestion) {
                        return '<span>' +
        suggestion._highlightResult.name.value +'</span><span class="label label-success pull-right">Available</span>';
                      }
        }
                           }).on('autocomplete:selected', function(event, suggestion, dataset) {
        location.href = "https://client.pansift.com/clients/sign_up";
      });;
    }
    al_autocomplete();
  }

  if(document.getElementById("number_of_agents") !== null){
  // if ($('#number_of_agents').length) {

    function calculate_total_costs() {

      var agent_cost = (sliderFormat.noUiSlider.get() - 1) * 99;
      var excess_screens = sliderFormatScreens.noUiSlider.get() - ((sliderFormat.noUiSlider.get() - 1) * 50);
      var excess_screens = excess_screens < 0 ? 0 : excess_screens;
      var number_of_a_packs = 0;
      var cost_of_a_packs = 99;
      var number_of_b_packs = 0;
      var cost_of_b_packs = 49;
      var cost_of_c_packs = 29;
      var number_of_e_packs = 0;
      var cost_of_e_packs = 169;
      var b_remainder = 0;
      var c_remainder = 0;
      var a_remainder = 0;
      var e_remainder = excess_screens % 100;

      if (e_remainder >= 0 ) {
        var number_of_e_packs = Math.floor(excess_screens / 100);
      }
      if (e_remainder >= 0 && e_remainder % 50 >= 0) {
        var number_of_a_packs = Math.floor(e_remainder / 50);
        var a_remainder = e_remainder % 50;
      }
      if (a_remainder >= 0 && a_remainder % 20 >= 0) {
        var number_of_b_packs = Math.floor(a_remainder / 20);
        var b_remainder = a_remainder % 20;
      }
      if (a_remainder >= 0 && a_remainder % 20 >= 0 && b_remainder % 20 >= 0) {
        var c_remainder = Math.floor(b_remainder / 10);
      }
      var total_cost = agent_cost + (number_of_a_packs * cost_of_a_packs) + (number_of_b_packs * cost_of_b_packs) + (c_remainder * cost_of_c_packs) + (number_of_e_packs * cost_of_e_packs);
      $('#total_cost').text(total_cost + '€ p/m');
    }

    var sliderFormatScreens = document.getElementById('slider-format-screens');
    noUiSlider.create(sliderFormatScreens, {
      start: [ 0 ],
      connect: [true, false],
      step: 10,
      range: {
        'min': [ 0 ],
      'max': [ 1100 ]
      },
      format: wNumb({
                decimals: 0
              })
    });
    var inputFormatScreens = document.getElementById('input-format-screens');
    sliderFormatScreens.noUiSlider.on('update', function( screenvalues, screenhandle ) {
      inputFormatScreens.value = screenvalues[screenhandle];
    });

    inputFormatScreens.addEventListener('change', function(){
      sliderFormatScreens.noUiSlider.set(this.value);
      calculate_total_costs();
    });

    var sliderFormat = document.getElementById('slider-format');
    noUiSlider.create(sliderFormat, {
      start: [ 1 ],
      connect: [true, false],
      step: 1,
      range: {
        'min': [ 1 ],
      'max': [ 10 ]
      },
      format: wNumb({
                decimals: 0
              })
    });

    var inputFormat = document.getElementById('input-format');
    sliderFormat.noUiSlider.on('update', function( values, handle ) {
      inputFormat.value = values[handle];
    });
    inputFormat.addEventListener('change', function(){
      sliderFormat.noUiSlider.set(this.value);
      calculate_total_costs();
    });

    function crossUpdate ( value, slider ) {
      // Set the value
      slider.noUiSlider.set((value-1)*50);
    }
    sliderFormat.noUiSlider.on('slide', function( values, handle ){
      crossUpdate(values[handle], sliderFormatScreens);
      calculate_total_costs();
    });
    sliderFormatScreens.noUiSlider.on('slide', function ( handle, values) {
      calculate_total_costs();
    });  
  }

})(jQuery);

function secondstage (field_id) {
  var try_email = document.getElementById(field_id).value;
  dataLayer.push({'event': 'client_pre_signup', 'ecategory':'client_pre_signup', 'eaction':'client_pre_signup'});
  document.location = "https://client.pansift.com/clients/sign_up?try_email="+try_email;
}



