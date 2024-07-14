let time = document.getElementById('current-time');
let today = document.getElementById('current-date');
let date = new Date();
let day = date.getDate();
let month = date.getMonth()+1;
let year = date.getFullYear();
today.innerHTML = `${day}/${month}/${year}`;
time.innerHTML = date.toLocaleTimeString();

setInterval(() => {
    let date = new Date();
    time.innerHTML = date.toLocaleTimeString();

}, 1000);
