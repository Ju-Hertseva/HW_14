window.onload = function () {
    const errorInput = document.getElementsByClassName('error-input');
    const inputs = document.getElementsByClassName('form__input');
    const inputFullName = document.getElementById('full-name');
    const inputUsername = document.getElementById('username');
    const inputEmail = document.getElementById('email');
    const inputPassword = document.getElementById('password1');
    const inputRepeatPassword = document.getElementById('password2');
    const checkbox = document.getElementById('check');
    const popUp = document.getElementById('popup');
    const actionButton = document.getElementById('button');
    const linkQuestion = document.getElementById('link-question');

    // inputFullName.oninput = (event) => {
    //     const regEx = /^[a-zа-я][a-zа-яё\s]*$/i;
    //     const currentValue = inputFullName.value;
    //
    //     if (!regEx.test(currentValue)) {
    //         inputFullName.classList.add("invalid");
    //         errorInput.style.display = "block";
    //         event.preventDefault();
    //     } else {
    //         if (inputFullName.classList.contains("invalid")) {
    //             inputFullName.classList.remove("invalid");
    //             errorInput.style.display = "none";
    //         }
    //     }
    //
    // }
    // function search_error(e) {
    //     for (let i = 0; i < inputs.length; i++) {
    //         inputs[i].indexOf(e.target)
    //         console.log(inputs[i].indexOf(e.target))
    //     }
//        let inputValue = inputs[i].value;
//         if (inputValue === '') {
//         } else {
//         }
//     }
//         if (inputs[i].classList.contains("invalid")) {
//             inputs[i].classList.remove("invalid");
//             errorInput.style.display = "none";
//         }
//         var newValye = event.target.value;
//         console.log(pattern.test(newValye))
//     }

    actionButton.onclick = (e) => {
        let hasError = false;

        e.preventDefault();

        if (actionButton.innerText === 'Sign Up') {

            if (!inputFullName.value.match(/^[a-zа-я][a-zа-яё\s]*$/i)) {
                inputs[0].classList.add("invalid");
                errorInput[0].style.display = "block";
                hasError = true;
            } else {
                if (inputs[0].classList.contains("invalid")) {
                    inputs[0].classList.remove("invalid");
                    errorInput[0].style.display = "none";
                    // return;
                }

            }
            if (!inputUsername.value.match(/[a-zа-яё\d_-]*/i) || inputUsername.value === '') {
                inputs[1].classList.add("invalid");
                errorInput[1].style.display = "block";
                hasError = true;
            } else {
                if (inputs[1].classList.contains("invalid")) {
                    inputs[1].classList.remove("invalid");
                    errorInput[1].style.display = "none";
                    // return;
                }
            }

            if (!inputEmail.value.match(/^[\w\.-]+@[\w-]+\.[a-z]{2,4}$/i)) {
                inputs[2].classList.add("invalid");
                errorInput[2].style.display = "block";
                hasError = true;
            } else {
                if (inputs[2].classList.contains("invalid")) {
                    inputs[2].classList.remove("invalid");
                    errorInput[2].style.display = "none";
                    // return;
                }
            }
            if (!inputPassword.value.match(/(?=.*[0-9])(?=.*[!@#$%^&*])(?=.*[A-ZА-ЯЁ])[0-9!@#$%^&*a-zA-Zа-яА-ЯёЁ]{8,}/g)) {
                inputs[3].classList.add("invalid");
                errorInput[3].style.display = "block";
                hasError = true;
            } else {
                if (inputs[3].classList.contains("invalid")) {
                    inputs[3].classList.remove("invalid");
                    errorInput[3].style.display = "none";
                    // return;
                }
            }
            if (inputRepeatPassword.value !== inputPassword.value || inputRepeatPassword.value === '') {
                inputs[4].classList.add("invalid");
                errorInput[4].style.display = "block";
                hasError = true;
            } else {
                if (inputs[4].classList.contains("invalid")) {
                    inputs[4].classList.remove("invalid");
                    errorInput[4].style.display = "none";
                    // return;
                }
            }
            if (!checkbox.checked) {
                inputs[5].classList.add("invalid");
                errorInput[5].style.display = "block";
                return;

            } else {
                if (inputs[5].classList.contains("invalid")) {
                    inputs[5].classList.remove("invalid");
                    errorInput[5].style.display = "none";
                    return;
                }
            }

            for (let i = 0; i < inputs.length; i++) {
                let inputValue = inputs[i].value;
                if (inputValue === '') {
                    alert('Заполните пустые поля!')
                    return;
                }
            }

            popUp.classList.add('active');
        } else {
            if (!inputUsername.value || !inputPassword.value) {
                alert('Заполните все поля');
            } else {
                alert(`Добро пожаловать, ${inputUsername.value}!`)
            }
        }
    }


//     const inputs = document.getElementsByClassName('form__input');
//
//     for (let i = 0; i < inputs.length; i++) {
//        let inputValue = inputs[i].value;
//         if (inputValue === '') {
//         } else {
//         }
//     }


    // inputUsername.oninput = (e) => {
    //     const regExe = /[a-zа-яё\d_-]*/i;
    //     // const regEx = /[\w-]*/i;
    //     const curVal = inputUsername.value;
    //
    //     if (!regExe.test(curVal)) {
    //         // console.log('1')
    //         inputUsername.classList.add("invalid");
    //         errorInput.style.display = "block";
    //         e.preventDefault();
    //     } else {
    //         if (inputUsername.classList.contains("invalid")) {
    //             inputUsername.classList.remove("invalid");
    //             errorInput.style.display = "none";
    //         }
    //     }
    // }

    // inputEmail.oninput = (event) => {
    //     const regEx = /^[\w\.-]+@[\w-]+\.[a-z]{2,4}$/i;
    //     const currentValue = inputEmail.value;
    //
    //     if (!regEx.test(currentValue)) {
    //         inputFullName.classList.add("invalid");
    //         errorInput.style.display = "block";
    //         event.preventDefault();
    //     } else {
    //         if (inputEmail.classList.contains("invalid")) {
    //             inputEmail.classList.remove("invalid");
    //             errorInput.style.display = "none";
    //         }
    //     }
    //
    // }
    // const password = inputPassword.value;
    // inputPassword.oninput = (event) => {
    //     const regEx = /(?=.*[0-9])(?=.*[!@#$%^&*])(?=.*[A-ZА-ЯЁ])[0-9!@#$%^&*a-zA-Zа-яА-ЯёЁ]{8,}/g;
    //
    //     if (!regEx.test(password)) {
    //         inputPassword.classList.add("invalid");
    //         errorInput.style.display = "block";
    //         event.preventDefault();
    //     } else {
    //         if (inputPassword.classList.contains("invalid")) {
    //             inputPassword.classList.remove("invalid");
    //             errorInput.style.display = "none";
    //         }
    //     }
    // }

    // inputRepeatPassword.oninput = (event) => {
    //     const confirmPassword = inputRepeatPassword.value;
    //     if (password !== confirmPassword) {
    //         inputRepeatPassword.classList.add("invalid");
    //         errorInput.style.display = "block";
    //         event.preventDefault();
    //     } else {
    //         if (inputRepeatPassword.classList.contains("invalid")) {
    //             inputRepeatPassword.classList.remove("invalid");
    //             errorInput.style.display = "none";
    //         }
    //     }
    // }
    // function isValidPassword(password) {
    //     const rules = {
    //         digitRegEx: /\d/,
    //         specialSymbolsRegEx: /[-!$%^&*()_+|~=`{}\\[\]:\\/;<>?,.@#]/,
    //         lowerCaseRegEx: /[a-z]/,
    //         upperCaseRegEx: /[A-Z]/,
    //     };
    //
    //     let isValid = false;
    //     for (const rule in rules) {
    //         isValid = rules[rule].test(password);
    //         if (!isValid) return isValid;
    //     }
    //
    //     return isValid;
    // }

    // inputUsername.onkeydown = (e) => {
    //     if ((e.key === ".") || (e.key === ",")) {
    //         return false;
    //     }
    // }

    // checkbox.onchange = (e) => {
    //     if (checkbox.checked) {
    //         console.log("Согласен");
    //     } else {
    //         console.log("Не согласен");
    //     }
    // }

    // actionButton.onclick = (e) => {
    //     e.preventDefault();
    //
    //     if (actionButton.innerText === 'Sign Up') {
    //
    //         if (!inputFullName.value) {
    //             alert('Заполните поле Full Name');
    //             return;
    //         }
    //
    //         if (!inputUsername.value) {
    //             alert('Заполните поле Your username');
    //             return;
    //         }
    //
    //         if (!inputEmail.value) {
    //             alert('Заполните поле E-mail');
    //             return;
    //         }
    //
    //         if (!inputPassword.value) {
    //             alert('Заполните поле Password');
    //             return;
    //         }
    //
    //         if (inputPassword.value.length < 8) {
    //             alert('Пароль слишком короткий!');
    //             return;
    //         }
    //
    //         if (!inputRepeatPassword.value) {
    //             alert('Заполните поле Repeat Password');
    //             return;
    //         }
    //         if (inputRepeatPassword.value !== inputPassword.value) {
    //             alert('Пароль неверный!');
    //             return;
    //         }
    //
    //         if (!checkbox.checked) {
    //
    //             checkbox.classList.add("invalid");
    //             errorInput.style.display = "block";
    //             // alert('Согласитесь с нашими Условиями обслуживания и Заявлением о конфиденциальности');
    //             // event.preventDefault();
    //             return;
    //         } else {
    //             // console.log('Checkbox is not checked');
    //             if (checkbox.classList.contains("invalid")) {
    //                 checkbox.classList.remove("invalid");
    //                 errorInput.style.display = "none";
    //             }
    //         }
    //
    //         popUp.classList.add('active');
    //     } else {
    //         if (!inputUsername.value || !inputPassword.value) {
    //             alert('Заполните все поля');
    //         } else {
    //             alert(`Добро пожаловать, ${inputUsername.value}!`)
    //         }
    //     }
    // }

    document.getElementById('popup-close').onclick = function (e) {
        let newClient = {
            name: inputFullName.value,
            userName: inputUsername.value,
            email: inputEmail.value,
            password: inputPassword.value
        }
        let clients = [];

        let client = localStorage.getItem('client');
        if (client) {
            clients = JSON.parse(client);
        }

        clients.push(newClient);
        localStorage.setItem('client', JSON.stringify(clients));

        console.log(localStorage);

        popUp.classList.remove('active');
        document.getElementById('form').reset();
        goToLoginPage();
    }

    function goToLoginPage() {
        document.getElementById('formTitle').innerText = 'Log in to the system';
        document.getElementById('label-fullName').remove();
        document.getElementById('label-email').remove();
        document.getElementById('label-repeatPassword').remove();
        document.getElementById('label-checkbox').remove();
        actionButton.innerText = 'Sign In';
        linkQuestion.remove();
    }

    linkQuestion.onclick = function (e) {
        e.preventDefault()
        goToLoginPage();
    }

}
