/**@Description For viewing details in tabular format
 * Tried with static address book json array before showing from local storage
 */

 window.addEventListener('DOMContentLoaded',(event) => {
  createInnerHtml();
});

const createInnerHtml = () => {
  const headerHtml = ` 
    <th>Fullname</th>
    <th>Address</th>
    <th>City</th>
    <th>State</th>
    <th>Zip Code</th>
    <th>Phone Number</th>
    <th>Actions</th>
  `;
  let contactList = createContactJSON();
  if(contactList.length == 0) return;
  document.querySelector(".person-count").textContent = contactList.length;
  let innerHtml = `${headerHtml}`;
  for(const contactData of contactList)
  {
  innerHtml = `${innerHtml}
  <tr>
      <td>${contactData._firstName} ${contactData._lastName}</td>
      <td>${contactData._address}</td>
      <td>${contactData._city}</td>
      <td>${contactData._state}</td>
      <td>${contactData._zip}</td>
      <td>${contactData._phone}</td>
      <td>
      <img name="${contactData._id}" onclick="remove(this)" alt="delete" 
              src="../assets/icons/delete-black-18dp.svg">
      <img name="${contactData._id}" alt="edit" onclick="update(this)"
              src="../assets/icons/create-black-18dp.svg">
      </td>
  </tr>
  `;
  }
document.querySelector('#table-display').innerHTML = innerHtml;
}

/**Creating contact by json  */
const createContactJSON = () => {
  let contactListLocal = [
  {
      _firstName: "Ashish",
      _lastName: "Rathod",
      _address: "Gangakhed",
      _city: "Parbhani",
      _state: "Maharashtra",
      _phone: "8805925703",
      _zip: "431514",
  },
  {
      _firstName: "Tukaram",
      _lastName: "Rathod",
      _address: "Godavari",
      _city: "Gangakhed",
      _state: "Delhi",
      _phone: "9421446222",
      _zip: "445679",
  }
  ];
  return contactListLocal;
} 