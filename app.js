const addNotes = {
    button: document.querySelector("#btn"),
    textArea: document.querySelector("#text"),
    listCard: document.querySelector("#cards")
}

addNotes.button.addEventListener('click', () => {
    const newCard = document.createElement("div");
    const newp = document.createElement("p");
    const textValues = addNotes.textArea.value;
    newp.innerText = textValues;
    newp.classList.add("cardp");
    newCard.classList.add("card");
    newCard.appendChild(newp);
    addNotes.listCard.appendChild(newCard);
    addNotes.textArea.value = "Type Here...";
})

