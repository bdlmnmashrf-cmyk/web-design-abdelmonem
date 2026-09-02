
let bank = [];
function add() {
    let userName = prompt("enter name:");
    let userId = +prompt("enter id:"); 
    let userBalance = +prompt("enter palance"); 
    let user = {
        name: userName,
        id: userId,
        balance: userBalance
    }; 
    bank.push(user);
    console.log(bank);
}
add();  
add(); 

function editUser(){
  let id = +prompt('enter user id')
  let newBalance = +prompt('enter new balance')
  let i = bank.findIndex((item) => item.id == id)
  console.log(i)
  bank[i].balance = newBalance

  console.log(bank)

}

editUser()

function transferBalance() {
    let fromId = +prompt('enter sender id'); 
    let toId = +prompt('enter receiver id');  
    let amount = +prompt('enter amount');   
    let iFrom = bank.findIndex((item) => item.id == fromId);
    let iTo = bank.findIndex((item) => item.id == toId);
    bank[iFrom].balance -= amount;
    bank[iTo].balance += amount;
    console.log(bank);
}
transferBalance();



function deleteUser() {
    let id = +prompt('enter user id to delete');     
    let i = bank.findIndex((item) => item.id == id);
    bank.splice(i, 1);
    console.log(bank);
}
deleteUser();
