'use strict';

var gProjs;

// console.log(gProjs);

function createProjs() {
    var projs = [

        createProj('Connect 4','Game',
            'The familiar game using HTML5 canvas with animations and dynamically generated game. Game logic & design',
             'img/myPic/Connect 4 - thumb.png','img/myPic/Connect 4.png', 'https://matannadav.github.io/four-in-a-row/',['Recursion']),

        createProj('Eventera','Events sharing platform',
            'An event management & sharing platform, complete with a powerful server',
            'img/myPic/Eventera - thumb.png','img/myPic/Eventera.png','http://eventera.herokuapp.com/' ,['Inputs', 'Selectors']),

        createProj('HeroWeather', 'Weather and Photos of locations around the world',
            'Weather and Photos of places around the world complete with client, server and DB',
            'img/myPic/HeroWeather - thumb.jpg','img/myPic/HeroWeather.jpg', 'https://github.com/MatanNadav/HeroWeather',['Vue', 'Node.js']),

        createProj('Appsus', 'Email & Notes',
            'One of my earliest projects, mainly focusing on design & css',
            'img/myPic/Appsus - thumb.png','img/myPic/Appsus.png','https://matannadav.github.io/AppSus/#/',['Arrays', 'Loops']),

        createProj('E-store', 'Clothing and apparel store',
            'Dynamically generated HTML components. Cart & Checkout features',
            'img/myPic/e-store - thumb.png','img/myPic/e-store.png', 'https://github.com/MatanNadav/E-Commerce-FED',['Jquery', 'bootstrap']),

        createProj('My Repo', 'GitHub repo',
            'GitHub repo with many different things i developed',
            'img/myPic/github-image - thumb.png','img/myPic/github-image.png', 'https://github.com/MatanNadav',['Loops', 'Globals']),

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