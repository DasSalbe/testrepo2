function showHome() {
    document.body.innerHTML = `
        <div class="container">
            <h1>A digital kinda gift to my dearest, Angel.</h1>

            <button id="startBtn">Open</button>
        </div>
    `;

    document
        .getElementById("startBtn")
        .addEventListener("click", showLetter);
}

function showLetter() {
    document.body.innerHTML = `
        <button onclick="showHome()" class="backBtn">←</button>

        <div class="content">

            <div class="left-column">

                <h1>Injeell</h1>

                <p>
                    To my dearest, Angel,
                    <br><br>

                    This website is something I made last night, when you fell asleep, especially just for you.
                    I wanted to create something that would remind you of
                    how much you mean to me, and along the way, ask you on something serious.

                    <br><br>

                    Insert your letter here.
                    Make it as long as you want.
                    The text will stay on the left side of the screen.
                </p>

            </div>

            <div class="right-column">

                <audio controls>
                    <source src="music.mp3" type="audio/mpeg">
                </audio>

                <div class="heart">
                    <div class="heart-text">
                        Talking Since
                        <br><br>

                        June 14, 2025
                    </div>
                </div>

            </div>

        </div>
    `;
}

showHome()
showLetter1()
showLetter2()
showMemories()
showHeartPage()
showQuestion()
showYesPage()
showNoPage();