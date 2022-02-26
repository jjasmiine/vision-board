//image load in

let images = Array.from(document.querySelectorAll('.image'));

window.addEventListener('DOMContentLoaded', (e) => {
    images.forEach((image, index) => {
        setTimeout(() => {
            image.classList.add('active');
        }, index * 100);
    })
})

//toggle menu open
//onclick ="showNav() 

function showNav() {
    document.getElementById('nav').classList.toggle('active');
}