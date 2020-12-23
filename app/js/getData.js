export function getData(url) {
xmlHttp = new XMLHttpRequest();
xmlHttp.onload = function (ev) {

};
xmlHttp.open('GET', 'url', true);
xmlHttp.send();
}
