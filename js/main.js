const shareBtn = document.querySelector('.shareBtn')
const social = document.querySelector('.social')

console.log(shareBtn)
console.log(social)

// function button() {

// }

shareBtn.addEventListener('click', () => {
	social.classList.toggle('active')
    shareBtn.classList.toggle('activeBtn')
})
