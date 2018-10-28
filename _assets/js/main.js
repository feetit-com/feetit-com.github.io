(function($) {
    $.fn.countTo = function(options) {
        // merge the default plugin settings with the custom options
        options = $.extend({}, $.fn.countTo.defaults, options || {});

        // how many times to update the value, and how much to increment the value on each update
        var loops = Math.ceil(options.speed / options.refreshInterval),
            increment = (options.to - options.from) / loops;

        return $(this).each(function() {
            var _this = this,
                loopCount = 0,
                value = options.from,
                interval = setInterval(updateTimer, options.refreshInterval);

            function updateTimer() {
                value += increment;
                loopCount++;
                $(_this).html(value.toFixed(options.decimals));

                if (typeof(options.onUpdate) == 'function') {
                    options.onUpdate.call(_this, value);
                }

                if (loopCount >= loops) {
                    clearInterval(interval);
                    value = options.to;

                    if (typeof(options.onComplete) == 'function') {
                        options.onComplete.call(_this, value);
                    }
                }
            }
        });
    };

    $.fn.countTo.defaults = {
        from: 0,  // the number the element should start at
        to: 100,  // the number the element should end at
        speed: 1000,  // how long it should take to count between the target numbers
        refreshInterval: 100,  // how often the element should be updated
        decimals: 0,  // the number of decimal places to show
        onUpdate: null,  // callback method for every time the element is updated,
        onComplete: null,  // callback method for when the element finishes updating
    };
})(jQuery);

jQuery(function($) {
        $('.sign').countTo({
            from: 0,
            to: 50000,
            speed: 8000,
            refreshInterval: 50,
            onComplete: function(value) {
                console.debug(this);
            }
        });
    });

jQuery(function($) {
    $('.sign1').countTo({
        from: 0,
        to: 5000,
        speed: 8000,
        refreshInterval: 25,
        onComplete: function(value) {
            console.debug(this);
        }
    });
});

jQuery(function($) {
    $('.sign2').countTo({
        from: 0,
        to: 100,
        speed: 8000,
        refreshInterval: 5,
        onComplete: function(value) {
            console.debug(this);
        }
    });
});
	


jQuery("document").ready(function($){
	
	var nav = $('.fixed-header');
	
	
	$(window).scroll(function () {
		if ($(this).scrollTop() > 30) {
			nav.addClass("fixed-nav");
			$('.how_nav').addClass("fixed-nav");
			
		} else {
			nav.removeClass("fixed-nav");
			
			
		}
	});

});


jQuery("document").ready(function($){
	
	
	
	
	$(window).scroll(function () {
		if ($(this).scrollTop() > 500) {
			
			$('.navbar-default').addClass("fixed");
			
		} else {
			
			$('.navbar-default').removeClass("fixed");
			
		}
	});

});



jQuery("document").ready(function($){
	

new WOW().init();
});



jQuery("document").ready(function($){


	$('.img1').fadeOut();
	$('.img2').fadeOut();
	$('.img3').fadeOut();
	$('.img4').fadeOut();
	
	
for(var i=1; i<=4; i++){

if(i==1){
 var display = setInterval(function(){ 
$('.img1').fadeIn() ;
$('.img2').fadeOut() ;
$('.img3').fadeOut() ;
$('.img4').fadeOut() ;
 }, 2000);

  var display = setInterval(function(){ 
$('.img1').fadeOut(slow) ;
$('.img2').fadeIn() ;
$('.img3').fadeOut() ;
$('.img4').fadeOut() ;

 }, 5000);
 
   var display = setInterval(function(){ 
$('.img1').fadeOut() ;
$('.img2').fadeOut() ;
$('.img4').fadeOut() ;
$('.img3').fadeIn() ;

 }, 8000);
 
    var display = setInterval(function(){ 
$('.img1').fadeOut() ;
$('.img2').fadeOut() ;
$('.img3').fadeOut() ;
$('.img4').fadeIn() ;


 }, 11000);
 
 

 
 
 
 
 
 


}


/*

 if(i==2){

 var display = setInterval(function(){ 
$('.img2').fadeIn() ;
$('.img1').fadeOut() ;

 }, 3000);
 var display = setInterval(function(){ 
$('.img2').fadeOut() ;

 }, 3500);

}





if(i==3){
var display = setInterval(function(){ 
$('.img2').fadeOut() ;

 }, 5500);
 var display = setInterval(function(){ 
$('.img3').fadeIn() ;

 }, 7000);

}

if(i==4){
 var display = setInterval(function(){ 
$('.img3').fadeOut() ;

 }, 3300);
 var display = setInterval(function(){ 
$('.img4').fadeIn() ;

 }, 4000);

} */



	}

i=0;
 
 
});


$(document).ready(function(){



	$(".slider").slick({
		autoplay: false,
		centerMode: true,
		  centerPadding: '20px',
		  slidesToShow: 4,
		slidesToShow: 4,
		prevArrow : '.slider-container .prev',
		nextArrow : '.slider-container .next'
	
	
	});




});



//charts

$(document).ready(function() {
    $.getScript('http://www.chartjs.org/assets/Chart.js',function(){

        var data = {
            labels : ["January","February","March","April","May","June","July"],
            datasets : [
                {
                    fillColor : "rgba(220,220,220,0.5)",
                    strokeColor : "rgba(220,220,220,1)",
                    pointColor : "rgba(220,220,220,1)",
                    pointStrokeColor : "#fff",
                    data : [65,59,90,81,56,55,40]
                },
                {
                    fillColor : "rgba(151,187,205,0.5)",
                    strokeColor : "rgba(151,187,205,1)",
                    pointColor : "rgba(151,187,205,1)",
                    pointStrokeColor : "#fff",
                    data : [28,48,40,19,96,27,100]
                }
            ]
        }

        var options = {
            animation: true
        };

        //Get the context of the canvas element we want to select
        var c = $('#myChart');
        var ct = c.get(0).getContext('2d');
        var ctx = document.getElementById("myChart").getContext("2d");
        /*********************/
        new Chart(ctx).Bar(data,options);

    })
});

/////////////////////////////////////////////////////////////////////////

//slider flags

$("#slideshow > div:gt(0)").hide();

setInterval(function() {
    $('#slideshow > div:first')
        .fadeOut(500)
        .next()
        .fadeIn(500)
        .end()
        .appendTo('#slideshow');
}, 1500);


// end slider flags


// partners increase numbers
jQuery(function($) {
    $('.sign3').countTo({
        from: 0,
        to: 25,
        speed: 4000,
        refreshInterval: 10,
        onComplete: function(value) {
            console.debug(this);
        }
    });
});

jQuery(function($) {
    $('.sign4').countTo({
        from: 0,
        to: 50,
        speed: 4000,
        refreshInterval: 5,
        onComplete: function(value) {
            console.debug(this);
        }
    });
});

jQuery(function($) {
    $('.sign5').countTo({
        from: 0,
        to: 3,
        speed: 4000,
        refreshInterval: 5,
        onComplete: function(value) {
            console.debug(this);
        }
    });
});

////////////////////////////////////////////////////////////