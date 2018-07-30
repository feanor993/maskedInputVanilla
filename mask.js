function mask(phoneInput) {
    let inputs = document.querySelectorAll(phoneInput);
    let len = inputs.length;
    if (len >= 1) {
        inputs.forEach(
            input => {
            input.addEventListener('focus', () => input.value.length < 1 ? input.value = '+7' : input.value = input.value);
        input.addEventListener('blur', () => input.value === '+7' ? input.value = '' : input.value = input.value);
        input.addEventListener('keydown', function (event) {
            if (!(event.key == 'ArrowLeft' || event.key == 'ArrowRight' || event.key == 'Backspace' || event.key == 'Tab')) {
                event.preventDefault()
            }
            let mask = '+7 (111) 111-11-11';
            if (/[0-9\+\ \-\(\)]/.test(event.key)) {
                let currentString = this.value;
                let currentLength = currentString.length;
                if (/[0-9]/.test(event.key)) {
                    if (mask[currentLength] === '1') {
                        this.value = currentString + event.key;
                    }
                    else {
                        for (let i = currentLength; i < mask.length; i++) {
                            if (mask[i] === '1') {
                                this.value = currentString + event.key;
                                break;
                            }
                            currentString += mask[i];
                        }
                    }
                }
            }
        });
    });
    }
    else {
        return [];
    }
}