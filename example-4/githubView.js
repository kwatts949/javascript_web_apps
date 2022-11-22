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

  display(repo) {
    // remove each instance of html elements at start
    document.querySelectorAll("h3").forEach((h3) => h3.remove());
    document.querySelectorAll("p").forEach((p) => p.remove());
    document.querySelectorAll("img").forEach((img) => img.remove());

    const repoName = document.createElement("h3"); // create a new h3 element
    repoName.innerText = repo["name"]; // assign name received from data received from repoData fetch
    document.querySelector("body").append(repoName); // add repoName element to the body dynamically

    const repoDescription = document.createElement("p");
    repoDescription.innerText = repo["description"];
    document.querySelector("body").append(repoDescription);

    const repoImg = document.createElement('img')
    repoImg.src = repo['organization']['avatar_url']
    document.querySelector("body").append(repoImg);
    
    /*
    Set the content of the #repo-name element to equal the value of the full_name property from the repo data.
Set the content of the #repo-description element to equal the value of the description property from the repo data.
*/
  }
}

module.exports = GithubView;
