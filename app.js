const mainCont = document.querySelector(".main__container");
const thanksCont = document.querySelector(".thank-you"); 
const submitBtn = document.getElementById('submit');
const rating = document.getElementById('rating');
const rates = document.querySelectorAll(".btn");

//when click on submit btn, thankyou class will not have hidden class
submitBtn.addEventListener("click", () => {
    thanksCont.classList.remove("hidden");
    mainCont.style.display = "none"; //& maincontainer disappear
})

rates.forEach((rate) => {
    rate.addEventListener('click', () => {
        rating.innerHTML = rate.innerHTML;
    })
} )