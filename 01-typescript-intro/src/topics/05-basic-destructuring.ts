interface AudioPlayer {
    audioVolume: number;
    songDuration: number;
    song: string;
    details: Details;
}

interface Details {
    author: string;
    year: number;
}

let audioPlayer: AudioPlayer = {
    audioVolume: 90,
    songDuration: 36,
    song: "Mess",
    details: {
        author: 'Ed Sheeran',
        year: 2015
    }
}

const song = 'New Song';


/** DESTRUCTURE OBJECTS **/

// Normal data: Accesing the attributes with dots
console.log('Duration: ', audioPlayer.songDuration);
console.log('Author: ', audioPlayer.details.author);

// Destructured data to avoid entering a lot of inherit attributes
let { song: anotherSong, songDuration: duration, details } = audioPlayer;
let { author } = details;
let { year } = details;

console.log('Song: ', song);
console.log('Song: ', anotherSong);
console.log('Duration: ', duration);
console.log('Author: ', author);
console.log('Year: ', year);


/** DESESTRUCTURE ARRAYS **/

const [p1, p2, p3 = 'Not found']: string[] = ['Goku', 'Vegeta'];

console.log('Personaje principal: ', p1 || 'No existe ese personaje')
console.log('Personaje secundario: ', p2)
console.log('Personaje terciario: ', p3)


export { };