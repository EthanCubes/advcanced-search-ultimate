let query;
let link;
let engine;

let queryElements = {
    all: [],
    specific: "",
    none: [],
    site: "",
};

const engineIntro = {"DuckDuckGo": "https://www.duckduckgo.com/?=",
    "StartPage": "https://www.startpage.com/do/metasearch.pl?query=", 
    "Google": "https://www.google.com/search?hl=en&q="};

const all = document.getElementById("all");
const specific = document.getElementById("specific");
const none = document.getElementById("none");
const site = document.getElementById("site");

function getQueryElements() {
    queryElements.all = all.value.split(/\s+/);
    queryElements.specific = specific.value;
    queryElements.none = none.value.split(/\s+/);
    queryElements.site = site.value;
}

function formQuery() {
    query = "";
    for (let i = 0; i < queryElements.all.length; i++) {
        query += queryElements.all[i] + " ";
    }
    query += "\"" + queryElements.specific + "\" ";
    for (let i = 0; i < queryElements.none.length; i++) {
        query += "-" + queryElements.none[i] + " ";
    }
    if (!(queryElements.site === "")) {
        query += "site:" + queryElements.site;
    }
}

function search() {
    getQueryElements();
    formQuery();
    navigator.clipboard.writeText(query);
    alert("Search query copied to clipboard. Paste it into any search engine");
}