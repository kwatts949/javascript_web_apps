const NotesModel = require("../src/notesModel");

let model;

beforeEach(() => { // sets the model before each test
  model = new NotesModel();
});

describe("NotesModel", () => {
  it("returns the array of notes", () => {
    expect(model.getNotes().length).toEqual(0);
    expect(model.getNotes()).toEqual([]);
  });

  it("adds a note to the array", () => {
    model.addNote("Buy milk");
    model.addNote("Go to the gym");
    expect(model.getNotes().length).toEqual(2);
    expect(model.getNotes()).toEqual(["Buy milk", "Go to the gym"]);
  });

  it("resets the array and clears it", () => {
    model.addNote("Buy milk");
    model.addNote("Go to the gym");
    model.reset();
    expect(model.getNotes().length).toEqual(0);
    expect(model.getNotes()).toEqual([]);
  });
});

/*
model.getNotes(); // should return []

model.addNote('Buy milk');
model.addNote('Go to the gym');

model.getNotes(); // should now return ['Buy milk', 'Go to the gym']

model.reset();

model.getNotes(); // should now return []
*/
