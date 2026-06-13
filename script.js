let petalsStarted = false;

document.addEventListener("DOMContentLoaded", () => {

    const intro = document.getElementById("intro");
    const experience = document.getElementById("experience");
    const openBtn = document.getElementById("openBtn");

    let i = 0;

    const text = `
Hi darling kooo!!!

You know, time flies real real fast, no? And what a miracle it is for me
To finally be 

Every second with you becomes a memory I never want to forget.

And now, I want to ask you something important...
wewew
ewe
WeakMapw
ewee
WeakMapwe
waitew
Ewe
`;

    /* =========================
       MUSIC ELEMENTS
    ========================= */
    const music = document.getElementById("music");
    const playBtn = document.getElementById("playBtn");
    const nextBtn = document.getElementById("nextBtn");
    const prevBtn = document.getElementById("prevBtn");
    const progress = document.getElementById("progress");
    const currentTimeEl = document.getElementById("currentTime");
    const durationEl = document.getElementById("duration");
	const songTitleEl = document.getElementById("songTitle");
	const artistNameEl = document.getElementById("artistName");

    const playlist = [
        {
            src: "./music.mp3",
            title: "(Only) About Love",
            artist: "Grentperez"
        },
        {
            src: "./music2.mp3",
            title: "Second Song",
            artist: "Second Artist"
        },
        {
            src: "./music3.mp3",
            title: "Third Song",
            artist: "Third Artist"
        }
    ];

    let currentSongIndex = 0;
    let isPlaying = false;

    function loadSong(index) {
    const song = playlist[index];

    music.src = song.src;

    if (songTitleEl) songTitleEl.textContent = song.title;
    if (artistNameEl) artistNameEl.textContent = song.artist;

    music.load();

    music.onloadedmetadata = () => {
        progress.max = music.duration;
        durationEl.textContent = formatTime(music.duration);
    };
}
const backBtn = document.getElementById("backBtn");

backBtn?.addEventListener("click", () => {
    experience.classList.add("hidden");
    intro.classList.remove("hidden");

    intro.style.opacity = "1";
    experience.style.opacity = "0";

    stopMusic();
});

    function formatTime(t) {
        const m = Math.floor(t / 60) || 0;
        const s = Math.floor(t % 60).toString().padStart(2, "0");
        return `${m}:${s}`;
    }

    /* =========================
       OPEN EXPERIENCE
    ========================= */
    openBtn.addEventListener("click", () => {

        intro.style.opacity = "0";

        setTimeout(() => {
            intro.classList.add("hidden");

            experience.classList.remove("hidden");

            experience.style.opacity = "0";

            setTimeout(() => {
                experience.style.opacity = "1";
            }, 50);

            startExperience();

        }, 1200);

    });

    /* =========================
       BACK BUTTON
    ========================= */
    document.addEventListener("click", (e) => {
        if (e.target && e.target.id === "backBtn") {
            experience.classList.add("hidden");
            intro.classList.remove("hidden");
            stopMusic();
        }
    });

    /* =========================
       TIMER
    ========================= */
    function startRelationshipTimer() {

        const startDate = new Date("2025-12-04T00:00:00");

        function updateTimer() {

            const now = new Date();
            const diff = now - startDate;

            const days = Math.floor(diff / (1000 * 60 * 60 * 24));
            const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
            const minutes = Math.floor((diff / (1000 * 60)) % 60);
            const seconds = Math.floor((diff / 1000) % 60);

            const timer = document.getElementById("relationshipTimer");

            if (timer) {
                timer.innerHTML = `
<div class="time-row"><span class="num">${days}</span><span class="label">DAYS</span></div>
<div class="time-row"><span class="num">${hours}</span><span class="label">HRS</span></div>
<div class="time-row"><span class="num">${minutes}</span><span class="label">MIN</span></div>
<div class="time-row"><span class="num">${seconds}</span><span class="label">SEC</span></div>
`;
            }
        }

        updateTimer();
        setInterval(updateTimer, 1000);
    }

    /* =========================
       TYPEWRITER
    ========================= */
function typeText() {
    const el = document.getElementById("typedText");
    if (!el) return;

    const lines = text.split("\n");
    let lineIndex = 0;
    let charIndex = 0;

    el.innerHTML = "";

    function type() {
        if (lineIndex < lines.length) {

            const currentLine = lines[lineIndex];

            if (charIndex < currentLine.length) {
                el.innerHTML += currentLine[charIndex];
                charIndex++;
                setTimeout(type, 25);
            } else {
                el.innerHTML += "<br>";
                lineIndex++;
                charIndex = 0;
                setTimeout(type, 200); // pause between lines
            }
        }
    }

    type();
}

    /* =========================
       MUSIC CORE
    ========================= */

    function loadSong(index) {
    const song = playlist[index];

    music.src = song.src;

    if (songTitleEl) songTitleEl.textContent = song.title;
    if (artistNameEl) artistNameEl.textContent = song.artist;

    music.load();

    music.onloadedmetadata = () => {
        progress.max = music.duration;
        durationEl.textContent = formatTime(music.duration);
    };
}

    function fadeInMusic() {
        music.volume = 0;
        music.play().catch(() => {});

        let vol = 0;
        const fade = setInterval(() => {
            if (vol < 1) {
                vol += 0.05;
                music.volume = vol;
            } else {
                clearInterval(fade);
            }
        }, 80);

        isPlaying = true;
        if (playBtn) playBtn.textContent = "⏸";
    }

    /* =========================
       PETALS
    ========================= */
    function createPetals() {

        const flowers = [
            "Photos/flowerf1.png",
            "Photos/flowerf2.png",
            "Photos/flowerf3.png",
            "Photos/flowerf4.png",
            "Photos/flowerf5.png",
            "Photos/flowerf6.png",
            "Photos/flowerf7.png",
            "Photos/flowerf8.png"
        ];

        setInterval(() => {

            const petal = document.createElement("img");
            petal.classList.add("petal");

            petal.src = flowers[Math.floor(Math.random() * flowers.length)];
            petal.style.left = Math.random() * 100 + "vw";
            petal.style.width = 25 + Math.random() * 25 + "px";
            petal.style.animationDuration = 8 + Math.random() * 8 + "s";
            petal.style.opacity = 0.4 + Math.random() * 0.6;

            document.body.appendChild(petal);

            setTimeout(() => petal.remove(), 16000);

        }, 250);
    }

    /* =========================
       FLOWER HEART
    ========================= */
    function createFlowerHeart() {

        const container = document.getElementById("flowerHeart");
        if (!container) return;

        const centerX = 350;
        const centerY = 320;

        const points = [];

        for (let t = 0; t < Math.PI * 2; t += 0.05) {
            const x = 16 * Math.pow(Math.sin(t), 3);
            const y = 13 * Math.cos(t)
                - 5 * Math.cos(2 * t)
                - 2 * Math.cos(3 * t)
                - Math.cos(4 * t);

            points.push({
                x: centerX + x * 16,
                y: centerY - y * 16
            });
        }

        let index = 0;

        const flowers = [
            "Photos/flowerf1.png",
            "Photos/flowerf2.png",
            "Photos/flowerf3.png",
            "Photos/flowerf4.png",
            "Photos/flowerf5.png",
            "Photos/flowerf6.png",
            "Photos/flowerf7.png",
            "Photos/flowerf8.png"
        ];

        const growHeart = setInterval(() => {

            if (index >= points.length) {
                clearInterval(growHeart);
                document.querySelector(".heart-center").style.opacity = "1";
                return;
            }

            const flower = document.createElement("img");
            flower.classList.add("flower");

            flower.src = flowers[Math.floor(Math.random() * flowers.length)];

            flower.style.left = points[index].x + "px";
            flower.style.top = points[index].y + "px";

            flower.classList.add("grow");

            container.appendChild(flower);

            index++;

        }, 40);
    }

    /* =========================
       START EXPERIENCE
    ========================= */
    function startExperience() {
		loadSong(currentSongIndex);
fadeInMusic();

        startRelationshipTimer();

        if (!document.querySelector("#flowerHeart .flower")) {
            createFlowerHeart();
        }

        loadSong(currentSongIndex);
        fadeInMusic();

        if (!petalsStarted) {
            createPetals();
            petalsStarted = true;
        }

        const typed = document.getElementById("typedText");
        if (typed && typed.innerHTML === "") {
            typeText();
        }
    }

    /* =========================
       STOP MUSIC
    ========================= */
    function stopMusic() {
        music.pause();
        music.currentTime = 0;
    }

    /* =========================
       CONTROLS
    ========================= */

    playBtn?.addEventListener("click", async () => {
        if (music.paused) {
            await music.play();
            isPlaying = true;
            playBtn.textContent = "⏸";
        } else {
            music.pause();
            isPlaying = false;
            playBtn.textContent = "▶";
        }
    });

    nextBtn?.addEventListener("click", () => {
        currentSongIndex = (currentSongIndex + 1) % playlist.length;
        loadSong(currentSongIndex);
        music.play();
        playBtn.textContent = "⏸";
    });

    prevBtn?.addEventListener("click", () => {
        currentSongIndex =
            (currentSongIndex - 1 + playlist.length) % playlist.length;

        loadSong(currentSongIndex);
        music.play();
        playBtn.textContent = "⏸";
    });

    music?.addEventListener("timeupdate", () => {
        progress.value = music.currentTime;
        currentTimeEl.textContent = formatTime(music.currentTime);
    });

    progress?.addEventListener("input", () => {
        music.currentTime = progress.value;
    });
	console.log("CURRENT SONG:", playlist[currentSongIndex]);

});
