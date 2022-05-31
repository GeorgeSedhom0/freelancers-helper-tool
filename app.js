const submitButton = document.querySelector("#submit");
const result = document.querySelector("#results");
const loader = document.querySelector("#loader");

submitButton.addEventListener("click", async () => {
  const link = document.querySelector("#link").value;

  if (!linkIsValid(link)) {
    alert("Enter a valid link");
    return;
  }
  const lang = getRequiredLanguage();
  mainFunk(link, lang);
});

const getRequiredLanguage = () => {
  //get checked language
  const language = document.querySelector('input[name="lang"]:checked');
  return language ? language.value : "ar";
};
const linkIsValid = (link) => {
  const websiteLink = "https://khamsat.com/community/requests";
  // check if link contains websiteLink
  return link.includes(websiteLink);
};

const mainFunk = async (link, lang) => {
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
