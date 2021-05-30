window.addEventListener('DOMContentLoaded',(event) =>{
    const fullName = document.querySelector('#fullName');
    const textError = document.querySelector('.textError');

    fullName.addEventListener('input',function () {
        if(fullName.value.length == 0) {
            textError.textContent = "";
            return
        }
        try{
            (new Contact()).fullName = fullName.value;
            textError.textContent = "";
        }catch(e){
            textError.textContent = e;
        }
    });


    const phoneNo = document.querySelector('#tel');
    const phoneError = document.querySelector('.mobile-error');
    phoneNo.addEventListener('input',function () {
        if(phoneNo.value.length == 0){
            phoneError.textContent = "";
            return
        }
        try{
            (new Contact()).phoneNumber = phoneNo.value;
            phoneError.textContent ="";
        }catch (e) {
            phoneError.textContent = e;
        }
    });


    const address = document.querySelector('#address');
    const addressError = document.querySelector('.address-error');
    address.addEventListener('input', function () {
        if (address.value.length == 0) {
            addressError.textContent = "";
            return
        }
        try {
            (new Contact()).address = address.value;
            addressError.textContent = "";
        } catch (e) {
            addressError.textContent = e;
        }
    });

    const zip = document.querySelector('#zip');
    const zipError = document.querySelector('.zip-error');
    zip.addEventListener('input', function () {
        if (zip.value.length == 0) {
            zipError.textContent = "";
            return;
        }
        try {
            (new Contact()).zip = zip.value;;
            zipError.textContent = "";
        } catch (e) {
            zipError.textContent = e;
        }
    });
})