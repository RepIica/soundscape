
//Spotify UI
// Sliders

var slider = document.getElementById('song-progress');

noUiSlider.create(slider, {
	start: [ 20 ],
	range: {
		'min': [   0 ],
		'max': [ 100 ]
	}
});

var slider = document.getElementById('song-volume');

noUiSlider.create(slider, {
	start: [ 90 ],
	range: {
		'min': [   0 ],
		'max': [ 100 ]
	}
});


// Tooltips

$(function () {
  $('[data-toggle="tooltip"]').tooltip()
})

// Viewport Heights

$(window).on("resize load", function(){
  
  var totalHeight = $(window).height();

  var headerHeight = $('.navbar').outerHeight();
  var footerHeight = $('.current-track').outerHeight();
  var playlistHeight = $('.playlist').outerHeight();
  var nowPlaying = $('.playing').outerHeight();

  var navHeight = totalHeight - (headerHeight + footerHeight + playlistHeight + nowPlaying);
  var artistHeight = totalHeight - (headerHeight + footerHeight);

  console.log(totalHeight);
  
  $(".navigation").css("height" , navHeight);
  $(".artist").css("height" , artistHeight);
  $(".social").css("height" , artistHeight);
  
});
    


  

// Side Nav Collapse Toggles

$(".navigation__list__header").on( "click" , function() {
  
  $(this).toggleClass( "active" );
  
});


// Media Queries

$(window).on("resize load", function(){
	if ($(window).width() <= 768){	
		
    $(".collapse").removeClass("in");
    
    $(".navigation").css("height" , "auto");
    
    $(".artist").css("height" , "auto");
    
	}	
});

$(window).on("resize load", function(){
	if ($(window).width() > 768){	
		
    $(".collapse").addClass("in");
    
	}	
});

function showUserSongs(user_songs) {

  user_song_html = "";
  for (let i = 0; i < user_songs.length; i ++) {
    user_song_html += "<div><img src='" + user_songs.cover + "'><span>" + 
      user_songs.title + "</span><span>" + user_songs.artist + "</span><span>" +
        user_songs.song_length + "</span>";
  }
  document.getElementById("main-content").innerHTML = user_song_html;
}

var user_info={
  "username":"jjabrhams",
  "firstname":"Jahaziel",
  "lastname":"Guy",
  "age":24,
  "gender":"Male",
  "state":"New Jersey"
}
$(document).ready(function () {
  $("div.artist__info__name").text(user_info.username);
  $("p.userstuff > span.fname").text(user_info.firstname + " ");
  $("p.userstuff > span.lname").text(user_info.lastname);
  $("p.userstuff > span.age").text(user_info.age + " ");
  $("p.userstuff > span.gender").text(user_info.gender + " ");
  $("p.userstuff > span.state").text(user_info.state);
});
