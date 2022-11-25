class NotesModel {
  constructor() {
    this.notesArray = [];
  }

  addNote(note) {
    this.notesArray.push(note);
  }

  getNotes() {
    return this.notesArray;
  }

  reset() {
    this.notesArray = [];
  }

  setNotes(notes) {
    this.notesArray = notes;
  }
}

module.exports = NotesModel;
