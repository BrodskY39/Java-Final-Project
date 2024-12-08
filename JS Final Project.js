
const printButton = document.search.Knopka;
printButton.addEventListener("click", printForm);

// Name/Value pairs are to be entered into the upper textbox. This textbox will be used by the end-user to quickly add Name/Value pairs to the list below.
const SendForm = document.forms.SendForm;
const list = document.getElementById('list');
SendForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const nameValue = SendForm.name.value;
    let obj = {nameValue}
    console.log(obj);
    list.innerText = obj.nameValue;
});
let item = localStorage.getItem(list);
console.log(item);

const li = document.createElement('li');

let p = ' ';
const pr = p.trim();
console.log(pr);

// If the syntax is incorrect then the Name/Value pair must not be added
function NameValue() {
    const enter = document.getElementById("name").value;
    const valid = "Name=Value";
    if (valid.test(enter)) {
        const theList = document.getElementById("pair-list");
        const listItem = document.createElement("li");
        listItem.textContent = enter;
        theList.appendChild(listItem);
        document.getElementById("nameValueEnter").value = "";
    } else {
        alert("Error");
    }
}

// ‘Delete’ button is pressed all selected items in the listbox will be deleted

    button.onclick = function () {
    document.getElementById('text').remove();


// // сортування по айді по зростанню

 */
// let users = [
// new User(1, 'Aleksandr', 'Brodsky', 'Alex@gmail.com', '+972536546456'),
// new User(2, 'Raisa', 'Brodsky', 'Raisa@gmail.com', '+972564654654'),
// new User(3, 'Andrew', 'Borodich', 'AndrewB@gmail.com', '+97250654641654'),
// new User(3, 'Kseniia', 'Sirovets', 'Sirovets@gmail.com', '+972165165651'),
// new User(3, 'Alina', 'Shtepa', 'Shtepa@gmail.com', '+972505651651'),
// new User(3, 'Oleg', 'Brodsky', 'OlegB@gmail.com', '+97250159514'),
// new User(3, 'Natali', 'Brodsky', 'NataliB@gmail.com', '+9725051498498'),
// new User(3, 'Julia', 'Fedorchenko', 'FiJuliya@gmail.com', '+972506119919'),
// new User(3, 'Barbara', 'Abitbol', 'Barbie@gmail.com', '+972531516511'),
// new User(3, 'Karen', 'Teperman', 'TepermanK@gmail.com', '+972481959199')
// ]
// console.log(users);
// console.log(users.sort((user1,user2) => user.id - users.id));
//

// // Якщо натиснути кнопку «Сортувати за значенням», список буде відсортовано за зростанням за значенням.
