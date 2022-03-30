$(document).foundation();
$(document).foundation('interchange', {
  named_queries : {
    below321 : 'only screen and (max-width: 320px)'
  }
});


$( document ).ready(function() {
    
    // show either apple or android button
    var isAndroid = /android/i.test(navigator.userAgent.toLowerCase());
	if (isAndroid){
		$('.download-button .android').removeClass('hide');
	} else {
	    $('.download-button .apple').removeClass('hide');
	}
	
	// mobile number get country prefix
	if($('#mobile-number').length != 0) {
		
		$("#mobile-number").intlTelInput({
		  defaultCountry: "auto",
		  geoIpLookup: function(callback) {
		    $.get('https://ipinfo.io', function() {}, "jsonp").always(function(resp) {
		      var countryCode = (resp && resp.country) ? resp.country : "";
		      callback(countryCode);
		    });
		  },
		  utilsScript: "#" // just for formatting/placeholders etc
		});
	}

	// mobile number get country prefix
	if($('#mobile-number2').length != 0) {
		
		$("#mobile-number2").intlTelInput({
		  defaultCountry: "auto",
		  geoIpLookup: function(callback) {
		    $.get('https://ipinfo.io', function() {}, "jsonp").always(function(resp) {
		      var countryCode = (resp && resp.country) ? resp.country : "";
		      callback(countryCode);
		    });
		  },
		  utilsScript: "#" // just for formatting/placeholders etc
		});
	}
	
	if(window.location.href.indexOf('drivers-sitters.html')>0){
		$('.global-header .sittersDrivers a').addClass('active');
	} else if(window.location.href.indexOf('about.html')>0){
		$('.global-header .aboutKangaDo a').addClass('active');
	} else if(window.location.href.indexOf('news.html')>0){
		$('.global-header .news a').addClass('active');
	} else if(window.location.href.indexOf('contact.html')>0){
		$('.global-header .contact a').addClass('active');
	} else if(window.location.href.indexOf('faq.html')>0){
		$('.global-header .faq a').addClass('active');
	} else if(window.location.href.indexOf('covid-safety.html')>0){
		$('.global-header .covidServices a').addClass('active');
	} else if(window.location.href.indexOf('schools.html')>0){
		$('.global-header .schools a').addClass('active');
	}
	
	$( "#getTheApp" ).click(function() {
		var myNumber = $("#mobile-number").intlTelInput("getNumber"); 
		$.getJSON("/rest/invite/send/sms/" + myNumber, function(json){
			if (json != "Nothing found."){
				alert(json['desc']);
				
				fb_pixel_track_new_phone();
			}
    	});		
	});

	$( "#getTheApp2" ).click(function() {
		var myNumber = $("#mobile-number2").intlTelInput("getNumber"); 
		$.getJSON("/rest/invite/send/sms/" + myNumber, function(json){
			if (json != "Nothing found."){
				alert(json['desc']);
				
				fb_pixel_track_new_phone();
			}
    	});		
	});
	
	// faqs-list starts
	$('.faqs-sections .section h4').click(function(e){
		e.preventDefault();
		var section = $(this).parent('.section');
		if ( section.is( ".open-section" ) ) {
			section.removeClass('open-section');
		} else {
			$('.faqs-sections .questions dl').removeClass('open-question');
			$('.faqs-sections .section').removeClass('open-section');
			section.addClass('open-section');
		}		
	});	
	$('.faqs-sections .questions dl dt').click(function(e){
		e.preventDefault();
		var dl = $(this).parent('dl');
		if ( dl.is( ".open-question" ) ) {
			dl.removeClass('open-question');
		} else {
			$('.faqs-sections .questions dl').removeClass('open-question');
			dl.addClass('open-question');
		}
	});
	if (window.location.href.indexOf("faq.html") > -1) {
		var hash = window.location.hash;
		//document.URL.substr(document.URL.indexOf('#')+1);
		console.log(hash);
		if(hash){
			$(hash).parent('.section').addClass('open-section');
			$(hash).parent().parent().parent('.section').addClass('open-section');
			$(hash).parent('dl').addClass('open-question');
		}
	}
	// faqs-list end
	
});

