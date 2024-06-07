function focusEmailInput(){

    var emailInput = document.getElementById('emailInput');



    emailInput.focus();
}





document.addEventListener('DOMContentLoaded', function() {
    const textElement = document.getElementById('transition-text');


textElement.classList.add('show')
});





let btn = document.querySelector("#butt");
let currmode = "light";
let body = document.querySelector(".darklight");

btn.addEventListener("click" , () => {
    if(currmode==="light")
        {
            currmode = "dark";
            body.classList.add("dark");
            body.classList.remove("light");
        }
        else {
            currmode = "light";
            body.classList.add("light");
            body.classList.remove("dark");
        }
        console.log(currmode);
});





















document.querySelectorAll('.question').forEach(question => {
    question.addEventListener('click', () => {
        const answer = question.nextElementSibling;
        const icon = question.querySelector('.toggle-icon');

        if (answer.classList.contains('active')) {
            answer.classList.remove('active');
            icon.classList.remove('active');
        } else {
            document.querySelectorAll('.answer').forEach(ans => ans.classList.remove('active'));
            document.querySelectorAll('.toggle-icon').forEach(icn => icn.classList.remove('active'));
            answer.classList.add('active');
            icon.classList.add('active');
        }
    });
});
