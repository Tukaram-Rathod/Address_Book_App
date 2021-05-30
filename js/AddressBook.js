window.addEventListener('DOMContentLoaded',(event) =>{
    const fullName = document.querySelector('#fullName');
    const textError = document.querySelector('.text-error');

    fullName.addEventListener('input',function () {
        if(fullName.value.length == 0) {
            textError.textContent = "";
            return;
        }
        try{
            (new Contact()).fullName = fullName.value;;
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
            return;
        }
        try{
            (new Contact()).phoneNo = phoneNo.value;;
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
            return;
        }
        try {
            (new Contact()).address = address.value;;
            addressError.textContent = "";
        } catch (e) {
            addressError.textContent = e;
        }
    });
});    
    
/**UC6 */

const save = () => {
    try{
        
        let contact = saveData();
        createAndUpdateStorage(contact);
    }catch(e){
        return ;
    }
}; 

const saveData = () => {
    let contact = new Contact();
    try{
        contact.fullName = getInputValueById('#fullName');
    }catch(e){
        setValue('.test-error',e);
        throw e;
    }
    contact.fullName = getInputValueById('#fullName');
    contact.address = getInputValueById('#address');
    contact.phoneNo = getInputValueById('#tel');
    contact.city = getInputValueById('#city');
    contact.state = getInputValueById('#state');
    contact.zip = getInputValueById('#zip');
    alert(contact.toString());
    return contact;
}

 /**Adding to local storage and update  */
 function createAndUpdateStorage(contact) {

    let contactDataList = JSON.parse(localStorage.getItem("ContactDataList"));

    if(contactDataList != undefined) {
        contactDataList.push(contact);
    } else {
        contactDataList = [contact];
    }
    alert(contactDataList.toString());
    localStorage.setItem("ContactDataList", JSON.stringify(contactDataList));
}

const getInputValueById = (id) => {
    let value = document.querySelector(id).value;
    return value;
}

/**UC9 Resetting the form by using RESET Button */
const resetForm = () => {
    setValue('#fullName','');
    setValue('#address','');
    setValue('#tel','');
    setValue('#city','');
    setValue('#state','');
    setValue('#zip','');
}
