class NotesClient {
  constructor() {
    this.url = "http://localhost:3000/notes";
  }
  loadNotes(callback, callbackError) {
    fetch(this.url)
      .then((response) => response.json())
      .then((data) => {
        callback(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  createNote(note, callback, callbackError) {
    fetch(this.url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ content: note }),
    })
      .then(callback)
      .catch((error) => {
        console.log(error);
      });
  }

  resetNotes() {
    console.log('resetting')
    const notes = document.querySelectorAll('.note');
    fetch(this.url, {
      method: 'DELETE'
    })
    .then((notes.forEach((note) => {note.remove()})))
    .then(() => notes.forEach((note) => {console.log('removed')}));
  }
}

module.exports = NotesClient;
