const modal = document.getElementById('myModal');
const btn = document.getElementById('myBtn');
const span = document.getElementsByClassName('close')[0];

window.onclick = event => {
    if(event.target == modal ) return modal.style.display = 'none'
}

btn.onclick = () => {
    modal.style.display = 'block';
}

span.onclick = () => {
    modal.style.display = 'none';
}