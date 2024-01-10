// IMPORT
import { isHttpValid, validate, getDataFromLocalStorage } from "./functions.js";
// BIRINCHI NAVBATDA HTML FILEDAN KERAKLI IDlarni OLAMIZ
const button = document.getElementById("button");
const color = document.getElementById("color");
const price = document.getElementById("price");
const name = document.getElementById("name");
const type = document.getElementById("type");
const picture = document.getElementById("picture");
const description = document.getElementById("description");
const form = document.getElementById("form");

// EVENT LISTENER
button &&
  button.addEventListener("click", function () {
    if (validate(name, price, color, type, description, picture)) {
      const phone = {
        name: name.value,
        price: price.value,
        color: color.value,
        type: type.value,
        description: description.value,
        picture: picture.value,
      };

      let data = getDataFromLocalStorage();
      data.push(phone);
      localStorage.setItem("phones", JSON.stringify(data));

      form.reset();
    } else {
      console.log("Validation error");
    }
  });
