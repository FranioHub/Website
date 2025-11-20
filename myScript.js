var tabButtons=document.querySelectorAll(".tabContainer .buttonContainer button");
var tabPanels=document.querySelectorAll(".tabContainer  .tabPanel");
showPanel(0,'#a4f52a');

function showPanel(panelIndex,colorCode) {
    tabButtons.forEach(function (node) {
        node.style.backgroundColor = "";
        node.style.color = "";
    });
    tabButtons[panelIndex].style.backgroundColor = colorCode;
    tabButtons[panelIndex].style.color = "green";
    tabPanels.forEach(function (node) {
        node.style.display = "none";
    });
    tabPanels[panelIndex].style.display = "block";
    tabPanels[panelIndex].style.backgroundColor = colorCode;
}
// chat kode
    const imageList = [
        "TortoiseImages/pic1.jpg",
        "TortoiseImages/pic2.jpg",
        "TortoiseImages/pic3.jpg",
        "TortoiseImages/pic1.jpg",
        "TortoiseImages/pic2.jpg",
        "TortoiseImages/pic3.jpg",
        "TortoiseImages/pic1.jpg",
        "TortoiseImages/pic2.jpg",
        "TortoiseImages/pic3.jpg",
        "https://picsum.photos/200/200?random=1"
    ];

    const container = document.getElementById("imageContainer"); /*billed spawn point*/

// Add each image to the container
    imageList.forEach(url => {
        const img = document.createElement("img");
        img.src = url;
        img.alt = "Random image";
        container.appendChild(img);
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
