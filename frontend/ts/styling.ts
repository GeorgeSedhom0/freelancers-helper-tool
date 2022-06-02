const sideBar = document.getElementById("sideBar") as HTMLElement;
const menuButton = document.querySelector("#menuButton") as HTMLElement;

const sideBarConrtoller = () => {
  const sideBarWidth = sideBar.getBoundingClientRect().width;
  const menuButtonR = document.querySelector(".menuButton.r") as HTMLElement;
  const menuButtonL = document.querySelector(".menuButton.l") as HTMLElement;

  const menuButtonOpen = () => {
    menuButtonR.classList.toggle("open");
    menuButtonL.classList.toggle("open");
  };
  const menuButtonClose = () => {
    menuButtonR.classList.remove("open");
    menuButtonL.classList.remove("open");
  };
  menuButton.addEventListener("click", () => {
    let state: number | undefined = document
      .getElementById("sideBar")
      ?.getBoundingClientRect().left;
    if (state) {
      sideBar.style.left = "0%";
      menuButtonClose();
    } else {
      sideBar.style.left = `-${sideBarWidth + 50}px`;
      menuButtonOpen();
    }
  });
  // close sidebar on swipe left
  let pointerStart: number;
  let pointerEnd: number;
  document.addEventListener("touchstart", (e) => {
    pointerStart = e.changedTouches[0].clientX;
  });
  document.addEventListener("touchend", (e) => {
    pointerEnd = e.changedTouches[0].clientX;
    if (pointerStart - pointerEnd > 100) {
      sideBar.style.left = `-${sideBarWidth + 50}px`;
    } else if (pointerEnd - pointerStart > 100) {
      sideBar.style.left = "0%";
    }
  });
};

export { sideBarConrtoller };
