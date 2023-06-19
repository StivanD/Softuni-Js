function passValidator(input) {
    let pass = input;

    let lengthValidator = (pass) => {
        if (pass.length >= 6 && pass.length <= 10) {
            return true;
        }
        else {
            return false;
        }
    }

    let lettersAndDigitsValidator = (pass) => {
        if (/^[A-Za-z0-9]*$/.test(pass)) {
            return true;
        }
        else {
            return false;
        }
    }

    let hasAtLeastTwoLetters = (pass) => {
        if (/\d{2,}/.test(pass)) {
            return true;
        }
        else {
            return false;
        }
    }

    if (lengthValidator(pass) === false) {
        console.log('Password must be between 6 and 10 characters');
    }

    if (lettersAndDigitsValidator(pass) === false) {
        console.log(`Password must consist only of letters and digits`);
    }

    if (hasAtLeastTwoLetters(pass) === false) {
        console.log(`Password must have at least 2 digits`);
    }

    if (lengthValidator(pass) && lettersAndDigitsValidator(pass) && hasAtLeastTwoLetters(pass)) {
        console.log('Password is valid');
    }

}
