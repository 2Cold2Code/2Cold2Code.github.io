songs = ['.assetts/Days_of_the_Fallen/"Hello, Lady (Elephants)".wav',
    './assets/Days_of_the_Fallen/"A Puppet to Pain (Memo)".wav',
'./assets/Days_of_the_Fallen/"Ain\'t the Same Rodeo (Memo)".wav',
'./assets/Days_of_the_Fallen/"export_draft_Alive_And_Well".mp3',
'./assets/Days_of_the_Fallen/"export_draft_I\'d_Rather_Fade".mp3',
'./assets/Days_of_the_Fallen/"export_draft_Plagued".mp3',
'./assets/Days_of_the_Fallen/"export_draft_The_Chase".mp3',
'./assets/Days_of_the_Fallen/"How Beautiful You Are (Memo)".wav',
'./assets/Days_of_the_Fallen/"In These Eyes (Memo)".wav',
'./assets/Days_of_the_Fallen/"Love-Hate (Memo)".wav',
'./assets/Days_of_the_Fallen/"Monster Again (Memo)".wav',
'./assets/Days_of_the_Fallen/"Psychecide (Memo)".wav',
'./assets/Days_of_the_Fallen/"Slave (Memo)".wav',
'./assets/Days_of_the_Fallen/"Sleeper (Memo)".wav',
'./assets/Days_of_the_Fallen/"Storm of Misery (Memo)".wav',
'./assets/Days_of_the_Fallen/"The Beast Speaks (Memo)".wav',
'./assets/Days_of_the_Fallen/"Thoughts from the Dirt (Memo)".wav',
'./assets/Days_of_the_Fallen/"Unique (Memo)".wav',
'./assets/Days_of_the_Fallen/"Wings (Memo)".wav',
'./assets/Days_of_the_Fallen/"Wish I\'d Got the Lie (Memo)".wav'
]

function MakeSongObject(name, src){
    this.name = name;
    this.src = src;
}

const songList = songs.map(song => {
    return MakeSongObject(song.split('./assets/Days_of_the_Fallen').join('').split('_').join(' '), song)
})
console.log("This is songList, line 31, songList.js:\n", songList)

// XMLHttpRequest('POST', songList)
let POSTSongs = await fetch('https://localhost:8000', 'POST', songList)
  export default songList