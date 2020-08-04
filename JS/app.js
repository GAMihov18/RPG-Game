//Link Confirmed(LC)
console.log("LC")
//GMF values
//nothing for now...

//IS values
const inventory = document.getElementById('IS');
let inventorySlots = 5;
//AM values

drawInventorySlots(inventorySlots);

//Functions
//Draws the initial inventory slots
function drawInventorySlots(numberOfSlots) {
  for (let i = 0; i < numberOfSlots; i++) {
    let div = document.createElement('div');
    div.id = `inventory-slot${i}`;
    div.classList = 'inventory-slot';
    let text = document.createTextNode('Inv Slot');
    div.appendChild(text);
    console.log(div);
    inventory.appendChild(div);
  }
}