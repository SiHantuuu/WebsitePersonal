// When the user scrolls the page, execute myFunction
window.addEventListener("scroll", myFunction);

// Get the navbar
let navbar = document.getElementById("navbar");

// Get the offset position of the navbar
let sticky = navbar.offsetTop;

// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
  if (window.scrollY > sticky) {
    navbar.classList.add("sticky");
    console.log(sticky);
  } else {
    navbar.classList.remove("sticky");
  }
}

// test

document
  .getElementById("search-form")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    var searchQuery = document
      .getElementById("search-input")
      .value.toLowerCase();
    var searchResults = searchContent(searchQuery);
    displaySearchResults(searchResults);
  });

function searchContent(query) {
  var content = [
    "Lorem ipsum dolor sit amet",
    "Consectetur adipiscing elit",
    "Sed do eiusmod tempor incididunt",
    "Ut labore et dolore magna aliqua",
    "Ut enim ad minim veniam",
    "Quis nostrud exercitation ullamco",
    "TARGETq",
    "Target",
  ];

  var results = content.filter(function (item) {
    return item.toLowerCase().includes(query);
  });

  return results;
}

function displaySearchResults(results) {
  var resultsContainer = document.createElement("div");
  resultsContainer.setAttribute("id", "search-results");

  if (results.length > 0) {
    results.forEach(function (result) {
      var resultItem = document.createElement("p");
      resultItem.textContent = result;
      resultsContainer.appendChild(resultItem);
    });
  } else {
    var noResults = document.createElement("p");
    noResults.textContent = "Tidak ada hasil yang ditemukan.";
    resultsContainer.appendChild(noResults);
  }

  var existingResultsContainer = document.getElementById("search-results");
  if (existingResultsContainer) {
    existingResultsContainer.remove();
  }

  var asideElement = document.getElementsByTagName("aside")[0];
  asideElement.appendChild(resultsContainer);
}
