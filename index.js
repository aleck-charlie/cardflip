//data array of vocabulary words
const animals = [
  {
    id: 1,
    tla: "muusmuus",
    eng: "cow",
  },
  {
    id: 2,
    tla: "c̓ixwat̓in",
    eng: "eagle",
  },
  {
    id: 3,
    tla: "qʷayac̓iik",
    eng: "wolf",
  },
  {
    id: 4,
    tla: "qʷinii",
    eng: "seagull",
  },
  {
    id: 5,
    tla: "piišpiš",
    eng: "cat",
  },
  {
    id: 6,
    tla: "čims",
    eng: "bear",
  },
  {
    id: 7,
    tla: "quɁušin",
    eng: "raven",
  },
  {
    id: 8,
    tla: "k̓aaɁin",
    eng: "crow",
  },
  {
    id: 9,
    tla: "saasin",
    eng: "hummingbird",
  },
];

function renderCard() {
  animals.forEach((res) => {
    const container = document.getElementById("cards");
    const card = document.createElement("div");
    card.classList = "cards";

    const content = `
        <div class="innercard">${res.tla}</div>
        `;
    container.innerHTML += content;
  });
}

renderCard();

//function flipCard
//         <div class="flip-back">${res.eng}</div>
