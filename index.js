let accordian = document.getElementById("accordian");

fetch("https://newsapi.org/v2/top-headlines/sources?apiKey=7979d7ea4cba45afaf1d89bbbc583273").then(response => {
    return response.json();
}).then(data => {
    console.log(data)
    console.log(data.sources)
})
