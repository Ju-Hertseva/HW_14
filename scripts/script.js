window.onload = function () {
    const errorInput = document.getElementsByClassName('error-input');
    const errorInputRegistration = document.getElementsByClassName('error-input__next');
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

    // let hasError = false;

    function hideErrors() {
        for (let i = 0; i < inputs.length; i++) {
            if (inputs[i].classList.contains("invalid")) {
                inputs[i].classList.remove("invalid");
                errorInput[i].style.display = "none";
                // errorInputRegistration[i].style.display = "none";
            }
        }
    }

    function showError(element) {
        element.classList.add("invalid");
        element.nextElementSibling.style.display = "block";
    }

    actionButton.onclick = (e) => {
        hideErrors();
        let hasError = false;

        e.preventDefault();

        if (actionButton.innerText === 'Sign Up') {
            if (!inputFullName.value.match(/^[a-zа-я][a-zа-яё\s]*$/i)) {
                showError(inputFullName);
                hasError = true;
            }

            if (!inputUsername.value.match(/^[a-zа-яё\d_-]*$/i) || inputUsername.value === '') {
                showError(inputUsername);
                hasError = true;
            }

            if (!inputEmail.value.match(/^[\w\.-]+@[\w-]+\.[a-z]{2,4}$/i)) {
                showError(inputEmail);
                hasError = true;
            }

            if (!inputPassword.value.match(/(?=.*[0-9])(?=.*[!@#$%^&*])(?=.*[A-ZА-ЯЁ])[0-9!@#$%^&*a-zA-Zа-яА-ЯёЁ]{8,}/g)) {
                showError(inputPassword);
                hasError = true;
            }

            if (inputRepeatPassword.value !== inputPassword.value || inputRepeatPassword.value === '') {
                showError(inputRepeatPassword);
                hasError = true;
            }

            if (!checkbox.checked) {
                showError(checkbox);
                return;
            }
            // else {
            //     if (inputs[5].classList.contains("invalid")) {
            //         inputs[5].classList.remove("invalid");
            //         errorInput[5].style.display = "none";
            //         return;
            //     }
            // }

            for (let i = 0; i < inputs.length; i++) {
                let inputValue = inputs[i].value;
                if (inputValue === '') {
                    alert('Заполните пустые поля!')
                    return;
                }
            }

            if (!hasError) {
                popUp.classList.add('active');
            }
        } else if (actionButton.innerText === 'Sign In') {
            // console.log(actionButton.innerText)

            if (!inputUsername.value.match(/^[a-zа-яё\d_-]*$/i) || !inputUsername.value) {
                showError(inputUsername);
                hasError = true;
            }

            if (!inputPassword.value.match(/(?=.*[0-9])(?=.*[!@#$%^&*])(?=.*[A-ZА-ЯЁ])[0-9!@#$%^&*a-zA-Zа-яА-ЯёЁ]{8,}/g)) {
                showError(inputPassword);
                hasError = true;
            }


            if (!hasError) {

                const username = inputUsername.value;
                const password = inputPassword.value;

                const user = {username, password};

                let checkUsers = [];
                checkUsers = JSON.parse(localStorage.getItem('client'));

                // let checkUserInfo = checkUser.some(item => item.username === user.username && item.password === user.password);
                let checkUserName = checkUsers.find(client => client.userName === user.username);
                let checkUserPassword = checkUsers.find(client => client.userName === user.username && client.password === user.password);

                if (checkUserName) {
                    errorInputRegistration[0].style.display = "none";

                    if (checkUserPassword) {
                        errorInputRegistration[1].style.display = "none";
                        let clientName;
                        for (let i = 0; i < checkUsers.length; i++) {
                            if (checkUsers[i].userName === user.username) {
                                clientName = checkUsers[i].name;
                            }
                        };

                        console.log(clientName)
                        document.getElementById('formTitle').innerText = `Welcome, ${clientName}!`;
                        document.getElementById('formTitle').style.marginLeft = 'auto';
                        document.getElementById('formTitle').style.marginRight = 'auto';
                        document.getElementById('formTitle').style.marginBottom = '120px';

                        document.getElementsByClassName('form__subtitle')[0].remove();
                        document.getElementsByClassName('form__label')[1].style.display = 'none';
                        document.getElementsByClassName('form__label')[3].style.display = 'none';
                        inputUsername.remove();
                        inputPassword.remove();
                        actionButton.innerText = 'Exit';
                        linkQuestion.remove();

                    } else {
                        inputPassword.classList.add('invalid');
                        errorInputRegistration[1].style.display = 'block';
                        // hasError = true;
                    }
                } else {
                    inputUsername.classList.add('invalid');
                    errorInputRegistration[0].style.display = 'block';
                    // hasError = true;
                }
            }
        } else  location.reload();
    }


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

        // console.log(localStorage);

        popUp.classList.remove('active');
        // document.getElementById('form').reset();
        goToLoginPage();
        // console.log(localStorage);
    }

    function goToLoginPage() {
        document.getElementById('form').reset();
        document.getElementById('formTitle').innerText = 'Log in to the system';
        document.getElementById('label-fullName').style.display = 'none';
        document.getElementById('label-email').style.display = 'none';
        document.getElementById('label-repeatPassword').style.display = 'none';
        document.getElementById('label-checkbox').style.display = 'none';
        actionButton.innerText = 'Sign In';
        linkQuestion.innerText = 'Registration';
        // linkQuestion.remove();
    }

    linkQuestion.onclick = function (e) {
        if (linkQuestion.innerText !== 'Registration') {
            e.preventDefault()
            goToLoginPage();
        } else location.reload();
    }

}