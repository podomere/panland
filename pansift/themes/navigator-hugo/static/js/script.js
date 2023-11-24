(function ($) { 

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
  /*	if Video is present?
  /* ========================================================================= */	

  // NOTE ABOUT USING THE NATIVE JAVASCRIPT VERSUS JQUERY LENGTH CHECKS AS IOS8 BUG FOR LENGTH


  if(document.getElementsByClassName("video-js") !== null && $('.video-js')[0] !== undefined ){
    //if ($('.video-js').length) {
    setTimeout(function(){
      $('.video-js')[0].player.on('ended', function() {
				dataLayer.push({'event': 'finished_watching_explainer', 'category':'Visitor', 'action':'Video Watched', 'label':'Video','value':'1'});
				posthog.capture('finished_watching_explainer');
      });
      $('.video-js')[0].player.on('play', function() {
			dataLayer.push({'event': 'started_watching_explainer', 'category':'Visitor', 'action':'Video Played', 'label':'Video','value':'1'});
				posthog.capture('started_watching_explainer');
      });
      var overlay_content = '<div class="col-12 justify-content-center align-items-center"><a target="_blank" rel="nofollow" href="https://app.pansift.com/demo?first_insight=true"><div style="font-size: 4em; font-weight: bold; color: white !important;" class="btn btn-lg btn-success">See a Live Insight <i class="far fa-arrow-alt-circle-right"></i></div></a>';
      $('.video-js')[0].player.overlay({
        overlays: [{
                    start: 'pause',
        content: overlay_content,
        end: 'playing',
        align: 'top'
                  }, {
                    start: '150',
        content: overlay_content,
        end: '155',
        align: 'top'
                  }]
      });
    }, 1000);
  }

  if(document.getElementById("mapid") !== null){
    var mymap = null;
    var  mymap = L.map('mapid',{attributionControl:false, zoomControl: false, minZoom: 2, maxZoom: 2, zoom: 2}).setView([43, -41], 2);
    L.tileLayer('https://api.mapbox.com/styles/v1/pansift/cjj4p9yei4ig22srzi0315fpm/tiles/256/{z}/{x}/{y}?access_token=pk.eyJ1IjoicGFuc2lmdCIsImEiOiJjamo0NTZmcGUxZ2d1M2txZzFlYWFzcWF5In0.SP3kz57m0HFfNU_EubbMYA').addTo(mymap);
    function getRandomInRange(from, to, fixed) {
      return (Math.random() * (to - from) + from).toFixed(fixed) * 1;
      // .toFixed() returns string, so ' * 1' is a trick to convert to number
    }
    //console.log(champions);
    var champions_v4 = [["37.7510","-97.8220"],["60.1708","24.9375"],["50.9171","-1.4248"],["45.5312","-73.5863"],["34.0322","-118.2836"],["41.8777","-87.6376"],["45.0524","9.6934"],["39.9881","-83.0479"],["41.6868","-81.3399"],["43.1061","-75.2336"],["33.1669","-87.5064"],["42.6660","-88.2749"],["38.8152","-104.7703"],["37.7506","-122.4121"],["40.6799","-74.0028"],["39.1642","-84.2356"],["30.2444","-97.9160"],["33.9339","-117.8854"],["20.7441","-156.4475"],["26.9167","75.8167"],["34.6940","134.9122"],["43.1402","-77.2858"],["-6.1750","106.8286"],["40.7565","-96.6946"],["-37.8514","144.9984"],["55.7527","37.6172"],["40.6799","-74.0028"],["37.7562","-122.4866"],["48.9052","2.8124"],["20.0000","77.0000"],["-20.7028","-44.1069"],["43.0268","-76.0145"],["36.3066","-86.6101"],["40.2363","-75.2960"],["35.3407","-119.0596"],["-31.9633","115.8608"],["51.6520","-0.1943"],["-37.8632","145.0017"],["48.8582","2.3387"],["40.9992","28.8343"],["45.5413","8.8489"],["37.7510","-97.8220"],["48.6700","21.3175"],["33.5210","-86.8066"],["37.7510","-97.8220"],["42.5219","-83.2519"],["37.7510","-97.8220"],["48.8582","2.3387"],["40.6801","-73.9847"],["42.3502","-3.6753"],["39.0452","-94.7189"],["53.3500","-1.5500"],["50.8451","4.3557"],["51.2993","9.4910"],["35.1287","-80.9338"],["37.7510","-97.8220"],["41.4515","2.2081"],["43.9233","-78.8684"],["59.3307","18.0718"],["41.0180","28.9745"],["4.4126","-76.1546"],["35.2100","-80.8512"],["42.8444","-78.8149"],["48.2000","16.3667"],["42.0048","-87.9954"],["41.4866","-81.8037"],["43.7746","-88.4376"],["33.1053","6.0580"],["24.4798","118.0819"],["47.6335","7.6922"],["43.6190","6.7750"],["32.3383","-111.0455"],["34.0372","-4.9998"],["35.6900","139.6900"],["43.6469","-79.4521"],["45.9714","13.6494"],["52.1491","4.7740"],["42.4638","-123.3464"],["27.9865","-82.0139"],["48.8543","2.3527"],["42.1329","-85.6637"],["34.4143","115.6561"],["38.9091","-77.0203"],["57.2500","22.6000"],["45.8303","1.2549"],["37.7510","-97.8220"],["-19.8975","-43.9625"],["37.7510","-97.8220"],["32.8252","-96.8388"],["66.0833","60.1333"],["-33.7535","150.9820"],["25.0478","121.5318"],["55.6939","-3.7206"],["33.9924","-118.3991"],["40.7428","-73.9712"],["31.3041","120.5954"],["23.5000","121.0000"],["45.7083","16.3969"],["44.5316","-122.8821"],["33.1974","-96.6177"]];
    var champions_v6 = [["-34.0000","-64.0000"],["37.7510","-97.8220"],["37.7510","-97.8220"],["40.6805","-73.8442"],["37.7510","-97.8220"],["37.7510","-97.8220"],["28.6623","-81.4136"],["26.2937","-98.3008"],["37.7510","-97.8220"],["54.0000","-2.0000"],["39.7886","-85.9779"],["26.1486","-80.2768"],["37.7510","-97.8220"],["42.3673","-83.1329"],["37.7510","-97.8220"],["37.7510","-97.8220"],["-27.6153","-48.4958"],["51.5064","-0.0200"],["37.7510","-97.8220"],["-34.0000","-64.0000"],["37.7510","-97.8220"],["39.7593","-104.9651"],["40.3901","-77.8637"],["33.8333","35.8333"],["33.7746","-84.3973"],["47.7684","-122.1271"],["42.8333","12.8333"],["39.6591","-87.4208"],["44.2051","27.3136"],["37.7510","-97.8220"],["37.7510","-97.8220"],["37.7510","-97.8220"],["37.7510","-97.8220"],["51.0000","9.0000"],["49.5667","13.3167"],["37.7510","-97.8220"],["37.7510","-97.8220"],["47.0000","8.0000"],["30.2642","-93.3265"],["43.1818","-89.4532"],["-10.0000","-55.0000"],["37.7510","-97.8220"],["20.0000","77.0000"],["29.7388","-95.8309"],["37.7510","-97.8220"],["37.7510","-97.8220"],["37.7510","-97.8220"],["37.7510","-97.8220"],["35.0388","137.1197"],["50.1333","14.6667"],["35.9825","-78.5376"],["-19.2634","146.8059"],["37.7510","-97.8220"],["19.0000","-70.6667"],["37.7510","-97.8220"],["37.7510","-97.8220"],["21.8734","-102.2806"],["37.7510","-97.8220"],["52.1166","5.0776"],["37.7510","-97.8220"],["46.9583","7.5251"],["37.7510","-97.8220"],["37.7510","-97.8220"],["37.7510","-97.8220"],["37.7510","-97.8220"],["33.8336","-84.3797"],["60.4108","25.0038"],["46.0000","2.0000"],["39.0000","35.0000"],["60.3930","5.3242"],["51.5064","-0.0200"],["37.7510","-97.8220"],["48.7677","7.2582"],["61.0137","24.4310"],["37.7510","-97.8220"],["42.9051","-82.5679"],["37.7510","-97.8220"],["37.7510","-97.8220"],["35.1864","-86.1130"],["51.0000","9.0000"],["26.1166","-80.3192"],["37.7510","-97.8220"],["37.7510","-97.8220"],["37.7510","-97.8220"],["37.7510","-97.8220"],["46.0898","8.9176"],["-10.0000","-55.0000"],["39.1193","-121.0938"],["37.7510","-97.8220"],["37.7510","-97.8220"],["49.7500","15.5000"],["47.0000","8.0000"],["38.0389","-122.5871"],["36.5767","-83.6073"],["60.0000","100.0000"],["-28.3528","114.6327"],["35.8150","139.6853"],["69.6601","18.9497"],["22.2500","114.1667"],["37.7510","-97.8220"]];
    for (index = 0; index < champions_v4.length-50; index++) {
      champion_select = champions_v4[Math.floor(Math.random()*champions_v4.length)];
      var lat = champion_select[0];
      var lng = champion_select[1];
      L.marker([lat,lng], {opacity: 0.5}).addTo(mymap);
    }
    function new_champion(lat,lng) {
      var popup = L.popup({closeButton:false})
        .setLatLng([lat, lng])
        .setContent('<a target="_blank" rel="nofollow" href="https://app.pansift.com/demo?first_insight=true" style="color: black;"><center><strong>Real time Insight <i class="fas fa-external-link-alt"></i></strong></center></a>')
        .openOn(mymap);
      L.marker([lat,lng], {zIndexOffset: 1000}).addTo(mymap);
    }
    var repetitions = 0;
    var intervalID = setInterval(function() {
      champion_select = champions_v6[Math.floor(Math.random()*champions_v6.length)];
      new_champion(champion_select[0],champion_select[1]);
      // console.log(data[index]);
      if (++repetitions === 15) {
        window.clearInterval(intervalID);
      }
    }, (Math.floor(Math.random() * 2000 + 4000)));
  }


  if(document.getElementById("number_of_agents") !== null){
    // if ($('#number_of_agents').length) {
    
		var sliderFormat = document.getElementById('slider-format');
    noUiSlider.create(sliderFormat, {
      start: [ 0 ],
      connect: [true, false],
      step: 1,
      range: {
        'min': [ 0 ],
      'max': [ 150 ]
      },
      format: wNumb({
                decimals: 0
              })
    });

    function calculate_total_costs() {
      var agent_cost = 0;
			if (sliderFormat.noUiSlider.get() < 3) {
				agent_cost = 0;
			} else {
				agent_cost = (sliderFormat.noUiSlider.get()) * 3.75;
			}
      var total_cost = agent_cost
			if (total_cost > 0) {
      $('#total_cost').html('<strong>' + total_cost.toFixed(2) + ' € (~' + Math.round(total_cost * 1.06) + ' USD)</strong>');
			} else {
      $('#total_cost').html('<strong>' + total_cost.toFixed(2) + ' € (' + Math.round(total_cost * 1.06) + ' USD)</strong>');
			}
    }


    var inputFormat = document.getElementById('input-format');
    sliderFormat.noUiSlider.on('update', function( values, handle ) {
      inputFormat.value = values[handle];
    });
    inputFormat.addEventListener('change', function(){
      sliderFormat.noUiSlider.set(this.value);
      calculate_total_costs();
    });

    sliderFormat.noUiSlider.on('slide', function( values, handle ){
      calculate_total_costs();
    });
  }

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

  })(jQuery);

  function secondstage (field_id) {
    var try_email = document.getElementById(field_id).value;
    dataLayer.push({'event': 'client_pre_signup', 'ecategory':'client_pre_signup', 'eaction':'client_pre_signup'});
    document.location = "https://app.pansift.com/clients/sign_up?try_email="+try_email;
  }
