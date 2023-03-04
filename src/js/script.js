"use strict";

let numberOfFilms;

function start() {
    numberOfFilms = +prompt(`Сколько фильмов вы посмотрели?`, '');

    while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
        numberOfFilms = +prompt(`Сколько фильмов вы посмотрели?`, '');
    }
}

start();

let personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};


function rememberMyFilms() {
    for (let i = 0; i < 2; i++) {
        const a = prompt(`Один из последних просмотренных фильмов?`, ''),
              b = prompt(`На сколько оцените его?`, '');
    
    
        if (a != null && b != null && a != '' && b != '' && a.length < 50) {
            personalMovieDB.movies[a] = b; 
            console.log('done')
        } else {
            console.log('error');
            i--;
        }     
    }
}
rememberMyFilms();


function detectPersonalLevel() {
    if (personalMovieDB.count < 10) {
        console.log("Мало")
    } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
        console.log("Normal")
    } else if (personalMovieDB.count >= 30) {
        console.log("Ogo!")
    } else (
        console.log('error')
    )
}

detectPersonalLevel();


function showMyDB (arg) {
    if (!arg) {
        console.log(personalMovieDB);
    }
}
showMyDB(personalMovieDB.privat);


function writeYourGenres () {

    for (let i = 1; i < 4; i++) {
        const genre = prompt(`Ваш любимый жанр под номером ${i}`);
        personalMovieDB.genres[i - 1] = genre;
    }
    
}
writeYourGenres ();



console.log(personalMovieDB);










