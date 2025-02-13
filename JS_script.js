const messages = [
    "Are you sure?", 
    "Are you really sure?", 
    "Change your mind.",
    "Say yes, you big foreheaded fuck.",
    "ugly headahh.",
    "Needs a cheatsheet and desmos for highschool level math headahh",
    "looking at you made me gay headahh.", 
    "Your self-esteem more brittle than your macaron shells headahh", 
    "lookin a lil heavy today headahh.", 
    "flowers become the spotlight when you hold them headahh.",
    "have you regretted not clicking yes yet?",
    "it doesn't get nicer the more you click no",
    "this website wasn't worth making anymore", 
    "dullest tool in the shed headahh",
    "parents wished you were autistic since at least they have a chance at having unique talents, headahh",
    "okay if you reached this point, just exit out of this website cuz :/",

    // ...additional messages...
];

let messageIndex = 0;

function handleNoClick() {
    if (messageIndex < messages.length) {
        alert(messages[messageIndex]);
        messageIndex++;
    } else {
        alert('Oh no! Maybe next time.');
    }
}

function handleYesClick() {
    window.location.href = 'yes_page.html';
}

document.addEventListener('DOMContentLoaded', () => {
    document.querySelector('.yes-button').addEventListener('click', handleYesClick);
    document.querySelector('.no-button').addEventListener('click', handleNoClick);
});
