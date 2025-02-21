const steps = [
  { step: "Step 1", detail: "Greet the tutee and set the climate of the session" },
  { step: "Step 2", detail: "Set an agenda for the session" },
  { step: "Step 3", detail: "Identify the task" },
  { step: "Step 4", detail: "Break down the task" },
  { step: "Step 5", detail: "Summarize Content" },
  { step: "Step 6", detail: "Summarize Process" },
  { step: "Step 7", detail: "Schedule and plan course of action" },
  { step: "Step 8", detail: "Encourage student to return" },
  
];

let cards = [];
let flippedCards = [];
let matchedCards = [];

function createCard(text, detail) {
  const card = document.createElement("div");
  card.className = "card";

  const cardInner = document.createElement("div");
  cardInner.className = "card-inner";

  const cardFront = document.createElement("div");
  cardFront.className = "card-front";
  cardFront.textContent = "Tutor Session Memory Game";

  const cardBack = document.createElement("div");
  cardBack.className = "card-back";
  cardBack.textContent = text;
  cardBack.dataset.detail = detail;

  cardInner.appendChild(cardFront);
  cardInner.appendChild(cardBack);
  card.appendChild(cardInner);

  card.addEventListener("click", flipCard);
  return card;
}

function flipCard() {
  if (
    flippedCards.length < 2 &&
    !flippedCards.includes(this) &&
    !matchedCards.includes(this)
  ) {
    this.classList.add("flipped");
    flippedCards.push(this);
    if (flippedCards.length === 2) {
      setTimeout(checkForMatch, 500);
    }
  }
}

function checkForMatch() {
  const [card1, card2] = flippedCards;
  const text1 = card1.querySelector(".card-back").textContent;
  const detail1 = card1.querySelector(".card-back").dataset.detail;
  const text2 = card2.querySelector(".card-back").textContent;
  const detail2 = card2.querySelector(".card-back").dataset.detail;

  if (text1 === detail2 && text2 === detail1) {
    card1.removeEventListener("click", flipCard);
    card2.removeEventListener("click", flipCard);
    matchedCards.push(card1, card2);

    if (matchedCards.length === steps.length * 2) {
      showWinMessage();
    }
  } else {
    card1.classList.remove("flipped");
    card2.classList.remove("flipped");
  }

  flippedCards = [];
}

function showWinMessage() {
  const winMessage = document.getElementById("win-message");
  winMessage.style.display = "block";
  winMessage.textContent = "You've Won!";
  document.getElementById("game-container").innerHTML = `<div id="win-container">${winMessage.outerHTML}</div>`;
}

function initializeGame() {
  const gameBoard = document.getElementById("game-board");
  steps.forEach((step) => {
    const stepCard = createCard(step.step, step.detail);
    const detailCard = createCard(step.detail, step.step);
    cards.push(stepCard, detailCard);
  });
  cards.sort(() => Math.random() - 0.5);
  cards.forEach((card) => gameBoard.appendChild(card));
}

initializeGame();
