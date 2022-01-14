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
        description: '<a href="https://worldofwarcraft.com/en-us/">Coming Soon</a>',
        link: '<a href="https://worldofwarcraft.com/en-us/">Visit The World</a>'

    },

    // 2# Call of Duty
    {
        name: 'Call of Duty',
        developer: ['Activision', 'Treyarch'],
        releaseYear: '29 oktober 2003',
        picture: 'https://sm.ign.com/ign_nl/screenshot/default/call-of-duty-modern-warfare-twitter-facebook-instagram-going_x817.jpg',
        genre: 'FPS',
        description: '<a href="https://www.callofduty.com/be/nl/">Coming Soon</a>',
        link: '<a href="https://worldofwarcraft.com/en-us/">Visit The World</a>'

    },

    // 3# Rocket league
    {
        name: 'Rocket league',
        developer: ['Psyonix'],
        releaseYear: '7 juli 2015',
        picture: 'https://www.internetmatters.org/wp-content/uploads/2020/11/Rocket-league-main-image.png',
        genre: 'Multiplayer',
        description: '<a href="https://www.rocketleague.com/">Coming Soon</a>',
        link: '<a href="https://worldofwarcraft.com/en-us/">Visit The World</a>'

    },

    // 4# league of legends
    {
        name: 'League of Legends',
        developer: 'Riot Games',
        releaseYear: '27 oktober 2009',
        picture: 'https://www.gamingnation.nl/wp-content/uploads/2019/10/league-of-legends.jpg',
        genre: 'Battle Arena',
        description: '<a href="https://www.leagueoflegends.com/en-gb/">Coming Soon</a>',
        link: '<a href="https://worldofwarcraft.com/en-us/">Visit The World</a>'

    },

    // 5# Ark
    {
        name: 'Ark survival evolved',
        developer: 'Studio Wildcard',
        releaseYear: '2 juni 2015',
        picture: 'https://cdn02.nintendo-europe.com/media/images/10_share_images/games_15/nintendo_switch_4/H2x1_NSwitch_ARKSurvivalEvolved.jpg',
        genre: 'Survival Game',
        description: '<a href="https://ark.fandom.com/wiki/ARK_Survival_Evolved_Wiki">Coming Soon</a>',
        link: '<a href="https://worldofwarcraft.com/en-us/">Visit The World</a>'

    },

    // 6# Overwatch
    {
        name: 'Overwatch',
        developer: ['Blizzard Entertainment', 'Iron Galaxy Studios'],
        releaseYear: '3 mei 2016',
        picture: 'https://hwimg.nl/Overwatch.png',
        genre: 'FPS',
        description: '<a href="https://playoverwatch.com/en-us/">Coming Soon</a>',
        link: '<a href="https://worldofwarcraft.com/en-us/">Visit The World</a>'

    },

    // 7# Arma
    {
        name: 'Arma 3',
        developer: 'Bohemia Interactive',
        releaseYear: '12 september 2013',
        picture: 'https://hwimg.nl/ARMA-III.jpg',
        genre: 'FPS',
        description: '<a href="https://arma3.com/">Coming Soon</a>',
        link: '<a href="https://worldofwarcraft.com/en-us/">Visit The World</a>'

    },

    // 8# hearthstone
    {
        name: 'Hearthstone',
        developer: 'Blizzard Entertainment',
        releaseYear: '11 maart 2014',
        picture: 'https://www.gamekings.tv/wp-content/uploads/nieuws20150609_hearthstone.jpg',
        genre: 'Card Game',
        description: '<a href="https://playhearthstone.com/en-us">Coming Soon</a>',
        link: '<a href="https://worldofwarcraft.com/en-us/">Visit The World</a>'

    },

    // 9# Runescape
    {
        name: 'Runescape',
        developer: 'Jagex',
        releaseYear: '4 januari 2001',
        picture: 'https://cdn.cloudflare.steamstatic.com/steam/apps/1664831/capsule_616x353.jpg?t=1627293872',
        genre: 'MMO-RPG',
        description: '<a href="https://play.runescape.com/s">Coming Soon</a>',
        link: '<a href="https://worldofwarcraft.com/en-us/">Visit The World</a>'

    },

    // 10# Starcraft
    {
        name: 'Starcraft 2',
        developer: 'Blizzard Entertainment',
        releaseYear: '27 juli 2010',
        picture: 'https://pyre-media-2.s3.sa-east-1.amazonaws.com/cb5421ca-fe51-41e2-96bd-514df7f59e37maxresdefault%20(6).jpg',
        genre: 'RTS',
        description: '<a href="https://starcraft2.com/en-us/">Coming Soon</a>',
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
text.innerHTML = " Colin Renkema's Collection.";
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