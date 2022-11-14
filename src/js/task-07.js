const inputControlRef = document.querySelector("#font-size-control");
const inputRef = document.querySelector("#text");
inputControlRef.oninput = function () {
    console.log(this.value)
    inputRef.style.fontSize = inputControlRef.value + 'px';
}

// const inputRef = document.querySelector("#font-size-control");
// const inputControlRef = document.querySelector("text");
// console.log(inputRef);
// inputRef.addEventListener("input", () => {
//     const spanRef = inputRef.value
//     console.log(spanRef)
// })
