const username = document.getElementById("username");
const submit = document.getElementById("submit");
const user = document.getElementById("user");

submit.addEventListener("click", (event) => {
  event.preventDefault();
  fetch(`https://api.github.com/users/${username.value}`)
    .then((response) => response.json())
    .then((data) => {
      user.innerHTML = `
        <img
            src="${data.avatar_url}"
            alt="profile-pic" />
        <div class="details">
            <div class="column1">
            <div class="detail clamped-text">
                <p>Name: ${data.name}</p>
            </div>
            <div class="detail clamped-text">
                <p>Location: ${data.location}</p>
            </div>
            <div class="detail">
                <p>Followers: ${data.followers}</p>
            </div>
            </div>
            <div class="column2">
            <div class="detail">
                <span> Portfolio: </span>
                <a href="${data.html_url}" target="_blank"
                >Portfolio</a
                >
            </div>
            <div class="detail">
                <p>Public Repos: ${data.public_repos}</p>
            </div>
            <div class="detail">
                <p class="clamped-text">
                Bio: ${data.bio}
                </p>
            </div>
            </div>
        </div>`;
    })
    .catch(() => {
      user.innerHTML = `<div class="error">Something went wrong!</div>`;
    });
});
