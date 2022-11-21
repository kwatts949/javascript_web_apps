class MessageView {
  constructor() {
    this.buttonEl = document.querySelector("#show-message-button");

    this.buttonEl.addEventListener("click", () => {
      this.displayMessage();
    });

    this.hideButtonEl = document.querySelector("#hide-message-button");

    this.hideButtonEl.addEventListener("click", () => {
      this.hideMessage();
    });
  }

  displayMessage() {
    console.log("Thanks for clicking me!");
    const checkMessage = document.querySelector("#message-input").value;

    console.log(checkMessage);

    const message = document.createElement("div");
    message.id = "message";
    message.innerText = checkMessage;

    document.querySelector("#main-container").append(message);
  }

  hideMessage() {
    console.log("Hiding messages");

    const messages = document.querySelectorAll("#message");

    messages.forEach((message) => {
      message.remove();
    });
  }
}

module.exports = MessageView;
