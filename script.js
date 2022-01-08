let btn = document.getElementById('btn');
let form = document.getElementById('form');
// let input = document.getElementById('email');
let input = document.querySelector('input[type="email"]');

btn.addEventListener('click', validation);

function validation(e){
    e.preventDefault();
    form.onsubmit;
    
    let newP = document.createElement('p');
    newP.id = 'newP';

    // email validation
    let emailInput = input.value;
    atpos = emailInput.indexOf("@");
    dotpos = emailInput.lastIndexOf(".");

    // input validation
    if(input.value == '')
    {
        let newText = document.createTextNode('Input is empty');
        newP.appendChild(newText);
        form.appendChild(newP);
        input.focus();
        input.style.borderColor = 'red';
        setInterval(() => {
            newP.remove()
        }, 1000);
        return false;
    } else if(atpos < 1 || (dotpos - atpos < 2)){
        let newText = document.createTextNode('Please enter correct email');
        newP.appendChild(newText);
        form.appendChild(newP);
        input.focus();
        input.style.borderColor = 'red';
        setInterval(() => {
            newP.remove()
        }, 1000);
        return false;
    } else {
        input.value = "";
        input.style.borderColor = '';
        newP.style.color = 'green';
        let newText = document.createTextNode('E-mail is sent successfully');
        newP.appendChild(newText);
        form.appendChild(newP);
        setInterval(() => {
            newP.remove()
        }, 1000);
    }
    return (true);
}

