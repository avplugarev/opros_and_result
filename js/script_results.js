const progress_cats = document.querySelector('#cats')
const progress_dogs = document.querySelector('#dogs')
const progress_parrots = document.querySelector('#parrots')


const header = new Headers({
    'Access-Control-Allow-Credentials': true,
    'Access-Control-Allow-Origin': '*'
})

const url_new = new URL('https://sf-pyw.mosyag.in/sse/vote/stats')

const ES = new EventSource(url_new, header)

ES.onerror = error => {
    ES.readyState ? progress.textContent = "Some error" : null;
}

ES.onmessage = message => {
    data = JSON.parse(message.data);
    generalResults=data.cats+data.dogs+data.parrots;

    progress_cats.style.cssText = `width: ${Math.round(data.cats/(generalResults/100))}%;`
    progress_cats.textContent = `${data.cats}`
    progress_dogs.style.cssText = `width: ${Math.round(data.dogs/(generalResults/100))}%;`
    progress_dogs.textContent = `${data.dogs}`
    progress_parrots.style.cssText = `width: ${Math.round(data.parrots/(generalResults/100))}%;`
    progress_parrots.textContent = `${data.parrots}`
}

