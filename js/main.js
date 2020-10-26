let logo = document.getElementById("logo");

let projI = document.getElementById("proj");

let contI = document.getElementById("cont");

let servI = document.getElementById("serv");

let projButton = document.getElementById("proj-button");
let contButton = document.getElementById("cont-button");
let servButton = document.getElementById("serv-button");

logo.addEventListener("mouseover", function () {
  this.src = "/img/Black on White.png";
});

logo.addEventListener("mouseout", function () {
  this.src = "/img/White on Black.png";
});

projButton.addEventListener("mouseover", function () {
  projI.classList.add("show");
});

contButton.addEventListener("mouseover", function () {
  contI.classList.add("show");
});

servButton.addEventListener("mouseover", function () {
  servI.classList.add("show");
});

//sounds

document.addEventListener("DOMContentLoaded", init);
const SOUNDS = {
  hover1: null,
  hover2: null,
  hover3: null,
  woosh: null,
  click1: null,
  click2: null,
};
let allowSound = false;

function init() {
  let links = document.getElementsByClassName("linkpic");
  console.log(links);
  for (i = 0; i < links.length; i++) {
    links[i].addEventListener("mouseover", play);
  }

  let navLinks = document.getElementsByClassName("nav-links");
  for (i = 0; i < navLinks.length; i++) {
    navLinks[i].addEventListener("mouseover", play);
  }

  let servLinks = document.getElementsByClassName("serv-icon");
  for (i = 0; i < servLinks.length; i++) {
    servLinks[i].addEventListener("mouseover", play);
  }

  let linksIcons = document.getElementsByClassName("link-icon");
  for (i = 0; i < linksIcons.length; i++) {
    linksIcons[i].addEventListener("mouseover", play);
  }

  let certs = document.getElementsByClassName("cert");
  for (i = 0; i < certs.length; i++) {
    certs[i].addEventListener("mouseover", play);
  }

  let projs = document.getElementsByClassName("projectButton");
  for (i = 0; i < projs.length; i++) {
    projs[i].addEventListener("mouseover", play);
  }

  //sound button

  let soundButton1 = document.getElementById("enableSound");
  let soundButton2 = document.getElementById("disableSound");
  // make into function
  soundButton1.addEventListener("click", function () {
    allowSound = true;
    let soundEnabled = true;
    soundButton1.innerHTML = "Disable Sound";
    if ((soundEnabled = true)) {
      soundButton1.addEventListener("click", function () {
        allowSound = false;
        soundEnabled = false;
        soundButton1.innerHTML =
          "Enable Sound   <i style='padding: 0.11rem;' class='fas fa-volume-up'></i>";
        soundButton1.addEventListener("click", function () {
          allowSound = true;
          let soundEnabled = true;
          soundButton1.innerHTML = "Disable Sound";
          if ((soundEnabled = true)) {
            soundButton1.addEventListener("click", function () {
              allowSound = false;
              soundEnabled = false;
              soundButton1.innerHTML =
                "Enable Sound   <i style='padding: 0.11rem;' class='fas fa-volume-up'></i>";
              soundButton1.addEventListener("click", function () {
                allowSound = true;
                let soundEnabled = true;
                soundButton1.innerHTML = "Disable Sound";
                if ((soundEnabled = true)) {
                  soundButton1.addEventListener("click", function () {
                    allowSound = false;
                    soundEnabled = false;
                    soundButton1.innerHTML =
                      "Enable Sound   <i style='padding: 0.11rem;' class='fas fa-volume-up'></i>";
                  });
                }
              });
            });
          }
        });
      });
    }
  });
}

function play(ev) {
  let p = ev.currentTarget;
  ev.preventDefault();

  let fn = p.getAttribute("data-file");
  let src = "/sounds/" + fn + ".mp3";
  if (SOUNDS[fn]) {
    SOUNDS[fn].pause();
    SOUNDS[fn] = null;
  }
  console.log(src);

  let audio = document.createElement("audio");
  //audio.removeAttribute('controls');
  //document.body.appendChild(audio);
  audio.src = src;
  audio.volume = 0.3;
  //change the starting position in the file
  //audio.currentTime = 0.8;
  if (allowSound) {
    SOUNDS[fn] = audio;
    audio.setAttribute("data-file", fn);
    audio.play();
  }

  //listen for the event that ends sound
  audio.addEventListener("playing", goAudio);
  audio.addEventListener("ended", doneAudio);
}

function goAudio(ev) {
  console.log(ev.target.src, "has started playing");
}

function doneAudio(ev) {
  console.log(ev.target.src, "has finished playing");
  let fn = ev.target.getAttribute("data-file");
  SOUNDS[fn] = null;
}
