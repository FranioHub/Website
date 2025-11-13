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
        "https://picsum.photos/400/300?random=4",
        "TortoiseImages/pic2.jpg",
        "https://picsum.photos/300/300?random=3",
        "https://picsum.photos/200/200?random=5"
    ];

    const container = document.getElementById("imageContainer"); /*billed spawn point*/

// Add each image to the container
    imageList.forEach(url => {
        const img = document.createElement("img");
        img.src = url;
        img.alt = "Random image";
        container.appendChild(img);
    });

