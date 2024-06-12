const quoteContainer = document.querySelector(".quoteContainer");
const showPage = document.querySelector(".generatedQuote");
const actualQuote = document.querySelector(".actualQuote");
const author = document.querySelector(".author");

function emptyContainer() {
    quoteContainer.innerHTML = " "
    showPage.style.display = "flex"
}

function emptyQuote() {
    actualQuote.textContent = ""
    author.textContent = ""
}

export {emptyContainer, emptyQuote}