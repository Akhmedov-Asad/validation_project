document.querySelector('#text').addEventListener('focusout', myText);
document.querySelector('#password').addEventListener('focusout', myPassword);

document.querySelector('#btn').addEventListener('click', function () {
    myText();
    myPassword();
});
function myText() {
    let message, text;
    let errElement = document.getElementById('text');
    message = document.getElementById('err');
    text = document.getElementById('text').value;
    try{
        if(text === ''){
            errElement.classList.remove('valid');
            errElement.classList.add('err');
            throw 'bo\`sh'
        }
        if(text.length < 4){
            errElement.classList.remove('valid');
            errElement.classList.add('err');
            throw ' 4 tadan ko`\proq kiriting';
        }
        if(text.length > 0){
            errElement.classList.remove('err');
            errElement.classList.add('valid');
            message.innerHTML = '';
        }
    } catch(e){
        message.innerHTML = 'Qiymat' + e
    }
}

function myPassword() {
    let message, password;
    let errElement = document.getElementById('password');
    message = document.getElementById('err2');
    password = document.getElementById('password').value;
    try{
        if(password == ''){
            errElement.classList.remove('valid');
            errElement.classList.add('err');
            throw 'bo\`sh'
        }
        if(password.length > 0){
            errElement.classList.remove('err');
            errElement.classList.add('valid');
            message.innerHTML = '';
        }
    } catch(e){
        message.innerHTML = 'Qiymat' + e
    }
}