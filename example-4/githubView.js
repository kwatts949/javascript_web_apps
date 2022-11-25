class GithubView {
  constructor(model, client) {
    this.model = model;
    this.client = client;

    const submitButtonEl = document.querySelector("#submit-button");
    const repoInputEl = document.querySelector("#repo-name-input");

    submitButtonEl.addEventListener("click", () => {
      const repoName = repoInputEl.value;

      this.client.getRepoInfo(repoName, (repoData) => {
        console.log(repoData);
        this.display(repoData);
      });
    });
  }

  display(repoData) {
    document.querySelectorAll("img").forEach((img) => img.remove());

    document.querySelector("#repo-name").textContent = repoData.name; // dynamically set name
    document.querySelector("#repo-description").textContent =
      repoData.description; // description

    const repoImg = document.createElement("img"); // set img dynamically
    repoImg.src = repoData["organization"]["avatar_url"];
    document.querySelector("body").append(repoImg);
  }
}

module.exports = GithubView;
