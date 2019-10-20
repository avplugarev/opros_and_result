const dog_btn = document.querySelector('#dog');
const cat_btn = document.querySelector('#cat');
const parrot_btn = document.querySelector('#parrot');

function sendVote(animal) {
    let xhr = new XMLHttpRequest();
    let url_post  = new URL ('https://sf-pyw.mosyag.in/sse/vote/'+animal);
    let send_data=''
    xhr.open("POST", url_post, true)
    xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded')
    xhr.send(send_data);
}

dog_btn.onclick = () => {
    sendVote(dogs)
}

cat_btn.onclick = () => {
    sendVote(cats)
}

parrot_btn.onclick = () => {
    sendVote(parrots)
}


