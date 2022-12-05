let posts = [{
    'author': 'Conny',
    'profileImg': 'img/connyProfile.jpg',
    'image': 'img/maja2.jpg',
    'description': 'Selten aber wahr, Maja springt nach einem Ball',
    'location': 'Bamberg',
    'likes': 'Gefällt 133 Mal',
},
{
    'author': 'Sidney',
    'profileImg': 'img/sidneyProfile.jpg',
    'image': 'img/sonnenuntergang.jpg',
    'description': 'Sonnenuntergang über der Wüste, in Ägypten',
    'location': 'Ägypten',
    'likes': 'Gefällt 470 Mal',
},
{
    'author': 'Shawn',
    'profileImg': 'img/shawnProfile.jpg',
    'image': 'img/shiva&maja.jpg',
    'description': 'Shiva und Maja zusammen auf der Altenburg auf dem Turm',
    'location': 'Altenburg Bamberg',
    'likes': 'Gefällt 34 Mal',
},
{
    'author': 'Conny',
    'profileImg': 'img/connyProfile.jpg',
    'image': 'img/maja6.jpg',
    'description': 'Maja beim Springen',
    'location': 'Bamberg',
    'likes': 'Gefällt 56 Mal',
},
{
    'author': 'Sidney',
    'profileImg': 'img/sidneyProfile.jpg',
    'image': 'img/brandenburgerTor.jpg',
    'description': 'Das Brandenburger Tor in Berlin',
    'location': 'Berlin',
    'likes': 'Gefällt 123 Mal',
},
{
    'author': 'Shawn',
    'profileImg': 'img/shawnProfile.jpg',
    'image': 'img/shiva9.jpg',
    'description': 'Shiva in ihrem Körbchen',
    'location': 'Bamberg',
    'likes': 'Gefällt 225 Mal',
},
{
    'author': 'Conny',
    'profileImg': 'img/connyProfile.jpg',
    'image': 'img/bootÄgypten.jpg',
    'description': 'Private Bootstour auf dem roten Meer',
    'location': 'Ägypten',
    'likes': 'Gefällt 356 Mal',
},
{
    'author': 'Shawn',
    'profileImg': 'img/shawnProfile.jpg',
    'image': 'img/shiva10.jpg',
    'description': 'Da will man einmal ein ordentliches Foto und der Hund macht quatsch',
    'location': 'Bamberg',
    'likes': 'Gefällt 260 Mal',
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
}]

let comments = [];

function render() {
    renderProfiles();
    for (let i = 0; i < posts.length; i++) {
        const element = posts[i];

        document.getElementById('postContent').innerHTML += showTemplate(element, i);
    }
}

function renderProfiles() {
    for (let i = 0; i < profiles.length; i++) {
        const profile = profiles[i];

        document.getElementById('profiles').innerHTML += profilesTemplate(profile, i);
    }
}

function follow(i) {
    document.getElementById(`followButton${i}`).innerHTML = /*html*/`
        <span class="clickFollow"><b>Gefolgt</b></span>`;
}

function post(i) {
    let comment = document.getElementById(`inputComment${i}`).value;
    comments.push(comment);

    let myComment = document.getElementById(`writeComment${i}`);        
    myComment.innerHTML += /*html*/`
    <div>
        <span><b>Shawn</b></span>
        <span>${comment}</span>
    </div>`; 
    document.getElementById(`inputComment${i}`).value = '';
}

function showTemplate(element, i) {
    return /*html*/`
    <div class="postContent">
        <div class="imgHeadline">
            <div class="authorContainer">
                <img class="profileImg" src="${element['profileImg']}">
                <div class="locationContainer">
                    <span><b>${element['author']}</b></span>
                    <span class="locationSpan">${element['location']}</span>
                </div>
            </div>
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
        <span>${element['description']}</span>
        </div>
        <div class="commentsContainer" id="writeComment${i}"></div>
        <div class="commentInputContainer">
            <input id="inputComment${i}" class="commentInput" type="text" placeholder="Kommentieren...">
            <button onclick="post(${i})">Posten</button>
        </div>
    </div>`;
}

function profilesTemplate(profile, i) {
    return /*html*/`
    <div class="profileContainer">
        <div class="nameImg">
            <img class="profileImg" src="${profile['img']}"><span><b>${profile['author']}</b></span>
        </div>
        <button onclick="follow(${i})" id="followButton${i}"><b>Folgen</b></button>
    </div>`;
}