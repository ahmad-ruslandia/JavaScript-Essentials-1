/*Scenario
During the last modification of the program with the contact list, we allow the user to add a new contact with the data entered by the user
while the program is executing. Let's go a step further – try to modify the program so that the user has a choice of what they want to do 
with the list. They will have a choice of:

showing the first contact (first)
showing the last contact (last)
adding a new contact (new)
When adding a new contact, check if the user has entered all the necessary data. If at least one of the three values is missing 
(name, phone, or email) don't add the contact. */

let contacts = [{
    name: "Maxwell Wright",
    phone: "(0191) 719 6495",
    email: "Curabitur.egestas.nunc@nonummyac.co.uk"
}, {
    name: "Raja Villarreal",
    phone: "0866 398 2895",
    email: "posuere.vulputate@sed.com"
}, {
    name: "Helen Richards",
    phone: "0800 1111",
    email: "libero@convallis.edu"
}];


let option = prompt ("1) Show first contact \n2) Show last contact \n3) Add a new contact \n\n Choose an option");
let length;

switch(option){
    case "1":
        alert(`Name: ${contacts[0].name} \nPhone: ${contacts[0].phone}\nEmail: ${contacts[0].email}`);
        break;
    case "2":
        length = contacts.length - 1;
        alert(`Name: ${contacts[length].name} \nPhone: ${contacts[length].phone}\nEmail: ${contacts[length].email}`);
        break;
    case "3":
        let nameNew = prompt("Input name");
        let newUser = {
            name: nameNew
        };
        newUser.phone = prompt("Input phone number");
        newUser.email = prompt("Input email");

        if (newUser.name && newUser.phone && newUser.phone){
            contacts.push(newUser);
            console.log(contacts);
        }
        else{
            alert("Invalid tickets");
        }
        break;
    default:
        alert("Invalid option");
        break;
}