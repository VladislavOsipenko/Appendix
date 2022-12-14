"use strict";


/* let number = 5;
const leftBorderWidth = 1;
 
const result = confirm('Are you here?');


const answer = prompt('Vam est 18?', ''); */


/* const answers = [];


answers[0] = prompt('Kak vashe imia?', '');
answers[1] = prompt('Kak vashe familia?', '');
answers[2] = prompt('Kak vashe imia?', '');

document.write(answers);


const user = 'Vlad';

alert(`Hello, ${user}`);  //Интерполяция */



const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

const a = prompt('Один из последних просмотренных фильмов?', ''),
      b = prompt('На сколько оцените его?', ''),
      c = prompt('Один из последних просмотренных фильмов?', ''),
      d = prompt('На сколько оцените его?', '');

personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d;

console.log(personalMovieDB);




