const iconContainers = document.querySelectorAll('.icon-container');

iconContainers.forEach(function (iconContainer) {
    iconContainer.addEventListener('click', () => {
        const plusIcon = iconContainer.querySelector('.plus-icon');
        plusIcon.classList.toggle('minus-icon');
    });
});






const openMapLink = document.getElementById("open-map");
const mapContainer = document.getElementById("map-container");
const closeMapButton = document.getElementById("close-map");


openMapLink.addEventListener("click", function () {
    mapContainer.style.display = "block";
    closeMapButton.style.display = "block";
});


closeMapButton.addEventListener("click", function () {
    mapContainer.style.display = "none";
    closeMapButton.style.display = "none";
});








var colChangeBtn = document.getElementById('colChange');
var col6 = document.querySelectorAll('#products .col-6');

colChangeBtn.addEventListener('click', function () {
    if (col6[0].classList.contains('col-12')) {
        for (var i = 0; i < col6.length; i++) {
            col6[i].classList.remove('col-12');
            col6[i].classList.add('col-6');
        }
    } else {
        for (var i = 0; i < col6.length; i++) {
            col6[i].classList.remove('col-6');
            col6[i].classList.add('col-12');
        }
    }
});


var colChangeBtn = document.getElementById('colChange')
var col3 = document.querySelectorAll("#products .col-lg-3")
colChangeBtn.addEventListener('click', () => {
    if (col3[0].classList.contains('col-12')) {
        for (var i = 0; i < col3.length; i++) {
            col3[i].classList.remove('col-12');
            col3[i].classList.add('col-lg-3');
        }
    } else {
        for (var i = 0; i < col3.length; i++) {
            col3[i].classList.remove('col-lg-3');
            col3[i].classList.add('col-12');
        }
    }
});

const rangeInput = document.getElementById('range-input');
const progressBar = document.querySelector('.progress-bar');
const label = document.querySelector('.range-lab')
rangeInput.addEventListener('input', () => {
    const progress = (rangeInput.value - rangeInput.min) / (rangeInput.max - rangeInput.min) * 100;
    progressBar.style.width = `${progress}%`;
    progressBar.setAttribute('aria-valuenow', rangeInput.value);
    label.innerHTML = rangeInput.value + ' star or more'
});
