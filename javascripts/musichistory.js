$("#AddMusicView").hide();
$("#list").click(reverseView);
$("#add").click(changeView);


// //function to change the view. Using .classList method to toggle classes
function changeView() {
	$("#ListMusicView").hide();
	$("#AddMusicView").show();	
}

function reverseView () {
	$("#ListMusicView").show();
	$("#AddMusicView").hide();
}


function getSongs(){
	return new Promise(function(resolve, reject){
		$.ajax({
			url: "../data/songspt1.json"
		}).done((data)=>{
			resolve(data);
		}).fail( (error) =>{
			reject(error);
		});
	});
};
getSongs().then(function(data){loadSongs(data.mysongs)});

$(".delete").click(erase);

function erase (){
	var parent = event.target.parentNode;
	parent.remove();
}

//capturing user input into variables
$("#adder").click(addMusic);
//creating empty arrays to hold the songs users input


//loading preprepared songs to the DOM
function loadSongs(data){
	for (var i = 0; i < data.length; i++){
		var string = ` <div class="songDiv"><h2>${data[i].title}</h2><ul><li>${data[i].artist}</li><li>${data[i].album}</li></ul><button class="delete">DELETE</button><button class="edit">EDIT</button></div>`
		$("#rightbar").append(string);
	}
	if($("#addMore")){
		$("#addMore").remove();
	}
	var eraseBtn = "<button id='addMore'>MORE >>></button>";
	$("#rightbar").append(eraseBtn);
	addFunctionality();

}

//function to extract and add user input to appropriate array
function addMusic() {
	var songs = [];
	var artists = [];
	var albums = [];
	var newSong = $("#newSong").val();
	var newArtist = $("#newArtist").val();
	var newAlbum = $("#newAlbum").val();
	songs.push($("#newSong").val());
	artists.push($("#newArtist").val());
	albums.push($("#newAlbum").val()) ;
	var songInfo = ` <div class="songDiv"><h2>${newSong}</h2><ul><li>${newArtist}</li><li>${newAlbum}</li></ul><button class="delete">DELETE</button><button class="edit">EDIT</button></div>`;
	$("#rightbar").html(songInfo).before("#addMore");

}

function addFunctionality(){
$("#addMore").click(function(){
	getMoreSongs().then(function(data){
		loadSongs(data);
	});
	});
};

function getMoreSongs(){
	return new Promise(function(resolve, reject){
		$.ajax({
			url: "../data/songspt2.json"
		}).done((data)=>{
			resolve(data.songs2);
		}).fail( (error) =>{
			reject(error);
		});
	});
};

