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
	  		$("#audio1").click(function(event) {
	  			/* Act on the event */
	  			if ($("#player1")[0].ifplay==0){
	  				$("#player1")[0].play();
	  				$("#player1")[0].ifplay=1;
	  			}else{
	  				$("#player1")[0].pause();
	  				$("#player1")[0].ifplay=0;
	  			}
	  		});
	  		$("#audio2").click(function(event) {
	  			/* Act on the event */
	  			if ($("#player2")[0].ifplay==0){
	  				$("#player2")[0].play();
	  				$("#player2")[0].ifplay=1;
	  			}else{
	  				$("#player2")[0].pause();
	  				$("#player2")[0].ifplay=0;
	  			}
	  		});
	  		$("#audio3").click(function(event) {
	  			/* Act on the event */
	  			if ($("#player3")[0].ifplay==0){
	  				$("#player3")[0].play();
	  				$("#player3")[0].ifplay=1;
	  			}else{
	  				$("#player3")[0].pause();
	  				$("#player3")[0].ifplay=0;
	  			}
	  		});
	  		$("#audio5").click(function(event) {
	  			/* Act on the event */
	  			if ($("#player5")[0].ifplay==0){
	  				$("#player5")[0].play();
	  				$("#player5")[0].ifplay=1;
	  			}else{
	  				$("#player5")[0].pause();
	  				$("#player5")[0].ifplay=0;
	  			}
	  		});
	  		$("#audio6").click(function(event) {
	  			/* Act on the event */
	  			if ($("#player6")[0].ifplay==0){
	  				$("#player6")[0].play();
	  				$("#player6")[0].ifplay=1;
	  			}else{
	  				$("#player6")[0].pause();
	  				$("#player6")[0].ifplay=0;
	  			}
	  		});
	  		$("#audio7").click(function(event) {
	  			/* Act on the event */
	  			if ($("#player7")[0].ifplay==0){
	  				$("#player7")[0].play();
	  				$("#player7")[0].ifplay=1;
	  			}else{
	  				$("#player7")[0].pause();
	  				$("#player7")[0].ifplay=0;
	  			}
	  		});
	  		$("#audio8").click(function(event) {
	  			/* Act on the event */
	  			if ($("#player8")[0].ifplay==0){
	  				$("#player8")[0].play();
	  				$("#player8")[0].ifplay=1;
	  			}else{
	  				$("#player8")[0].pause();
	  				$("#player8")[0].ifplay=0;
	  			}
	  		});
	  		$("#audio9").click(function(event) {
	  			/* Act on the event */
	  			if ($("#player9")[0].ifplay==0){
	  				$("#player9")[0].play();
	  				$("#player9")[0].ifplay=1;
	  			}else{
	  				$("#player9")[0].pause();
	  				$("#player9")[0].ifplay=0;
	  			}
	  		});
	  		$("#audio10").click(function(event) {
	  			/* Act on the event */
	  			if ($("#player10")[0].ifplay==0){
	  				$("#player10")[0].play();
	  				$("#player10")[0].ifplay=1;
	  			}else{
	  				$("#player10")[0].pause();
	  				$("#player10")[0].ifplay=0;
	  			}
	  		});
	  		$("#audio11").click(function(event) {
	  			/* Act on the event */
	  			if ($("#player11")[0].ifplay==0){
	  				$("#player11")[0].play();
	  				$("#player11")[0].ifplay=1;
	  			}else{
	  				$("#player11")[0].pause();
	  				$("#player11")[0].ifplay=0;
	  			}
	  		});
	  		$("#audio12").click(function(event) {
	  			/* Act on the event */
	  			if ($("#player12")[0].ifplay==0){
	  				$("#player12")[0].play();
	  				$("#player12")[0].ifplay=1;
	  			}else{
	  				$("#player12")[0].pause();
	  				$("#player12")[0].ifplay=0;
	  			}
	  		});

		});