document.addEventListener('DOMContentLoaded', () =>{
    const orderBtn = document.getElementById('orderBtn');
    let requestName = document.getElementById('name');
    let requestEmail = document.getElementById('email');
    let requestTel = document.getElementById('phone');
    let requestWork = document.querySelector('.select-text');

    let labelName = document.querySelector('.label-name');
    let labelMail = document.querySelector('.label-mail');
    let labelTel = document.querySelector('.label-tel');

    const orderHeading = document.querySelector('.section-order__heading');
    const formBlock = document.querySelector('.section-order__form-block');
    const successBlock = document.querySelector('.section-order__success-block');

    /* Site - TG */
    const TOKEN = "6661183670:AAH8AGqYqFUdC8IuupScDV-DALlzL-gdPBg";
    const CHAT_ID = "-1002032429351";
    const URI_API = `https://api.telegram.org/bot${ TOKEN }/sendMessage`;

    orderBtn.addEventListener('click', function (e){
        e.preventDefault();

        labelName.textContent = 'Имя'
        labelName.classList.remove('label-invalide');
        labelMail.textContent = 'E-mail'
        labelMail.classList.remove('label-invalide');
        requestEmail.classList.remove('input-invalide');
        labelTel.textContent = 'Телефон'
        labelTel.classList.remove('label-invalide');
        requestTel.classList.remove('input-invalide');

        let message = `<b>Заявка с сайта</b>\n`;
            message += `<b>Имя: </b> ${ requestName.value }\n`;
            message += `<b>Номер телефона: </b> ${ requestTel.value }\n`;
            message += `<b>Email: </b> ${ requestEmail.value }\n`;
            message += `<b>Работа: </b> ${ requestWork.textContent }`;

        if (requestName.value == ""){
            requestName.classList.add('input-invalide');
            labelName.textContent = 'Заполните поле "Имя"';
            labelName.classList.add('label-invalide');
        } if (requestEmail.value ==  ""){
            requestEmail.classList.add('input-invalide');
            labelMail.textContent = 'Заполните поле "E-mail"';
            labelMail.classList.add('label-invalide');
        } if (requestTel.value ==  ""){
            requestTel.classList.add('input-invalide');
            labelTel.textContent = 'Заполните поле "Телефон"';
            labelTel.classList.add('label-invalide');
        } else if(requestName.value !== "" && requestEmail.value !==  "" && requestTel.value !==  ""){
            axios.post(URI_API, {
                chat_id: CHAT_ID,
                parse_mode: 'html',
                text: message 
            })
            .then((res) => {
                requestName.value = "";
                labelName.textContent = 'Имя'
                labelName.classList.remove('label-invalide');
                requestName.classList.remove('input-invalide');
                requestEmail.value = "";
                labelMail.textContent = 'E-mail'
                labelMail.classList.remove('label-invalide');
                requestEmail.classList.remove('input-invalide');
                requestTel.value = "";
                labelTel.textContent = 'Телефон'
                labelTel.classList.remove('label-invalide');
                requestTel.classList.remove('input-invalide');

                orderHeading.classList.add('invisible')
                formBlock.classList.add('invisible')
                successBlock.classList.add('visible')
            })
            .catch((err) => {
                console.warn(err);
            })
            .finally(() => {
                console.log('Конец');
            })
        };
    });
})