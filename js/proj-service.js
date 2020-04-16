'use strict';

var gProjs;

console.log(gProjs);

function createProjs() {
    var projs = [

        createProj('Connect 4','Game',
            'The familiar game with a different flair.',
             'img/myPic/Connect 4 - thumb.png','img/myPic/Connect 4.png', 'https://matannadav.github.io/four-in-a-row/',['Recursion']),

        createProj('Eventera','Events sharing platform',
            'An event management & sharing platform, complete with a powerful server',
            'img/myPic/Eventera - thumb.png','img/myPic/Eventera.png','http://eventera.herokuapp.com/' ,['Inputs', 'Selectors']),

        createProj('MemeGen', 'Meme Generator',
            'A Meme Generator using HTML5 Canvas & Vanilla JS',
            'img/myPic/MemeGen - thumb.png','img/myPic/MemeGen.png', 'https://matannadav.github.io/meme-gen/',['Loops', 'Globals']),
        createProj('HeroWeather', 'Weather and Photos of locations around the world',
            'Something i wanted to develop for some time. Weather and Photos of places around the world with a flair',
            'img/myPic/HeroWeather - thumb.jpg','img/myPic/HeroWeather.jpg', 'https://github.com/MatanNadav/HeroWeather',['Vue', 'Node.js']),

        createProj('Appsus', 'Email & Notes',
            'Leaning on the familiar gmail, i developed a quirky email & notes app with a lot of features',
            'img/myPic/Appsus - thumb.png','img/myPic/Appsus.png','https://matannadav.github.io/AppSus/#/',['Arrays', 'Loops']),

        createProj('E-store', 'Clothing and apparel store',
            'Dynamically generated HTML components and responsivity',
            'img/myPic/e-store - thumb.png','img/myPic/e-store.png', 'https://github.com/MatanNadav/E-Commerce-FED',['Jquery', 'bootstrap']),

    ]
    gProjs = projs;
    return projs;
}

function createProj(txt, title, desc, thumbnail, img, url ,label) {
    var proj = {
        id: makeId(),
        name: txt,
        title: title,
        desc: desc,
        imgThumb: thumbnail,
        img: img,
        publishedAt: new Date(),
        gameUrl: url,
        labels: label.join()
    }
    return proj;
}


function getProjById(projId) {
    var projId = gProjs.find(function (proj) {
        return proj.id === projId
    })
    return projId;
}



function makeId(length = 5) {
    var txt = '';
    var possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var ids = [];
    for (var i = 0; i < length; i++) {
        txt += possible.charAt(Math.floor(Math.random() * possible.length));
    }
    if(ids.includes(txt)) makeId();
    else{
        ids.push(txt);
        return txt;
    }
}