interface AudioPlayer{
    audioVolume:number;
    soungDuration:number;
    song:string;
    details:Details;
}

interface Details{
    author:string;
    year:number;
}

const auidoPlayer:AudioPlayer = {
    audioVolume:90,
    soungDuration:36,
    song:"Mess",
    details:{
        author:'Ed Sheeran',
        year:2015
    }
}

const song = 'New Song'

const {song:anotherSong, soungDuration:duration, details} = auidoPlayer;
const {author} = details

// console.log('Song: ', anotherSong );
// console.log('Duration: ', duration );
// console.log('Author: ', audioPlayer.details.author );
// console.log('Author: ', author );

const [, , trunks='Not Found']:string[] = ['Goku', 'Vegueta'];

console.log('Personaje 3:', trunks);

export{};