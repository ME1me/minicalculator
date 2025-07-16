function calculate(operation) {
    let n1 = parseFloat(document.getElementById("num1").value);
    let n2 = parseFloat(document.getElementById("num2").value);
    let result = "";


    if (isNaN(n1) || isNaN(n2)) {
        result = "please enter valid number"
    }
    else {
        switch (operation) {
            case "add":
                result = n1 + n2;
                break;

            case "sub":
                result = n1 - n2;
                break;

            case "multiply":
                result = n1 * n2;
                break;

            case "divide":
                result = n2 !== 0 ? n1 / n2 : "cannot divide byzero"
                break;

            default:
                result = "Invalid";

        }
    }
    document.getElementById("result").innerText = "Result: " + result;

}