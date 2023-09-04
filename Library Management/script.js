let searchEl = document.getElementById("searchInput");
let resultsEl = document.getElementById("searchResults");
let spinnerEl = document.getElementById("spinner");

function createAndAppendResult(result) {
    console.log("createAndAppendResult Function:");
    let {
        title,
        imageLink,
        author
    } = result;
    console.log("Author: " + author + "\n Link: " + imageLink + "\n Title: " + title);
    let resultItemEl = document.createElement("div");
    resultItemEl.classList.add("result-Item", "col-6");
    let imageItemEl = document.createElement("img");
    imageItemEl.classList.add("image-item");
    imageItemEl.src = imageLink;
    let authorItemEl = document.createElement("p");
    authorItemEl.textContent = author;
    resultItemEl.appendChild(imageItemEl);
    resultItemEl.appendChild(authorItemEl);
    resultsEl.appendChild(resultItemEl);
}

function displayResults(searchResults) {
    console.log("displayResults Function:");
    spinnerEl.classList.add("d-none");
    for (let result of searchResults) {
        console.log(result);
        createAndAppendResult(result);
    }
}

function searchBooks(event) {
    if (event.key === "Enter") {
        resultsEl.textContent = "";
        spinnerEl.classList.remove("d-none");
        let title = searchEl.value;
        let url = "https://apis.ccbp.in/book-store?title=" + title;
        let options = {
            method: "GET"
        };

        fetch(url, options)
            .then(function(response) {
                return response.json();
            })
            .then(function(jsonData) {
                let {
                    search_results
                } = jsonData;
                console.log(search_results);
                if ((search_results) === {}) {
                    let resultsHeader = document.createElement("h1");
                    resultsHeader.textContent = "No Results Found";
                    resultsEl.appendChild(resultsHeader);
                } else {
                    let resultsHeader = document.createElement("h1");
                    resultsHeader.textContent = "POPULAR BOOKS";
                    resultsEl.appendChild(resultsHeader);
                    displayResults(search_results);
                }
            });
    }
}

searchEl.addEventListener("keydown", searchBooks);