debugger;
const categoryButtons = document.querySelectorAll('.categoryfilter');
const responses = document.querySelectorAll(".reponse_hidden");

categoryButtons.forEach((categoryButton) => {
    categoryButton.addEventListener('click', () => {
        
        categoryButton.style.display = "none";
        responses.toggle
    });
});