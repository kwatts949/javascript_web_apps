/**
 * @jest-environment jsdom
 */

const fs = require("fs");
const MessageView = require("./messageView");

describe("MessageView", () => {
  it("initially shows no message", () => {
    document.body.innerHTML = fs.readFileSync("./index.html");

    const view = new MessageView();

    const buttonEl = document.querySelector("#show-message-button");
    buttonEl.click();

    expect(document.querySelector("#message")).not.toBeNull();
    expect(document.querySelector("#message").textContent).toEqual("");
  });

  it("allows the user to enter text & then displays that text ", () => {
    document.body.innerHTML = fs.readFileSync("./index.html");

    const view = new MessageView();

    const buttonEl = document.querySelector("#show-message-button");

    const inputEl = document.querySelector("#message-input");
    inputEl.value = "Test Message";

    buttonEl.click();

    expect(document.querySelector("#message")).not.toBeNull();
    expect(document.querySelector("#message").textContent).toEqual("Test Message");
  });

  it("hides the message", () => {
    document.body.innerHTML = fs.readFileSync("./index.html");

    const view = new MessageView();

    const buttonEl = document.querySelector("#show-message-button");
    buttonEl.click();
    const hideButtonEl = document.querySelector("#hide-message-button");
    hideButtonEl.click();

    expect(document.querySelector("#message")).toBeNull();
  });
});
