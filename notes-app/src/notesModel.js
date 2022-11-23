class NotesModel {
  constructor() {
    this.notes = [];
  }

  getNotes() {
    //returns notes array
    return this.notes;
  }

  addNote(todo) {
    //pushes a todo into the notes array
    this.notes.push(todo);
  }

  reset() {
    // resets the array to empty
    this.notes = [];
  }

  setNotes(notes) {
    // accepts an array of notes and passes each note not addNote
    notes.forEach((note) => {
      this.addNote(note);
    });
  }
}

module.exports = NotesModel;
