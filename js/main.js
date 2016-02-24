
(function ($) {
    "use strict";
    
//Init
    var currentPage="#inicio",
        swMyCarousel=0;
    
    var initPage = function (){
        $(".sectionPage").hide();
        $(currentPage).slideDown(1000);
    }();
//navegacion
    $("nav").find("a").click(function (e) {
        //show and hide sections
        var page = $(this).attr("href");

        if(currentPage == page){
            return;
        }else{
            currentPage=page;
        }

        $(".sectionPage").slideUp();

        $(currentPage).slideDown();
        
        e.preventDefault();
        $(window).scrollTop(0);
        
        //cerrar menu en movil
        $(".navbar-toggle").trigger("click");
        
        //Clases del menu
        $(this).siblings().removeClass("active");
        $(this).addClass("active");
        
    });
    
//movil
    if($(window).width() < 1024){
        $("body").on("swipeleft",function(){
            if(swMyCarousel==1){
                swMyCarousel=0;
                return;
            }
            var newPage = $("#menu li a[href='"+currentPage+"'").parent().next("li").find("a").attr("href");
            $(".sectionPage").slideUp();

            $(window).scrollTop(0);

            if(!newPage)
                newPage="#inicio";

            currentPage=newPage;
            $(currentPage).fadeIn();

        }); 

        $("body").on("swiperight",function(){
            if(swMyCarousel==1){
                swMyCarousel=0;
                return;
            }
            var newPage = $("#menu li a[href='"+currentPage+"'").parent().prev("li").find("a").attr("href");
            $(".sectionPage").slideUp();

            $(window).scrollTop(0);

            if(!newPage)
                newPage="#contacto";

            currentPage=newPage;
            $(currentPage).fadeIn();

        });

    //carrosel
        $("#myCarousel").on("swipeleft",function(){
            $(".glyphicon-chevron-right").trigger("click");
            swMyCarousel=1;

        });
        $("#myCarousel").on("swiperight",function(){
            $(".glyphicon-chevron-left").trigger("click");
            swMyCarousel=1;
        });
    }
//mail
    $("#contactoMail").submit(function(event){
		event.preventDefault();
		var datos=$("#contactoMail").serialize();

		$.post(
			'mail.php',
			datos,
			"text"
		).done(function( msg ) {
			$("#contactoMail").reset();
			$("#contactoMail").find("input[type='submit']").val("Mensaje Enviado!");
            setTimeout(function(){$("#contactoMail").find("input[type='submit']").val("Enviar");}, 3000);
		}).fail(function( jqXHR, textStatus ) {
		  alert( "Request failed: " + textStatus );
		});

	});

	jQuery.fn.reset = function () {
	  $(this).each (function() { this.reset(); });
	}
    
    $("h2").prepend("<img src='img/box.png' width='50'>");
    
//Animacion
    /*
    var moverCar = function ($car)  {
        $car.stop().css({"-webkit-transform": "rotateY(180deg)"})
        .animate({
            left: "100%"
          }, 3000, 
        function(){
            $car.css({"-webkit-transform": "rotateY(0deg)"})
            }
        )
        .animate({
            left: "85%"
          }, 3000)
        .animate({
            left: "92%"
          }, 3000);
            
    };
    
    $("#facebook, .logo").click(function() {
        moverCar($(this));
    });
    
    moverCar($("#facebook, .logo"));
    */
//Logo
    var moverCarLogo = function ($car)  {
        $car.stop().css({"-webkit-transform": "rotateY(180deg)", position:"absolute",left: "-10%"})
        .animate({
            left: "100%"
          }, 5000, 
        function(){
            $car.css({"-webkit-transform": "rotateY(0deg)"})
            }
        )
        .animate({
            left: "30%"
          }, 3000)
        .animate({
            left: "37%"
          }, 2000);
            
    };
    
    $(".logo").click(function() {
        moverCarLogo($(this));
    });
    
    if($(window).width() > 1024){
        moverCarLogo($(".logo"));
    }

    
    
}) ($);