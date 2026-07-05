let query;
let link;
let engine;

const engineIntro = {"DuckDuckGo": "https://www.duckduckgo.com/?=",
    "StartPage": "https://www.startpage.com/do/metasearch.pl?query=", 
    "Google": "https://www.google.com/search?hl=en&q="};

const containAll = document.getElementById("containAll");
const searchEngineSelect = document.getElementById("searchEngineSelect");

function search() {
    query = containAll.value;
    link = engineIntro[engine] + query;
    window.open(link);
}

setInterval(function() {engine = searchEngineSelect.value}, 10)