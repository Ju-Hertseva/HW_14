window.onload = function () {
    let inputFullName = document.getElementById('full-name');
    let inputUsername = document.getElementById('username');
    let inputEmail = document.getElementById('email');
    let inputPassword = document.getElementById('password1');
    let inputRepeatPassword = document.getElementById('password2');
    let checkbox = document.getElementById('check');
    let popUp = document.getElementById('popup');
    let actionButton = document.getElementById('button');
    let linkQuestion = document.getElementById('link-question');

    inputFullName.onkeydown = (event) => {
        if (!isNaN(event.key)) {
            return false;
        }
    }

    inputUsername.onkeydown = (e) => {
        if ((e.key === ".") || (e.key === ",")) {
            return false;
        }
    }

    checkbox.onchange = (e) => {
        if (checkbox.checked) {
            console.log("Согласен");
        } else {
            console.log("Не согласен");
        }
    }

    actionButton.onclick = (e) => {
        e.preventDefault();

        if (actionButton.innerText === 'Sign Up') {

            if (!inputFullName.value) {
                alert('Заполните поле Full Name');
                return;
            }

            if (!inputUsername.value) {
                alert('Заполните поле Your username');
                return;
            }

            if (!inputEmail.value) {
                alert('Заполните поле E-mail');
                return;
            }

            if (!inputPassword.value) {
                alert('Заполните поле Password');
                return;
            }

            if (inputPassword.value.length < 8) {
                alert('Пароль слишком короткий!');
                return;
            }

            if (!inputRepeatPassword.value) {
                alert('Заполните поле Repeat Password');
                return;
            }
            if (inputRepeatPassword.value !== inputPassword.value) {
                alert('Пароль неверный!');
                return;
            }

            if (!checkbox.checked) {
                alert('Согласитесь с нашими Условиями обслуживания и Заявлением о конфиденциальности');
                return;
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

    document.getElementById('popup-close').onclick = function (e) {
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
