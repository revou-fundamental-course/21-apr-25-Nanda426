console.log("JavaScript is working!")

function validateForm() {
    const inputCelcius = document.getElementById("konversi-input");
    console.log(inputCelcius.value);

    if (inputCelcius.value === "") {
        alert("Input tidak boleh kosong!");
        document.getElementById("result-input").value = "";
        document.getElementById("result-reaumur").value = "";
        document.getElementById("calculate-detail").value = "";
    } else {
        const celsius = parseFloat(inputCelcius.value);
        if (isNaN(celsius)) {
            alert("Please enter a valid number");
            document.getElementById("result-input").value = "";
            document.getElementById("result-reaumur").value = "";
            document.getElementById("calculate-detail").value = "";
            return;
        }
        const fahrenheit = (celsius * 9/5) + 32;
        const reaumur = celsius * 4/5;
        const kelvin = celsius + 273.15;
        document.getElementById("result-input").value = fahrenheit.toFixed(2) + " °F";
        document.getElementById("result-reaumur").value = reaumur.toFixed(2) + " °Re";
        document.getElementById("result-kelvin").value = kelvin.toFixed(2) + " K";
        document.getElementById("calculate-detail").value = 
            `S(°F) = S(°C) × 9/5 + 32 = ${celsius} × 9/5 + 32 = ${fahrenheit.toFixed(2)}\n` +
            `S(°Re) = S(°C) × 4/5 = ${celsius} × 4/5 = ${reaumur.toFixed(2)}\n` +
            `S(K) = S(°C) + 273.15 = ${celsius} + 273.15 = ${kelvin.toFixed(2)}`;
    }
}
