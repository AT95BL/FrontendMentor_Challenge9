//Desktop Share Button Toggle

const desktopShareBtn = document.getElementById("desktop-share-button");    // Dohvatam HTML-element(klase "desktop-share-button") kojem ću dodati event listener za klik!!
if (!desktopShareBtn) {
    console.error("Desktop share button not found");
}

desktopShareBtn.addEventListener("click", toggleDesktopShare);              // Klik na taj element(klase "desktop-share-button") će pokrenuti funkciju toggleDesktopShare ..

function toggleDesktopShare () {
    const shareShapeContainer = document.querySelector(".share-shape-container");
    if (!shareShapeContainer) {
        console.error("Share shape container not found");
        return;
    }
     //  toggle klasu "display-none" na elementu klase "share-shape-container" (koji je u HTML-u definiran kao div) - ako je nema, dodaj je, ako je ima, ukloni je.    
    shareShapeContainer.classList.toggle("display-none");         
}

// Mobile Share Toggle

const mobileAuthorArea = document.querySelector(".mobile-author-area");
if (!mobileAuthorArea) {
    console.error("Mobile author area not found");
}

const mobileSocialSharingBar = document.querySelector(".mobile-social-sharing-bar");
if (!mobileSocialSharingBar) {
    console.error("Mobile social sharing bar not found");
}

const mobileShareBtnContainer = document.querySelector(".mobile-share-btn-container");
if (!mobileShareBtnContainer) {
    console.error("Mobile share button container not found");
}

mobileShareBtnContainer.addEventListener("click", function() {

    mobileAuthorArea.style.display = "none";
    mobileSocialSharingBar.style.display = "flex";

})

const mobileSocialSharingBtn = document.querySelector(".mobile-social-sharing-btn-container");
if (!mobileSocialSharingBtn) {
    console.error("Mobile social sharing button not found");
}

mobileSocialSharingBtn.addEventListener("click", function() {

    mobileAuthorArea.style.display = "flex";
    mobileSocialSharingBar.style.display = "none";

})

