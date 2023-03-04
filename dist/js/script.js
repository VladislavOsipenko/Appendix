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





const personalMovieDB = {
    count: 0,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
    start: function() {     //start был функцией, а стал методом в обьекте personalMovieDBб так же и со следующими.
        personalMovieDB.count = prompt('Сколько фильмов вы уже посмотрели?', '');
    
        while (personalMovieDB.count == '' || personalMovieDB.count == null || isNaN(personalMovieDB.count)) {
            personalMovieDB.count = prompt('Сколько фильмов вы уже посмотрели?', '');
        }
    },
    rememberMyFilms: () => {
        for (let i = 0; i < 2; i++) {
            const a = prompt('Один из последних просмотренных фильмов?', '').trim(),
                  b = prompt(' сколько оцените его?', '');
        
            if (a != null && b != null && a != '' && b != '' && a.length <50) {
                personalMovieDB.movies[a] = b;
                console.log('done!');
            } else {
                console.log('error');
                i--;
            }
        }
            
    },
    detectPersonalLevel:() => {
        if (personalMovieDB.count <= 10) {
            console.log('Просмотрено довольно мало фильмов');
        } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
            console.log('Вы класный зритель!');
        
        } else if (personalMovieDB.count >= 30) {
            console.log('Вы киноман!');
        } else {
            console.log('Произошла ошибка!');
        }
    },
    showMyDB: (hidden) => {
        if (!hidden) {
            console.log(personalMovieDB);
        }
    },
    toggleVisibleMyDB: () => {
        if (personalMovieDB.privat) {
            personalMovieDB.privat = false;
        } else (
            personalMovieDB.privat = true
        )
    },
    writeYoyrGenres: function() {
        for (let i = 1; i <= 3; i++) {
            const genre = prompt(`Ваш любимый жанр под номером ${i}`).toLowerCase();

            if (genre === '' || genre == null) {
                console.log('Вы ввели неправельные данные');
                i--;
            } else {
                personalMovieDB.genres[i - 1] = genre;
            }
                 
        }

        personalMovieDB.genres.forEach((item, i) => {
            console.log(`Любимый жанр ${i + 1} - это ${item} `)
        });
    }
};













    