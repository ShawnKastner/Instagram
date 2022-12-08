let posts = [{
    'author': 'Conny',
    'profileImg': 'img/connyProfile.jpg',
    'image': 'img/maja2.jpg',
    'description': 'Selten aber wahr, Maja springt nach einem Ball',
    'location': 'Bamberg',
    'likes': 133,
    'comments': [],
},
{
    'author': 'Sidney',
    'profileImg': 'img/sidneyProfile.jpg',
    'image': 'img/sonnenuntergang.jpg',
    'description': 'Sonnenuntergang über der Wüste, in Ägypten',
    'location': 'Ägypten',
    'likes': 470,
    'comments': [],
},
{
    'author': 'Shawn',
    'profileImg': 'img/shawnProfile.jpg',
    'image': 'img/shiva&maja.jpg',
    'description': 'Shiva und Maja zusammen auf der Altenburg auf dem Turm',
    'location': 'Altenburg Bamberg',
    'likes': 34,
    'comments': [],
},
{
    'author': 'Conny',
    'profileImg': 'img/connyProfile.jpg',
    'image': 'img/maja6.jpg',
    'description': 'Maja beim Springen',
    'location': 'Bamberg',
    'likes': 56,
    'comments': [],
},
{
    'author': 'Sidney',
    'profileImg': 'img/sidneyProfile.jpg',
    'image': 'img/brandenburgerTor.jpg',
    'description': 'Das Brandenburger Tor in Berlin',
    'location': 'Berlin',
    'likes': 123,
    'comments': [],
},
{
    'author': 'Shawn',
    'profileImg': 'img/shawnProfile.jpg',
    'image': 'img/shiva9.jpg',
    'description': 'Shiva in ihrem Körbchen',
    'location': 'Bamberg',
    'likes': 225,
    'comments': [],
},
{
    'author': 'Conny',
    'profileImg': 'img/connyProfile.jpg',
    'image': 'img/bootÄgypten.jpg',
    'description': 'Private Bootstour auf dem roten Meer',
    'location': 'Ägypten',
    'likes': 356,
    'comments': [],
},
{
    'author': 'Shawn',
    'profileImg': 'img/shawnProfile.jpg',
    'image': 'img/shiva10.jpg',
    'description': 'Da will man einmal ein ordentliches Foto und der Hund macht quatsch',
    'location': 'Bamberg',
    'likes': 260,
    'comments': [],
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

function renderContent() {
    render();
    renderProfiles();
}

function render() {
    let content = document.getElementById('postContent');
    content.innerHTML = '';

    for (let i = 0; i < posts.length; i++) {
        const post = posts[i];

        content.innerHTML += renderTemplate(post, i);

        let myComment = document.getElementById(`writeComment${i}`);
        for (let j = 0; j < post['comments'].length; j++) {
            const comment = post['comments'][j];
            myComment.innerHTML += addCommentTemplate(comment);
        }
    }
}

function renderProfiles() {
    for (let i = 0; i < profiles.length; i++) {
        const profile = profiles[i];

        document.getElementById('profiles').innerHTML += profilesTemplate(profile, i);
    }
}

function follow(i) {
    document.getElementById(`followButton${i}`).classList.add('hide');
    document.getElementById(`followed${i}`).classList.remove('hide');
}

function unfollow(i) {
    document.getElementById(`followButton${i}`).classList.remove('hide');
    document.getElementById(`followed${i}`).classList.add('hide');
}

function addComment(i) {
    let comment = document.getElementById(`inputComment${i}`);
    posts[i]['comments'].push(comment.value);
    render();
    document.getElementById(`inputComment${i}`).value = '';
}

function like(i) {
    document.getElementById(`changeToRed${i}`).classList.add('hide');
    document.getElementById(`redHeart${i}`).classList.remove('hide');

    posts[i].likes++;
    document.getElementById(`liked${i}`).innerHTML = /*html*/`
    <b>Gefällt ${posts[i].likes} Mal</b>`;
}

function unlike(i) {
    document.getElementById(`changeToRed${i}`).classList.remove('hide');
    document.getElementById(`redHeart${i}`).classList.add('hide');

    posts[i].likes--;
    document.getElementById(`liked${i}`).innerHTML = /*html*/`
    <b>Gefällt ${posts[i].likes} Mal</b>`;
}

// function filterNames() {
//     let search = document.getElementById('search').value;
//     search = search.toLowerCase();

//     let list = document.getElementById('content');
//     list.innerHTML = '';

//     for (let i = 0; i < names.length; i++) {
//         let name = posts[i];
//             if (name.toLowerCase().includes(search)) {
//             list.innerHTML += `<li>${name}</li>`;
//         }
//     }
// }

function renderTemplate(post, i) {
    return /*html*/`
    <div id="content" class="postContent">
        <div class="imgHeadline">
            <div class="authorContainer">
                <img class="profileImg" src="${post['profileImg']}">
                <div class="locationContainer">
                    <span><b>${post['author']}</b></span>
                    <span class="locationSpan">${post['location']}</span>
                </div>
            </div>
        </div>
        <img src="${post['image']}">
        <div class="icons">
            <img onclick="like(${i})" id="changeToRed${i}" src="img/favorite.ico">
            <img onclick="unlike(${i})" class="hide" id="redHeart${i}" src="img/favoriteFilled.ico">
            <img src="img/speech.ico">
            <img class="arrowRotate" src="img/share.ico">
        </div>
        <div class="likes">
            <span id="liked${i}"><b>Gefällt ${post['likes']} Mal</b></span>
        </div>  
        <div class="description">
        <span><b>${post['author']}</b></span>
        <span>${post['description']}</span>
        </div>
        <div class="commentsContainer" id="writeComment${i}"></div>
        <div class="commentInputContainer">
            <form onsubmit="addComment(${i}); return false;">
                <input id="inputComment${i}" minlength="3" required class="commentInput" type="text" placeholder="Kommentieren...">
                <button class="blueButton">Posten</button>
            </form>
        </div>
    </div>`;
}

function addCommentTemplate(comment) {
    return /*html*/`
    <div>
        <span><b>Shawn</b></span>
        <span>${comment}</span>
    </div>`;
}

function profilesTemplate(profile, i) {
    return /*html*/`
    <div class="profileContainer">
        <div class="nameImg">
            <img class="profileImg" src="${profile['img']}"><span><b>${profile['author']}</b></button>
        </div>
        <button onclick="follow(${i})" class="blueButton" id="followButton${i}"><b>Folgen</b></span>
        <button onclick="unfollow(${i})" class="blueButton clickFollow hide" id="followed${i}"><b>Gefolgt</b></button>
    </div>`;
}