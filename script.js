document.addEventListener('DOMContentLoaded', function() {
    // Get references to DOM elements
    const passwordDisplay = document.getElementById('password');
    const lengthInput = document.getElementById('length');
    const uppercaseInput = document.getElementById('uppercase');
    const lowercaseInput = document.getElementById('lowercase');
    const numbersInput = document.getElementById('numbers');
    const symbolsInput = document.getElementById('symbols');
    const generateButton = document.getElementById('generate');
    const copyButton = document.getElementById('copy');

    // Function to generate a random password
    function generatePassword() {
        const length = parseInt(lengthInput.value);
        const includeUppercase = uppercaseInput.checked;
        const includeLowercase = lowercaseInput.checked;
        const includeNumbers = numbersInput.checked;
        const includeSymbols = symbolsInput.checked;

        let characterSet = "";
        if (includeUppercase) characterSet += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        if (includeLowercase) characterSet += "abcdefghijklmnopqrstuvwxyz";
        if (includeNumbers) characterSet += "0123456789";
        if (includeSymbols) characterSet += "!@#$%^&*()_+~`|}{[]:;<>,.?/";

        if (characterSet === "") {
            alert("Please select at least one character set.");
            return "";
        }

        let password = "";
        for (let i = 0; i < length; i++) {
            const randomIndex = Math.floor(Math.random() * characterSet.length);
            password += characterSet[randomIndex];
        }

        return password;
    }

    // Event listener for the generate button
    generateButton.addEventListener('click', function() {
        const password = generatePassword();
        passwordDisplay.value = password;
    });

    // Event listener for the copy button
    copyButton.addEventListener('click', function() {
        if (passwordDisplay.value) {
            passwordDisplay.select();
            document.execCommand('copy');
            alert('Password copied to clipboard!');
        } else {
            alert('Generate a password first!');
        }
    });
});