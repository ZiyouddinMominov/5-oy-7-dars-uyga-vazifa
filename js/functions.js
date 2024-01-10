// URL VALIDATE FUNCTION
function isHttpValid(str) {
  try {
    const newUrl = new URL(str);
    return newUrl.protocol === "http:" || newUrl.protocol === "https:";
  } catch (err) {
    return false;
  }
}

// VALIDATE FUNCTION
const validate = (name, price, color, type, description, picture) => {
  // NAME VALIDATE START
  if (!name.value) {
    name.focus();
    alert("Name input is empty");
    return false;
  }

  if (name.value.trim().length <= 3) {
    name.focus();
    alert("Name should be more 3 char");
    return false;
  }
  // NAME VALIDATE END
  // PRICE VALIDATE START
  if (!price.value) {
    price.focus();
    alert("Price input is empty");
    return false;
  }

  if (!Number(price.value)) {
    price.focus();
    alert("Price should be Number");
    return false;
  }

  if (price.value <= 10 || price.value > 10000) {
    price.focus();
    alert("Price very big or small");
    return false;
  }
  // PRICE VALIDATE END
  // COLOR VALIDATE
  if (!color.value) {
    color.focus();
    alert("Color input is empty");
    return false;
  }
  // TYPE VALIDATE
  if (!type.value) {
    type.focus();
    alert("Type input is empty");
    return false;
  }
  // PICTURE VALIDATE START
  if (!picture.value) {
    picture.focus();
    alert("Picture input is empty");
    return false;
  }

  if (!isHttpValid(picture.value)) {
    picture.focus();
    alert("Picture is not valid");
    return false;
  }
  // PICTURE VALIDATE END
  return true;
};

// LOCAL STORAGE GET ITEM FUNCTION
function getDataFromLocalStorage() {
  let data = [];
  if (localStorage.getItem("phones")) {
    data = JSON.parse(localStorage.getItem("phones"));
  }
  return data;
}

function createCard(phone) {
  return `
         <div class="card mb-3 col-6" style="max-width: 540px">
              <div class="row g-0">
                <div class="col-md-4">
                  <img
                    src="${phone.picture}"
                    class="img-fluid rounded-start"
                    alt="..."
                  />
                </div>
                <div class="col-md-8">
                  <div class="card-body">
                    <h5 class="card-title fs-3">${phone.name}</h5>
                    <div class="d-flex justify-content-between">
                      <p class="card-text">
                        <small class="text-danger fs-4">${phone.price}$</small>
                      </p>
                      <p class="card-text">
                        <small class="text-primary fs-4">${phone.type}</small>
                      </p>
                    </div>
                    <p class="card-text">
                    <small class="text-success fs-4">${phone.color}</small>
                  </p>
                    <p class="card-text fs-5">${phone.description}</p>
                    <p class="card-text">
                      <small class="text-muted">Last updated 3 mins ago</small>
                    </p>
                  </div>
                </div>
              </div>
            </div>
      `;
}
// EXPORT
export { isHttpValid, validate, getDataFromLocalStorage, createCard };
