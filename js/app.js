const container = document.querySelector(".card-container")
const koeken = [
  { name: "Groot grof brood", image: "img/brood.jpg", price: "€1,99" },
  { name: "Frans stokbrood", image: "img/baguette.jpg", price: "€1,99" },
  { name: "Koffiebonen 300gr", image: "img/coffee.jpg", price: "€3,99" },
  { name: "Croissant", image: "img/croissants.jpg", price: "€1" },
  { name: "Kaneelbroodje", image: "img/kaneelbroodjes.jpg", price: "€1,25" },
  { name: "Wafel", image: "img/wafels.jpg", price: "€1" },
  { name: "Macarons per 4", image: "img/macarons.jpg", price: "€1,50" },
  { name: "Praliné gebakje", image: "img/praline.jpg", price: "€2,25" },
  { name: "Fruittaart", image: "img/fruittaart.jpg", price: "€6,99" },
];

const showKoeken = () => {
    let output = "";
    koeken.forEach(
      ({ name, image, price }) =>
        (output += `
                <div class="card">
                  <img class="card--avatar" src=${image} />
                  <h1 class="card--title leidende-tekst">${name}</h1>
                  <h3 class="card--price leidende-tekst">${price}</h3>
                  <a class="card--link" href="#">Voeg toe</a>
                </div>
                `)
    )
    container.innerHTML = output;
  };
  
  document.addEventListener("DOMContentLoaded", showKoeken);

if ("serviceWorker" in navigator) {
  window.addEventListener("load", function() {
    navigator.serviceWorker
      .register("/serviceWorker.js")
      .then(res => console.log("service worker registered"))
      .catch(err => console.log("service worker not registered", err));
  });
}  