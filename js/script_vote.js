const dog = 'https://sf-pyw.mosyag.in/sse/vote/dogs'
const cat = 'https://sf-pyw.mosyag.in/sse/vote/cats'
const parrot = 'https://sf-pyw.mosyag.in/sse/vote/parrots'

const dog_btn = document.querySelector('#dog');
const cat_btn = document.querySelector('#cat');
const parrot_btn = document.querySelector('#parrot');

function sendVote(animal) {
    let xhr = new XMLHttpRequest();
    let send_data=''
    xhr.open("POST", animal, true)
    xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded')
    xhr.send(send_data);
}

dog_btn.onclick = () => {
    sendVote(dog)
}

cat_btn.onclick = () => {
    sendVote(cat)
}

parrot_btn.onclick = () => {
    sendVote(parrot)
}


