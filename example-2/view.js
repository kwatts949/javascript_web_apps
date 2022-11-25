class View {
  constructor() {
    this.mainContainerEl = document.querySelector("#main-container");

    console.log(this.mainContainerEl);
  }

  addParagraph() {
    const paragraph = document.createElement("p"); // Implement a new method addParagraph on View — this method should dynamically create a new p element and store it in a variable.
    paragraph.textContent =
      "This paragraph has been dynamically added by JavaScript!"; // Set this new element's content to the string 'This paragraph has been dynamically added by JavaScript! (or something else).
    this.mainContainerEl.append(paragraph);
    //Append the element to the main container element.
  }

  clearParagraphs() {
    const paragraph = document.querySelectorAll("p"); // selects all p elements
    paragraph.forEach((paragraph) => {
      paragraph.remove(); // removes each p element
    });
  }
}

module.exports = View;

//In the main file, (index.js) call this new method on the existing View instance.
