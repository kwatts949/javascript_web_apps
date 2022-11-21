/**
 * @jest-environment jsdom
 */

const fs = require("fs");
const MessageView = require("./messageView");

describe("MessageView", () => {
  it("clicks the button and displays the message", () => {
    document.body.innerHTML = fs.readFileSync("./index.html");

    const view = new MessageView();

    const buttonEl = document.querySelector("#show-message-button");
    const inputEl = document.querySelector("#message-input");

    inputEl.value = 'Example text'
    buttonEl.click();

    expect(document.querySelector("#message")).not.toBeNull();
    expect(document.querySelector("#message").innerText).toEqual('Example text');
  });

  it("clicks the hide messaage button", () => {
    document.body.innerHTML = fs.readFileSync("./index.html");

    const view = new MessageView();

    const buttonEl = document.querySelector("#hide-message-button");
    buttonEl.click();

    expect(document.querySelector("#message")).toBeNull();
  });
});
