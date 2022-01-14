/* When the user clicks on the button,
toggle between hiding and showing the dropdown content */
function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
}

// Close the dropdown menu if the user clicks outside of it
window.onclick = function (event) {
    if (!event.target.matches('.dropbtn')) {
        var dropdowns = document.getElementsByClassName("dropdown-content");
        var i;
        for (i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }
    }
}


// Game collection
const collection = [
    // 1# World of Warcraft
    {
        name: 'World of Warcaft',
        developer: 'Blizzard Entertainment',
        releaseYear: '23 november 2004',
        picture: 'https://images.blz-contentstack.com/v3/assets/blt3452e3b114fab0cd/blt0d3f8b6a37a99e8d/601d9493912a490c07af5702/WoW_Ragnaros_3840x2160_enUS.jpg?auto=webp&quality=75',
        genre: ['MMO-RPG'],
        description: 'The leader of the Horde, Thrall, has settled in the land of Durotar, where he asks the Forsaken to join the Orcs, Tauren and the Trolls. Meanwhile, Dwarves, Gnomes and the ancient Night Elves have joined the Alliance, led by the realm of Humans in Stormwind.',
        link: '<a href="https://worldofwarcraft.com/en-us/">Visit The World</a>'

    },

    // 2# Call of Duty
    {
        name: 'Call of Duty',
        developer: ['Activision', 'Treyarch'],
        releaseYear: '29 oktober 2003',
        picture: 'https://sm.ign.com/ign_nl/screenshot/default/call-of-duty-modern-warfare-twitter-facebook-instagram-going_x817.jpg',
        genre: 'FPS',
        description: 'Call of Duty is a series of computer games developed by Infinity Ward, Treyarch and Sledgehammer Games. After the success of the first game, more games followed',
        link: '<a href="https://worldofwarcraft.com/en-us/">Visit The World</a>'

    },

    // 3# Rocket league
    {
        name: 'Rocket league',
        developer: ['Psyonix'],
        releaseYear: '7 juli 2015',
        picture: 'https://cdn1.epicgames.com/offer/9773aa1aa54f4f7b80e44bef04986cea/6609d2e1-62d9-4094-9cb7-26d9a7f5ba3f_2560x1440-071db7b0d39d5635f684940c1e3c4ec3',
        genre: 'Multiplayer',
        description: 'Rocket League is a football-like computer game played with in-game vehicles. Rocket League is developed and published by Psyonix. In the game, players drive a vehicle with which they must try to score goals on a field that resembles a football field.',
        link: '<a href="https://worldofwarcraft.com/en-us/">Visit The World</a>'

    },

    // 4# league of legends
    {
        name: 'League of Legends',
        developer: 'Riot Games',
        releaseYear: '27 oktober 2009',
        picture: 'https://cdn1.epicgames.com/offer/9773aa1aa54f4f7b80e44bef04986cea/6609d2e1-62d9-4094-9cb7-26d9a7f5ba3f_2560x1440-071db7b0d39d5635f684940c1e3c4ec3',
        genre: 'Battle Arena',
        description: 'League of Legends is een computerspel ontwikkeld en uitgebracht door Riot Games in 2009. Het spel is gebaseerd op een modificatie van het spel Warcraft III. League of Legends is compatibel met het besturingssysteem Microsoft Windows en sinds 2013 ook met Mac OS X.',
        link: '<a href="https://worldofwarcraft.com/en-us/">Visit The World</a>'

    },

    // 5# Ark
    {
        name: 'Ark survival evolved',
        developer: 'Studio Wildcard',
        releaseYear: '2 juni 2015',
        picture: 'https://cdn1.epicgames.com/offer/9773aa1aa54f4f7b80e44bef04986cea/6609d2e1-62d9-4094-9cb7-26d9a7f5ba3f_2560x1440-071db7b0d39d5635f684940c1e3c4ec3',
        genre: 'Survival Game',
        description: 'Translated from English-Ark: Survival Evolved is a 2017 action-adventure video game developed by Studio Wildcard. In the game, players must survive on an island filled with roaming dinosaurs and other prehistoric animals, natural hazards, and potentially hostile human players.',
        link: '<a href="https://worldofwarcraft.com/en-us/">Visit The World</a>'

    },

    // 6# Overwatch
    {
        name: 'Overwatch',
        developer: ['Blizzard Entertainment', 'Iron Galaxy Studios'],
        releaseYear: '3 mei 2016',
        picture: 'https://cdn1.epicgames.com/offer/9773aa1aa54f4f7b80e44bef04986cea/6609d2e1-62d9-4094-9cb7-26d9a7f5ba3f_2560x1440-071db7b0d39d5635f684940c1e3c4ec3',
        genre: 'FPS',
        description: 'Overwatch is a multiplayer first-person shooter developed and published by Blizzard Entertainment. The game was released on May 24, 2016 for PlayStation 4, Windows, and Xbox One, and for Nintendo Switch on October 15, 2019.',
        link: '<a href="https://worldofwarcraft.com/en-us/">Visit The World</a>'

    },

    // 7# Arma
    {
        name: 'Arma 3',
        developer: 'Bohemia Interactive',
        releaseYear: '12 september 2013',
        picture: 'https://cdn1.epicgames.com/offer/9773aa1aa54f4f7b80e44bef04986cea/6609d2e1-62d9-4094-9cb7-26d9a7f5ba3f_2560x1440-071db7b0d39d5635f684940c1e3c4ec3',
        genre: 'FPS',
        description: 'ARMA 3 is a military simulation game that can be played in first-person and third-person. The game is developed by Bohemia Interactive for Microsoft Windows',
        link: '<a href="https://worldofwarcraft.com/en-us/">Visit The World</a>'

    },

    // 8# hearthstone
    {
        name: 'Hearthstone',
        developer: 'Blizzard Entertainment',
        releaseYear: '11 maart 2014',
        picture: 'https://www.gamekings.tv/wp-content/uploads/nieuws20150609_hearthstone.jpg',
        genre: 'Card Game',
        description: 'Hearthstone: Heroes of Warcraft is a digital collectible card game based on the World of Warcraft TCG set from the Warcraft Universe. It was announced on March 22, 2013 during PAX East 2013 by Rob Pardo.',
        link: '<a href="https://worldofwarcraft.com/en-us/">Visit The World</a>'

    },

    // 9# Runescape
    {
        name: 'Runescape',
        developer: 'Jagex',
        releaseYear: '4 januari 2001',
        picture: 'https://cdn1.epicgames.com/offer/9773aa1aa54f4f7b80e44bef04986cea/6609d2e1-62d9-4094-9cb7-26d9a7f5ba3f_2560x1440-071db7b0d39d5635f684940c1e3c4ec3',
        genre: 'MMO-RPG',
        description: 'RuneScape is an MMORPG, by Jagex Ltd, designed by Andrew Gower and released on January 4, 2001. The fantasy game is set on the planet Gielinor where there are "gods" and "monsters". Players can trade, chat, fight or play mini-games with each other. The game is written in C++.',
        link: '<a href="https://worldofwarcraft.com/en-us/">Visit The World</a>'

    },

    // 10# Starcraft
    {
        name: 'Starcraft 2',
        developer: 'Blizzard Entertainment',
        releaseYear: '27 juli 2010',
        picture: 'https://pyre-media-2.s3.sa-east-1.amazonaws.com/cb5421ca-fe51-41e2-96bd-514df7f59e37maxresdefault%20(6).jpg',
        genre: 'RTS',
        description: 'StarCraft II is a real-time strategy computer game developed by Blizzard Entertainment. StarCraft II is the sequel to the popular StarCraft. It was announced on May 19, 2007 at the Blizzard Worldwide Invitational in Seoul, South Korea. StarCraft II was released on July 27, 2010 for Windows and Mac OS X.',
        link: '<a href="https://worldofwarcraft.com/en-us/">Visit The World</a>'

    }
]

const creator = document.createElement("div");
creator.className = "creator";

const photo = document.createElement("img");
photo.className = "photo";
photo.setAttribute("src", "./image/Col_img.jpg");
creator.append(photo);

const text = document.createElement("p");
text.className = "text";
text.innerHTML = "";
creator.append(text);

const cardHolder = document.createElement("div");
cardHolder.className = "card-holder";
const main = document.querySelector("main");
main.append(creator);
main.append(cardHolder);

for (let i = 0; i < collection.length; i++) {

    const card = document.createElement("div");
    card.className = "card";
    cardHolder.append(card);

    function hoverEffects(cardSelected) {
        cardSelected.onmouseover = function () {
            cardSelected.style.transform = "scale(1.03, 1.03)";
            cardSelected.style.zIndex = 100;
            cardSelected.style.transition = "0.15s";
            cardSelected.style.boxShadow = "0 0 0 9999px #000000b0";
        };
        cardSelected.onmouseout = function () {
            cardSelected.style.transform = "scale(1, 1)";
            cardSelected.style.zIndex = 0;
            cardSelected.style.boxShadow = "0 0 0 9999px #00000000";
        };
    }
    hoverEffects(card);

    const cardImage = document.createElement("img");
    cardImage.className = "card-image";
    cardImage.setAttribute('src', collection[i].picture);
    card.append(cardImage);

    const cardTag = document.createElement("div");
    cardTag.className = "card-tag";
    card.append(cardTag);

    const cardGenre = document.createElement("p");
    cardGenre.className = "card-genre";
    cardGenre.innerHTML = collection[i].genre;
    cardTag.append(cardGenre);

    const cardTitle = document.createElement("p");
    cardTitle.className = "card-title";
    cardTitle.innerHTML = collection[i].name;
    cardTag.append(cardTitle);

    const cardInfo = document.createElement("div");
    cardInfo.className = "card-Info";
    card.append(cardInfo);

    const developer = document.createElement("p");
    developer.className = "developer";
    developer.innerHTML = collection[i].developer;
    cardInfo.append(developer);

    const releaseYear = document.createElement("p");
    releaseYear.className = "release-year";
    releaseYear.innerHTML = collection[i].releaseYear;
    cardInfo.append(releaseYear);

    const description = document.createElement("p");
    description.className = "description";
    description.innerHTML = collection[i].description;
    cardInfo.append(description);

    const link = document.createElement("p");
    link.className = "link";
    link.innerHTML = collection[i].link;
    cardInfo.append(link);
}

