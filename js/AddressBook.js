// UC-15
let isUpdate = false;
let addressBookObj = {};
window.addEventListener('DOMContentLoaded', (event) => {
    const name = document.querySelector('#name');
    const textError = document.querySelector('.text-error');
    name.addEventListener('input', function () {
        if (name.value.length == 0) {
            textError.textContent = "";
            return;
        }
        try {
            (new AddressBookData()).fullname = name.value;;
            textError.textContent = "";
        } catch (e) {
            textError.textContent = e;
        }
    });

    const phone = document.querySelector('#phone');
    const phoneError = document.querySelector('.phone-error');
    phone.addEventListener('input', function () {
        if (phone.value.length == 0) {
            phoneError.textContent = "";
            return;
        }
        try {
            (new AddressBookData()).phone = phone.value;;
            phoneError.textContent = "";
        } catch (e) {
            phoneError.textContent = e;
        }
    });

    const address = document.querySelector('#address');
    const addressError = document.querySelector('.add-error');
    address.addEventListener('input', function () {
        if (address.value.length == 0) {
            adddressError.textContent = "";
            return;
        }
        try {
            (new AddressBookData()).address = address.value;;
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
            (new AddressBookData()).zip = zip.value;;
            zipError.textContent = "";
        } catch (e) {
            zipError.textContent = e;
        }
    });

    checkForUpdate();
});

// UC-15
const checkForUpdate = () => {
    const addressBookJson = localStorage.getItem('editEmp');
    isUpdate = addressBookJson ? true : false;
    if(!isUpdate) return;
    addressBookObj = JSON.parse(addressBookJson);
    setForm();
}

const setForm = () => {
    setValue('#name', addressBookObj._fullname);
    setValue('#phone', employeePayrollObj._phone);
    setValue('#address', employeePayrollObj._address);
    setValue('#city', employeePayrollObj._city);
    setValue('#state', employeePayrollObj._state);
    setValue('#zip', employeePayrollObj._zip);

}

// UC-6
const save = () => {
    try{
        let addressBookData = createAddressBook();
        createAndUpdateStorage(addressBookData);
    }catch (e) {
        return;
    }
}

//UC-6
const createAddressBook = () => {
    let addressBookData = new AddressBookData();
    try{
        addressBookData.fullname = getInputValuesById('#name');
    }catch(e){
        setTextValue('.test-error', e);
        throw e;
    }
    addressBookData.id = Math.floor((Math.random() * 100000) + 1);
    addressBookData.phone = getInputValuesById('#phone');
    addressBookData.address = getInputValuesById('#address');
    addressBookData.city = getInputValuesById('#city');
    addressBookData.state = getInputValuesById('#state');
    addressBookData.zip = getInputValuesById('#zip');
    alert(addressBookData.toString());
    return addressBookData;
}

// UC-8
function createAndUpdateStorage(addressBookData){
    let addressBookList = JSON.parse(localStorage.getItem("AddressBookList"));
    if(addressBookList != undefined){
        addressBookList.push(addressBookData);
    }
    else{
        addressBookList = [addressBookData];
    }
    alert(addressBookList.toString());
    localStorage.setItem("AddressBookList", JSON.stringify(addressBookList));
}

const getInputValuesById = (id) => {
    let value = document.querySelector(id).value;
    return value;
}

//UC-9
const resetForm = () => {
    setValue('#name','');
    setValue('#phone','');
    setValue('#address','');
    setValue('#city','');
    setValue('#state','');
    setValue('#zip','');
}
