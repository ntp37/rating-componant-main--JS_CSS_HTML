let btnRating = document.querySelector('.btn-rating')
let btnSubmit = document.getElementById('btn-submit')
let description = document.querySelector('.description')
let headText = document.querySelector('h1')
let paragraph = document.querySelector('p')
let myImage = document.getElementById('myImg')
let imageBox = document.querySelector('.box-img')
let newTextBox = document.createElement('label')
let rating = ''

btnRating.addEventListener('click', (event) => {
    if (event.target.matches('button')) {
        rating = event.target.value;
        btnSubmit.addEventListener('click', thankyouPage)
    }
    return rating
})

function thankyouPage () {
    btnRating.remove()
    btnSubmit.remove()
    myImage.setAttribute('src', '../images/illustration-thank-you.svg')
    myImage.style.backgroundColor = 'unset'
    myImage.style.borderRadius = 'unset'
    myImage.style.width = '10.5rem'
    myImage.style.height = '7.5rem'
    myImage.style.margin = '1.2rem 0 0 0'
    imageBox.style.display = 'flex'
    imageBox.style.alignItems = 'center'
    imageBox.style.justifyContent = 'center'
    description.prepend(newTextBox)
    description.style.textAlign = 'center'
    description.style.marginTop = '0'
    description.style.padding = '0.4rem'
    newTextBox.innerText = `You selected ${rating} out of 5`
    newTextBox.style.display = 'inline-block'
    newTextBox.style.paddingTop = '0.25rem'
    newTextBox.style.width = '12.5rem'
    newTextBox.style.height = '1.7rem'
    newTextBox.style.backgroundColor = '#252d37'
    newTextBox.style.color = '#fb7413'
    newTextBox.style.borderRadius = '1.5rem'
    newTextBox.style.margin = '1rem auto 2rem'
    headText.innerText = 'Thank you!'
    paragraph.innerText = `We appreciate you taking the time to give a rating. If you ever need more support, don't hesitate to get in touch!`
}