class Client {
  loadNotes(callback) {
    fetch("http://localhost:3000/notes") // sends a get request
      .then((response) => response.json()) // converts res to JS
      .then((data) => {
        callback(data); // performs the callback function on the data
      });
  }
}

module.exports = Client;