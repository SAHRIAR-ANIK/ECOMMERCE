const bar = document.getElementById('bar');

const close = document.getElementById('close');

const nav = document.getElementById('google');

if (bar) {
    bar.addEventListener('click', () =>{

   nav.classList.add('active');

    })
}


if (close) {
    close.addEventListener('click', () =>{

   nav.classList.remove('active');

    })
}



var hello = document.getElementById("hello");

var slide = document.getElementsByClassName("slide");

slide [ 0 ] .onclick = function ( ) {

hello.src = slide [ 0 ] .src ; }

slide [ 1 ] .onclick = function ( ) { 

hello.src = slide [ 1 ] .src ; }

slide [ 2 ] .onclick = function ( ) {

hello.src = slide [ 2 ] .src ; }

slide [ 3 ] .onclick = function ( ) { 

hello.src = slide [ 3 ] .src ; }