const NotesModel = require("./notesModel");
const NotesView = require("./notesView");
const NotesClient = require("./notesClient");

const client = new NotesClient();

// 1. Setup the model with one note
const model = new NotesModel();

// 2. Setup the view
const view = new NotesView(model, client);

// 3. Make the view display notes
view.displayNotesFromApi();
view.displayError();
