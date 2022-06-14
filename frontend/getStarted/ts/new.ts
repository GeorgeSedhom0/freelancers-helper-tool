import { download } from "./utils/download";
const saveLocalBtn = document.querySelector("#saveLocal") as HTMLElement;
const saveBtn = document.querySelector("#save") as HTMLElement;
interface settings {
  name: string;
  value: string;
}
let settingsValues: settings[];
const extractData = (): settings[] => {
  let allInputs = Array.from(
    document.querySelectorAll("input")
  ) as HTMLInputElement[];
  let values: settings[] = allInputs.map((input) => {
    if (input.type == "text" || input.type == "number")
      return { name: input.name, value: input.value };

    if (input.checked) return { name: input.name, value: input.value };
    else return { name: "None", value: "None" };
  });
  values.forEach((value, index) => {
    if (value.name == "None") values.splice(index, 1);
  });
  return values;
};

saveLocalBtn.addEventListener("click", () => {
  const values = extractData();
  settingsValues = values;
  localStorage.setItem("settings", JSON.stringify(settingsValues));
  download("settings.txt", JSON.stringify(values));
});
saveBtn.addEventListener("click", () => {
  settingsValues = extractData();
  console.log(settingsValues);
  localStorage.setItem("settings", JSON.stringify(settingsValues));
});
