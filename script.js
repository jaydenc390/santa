const button = document.getElementById("magicButton");
const statusText = document.getElementById("statusText");

let happy = false;

button.addEventListener("click", () => {
    if (happy) {
        statusText.textContent = "Santa is resting...";
        button.textContent = "Check Santa's Mood";
    } else {
        statusText.textContent = "Santa is feeling jolly 🎄🎁";
        button.textContent = "Let Santa Rest";
    }

    happy = !happy;
});