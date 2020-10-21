// Declaring variables that you may want to use.
let names = ['cute', 'regular'];
let moods = ['dark', 'force', 'std'];

let dark_quotes = ["Once you start down the dark path, forever will it dominate your destiny, consume you it will.",
"In a dark place we find ourselves, and a little more knowledge lights our way.",
"Fear is the path to the dark side. Fear leads to anger. Anger leads to hate. Hate leads to suffering.",
"Always two there are, no more, no less. A master and an apprentice.",
"In the end, cowards are those who follow the dark side."];
let force_quotes = ["Luminous beings are we, not this crude matter.",
"A Jedi uses the Force for knowledge and defense, never for attack.",
"Clear your mind must be, if you are to find the villains behind this plot.",
"The force. Life creates it, makes it grow. Its energy surrounds us and binds us.",
"My ally is the Force, and a powerful ally it is."];
let std_quotes = ["Patience you must have, my young padawan.",
"When nine hundred years old you reach, look as good you will not.",
"No! Try not! Do or do not, there is no try.",
"Judge me by my size, do you?",
"Difficult to see. Always in motion is the future."
];

function respond() {
    var textbox = document.getElementById("textbox");
    var image = document.getElementById("image");
    var value = document.getElementById("myText").value;

    console.log(value);
    
    if (value.includes("cute") || value.includes("baby")){
        if (value.includes("force") && value.includes("dark")){
            image.setAttribute("src", "img/cute-dark.jpg");
            var m = "m";
            var tex = "H" + m.repeat(Math.random()*20);
            textbox.innerHTML = tex;
        }
        else if (value.includes("force")){
            image.setAttribute("src", "img/cute-force.jpg");
            var m = "m";
            var tex = "H" + m.repeat(Math.random()*20);
            textbox.innerHTML = tex;
        }
        else{
            image.setAttribute("src", "img/cute-std.jpg");
            var m = "m";
            var tex = "H" + m.repeat(Math.random()*20);
            textbox.innerHTML = tex;
        }
    }
    else {
        if (value.includes("force") && value.includes("dark")){
            image.setAttribute("src", "img/regular-dark.jpg");
            var m = "m";
            var tex = "H" + m.repeat(Math.random()*20);
            textbox.innerHTML = dark_quotes[ Math.floor(Math.random()*5)] + " " + tex;
        }
        else if (value.includes("force")){
            image.setAttribute("src", "img/regular-force.jpg");
            var m = "m";
            var tex = "H" + m.repeat(Math.random()*20);
            textbox.innerHTML = force_quotes[ Math.floor(Math.random()*5)]+ " " + tex;
        }
        else{
            image.setAttribute("src", "img/regular-std.jpg");
            var m = "m";
            var tex = "H" + m.repeat(Math.random()*20);
            textbox.innerHTML = std_quotes[ Math.floor(Math.random()*5)]+ " " + tex;
        }
    }
    document.getElementById('myText').value = '';

}