const CHOICES = [`Rock`, `Paper`, `Scissors`];

/*
 Gets a random integer in the range [min, max) with uniform distribution.
*/
function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
}

function computerPlay() {
    return CHOICES[getRandomInt(0, 3)];
}

