class NotesView {
  constructor(model, client) {
    this.model = model;
    this.client = client;
    this.mainContainerEl = document.querySelector("#main-container");

    document.querySelector("#add-note-button").addEventListener("click", () => {
      const newNote = document.querySelector("#add-note-input").value;
      this.addNewNote(newNote);
      document.querySelector("#add-note-input").value = "";
    });
  }

  displayNotes() {
    // remove all instances of note class
    document.querySelectorAll(".note").forEach((note) => note.remove());

    const notes = this.model.getNotes();

    // For each note, create and append a new element on the main container
    notes.forEach((note) => {
      const newNote = document.createElement("div");
      newNote.textContent = note;
      newNote.className = "note";
      console.log(newNote.textContent);
      this.mainContainerEl.append(newNote); // make sure to add div container in html file
    });
  }

  addNewNote(newNote) {
    // adds a new note to the list and displays it on the browser
    this.model.addNote(newNote);
    this.displayNotes();
  }

  displayNotesFromApi() {
    this.client.loadNotes((notes) => {
      this.model.setNotes(notes);
      this.displayNotes();
    });
  }
  /*
  call loadNotes(callback) on the Client class.
when the response data is received, set the list of notes on the model and call displayNotes():
*/
}

module.exports = NotesView;
