const btnRating = document.querySelector('.btn-rating')
const btnSubmit = document.getElementById('btn-submit')
const btnGroup = document.getElementById('btn-group')
const description = document.getElementById('description')
const headText = document.querySelector('h1')
const paragraph = document.querySelector('p')
const myImage = document.getElementById('myImg')
const imageBox = document.getElementById('box-img')
const resultBox = document.createElement('div')
let rating = ''

btnRating.addEventListener('click', (event) => {
    if (event.target.matches('button')) {
        rating = event.target.value;
        btnSubmit.addEventListener('click', thankyouPage)
    }
    return rating
})

function thankyouPage () {
    btnGroup.remove()
    myImage.setAttribute('src', '../images/illustration-thank-you.svg')
    imageBox.classList.add('box-second')
    myImage.classList.replace('first-img','second-img')
    description.classList.replace('desc-first','desc-second')
    description.prepend(resultBox)
    resultBox.classList.add('result')
    resultBox.innerText = `You selected ${rating} out of 5`
    headText.innerText = 'Thank you!'
    paragraph.innerText = `We appreciate you taking the time to give a rating. If you ever need more support, don't hesitate to get in touch!`
} 