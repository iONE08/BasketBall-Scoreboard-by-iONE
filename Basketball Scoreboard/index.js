let pointsOfOne = document.getElementById('total-points-one');
pointsOfOne.textContent = 0;
let pointsOfTwo = document.getElementById('total-points-two');
pointsOfTwo.textContent = 0;
let points = 0;

function addOneOfOne() {
    points += 1;
    pointsOfOne.textContent = points;
}
function addOneOfTwo() {
    points += 1;
    pointsOfTwo.textContent = points;
}

function addTwoOfOne() {
    points += 2;
    pointsOfOne.textContent = points;
}
function addTwoOfTwo() {
    points += 2;
    pointsOfTwo.textContent = points;
}

function addThreeOfOne() {
    points += 3;
    pointsOfOne.textContent = points;
}
function addThreeOfTwo() {
    points += 3;
    pointsOfTwo.textContent = points;
}

function clearOne() {
    pointsOfOne.textContent = 0;
}
function clearTwo() {
    pointsOfTwo.textContent = 0;
}