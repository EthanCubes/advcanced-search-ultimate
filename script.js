let query;
let link;
let engine;

const engineIntro = {"DuckDuckGo": "https://www.duckduckgo.com/?=",
    "StartPage": "https://www.startpage.com/do/metasearch.pl?query=", 
    "Google": "https://www.google.com/search?hl=en&q="};

const containAll = document.getElementById("containAll");
const specific = document.getElementById("specific");

function search() {
    query = containAll.value + ' "' + specific.value + '"';
    navigator.clipboard.writeText(query);
    alert("Search query copied to clipboard. Paste it into any search engine");
}