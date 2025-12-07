var tabButtons=document.querySelectorAll(".tabContainer .buttonContainer button");
var tabPanels=document.querySelectorAll(".tabContainer  .tabPanel");
showPanel(0);

function showPanel(panelIndex) {
    tabButtons.forEach(function (node) {
        node.style.backgroundColor = "";
        node.style.color = "";
    });
    tabButtons[panelIndex].style.backgroundColor = '#a4f52a';
    tabButtons[panelIndex].style.color = "green";
    tabPanels.forEach(function (node) {
        node.style.display = "none";
    });
    tabPanels[panelIndex].style.display = "block";
    tabPanels[panelIndex].style.backgroundColor = '#a4f52a';
}
// chat kode
    const mediaList = [
        "TortoiseImages/pic1.jpg",
        "TortoiseImages/pic2.jpg",
        "TortoiseImages/pic3.jpg",
        "TortoiseImages/pic1.jpg",
        "TortoiseImages/pic2.jpg",
        "TortoiseImages/pic3.jpg",
        "TortoiseImages/Galapagos%20Tortoise.mp4",
        "TortoiseImages/pic2.jpg",
        "TortoiseImages/pic3.jpg",
    ];
function isVideo(url) {
    return url.match(/\.(mp4|webm|ogg)$/i);
}
    const container = document.getElementById("imageContainer"); /*billed spawn point*/

// Add each image to the container
mediaList.forEach(url => {
    let element;

    if (isVideo(url)) {
        const video = document.createElement("video");
        video.src = url;
        video.controls = true;
        video.muted = false;
        video.playsInline = true;
        video.width = 200;
        element = video;
    } else {
        const img = document.createElement("img");
        img.src = url;
        img.alt = "Media";
        element = img;
    }

    element.style.cursor = "pointer";
    container.appendChild(element);
});

    // ai shit:
const overlay = document.getElementById("lightboxOverlay");
const overlayImg = document.getElementById("lightboxImage");

// Make images clickable
container.querySelectorAll("img").forEach(img => {
    img.style.cursor = "pointer";
    img.addEventListener("click", () => {
        overlayImg.src = img.src;
        overlay.style.display = "flex";
    });
});
// Close when clicking anywhere
overlay.addEventListener("click", () => {
    overlay.style.display = "none";
});


// darkmode/lightmode
function toggleDarkMode() {
    // 1. Find the CSS file link
    const stylesheet = document.getElementById('themeStylesheet');
    const button = document.getElementById('darkModeToggle');

    // 2. Check which theme is currently active
    if (stylesheet.getAttribute('href') === 'css.css') {
        // Currently dark mode, switch to light
        stylesheet.setAttribute('href', 'LightMode.css');
        button.textContent = 'Skift til dark mode';
    } else {
        // Currently light mode, switch to dark
        stylesheet.setAttribute('href', 'css.css');
        button.textContent = 'Skift til light mode';
    }
}
