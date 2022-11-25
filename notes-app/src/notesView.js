class NotesView {
  constructor(model, client) {
    this.model = model;
    this.client = client;

    this.mainContainerEl = document.querySelector("#main-container");

    document.querySelector("#add-note-button").addEventListener("click", () => {
      const newNote = document.querySelector("#add-note-input").value;
      this.client.createNote(newNote);
      this.addNewNote(newNote);
    });

    document.querySelector("#reset-note-button").addEventListener("click", () => {
      this.client.resetNotes();
    });
  }

  displayNotes() {
    const removeNote = document.querySelectorAll(".note");
    removeNote.forEach((note) => {
      note.remove();
    }); // removes previous note at start

    const notesList = this.model.getNotes(); // gets array of notes
    notesList.forEach((note) => {
      const noteEl = document.createElement("div"); // creates a div for each note
      noteEl.textContent = note; // sets text to note content
      noteEl.className = "note"; // sets class
      this.mainContainerEl.append(noteEl); // appends div to main container in HTML
    });
  }

  displayNotesFromApi() {
    this.client.loadNotes((notes) => {
      this.model.setNotes(notes);
      this.displayNotes();
    });
  }

  addNewNote(newNote) {
    this.model.addNote(newNote);
    this.displayNotes();
    document.querySelector("#add-note-input").value = ""; // reset the input field
  }

  displayError() {
    const errorMsg = document.createElement("div");
    errorMsg.textContent = "Oops, something went wrong!";
    errorMsg.className = "error";
    this.mainContainerEl.append(errorMsg);
  } 
}

module.exports = NotesView;
