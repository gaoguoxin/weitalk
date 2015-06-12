// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or any plugin's vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/sstephenson/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require turbolinks
//= require_tree .

		$(document).ready(function() {
			$(".faceimg").each(function() {
	  			var w = $(this).width() ;
	  			$(this).css("height",w);
	  		});
			var timer;
			$("#player1")[0].ifplay=0;
			$("#player2")[0].ifplay=0;
			$("#player3")[0].ifplay=0;
			$("#player5")[0].ifplay=0;
			$("#player6")[0].ifplay=0;
			$("#player7")[0].ifplay=0;
			$("#player8")[0].ifplay=0;
			$("#player9")[0].ifplay=0;
			$("#player10")[0].ifplay=0;
			$("#player11")[0].ifplay=0;
			$("#player12")[0].ifplay=0;
			
			function init(){
				$("#audio1").attr("src","/assets/talk4.png")
				$("#audio2").attr("src","/assets/talk4.png")
				$("#audio3").attr("src","/assets/talk1.png")
				$("#audio5").attr("src","/assets/talk4.png")
				$("#audio6").attr("src","/assets/talk4.png")
				$("#audio7").attr("src","/assets/talk1.png")
				$("#audio8").attr("src","/assets/talk1.png")
				$("#audio9").attr("src","/assets/talk1.png")
				$("#audio10").attr("src","/assets/talk1.png")
				$("#audio11").attr("src","/assets/talk4.png")
				$("#audio12").attr("src","/assets/talk4.png")
			}
			function talking(s){
				if ($(s).attr("src")=="/assets/talk1.png")
				{
					$(s).attr("src","/assets/talk2.png");
				}else if ($(s).attr("src")=="/assets/talk2.png")
				{
					$(s).attr("src","/assets/talk3.png");
				}else if ($(s).attr("src")=="/assets/talk3.png")
				{
					$(s).attr("src","/assets/talk1.png");
				}	
				if ($(s).attr("src")=="/assets/talk4.png")
				{
					$(s).attr("src","/assets/talk5.png");
				}else if ($(s).attr("src")=="/assets/talk5.png")
				{
					$(s).attr("src","/assets/talk6.png");
				}else if ($(s).attr("src")=="/assets/talk6.png")
				{
					$(s).attr("src","/assets/talk4.png");
				}
			}
			function allstop(){
				$("#player1")[0].pause();$("#player1")[0].ifplay=0;
				$("#player2")[0].pause();$("#player2")[0].ifplay=0;
				$("#player3")[0].pause();$("#player3")[0].ifplay=0;
				$("#player5")[0].pause();$("#player5")[0].ifplay=0;
				$("#player6")[0].pause();$("#player6")[0].ifplay=0;
				$("#player7")[0].pause();$("#player7")[0].ifplay=0;
				$("#player8")[0].pause();$("#player8")[0].ifplay=0;
				$("#player9")[0].pause();$("#player9")[0].ifplay=0;
				$("#player10")[0].pause();$("#player10")[0].ifplay=0;
				$("#player11")[0].pause();$("#player11")[0].ifplay=0;
				$("#player12")[0].pause();$("#player12")[0].ifplay=0;
			}

			function doclick(num){
				var s="#audio"+num;
				var ss="#player"+num;
				$(s).click(function(event) {
		  			if ($(ss)[0].ifplay==0){
		  				allstop();
						clearInterval(timer);init();
						timer = setInterval(function(){talking(s)},300);
		  				$(ss)[0].play();
		  				$(ss)[0].ifplay=1;
		  			}else{
		  				allstop();
						clearInterval(timer);
						init();
		  			}
		  		});
			}
	  		for(var i=1;i<13;i++)
	  		{
	  			if (i != 4){
	  				doclick(i);
	  			}
	  		}

		});