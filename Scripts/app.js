////Created by Guy Gufada 

//Storing list of sounds
var SongsList = [{
        id: "1",
        FileName: "electric guitar coutry slide 120bpm - B",
        Name: "Electric Guitar"
    },
    {
        id: "2",
        FileName: "120_stutter_breakbeats_16",
        Name: "Stutter Breakbeats"
    },
    {
        id: "3",
        FileName: "MazePolitics_120_Perc",
        Name: "Maze Politics"
    },
    {
        id: "4",
        FileName: "GrooveB_120bpm_Tanggu",
        Name: "Groove Tanggu"
    },
    {
        id: "5",
        FileName: "PAS3GROOVE1.03B",
        Name: "Groove"
    },
    {
        id: "6",
        FileName: "120_future_funk_beats_25",
        Name: "future Funk Beats"
    },
    {
        id: "7",
        FileName: "SilentStar_120_Em_OrganSynth",
        Name: "Organ Synth"
    },
    {
        id: "8",
        FileName: "FUD_120_StompySlosh",
        Name: "Stompy Slosh"
    },
    {
        id: "9",
        FileName: "Bass Warwick heavy funk groove on E 120 BPM",
        Name: "Bass Warwick"
    }
];

var RecordedSongsList = []; //List of users recorded sounds
var audio = audio = new Audio("2312");

//initialize function to load the grid and buttons status
function onloadFunction() {
    document.getElementById("Play").disabled = true;
    document.getElementById("Stop").disabled = true;
    LoadGrid();

}

//Load grid from list SongsList and generate the grid
function LoadGrid() {
    //alert (1);
    var AllPSongs = "";
    for (let x in SongsList) {
        AllPSongs += "<div class='Pad'><img id='" + SongsList[x].id + "' src='Images\\" + SongsList[x].id + ".png' onclick='PlaySound(this.id)'><br><label for='123'>" + SongsList[x].Name + "</label> </div>";
    }
    //alert (AllPSongs);
    document.getElementById("grid").innerHTML = AllPSongs;
}

//Change buttons status and clear the RecordedSongsList array 
function RecordFunction() {
    document.getElementById("Record").disabled = true;
    document.getElementById("Play").disabled = false;
    RecordedSongsList = []; //Clean the RecordedSongsList
}

//Change buttons status and play audio files by list of the RecordedSongsList array
function PlayFunction() {
    document.getElementById("Record").disabled = true;
    document.getElementById("Play").disabled = true;
    document.getElementById("Stop").disabled = false;
    var path;
    //Play record sounds one after one
    for (let x in RecordedSongsList) {
        setTimeout(function() {
            path = "Files/" + SongsList[RecordedSongsList[x].id - 1].FileName + ".mp3";
            audio = new Audio(path);
            audio.play();
        }, 8000 * x)
    }
}

function StopFunction() {
    document.getElementById("Record").disabled = false;
    document.getElementById("Play").disabled = false;
    document.getElementById("Stop").disabled = true;
    audio.pause();
}

//Play sound file order by user selected , 
//If Record button clicked , restore the id in RecordedSongsList array
function PlaySound(clicked_id) {
    //Add new object to RecordedSongsList array 
    if (document.getElementById("Record").disabled == true) {
        var NewSongId = {
            id: clicked_id
        };
        RecordedSongsList.push(NewSongId);
    }
    //Play selected sound	
    var path = "Files/" + SongsList[clicked_id - 1].FileName + ".mp3";
    audio = new Audio(path);
    audio.play();
}

////Created by Guy Gufada 
