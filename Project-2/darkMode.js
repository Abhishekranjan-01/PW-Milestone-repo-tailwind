const allSections = document.querySelectorAll('section');
const allh1 = document.querySelectorAll('section h1');

const alla =document.querySelectorAll('section li a');

const featuresCards =document.querySelectorAll('[data-features-cards] >div ');

const reviewCards = document.querySelectorAll('[data-review-section] > div');
// const reviewCardsParagraph = document.querySelectorAll('[data-review-section] > div >p');

console.log(reviewCards);


function darkMode(e){

    e.classList.toggle('text-black');
    e.classList.toggle('text-yellow-400');
    //All Sections 
    for(let i=0;i<allSections.length;i++){
        allSections[i].classList.toggle('bg-black');
    }
    // All H1s
    for(let i=0;i<allh1.length;i++){
        allh1[i].classList.toggle('text-gray-900');
        allh1[i].classList.toggle('text-gray-200');
    }
  
    // All Anchor Links Inside Footer
    for(let i=0;i<alla.length;i++){

        alla[i].classList.toggle('text-gray-200');
    
    }
    // All Cards Inside FeatureSecton
    for(let i=0;i<featuresCards.length;i++){

        featuresCards[i].classList.toggle('bg-white');
        featuresCards[i].classList.toggle('text-gray-500');
        featuresCards[i].classList.toggle('text-gray-200');
        featuresCards[i].classList.toggle('bg-gray-800');
    }

    // All Review Cards

    for(let i=0;i<reviewCards.length;i++){
        reviewCards[i].classList.toggle('bg-white');
        reviewCards[i].classList.toggle('bg-gray-900');

        reviewCards[i].classList.toggle('text-gray-500');
        reviewCards[i].classList.toggle('text-gray-200');
    }

    
}



