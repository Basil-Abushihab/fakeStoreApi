function Products(title, price, description, image) {
  this.title = title;
  this.price = price;
  this.description = description;
  this.image = image;
}

async function retrieveProducts(url) {
  let products = await fetch(url);
  products = await products.json();
  console.log(products);
  products.map((element) => {
    let product = new Products(
      element.title,
      element.price,
      element.description,
      element.image
    );
    let card = document.createElement("div");
    let scrollableContainer = document.getElementById("ScrollableDiv");
    card.className = "card bg-primary";
    let productImage = document.createElement("img");
    productImage.style.width = "300px";
    productImage.src = product.image;
    productImage.class = "card-img-top";
    let cardBody = document.createElement("div");
    cardBody.className = "card-body";
    let title = document.createElement("h4");
    let price = document.createElement("h4");
    let description = document.createElement("h4");
    title.innerText = product.title;
    price.innerText = product.price;
    description.innerText = product.description;

    card.appendChild(productImage);
    cardBody.appendChild(title);
    cardBody.appendChild(price);
    cardBody.appendChild(description);
    card.appendChild(cardBody);

    scrollableContainer.appendChild(card);
  });
}

retrieveProducts("https://fakestoreapi.com/products");
