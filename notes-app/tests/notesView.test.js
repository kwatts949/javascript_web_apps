/**
 * @jest-environment jsdom
 */

const fs = require("fs");
require("jest-fetch-mock").enableMocks();

const NotesModel = require("../src/notesModel");
const NotesView = require("../src/notesView");
const NotesClient = require("../src/notesClient");

describe("Notes view", () => {
  beforeEach(() => {
    document.body.innerHTML = fs.readFileSync("./index.html");
    model = new NotesModel();
    client = new NotesClient();
    view = new NotesView(model, client);
  });

  it("displays two notes", () => {
    model.addNote("A first note");
    model.addNote("Another one");

    // 2. Display the notes on the page
    view.displayNotes();

    // 3. There should now be 2 div.note on the page
    expect(document.querySelectorAll("div.note").length).toEqual(2);
  });

  it("adds a new note", () => {
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

  it("displays the correct number of notes if displayNotes is called twice", () => {
    model.addNote("A first note");
    model.addNote("Another one");

    view.displayNotes();
    view.displayNotes();

    expect(document.querySelectorAll("div.note").length).toEqual(2);
  });

  it("clears older notes", () => {
    const testInput = document.querySelector("#add-note-input");
    const addButton = document.querySelector("#add-note-button");

    testInput.value = "test note";
    addButton.click();
    testInput.value = "Another test note";
    addButton.click();

    const div = document.querySelectorAll("div.note");
    expect(div.length).toBe(2);
  });

  it("connects and fetches", (done) => {
    fetch.mockResponseOnce(JSON.stringify(["test note", "Another test note"])); // mock the fetch response

    client.loadNotes((data) => {
      expect(data).toEqual(["test note", "Another test note"]);
      done();
    });
  });

  it("recieves notes from the server & displays them", (done) => {
    const clientMock = {
      loadNotes: (callback) => callback(["test", "test2", "test3"]), // mocks client with loadnotes method and function
    };
    const mockView = new NotesView(model, clientMock);

    mockView.displayNotesFromApi();
    const div = document.querySelectorAll("div.note");

    expect(div.length).toBe(3);
    expect(div[2].textContent).toEqual("test3");
    done();
  });
});
