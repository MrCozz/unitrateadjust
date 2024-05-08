let itemName;
let quantityPerPack = 1;
let totalCost = 4.00;
let buttonSize = 30;
let buttonSpacing = 60; // Increased button spacing

function setup() {
  createCanvas(600, 380); // Increased canvas width to accommodate the rectangles
  // Randomly select an item from the array
  let items = ["Apples", "Bananas", "Pencils", "Erasers", "Notebooks", "Books", "Stickers", "Oranges", "Grapes", "Post-Its"];
  itemName = "Pack of " + random(items);
}

function draw() {
  background(220);
  textAlign(CENTER);
  textSize(20);
  text(itemName, width/2, 30);

  // Rectangle border for adjusting quantity per pack
  noFill();
  rect(150, 50, 150, 100);
  // Buttons for adjusting quantity per pack
  createButton('▲').position(205, 50).size(buttonSize).mousePressed(increaseQuantity); // Adjusted position
  createButton('▼').position(205, 120).size(buttonSize).mousePressed(decreaseQuantity); // Adjusted position
  // Text for quantity per pack
  fill(0);
  textAlign(CENTER, CENTER);
  textSize(16);
  text("Quantity Per Pack:", 225, 90);
  text(quantityPerPack, 225, 110);

  // Rectangle border for adjusting total cost
  noFill();
  rect(300, 50, 150, 100);
  // Buttons for adjusting total cost
  createButton('▲').position(355, 50).size(buttonSize).mousePressed(increaseCost); // Adjusted position
  createButton('▼').position(355, 120).size(buttonSize).mousePressed(decreaseCost); // Adjusted position
  // Text for total cost
  fill(0);
  textAlign(CENTER, CENTER);
  textSize(16);
  text("Total Cost:", 375, 90);
  text("$" + totalCost.toFixed(2), 375, 110);

  // Calculate unit price
  let unitPrice = totalCost / quantityPerPack;
  textSize(18);
  text("Unit Price: $" + unitPrice.toFixed(2), width/2, 290);

  // Display the formula with current values
  textSize(14);
  textAlign(CENTER);
  text("(Total Cost) / (Quantity Per Pack) = (Unit Price)", width/2, 260); // Rearranged formula

  // Text for total cost and quantity per pack
  textSize(16);
  text("Total Cost: $" + totalCost.toFixed(2), 100, 320);
  text("Quantity Per Pack: " + quantityPerPack, 300, 320);
}

function increaseQuantity() {
  if (quantityPerPack < 10) {
    quantityPerPack++;
  }
}

function decreaseQuantity() {
  if (quantityPerPack > 1) {
    quantityPerPack--;
  }
}

function increaseCost() {
  totalCost += 0.10;
}

function decreaseCost() {
  if (totalCost > 0.10) {
    totalCost -= 0.10;
  }
}
