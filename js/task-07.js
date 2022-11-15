const inputControlRef = document.querySelector("#font-size-control");
const inputRef = document.querySelector("#text");
inputControlRef.addEventListener('input', event => {
    inputRef.style.fontSize = inputControlRef.value + 'px';
})

