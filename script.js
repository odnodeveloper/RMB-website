
// Dynamically Set Active Class 
document.addEventListener('DOMContentLoaded', () => {
    const currentPage = window.location.href;
    const menuLinks = document.querySelectorAll('.menu a'); // Select all menu links

    menuLinks.forEach(link => {
        if (link.href === currentPage) {
            link.classList.add('active'); // Add 'active' class if URLs match
        } else {
            link.classList.remove('active'); // Remove 'active' class otherwise
        }
    });
});

// Button  
document.addEventListener('DOMContentLoaded', function () {
    const shareLoveBtn = document.querySelector('#shareLoveBtn');
    const about = document.querySelector('#about');

    // Add event listener to the button
    shareLoveBtn.addEventListener('click', function () {
        // Scroll to the another page content when the button is clicked
        about.scrollIntoView({ behavior: 'smooth' });
    });
});

// Image gallery
document.addEventListener('DOMContentLoaded', function () {
    const gallery = document.querySelector(".gallery");
    const images = [
        'images/art1.jpg', 'images/art2.jpg',
        'images/art3.jpg', 'images/art4.jpg',
        'images/art5.jpg', 'images/art6.jpg',
        'images/art7.jpg', 'images/art8.jpg',
        'images/art9.jpg', 'images/art10.jpg',
        'images/art11.jpg', 'images/art12.jpg',
        'images/art13.jpg', 'images/art14.jpg',
        'images/art15.jpg', 'images/art16.jpg',
        'images/art17.jpg', 'images/art18.jpg',
        'images/art19.jpg', 'images/art20.jpg',
        'images/art21.jpg', 'images/art22.jpg',
        'images/art23.jpg', 'images/art24.jpg',
        'images/art25.jpg',
    ];

    function displayImages(imageArray) {
        imageArray.forEach(imageSrc => {
            const a = document.createElement('a');
            console.log(a);
            a.href = 'products.html'; // Link to products page

            const img = document.createElement('img');
            img.src = imageSrc;

            // a.appendChild('img');
            gallery.appendChild(img);
        })
    }

    if (window.location.href.includes('home.html') || window.location.pathname === '/') {
        // Only for the homepage, shuffle and show 8 images
        const shuffledImages = images.sort(() => 0.5 - Math.random());
        const selectedImages = shuffledImages.slice(0, 6);
        displayImages(selectedImages);
    } else if (window.location.href.includes('products.html')) {
        // For the products page, show all images without shuffling 
        displayImages(images);
    }
})

// Map
let mapOptions = {
    scrollWheelZoom: false, // Prevent scrolling on the map
    center: [43.104, -88.348], // Set the initial center of the map
    zoom: 13 // Set the initial zoom level of the map
};

let map = L.map('map', mapOptions);
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '© OpenStreetMap'
}).addTo(map);
let marker = L.marker([43.104, -88.348]).addTo(map);
