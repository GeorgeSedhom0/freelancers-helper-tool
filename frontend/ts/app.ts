import { sideBarConrtoller } from "./styling";
const submitButton = document.querySelector("#submit") as Element;
const result = document.querySelector("#results") as Element;
const loader = document.querySelector("#loader") as Element;

submitButton.addEventListener("click", async () => {
  const linkElement = document.querySelector("#link") as HTMLInputElement;
  const link = linkElement.value;
  if (!linkIsValid(link)) {
    alert("Enter a valid link");
    return;
  }
  const lang = getRequiredLanguage();
  mainFunk(link, lang);
});

const getRequiredLanguage = () => {
  //get checked language
  const language = document.querySelector(
    'input[name="lang"]:checked'
  ) as HTMLInputElement;
  return language ? language.value : "ar";
};
const linkIsValid = (link: string) => {
  const websiteLink = "https://khamsat.com/community/requests";
  // check if link contains websiteLink
  return link.includes(websiteLink);
};

const mainFunk = async (link: string, lang: string) => {
  loader.classList.add("loader");
  let res;
  try {
    res = await fetch(`http://localhost:3000/khamsat?lang=${lang}`, {
      method: "GET",
      headers: { link: link },
    });
  } catch (err) {
    loader.classList.remove("loader");
    result.innerHTML = `<strong>Error!</strong> ${err}`;
    return;
  }
  if (!res.ok) {
    loader.classList.remove("loader");
    result.innerHTML = `<div >
    <strong>Error!</strong> ${res.statusText}
    </div>`;
    return;
  }
  const data = await res.text();
  loader.classList.remove("loader");
  result.innerHTML = data;
};

sideBarConrtoller();
