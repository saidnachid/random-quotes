let quote = document.querySelector(".quote");
let author = document.querySelector(".author");
let newBtn = document.querySelector(".new-btn");
let copyBtn = document.querySelector(".copy-btn");
let speechBtn = document.querySelector(".speech-btn");

function generateRandomQuotes() {
  quote.innerHTML = "Getting new quotes...";
  author.innerHTML = "Getting author...";
  fetch("https://dummyjson.com/quotes")
    .then((res) => res.json())
    .then((result) => {
      let randomQoutes =
        result.quotes[Math.floor(Math.random() * result.quotes.length)];
      quote.innerHTML = `“${randomQoutes.quote}”`;
      author.innerHTML = `@${randomQoutes.author}`;
    });
}
generateRandomQuotes();
newBtn.addEventListener("click", generateRandomQuotes);

function copyText() {
  navigator.clipboard.writeText(quote.innerHTML);
  copyBtn.classList.add("success");
  copyBtn.setAttribute("disabled", true);
  copyBtn.style.cursor = "not-allowed";
  copyBtn.innerHTML = "Copied";
  setTimeout(() => {
    copyBtn.classList.remove("success");
    copyBtn.removeAttribute("disabled");
    copyBtn.style.cursor = "pointer";

    copyBtn.innerHTML = "Copy";
  }, 1000);
}

copyBtn.addEventListener("click", copyText);
