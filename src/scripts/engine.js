const state = {
    score:{
        playerScore: 0,
        computerScore: 0,
        scoreBox: document.getElementById("score_points"),
    },
    cardSprite:{
        avatar: document.getElementById("card_image"),
        name: document.getElementById("card_name"),
        type: document.getElementById("card_type"),
    },
    fieldCards:{
        player: document.getElementById("player-field-card"),
        computer: document.getElementById("computer-field-card"),
    },
    action:{
        button:document.getElementById("netx-duel"),
    }
};

const pathImages = ".src/assets/icons/"

const cardData = [{
    id: 0,
    name: "Blue Eyes White Dragon",
    img: pathImages + "dragon.png",
},
];

function init(){}

init();