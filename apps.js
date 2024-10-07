const btn = document.querySelector('button');
const main = document.querySelector('.container');
const url = 'data.txt';
//console.log(btn);
btn.onclick = reqData;

//btn.onclick = ()=> {   console.log('clicked');}

function output(data) {
    console.log(data);
    console.log(this.responseText);
    main.innerHTML = this.responseText;
}

function reqData(){
    const xhr = new XMLHttpRequest();
    xhr.addEventListener('load',output);
    xhr.open('GET',url);
    xhr.send();
    console.log(xhr);
}