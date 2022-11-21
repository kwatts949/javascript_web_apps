class NotesView {
  constructor(model) {
    this.model = model;
    this.mainContainerEl = document.querySelector("#main-container");
  }

  displayNotes() {
    const notes = this.model.getNotes();

    // For each note, create and append a new element on the main container
    notes.forEach((note) => {
      const newNote = document.createElement("div");
      newNote.textContent = note;
      newNote.className = "note";
      this.mainContainerEl.append(newNote); // make sure to add div container in html file
    });
  }
}

module.exports = NotesView;
