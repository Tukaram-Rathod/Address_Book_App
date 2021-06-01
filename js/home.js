// UC-12 
let addressBookList;
window.addEventListener('DOMContentLoaded', (event) => {
  createInnerHTML();
});

const createInnerHTML = () => {
  const headerHtml = "<th></th><th>Full Name</th><th>Address</th><th>City</th><th>State</th><th>Zip-Code</th><th>Phone Number</th><th>Actions</th>";
  let innerHtml = `${headerHtml}`;
  let addressBookList = createAddressBookJSON();
  for(const addressBookData of addressBookList) {
      innerHtml = `${innerHtml}
      <tr>
          <td></td>
          <td>${addressBookData._name}</td>
          <td>${addressBookData._address}</td>
          <td>${addressBookData._city}</td>
          <td>${addressBookData._state}</td>
          <td>${addressBookData._zip}</td>
          <td>${addressBookData._phone}</td>
          <td>
          <img id="1" onclick="remove(this)" src="../assets/delete-black-18dp.svg" alt="delete">
          <img id="1" onclick="update(this)" src="../assets/create-black-18dp.svg" alt="edit">
          </td>
      </tr>`;
  }
  document.querySelector('#table-display').innerHTML = innerHtml;
}
const createAddressBookJSON = () => {
  let addressBookLocal = [
      {
          _name: 'Ashish Rathod',
          _address:'Gangakhed',
          _city: 'Pune',
          _state: 'Maharashtra',
          _zip: '411048',
          _phone: '7784561230',
      },
      {
          _name: 'Amol Shale',
          _address: 'Loha',
          _city: 'Parbhani',
          _state: 'Maharashtra',
          _zip: '411001',
          _phone: '8804561230',
      }
  ];
  return addressBookLocal;
}