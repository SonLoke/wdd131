// get the last modified date
let lastModified = document.lastModified

document.getElementById("lastModified").textContent = "Last Modification: " + lastModified;

// Product Array
const products = [
    {
      id: "fc-1888",
      name: "flux capacitor",
      averagerating: 4.5
    },
    {
      id: "fc-2050",
      name: "power laces",
      averagerating: 4.7
    },
    {
      id: "fs-1987",
      name: "time circuits",
      averagerating: 3.5
    },
    {
      id: "ac-2000",
      name: "low voltage reactor",
      averagerating: 3.9
    },
    {
      id: "jj-1969",
      name: "warp equalizer",
      averagerating: 5.0
    }
  ];

// Product Loop
function addProduct(product) {
    // console.log(temple);

    document.getElementById("productName").innerHTML += `<option value="${product.name}">${product.name}</option>`;
  }

  products.forEach(addProduct);