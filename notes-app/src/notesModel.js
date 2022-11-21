class NotesModel {
  constructor() {
    this.notes = [];
  }

  getNotes() {
    return this.notes;
  }

  addNote(todo) {
    this.notes.push(todo);
  }

  reset() {
    this.notes = [];
  }
}

module.exports = NotesModel;
