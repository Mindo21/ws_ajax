/*
 * This is index.js
 * Start by modifying the id, fn and sn functions to return
 * information about you, then open index.html to check what
 * else you have to do, adding functions to the end of this
 * file as necessary.
 *
 * NB: all code you write this year should use strict mode, so
 * we've enabled that by default with the first line of code.
 */

'use strict';

function id() {
    return "UP879244";
    // e.g. return "UP654321";
}

function fn() {
    return "Matus";
}

function sn() {
    return "Minarovic";
}

/*
AJAX: Create a function `showMessage` that takes two parameters: an element and
a string that is a URL. The function will fetch the URL and put the response
text into the text content of the provided element.
*/
async function showMessage(el, url) {
    const response = await fetch(url);
    const text = await response.text();
    el.textContent = text;
}

/*
AJAX: Create a function `showList` that takes two parameters: an element and a
string that is a URL. The function will fetch the URL, parse the retrieved data
as JSON; the data is guaranteed to be an array of strings. The function will then,
like the `filler` function in `ws_dom`, put the contents of the array as
list items into the provided element.
*/
async function showList(el, url) {
    const response = await fetch(url);
    const strArr = await response.json();
    strArr.forEach((str) => {
        const li = document.createElement("li");
        li.textContent = str;
        el.appendChild(li);
    });
}

/*
AJAX: Create a function `startShowingMessage` that takes two parameters: an
element and a string that is a URL. The function will use `setInterval` to make
the following task every 1s: fetch the URL and put the response text into the
text content of the provided element.
*/
function startShowingMessage(el, url) {
    setInterval(showMessage, 1000, el, url);
}

/*
AJAX: Create a function 'handleError' that accepts an element and a url as a
parameter, and shows the fetched text from the server in the element. If there
is an error, the function should set the textContent of the element to 'OH DEAR'.
*/
async function handleError(el, url) {
    const response = await fetch(url);
    if (response.ok) {
        const text = await response.text();
        el.textContent = text;
    } else {
        el.textContent = 'OH DEAR';
    }
}

/*
AJAX: Create a function `drawBox', which accepts two parameters: a canvas
element, and a URL which refers to a simple object with coordinates that you
should fetch from a server. The function draws a box at the given coordinates.
Update the coordinates and redraw the box every 1 second.
*/
async function drawBox(canvas, url) {
    setInterval(getCoordinatesAndDraw, 1000, canvas, url);
}

async function getCoordinatesAndDraw(canvas, url) {
    const res = await fetch(url);
    const obj = await res.json();
    const ctx = canvas.getContext('2d');
    ctx.fillRect(obj.x, obj.y, 10, 10);
}
