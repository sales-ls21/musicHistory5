var songs = [];

songs[songs.length] = "Legs > by Z*ZTop on the album Eliminator";
songs[songs.length] = "The Logical Song > by Supertr@amp on the album Breakfast in America";
songs[songs.length] = "Another Brick in the Wall > by Pink Floyd on the album The Wall";
songs[songs.length] = "Welco(me to the Jungle > by Guns & Roses on the album Appetite for Destruction";
songs[songs.length] = "Ironi!c > by Alanis Moris*ette on the album Jagged Little Pill";

//Adding songs to beginning and end of the array
songs.push("Koennt ihr mich horen by Xavier Naidoo on the album Nicht von dieser Welt");

songs.unshift("Vom selben Stern by Ich & Ich on the album Sterne");
// console.log(songs);

for (var i = 0; i < songs.length; i++) {
	songs[i] = songs[i].replace('>', '');

	 if(songs[i].indexOf('*') !== -1)
    {
        songs[i] = songs[i].replace('*', '');
    }
     if(songs[i].indexOf('@') !== -1)
    {
        songs[i] = songs[i].replace('@', '');
    }
     if(songs[i].indexOf('(') !== -1)
    {
        songs[i] = songs[i].replace('(', '');
    }
     if(songs[i].indexOf('!') !== -1)
    {
        songs[i] = songs[i].replace('!', '');
    }
}





