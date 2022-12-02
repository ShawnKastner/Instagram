let posts = [{
    'author': 'Conny',
    'profileImg': 'img/connyProfile.jpeg',
    'image': 'img/maja2.jpg',
    'description': 'Selten aber wahr, Maja springt nach einem Ball',
    'location': 'Bamberg',
    'likes': 'Gefällt 133 Mal'
},
{
    'author': 'Sidney',
    'profileImg': 'img/sidneyProfile.jpg',
    'image': 'img/sonnenuntergang.jpg',
    'description': 'Sonnenuntergang über der Wüste, in Ägypten',
    'location': 'Ägypten',
    'likes': 'Gefällt 470 Mal'
},
{
    'author': 'Conny',
    'profileImg': 'img/connyProfile.jpeg',
    'image': 'img/maja6.jpg',
    'description': 'Maja beim Springen',
    'location': 'Bamberg',
    'likes': 'Gefällt 56 Mal'
},
{
    'author': 'Shawn',
    'profileImg': 'img/shawnProfile.jpg',
    'image': 'img/shiva&maja.jpg',
    'description': 'Shiva und Maja zusammen auf der Altenburg auf dem Turm',
    'location': 'Altenburg Bamberg',
    'likes': 'Gefällt 34 Mal'
},
{
    'author': 'Sidney',
    'profileImg': 'img/sidneyProfile.jpg',
    'image': 'img/brandenburgerTor.jpg',
    'description': 'Das Brandenburger Tor in Berlin',
    'location': 'Berlin',
    'likes': 'Gefällt 123 Mal'
},
{
    'author': 'Shawn',
    'profileImg': 'img/shawnProfile.jpg',
    'image': 'img/shiva9.jpg',
    'description': 'Shiva in ihrem Körbchen',
    'location': 'Bamberg',
    'likes': 'Gefällt 225 Mal'
},
{
    'author': 'Shawn',
    'profileImg': 'img/shawnProfile.jpg',
    'image': 'img/shiva10.jpg',
    'description': 'Da will man einmal ein ordentliches Foto und der Hund macht quatsch',
    'location': 'Bamberg',
    'likes': 'Gefällt 260 Mal'
}];

let profiles = [{
    'author': 'Shawn',
    'img': 'img/shawnProfile.jpg'
},
{
    'author': 'Conny',
    'img': 'img/connyProfile.jpeg'
},
{
    'author': 'Sidney',
    'img': 'img/sidneyProfile.jpg'
}
]

function show() {
    showProfiles();
    for (let i = 0; i < posts.length; i++) {
        const element = posts[i];

        document.getElementById('postContent').innerHTML += showTemplate(element);
    }
}

function showProfiles() {
    for (let i = 0; i < profiles.length; i++) {
        const profile = profiles[i];

        document.getElementById('profiles').innerHTML += profilesTemplate(profile, i);
    }
}

function follow(i) {
    document.getElementById(`followButton${i}`).innerHTML = /*html*/`<span class="clickFollow"><b>Gefolgt</b></span>`;
}

function showTemplate(element) {
    return /*html*/`
    <div class="postContent">
        <div class="headline">
            <img class="profileImg" src="${element['profileImg']}">
            <div class="distancePadding"><span><b>${element['author']}</b></span></div>
        </div>
        <img src="${element['image']}">
        <div class="icons">
            <img src="img/favorite.ico">
            <img src="img/speech.ico">
            <img class="arrowRotate" src="img/share.ico">
        </div>
        <div class="likes">
            <span><b>${element['likes']}</b></span>
        </div>  
        <div class="description">
        <span><b>${element['author']}</b></span>
        <span class="distancePadding">${element['description']}</span>
        </div>
    </div>`;
}

function profilesTemplate(profile, i) {
    return /*html*/`
    <div class="profileContainer">
        <img class="profileImgRight" src="${profile['img']}"><span><b>${profile['author']}</b></span>
        <button onclick="follow(${i})" id="followButton${i}" class="followButton"><b>Folgen</b></button>
    </div>`;
}