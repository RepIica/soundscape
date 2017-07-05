// get user data from the server
function ajaxGet(url, processDataFunc) {
	var xhr = new XMLHttpRequest();
	xhr.open("GET", url);
	xhr.send();

	// display the user data on the page once it is recieved
	xhr.onload = function () {

		var user_data = JSON.parse(xhr.responseText);
		processDataFunc(user_data);
	}
}

// set user data on profile page
function processDataFunc(user_data) {

	let user_country = document.getElementById("user-country");
	document.getElementById("user-pic").src = user_data.thumbnail;
	document.getElementById("user-name").innerHTML = user_data.username;
	
	if (user_data.country === "USA")
		user_country.innerHTML = user_data.city + user_data.state;
	else
		user_country.innerHTML = user_data.city + user_data.country;
}

// get the songs and list them in the main-content div
function showUserSongs(user_songs) {

	user_song_html = "";
	for (let i = 0; i < user_songs.length; i ++) {
		user_song_html += "<div><img src='" + user_songs.cover + "'><span>" + 
		  user_songs.title + "</span><span>" + user_songs.artist + "</span><span>" +
		    user_songs.song_length + "</span>";
	}
	document.getElementById("main-content").innerHTML = user_song_html;
}

// query the database for the songs for the current profile being viewed
function getUserSongs() {

	ajaxGet("/php/getUserSongs.php", showUserSongs);
}

// when user clicks the music panel, get the songs and show them
var music_panel = document.getElementById("music-panel");

music_panel.addEventListener("click", getSongs);