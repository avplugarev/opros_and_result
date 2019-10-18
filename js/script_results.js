const progress_cats = document.querySelector('#cats')
const progress_dogs = document.querySelector('#dogs')
const progress_parrots = document.querySelector('#parrots')


const header = new Headers({
    'Access-Control-Allow-Credentials': true,
    'Access-Control-Allow-Origin': '*'
})

const url = new URL('https://sf-pyw.mosyag.in/sse/stream-randoms')
const url_new = new URL('https://sf-pyw.mosyag.in/sse/vote/stats')

const ES = new EventSource(url_new, header) //слушаем инфу по прогрессу от сервера

ES.onerror = error => {
    ES.readyState ? progress.textContent = "Some error" : null;
}

ES.onmessage = message => {
    message_vocabular=message.data.split(',')
    cats=message_vocabular[0].split(':')
    parrots=message_vocabular[1].split(':')
    dogs=message_vocabular[2].split(':')
    dogs=dogs[1].split('}')

    progress_cats.style.cssText = `width: ${cats[1]}%;`
    progress_cats.textContent = `${cats[1]}`
    progress_dogs.style.cssText = `width: ${dogs[0]}%;`
    progress_dogs.textContent = `${dogs[0]}`
    progress_parrots.style.cssText = `width: ${parrots[1]}%;`
    progress_parrots.textContent = `${parrots[1]}`
}

