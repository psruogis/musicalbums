
// surask h1 ir pakeist kintamuoju

let titleElement = document.getElementsByClassName("main-title")[0];



// titleElement.innerHTML = "Muzikos albumai"


// pridekime papildoma h1 //

// titleElement.classList.add("header-title");

let addAlbumButton = document.querySelector(".btn-save-album");

addAlbumButton.addEventListener("click", addAlbum);

let albumList = [];
let artistElement = document.querySelector("#artist");
let albumElement = document.querySelector("#album");
let releaseDateElement = document.querySelector("#releaseDate");
let imageElement = document.querySelector("#image");

function addAlbum() {
    let artist = artistElement.value;
    let album = albumElement.value;
    let date = releaseDateElement.value;
    let image = imageElement.files[0];

    if (!artist || !album || !date || !image) {
        console.log("Neivesti laukeliai")
        return;
    }

    albumList.push({
        "artist": artist, 
        "album": album,
        "date": date,
        "image": image.name
    })

    console.log ("Duomenys", artist, album, date, image);
}

