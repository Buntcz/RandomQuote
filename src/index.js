import './style.css'
import { emptyContainer } from './emptyPage'
import { generateQuote } from './generateQuote'
import { emptyQuote } from './emptyPage'

const generateButton = document.querySelector(".CTA")
const generateNew = document.querySelector(".newOne")


generateButton.addEventListener("click", () => {
   emptyContainer();
   generateQuote();
})

generateNew.addEventListener("click", () => {
    emptyQuote();
    generateQuote();
})
