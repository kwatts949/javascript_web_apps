const NotesModel = require("./notesModel");

beforeEach(() => {
  model = new NotesModel();
});

describe("notesModel", () => {
  it("returns an array of notes", () => {
    expect(model.getNotes()).toEqual([]);
  });

  it("adds a todo to the array", () => {
    model.addNote("Buy milk");
    model.addNote("Go to the gym");
    expect(model.getNotes()).toEqual(["Buy milk", "Go to the gym"]);
  });

  it("resets the array", () => {
    model.addNote("Buy milk");
    model.addNote("Go to the gym");
    model.reset();
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
