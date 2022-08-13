import { formData } from "./forms";
const path = require("path");

const form = document.querySelector("form")!;

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const data = formData(form);
  console.log("tes");
  console.log(data);
});
