window.onload = function() {
    var photoElement = document.getElementsByClassName('photo-subj')[0];
    if (photoElement) {
        photoElement.classList.add('animate-Up');
    }

    var titleElement = document.getElementsByClassName('title')[0];
    if (titleElement) {
        setTimeout(function() {
            titleElement.classList.add('animate-Right');
        }, 1200); 
    }

    var subtitleElement = document.getElementsByClassName('subtitle')[0];
    if (subtitleElement) {
        setTimeout(function() {
            subtitleElement.classList.add('animate-Down');
        }, 1000); 
    }
};


document.addEventListener('DOMContentLoaded', function(){
    const nextButton = document.getElementById('next');
    const prevButton = document.getElementById('previous');
    const photoContainers = document.getElementsByClassName('photo-container');

    let currentIndex = 0;

    photoContainers[currentIndex].classList.add('active');
    const photoCircles = photoContainers[currentIndex].querySelectorAll('.circle');
    photoCircles[currentIndex].classList.add('active');



    nextButton.addEventListener('click', function(){
        
        photoContainers[currentIndex].classList.remove('active');
        const photoCircles = photoContainers[currentIndex].querySelectorAll('.circle');
        photoCircles[currentIndex].classList.remove('active');
    
        currentIndex++;
        if (currentIndex >= photoContainers.length){
            currentIndex = 0;
        }
        
        photoContainers[currentIndex].classList.add('active');
        photoContainers[currentIndex].classList.add('animate-slideIn');
        const newPhotoCircles = photoContainers[currentIndex].querySelectorAll('.circle');
        newPhotoCircles[currentIndex].classList.add('active');

    });
    


    prevButton.addEventListener('click', function(){

        photoContainers[currentIndex].classList.remove('active');
        const photoCircles = photoContainers[currentIndex].querySelectorAll('.circle');
        photoCircles[currentIndex].classList.remove('active');
    
        currentIndex--;
        if (currentIndex < 0){
            currentIndex = photoContainers.length - 1;
        }
    
        photoContainers[currentIndex].classList.add('active');
        photoContainers[currentIndex].classList.add('animate-slideOut');
        const newPhotoCircles = photoContainers[currentIndex].querySelectorAll('.circle');
        newPhotoCircles[currentIndex].classList.add('active');

    });


});




document.addEventListener('DOMContentLoaded', function(){


    const sortButton = document.getElementsById('sortButton');
    const sortContainer = document.getElementsById('sortContainer');
    const sortByName = document.getElementsById('sortByName');
    const sortByPrice = document.getElementsById('sortByPrice');
    const orderByAsc = document.getElementsById('orderByAsc');
    const orderByDesc = document.getElementsById('orderByDesc');


    sortButton.addEventListener('click', function(){
        sortContainer.classList.add('active')

    });




});
