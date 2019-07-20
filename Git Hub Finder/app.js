const ui = new UI();
const github = new Github();

const searchUser = document.getElementById("searchUser");
searchUser.addEventListener("keyup", e => {
  const userText = e.target.value;

  if (userText !== "") {
    github.getUser(userText).then(data => {
      if (data.profile.message === "Not Found") {
        //Alert
      } else {
        ui.showProfile(data.profile);
      }
    });
  }
});
