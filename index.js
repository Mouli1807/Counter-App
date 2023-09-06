//getting the value of counter from the UI and stopring it in countValue
let countValue = document.querySelector("#counter");

const increment = () => {
    //converting the string into int using parseInt and storing it in value
    let value = parseInt(countValue.innerText);
    //increasing the num
    value = value + 1;
    //returning the incremented value to the UI
    countValue.innerText = value;
}

const decrement = () => {
    //converting the string into int using parseInt and storing it in value
    let value = parseInt(countValue.innerText);
    //increasing the num
    value = value - 1;
    //returning the incremented value to the UI
    countValue.innerText = value;
}