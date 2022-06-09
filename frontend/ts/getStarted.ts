const getStarted = () => {
  const getStartedBtn = document.getElementById("getStarted") as HTMLElement;
  const settings = document.getElementById("settingsSetup") as HTMLElement;
  const cover = document.getElementById("cover") as HTMLElement;
  let on = false;
  getStartedBtn.addEventListener("click", () => {
    if (!on) {
      settings.style.display = "block";
      cover.style.display = "block";
      on = true;
      return;
    }
    settings.style.display = "none";
    cover.style.display = "none";
    on = false;
  });
};
export default getStarted;
