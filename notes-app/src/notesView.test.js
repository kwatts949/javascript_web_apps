/**
 * @jest-environment jsdom
 */

const fs = require("fs");
require("jest-fetch-mock").enableMocks();

const NotesModel = require("./notesModel");
const NotesView = require("./notesView");

describe("Notes view", () => {
  it("displays two notes", () => {
    document.body.innerHTML = fs.readFileSync("./index.html");

    // 1. Setting up model and view
    const model = new NotesModel();
    const view = new NotesView(model);
    model.addNote("A first note");
    model.addNote("Another one");

    // 2. Display the notes on the page
    view.displayNotes();

    // 3. There should now be 2 div.note on the page
    expect(document.querySelectorAll("div.note").length).toEqual(2);
  });

  it("adds a new note", () => {
    document.body.innerHTML = fs.readFileSync("./index.html");

    const model = new NotesModel();
    const view = new NotesView(model);

    // 1. Fill the input
    const input = document.querySelector("#add-note-input");
    input.value = "My new amazing test note";

    // 2. Click the button
    const button = document.querySelector("#add-note-button");
    button.click();

    // 3. The note should be on the page
    expect(document.querySelectorAll("div.note").length).toEqual(1);
    expect(document.querySelectorAll("div.note")[0].textContent).toEqual(
      "My new amazing test note"
    );
  });

  it("removes the older notes before displaying new notes", () => {
    document.body.innerHTML = fs.readFileSync("./index.html");

    const model = new NotesModel();
    const view = new NotesView(model);

    model.addNote("A first note");
    model.addNote("Another one");
    view.displayNotes();
    view.displayNotes();

    expect(document.querySelectorAll("div.note").length).toEqual(2);
  });

  it("clears the input after clicking the button", () => {
    document.body.innerHTML = fs.readFileSync("./index.html");

    const model = new NotesModel();
    const view = new NotesView(model);

    const input = document.querySelector("#add-note-input");
    input.value = "My new amazing test note";

    const button = document.querySelector("#add-note-button");
    button.click();

    expect(document.querySelectorAll("#add-note-input").value).toEqual();
  });

  // NOT WORKING YET!!!!
  xit("displays a note from the api", (done) => {
    document.body.innerHTML = fs.readFileSync("./index.html");
    const model = new NotesModel();

    const fakeNotesClient = {
      loadNotes: (callback) => {
        callback(["APInote"]);
      },
    };

    const view = new NotesView(model, fakeNotesClient);

    view.displayNotesFromApi();

    expect(document.querySelectorAll("div.note").length).toEqual(1);
    expect(document.querySelectorAll("div.note").textContent).toEqual("APInote"); // RETURNS UNDEFINED
    done() 
  });
});
