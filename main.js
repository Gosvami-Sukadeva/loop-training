// tutaj rozwiązanie
const btn = document.querySelector("button");
const liItems = document.querySelectorAll("li");
let fontSize = 10;

// btn.addEventListener("click", () => {
//     liItems.forEach((liItem) => {
//         liItem.style.display = "block";
//         liItem.style.fontSize = fontSize + "px";
//     })
//     fontSize++;
// })

// PĘTLA

btn.addEventListener("click", () => {
    console.log("funkcja działa!")
    fontSize++;
    for (i = 0; i < liItems.length; i++) {
        if (!liItems[i].style.display) {
            console.log("dodałem blok");
            liItems[i].style.display = "block";

        }
        liItems[i].style.fontSize = `${fontSize}px`;
    }
})

// for (let i = 0; i < liItems.length; i++) {
//   // if (!liItems[i].style.display) {
//   //  console.log("dodałem block");
//   //  liItems[i].style.display = "block";
//   // }
//   liItems[i].style.display = "block";
//   liItems[i].style.fontSize = `${fontSize}px`;
//  }