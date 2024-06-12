const api = "https://api.quotable.io/random"
let actualQuote = document.querySelector(".actualQuote")
let author = document.querySelector(".author")

let generateQuote = () => {
    fetch(api)
    .then((data) => data.json())
    .then((item) => {
        actualQuote.textContent = `'${item.content}'`
        author.textContent = `"${item.author}"`
    })
}

export {generateQuote}