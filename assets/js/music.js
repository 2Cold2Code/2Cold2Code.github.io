// collect information from source;
const DoF = [];
let songListRequest = await fetch('https://localhost:8000/songList.js', 'GET', songList)
let songList = await songListRequest.json()
/* 

Take all files from C:/(*)/Cakewalk/...projects or whatever, pass projects 
through Cakewalk export function and export those files as mp3 files directly 
to music.js and then pass that data to the rest of the program to sort out and
display on the page properly.

First, I need to figure out how to get it to link this to my html so it shows
on my page

*/

// automate with arrays to post to page
// require()?

function addsong(response){

      response.map((song) => {
          console.log("This is song line 23, music.js: \n", song)
    
    let audio = document.createElement('audio');
    audio.classList = 'audio'
    audio.setAttribute('controls', true);
    audio.setAttribute('controlsList', 'nodownload');
    let source = document.createElement('source');
    source.src = song;
    
        source.src = `${source.src.split('http://127.0.0.1:5500/').join('')}`
        console.log("This is the adapted source.src string, line 33, music.js: \n", source.src, "\n\n")
    
    audio.appendChild(source);
    const body = document.querySelector('body');
    const h2 = document.createElement('h2');
    h2.appendChild(audio);
    body.appendChild(h2)
    DoF.push(source.src)
    console.log("This is body, line 41, music.js: \n", body)
    return body;
})
}

addsong(songList)
console.log('This is songList, line 47, music.js: ', songList)

// allow downloadables?

// set up textareas for lyrics

// multiple tracks (overlay/play mode) or single track (karaoke/demo track mode)

// make it live so people can see changes as I make them?  "Play live feature"

const formForAddingNewSongs = (songName) => {
    // things needed:
       
    /* 1.)  A way to add the title.  The title will also be saved as the
       final parameter in the "src" object attribute.  */
       
    /* 2.)  A way to add the source to the songList array accurately.

    // How it will work:
       /*  You type a song you want to add, it creates the title.  If you
       want the saveName to be the same as the title, check a box that says,
       "Keep save name the same as song title."
       If box is unchecked, it will instead just add that title to the saveName,
       `./assets/Days_of_the_Fallen/${title}`
       There should also be a track finder that lets you see how many tracks are 
       associated with the file, for more advanced use.  And this should also
       let you select to play multiple tracks from the same song, simultaneously:
          A.)  Free mode:
            You can play any/all tracks at the same time, regardless of grouping.
          
          B.)  Song mode:
            Tracks are grouped by which go together.  This is used to play full
            songs via seperate tracks within the same group.  There may be multiple
            full-song groups per song.  Must be a way to group while maintaining
            individuality.

          C.)  Section mode:
            Choosing this mode, you can only listen to a single track within a 
            song at a time.  This prevents accidental play-over you might get in 
            "Free mode" and allows to listen to a single section/subsection.
            For example, if your song has "guitar1, guitar2, guitar3, piano, drums,
            vocals1, vocals2, vocals3," your sections might be "strings", "percussion",
            "vocals", and your subsections might be:
               "strings" : [
                   const guitar = [guitar1, guitar2, guitar3], 
                   const keys = [piano]
                ],
               "percussion" : [
                   const drums = [drumSet1, drumPad1], 
                   keys
                ],
               "vocals" : [
                   const lead = [vocals1], 
                   const backup = [vocals2, vocals3]
                ]

            etc....
            The subsets are in arrays during variable declaration, but can be referred
            to directly, as "keys" in the percussion object, after declaration, since
            it is already defined as an arraySet in "strings".

        3.) Play live mode:
                You record as you play and a program pulls that data from the recording
                source, sends it to a file/server (whichever is needed here), and then gets
                interpreted as the source for the "Play live" div/feature.
            */    

    let song = {
        name: `${songName}`,
        src: `./assets/Days_of_the_Fallen/${songName}`
    }
}
