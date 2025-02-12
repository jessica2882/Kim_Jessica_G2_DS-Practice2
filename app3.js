const COLORS = ["red", "blue", "green", "yellow", "orange", "purple", "pink", "black", "white", "gray"];
//
// Get a random color among the list of available colors
//
function randomColor() {
  const randomIndex = Math.floor(Math.random() * COLORS.length);
  return COLORS[randomIndex];
}

//
// Create a new card
//
function createCard() {
 
  // 1 - Random color for card
   const cardColor = randomColor();
  // 2 - Set card text
  const card = document.createElement("div");
  card.classList.add("card");
  card.style.backgroundColor = cardColor;
  card.style.color = cardColor === "black" ? "white" : "black"; 
  card.style.padding = "20px";
  card.style.margin = "10px";
  card.style.borderRadius = "8px";
  card.style.width = "200px";
  card.style.textAlign = "center";
  // 3 - Set card footer
  const cardText = document.createElement("p");
  cardText.textContent = "Hello";
  card.appendChild(cardText);
  //  4 - Manage footer button
  const cardFooter = document.createElement("div");
  cardFooter.style.marginTop = "10px"; 
  const deleteButton = document.createElement("button");
  deleteButton.textContent = "Remove Card";
  deleteButton.style.padding = "5px 10px";
  deleteButton.style.border = "none";
  deleteButton.style.cursor = "pointer";
  deleteButton.style.backgroundColor = "lightgrey";
  deleteButton.style.color = "white";
  deleteButton.style.borderRadius = "5px";
  // 5 - Add card to containers
  deleteButton.addEventListener("click", function () {
    card.remove();
  });

  cardFooter.appendChild(deleteButton);
  card.appendChild(cardFooter);

document.querySelector(".container").appendChild(card);
}


//--------------------------------------------------
// Code Start
//--------------------------------------------------

const btnCreate = document.querySelector('#create');
btnCreate.addEventListener('click', createCard);