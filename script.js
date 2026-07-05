let link;
const containAll = document.getElementById("containAll");

function search() {
    link = "https://www.duckduckgo.com/?q=" + containAll.value;
    window.open(link);
}