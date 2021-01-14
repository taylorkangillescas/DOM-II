// click nav bar
document.querySelectorAll("a").forEach(a => {
    a.addEventListener("click", function(){
        a.style.color = "red"
    });
}); // selecting a and adding event listener click to add the style red

//mouseenter header
const headerImage = document.querySelector("header > img");

headerImage.addEventListener("mouseenter", () => {
    headerImage.style.transform = "scale(1.3)";
    headerImage.style.transition = "transform 0.3s";
}) // selecting the img within the header and adding mouseenter event listener to transform the image with a scale of 1.3 and a transition of .3s

// mouseleave header
headerImage.addEventListener("mouseleave", () => {
    headerImage.style.transform = "scale(1)";
}) // using mouseleave event listener to revert the headerImage back to its original scale when the mouse leaves the frame

// click logo heading
const logoHeading = document.querySelector("h1");

logoHeading.addEventListener("click", () => {
    logoHeading.style.color = "blue";
}); // selecting h1 and using click event listener to change color to blue after mouse click

// dblclick logo heading
logoHeading.addEventListener("dblclick", () => {
    alert("Fun Bus!");
}); // using dblclick event listener to display an alert Fun Bus! after double mouse click

// .img-fluid-rounded change
const newPic = document.querySelector("img-fluid-rounded");

window.addEventListener('resize', () => {
    newPic.src = "img/insert img link here";
}); // selecting img fluid rounded and adding resize event listener when the browser window is changed. image not added but it would be newPic.src = "img/asdf.jpg" as an example.



