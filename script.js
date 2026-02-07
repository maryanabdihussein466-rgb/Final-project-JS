let balance = Number(localStorage.getItem("balance")) || 0;
let user = JSON.parse(localStorage.getItem("user")) || {};
let history = JSON.parse(localStorage.getItem("history")) || [];

updateUI();

function createAccount(){
  const name = document.getElementById("name").value.trim();
  const acc = document.getElementById("account").value.trim();

  if(name === "" || acc === ""){
    alert("Fadlan magac & account number gali");
    return;
  }

  user = {name, acc};
  localStorage.setItem("user", JSON.stringify(user));

  alert("Account created successfully ✅ ");
  updateUI();
}

function deposit(){
  const amt = Number(document.getElementById("amount").value);

  if(amt <= 0){
    alert("Fadlan lacag sax ah gali");
    return;
  }

  balance += amt;
  history.push("Deposited $" + amt);

  save();
}

function withdraw(){
  const amt = Number(document.getElementById("amount").value);

  if(amt <= 0){
    alert("Fadlan lacag sax ah gali");
    return;
  }

  if(amt > balance){
    alert("Lacag kugu filan ma haysid ❌");
    return;
  }

  balance -= amt;
  history.push("Withdrew $" + amt);

  save();
}

function save(){
  localStorage.setItem("balance", balance);
  localStorage.setItem("history", JSON.stringify(history));
  updateUI();
}

function updateUI(){
  document.getElementById("showName").innerText = user.name || "---";
  document.getElementById("showAccount").innerText = user.acc || "---";
  document.getElementById("balance").innerText = balance;

  const list = document.getElementById("history");
  list.innerHTML = "";

  history.forEach(item=>{
    const li = document.createElement("li");
    li.textContent = item;
    list.appendChild(li);
  });
}
function clearHistory() {
  history = []; // Array-ga taariikhda transactions waa la nadiifiyaa
  localStorage.setItem("history", JSON.stringify(history)); // LocalStorage update
  updateUI(); // UI-ga dib ayaa loo cusbooneysiiyaa
}
function clearAccount() {
  user = {}; // Name iyo account number waa la tirtiray
  localStorage.setItem("user", JSON.stringify(user)); // LocalStorage update
  updateUI(); // UI dib u cusbooneysii
}
function sendMessage() {
  const name = document.querySelector('input[placeholder="Your Name"]').value.trim();
  const email = document.querySelector('input[placeholder="Your Email"]').value.trim();
  const message = document.querySelector('textarea').value.trim();

  if(name === "" || email === "" || message === "") {
    alert("Please fill in all fields before sending.");
    return;
  }

  alert("Thank you " + name + "! Your message has been sent successfully ✅");
  
  // Clear fields after sending
  document.querySelector('input[placeholder="Your Name"]').value = "";
  document.querySelector('input[placeholder="Your Email"]').value = "";
  document.querySelector('textarea').value = "";
}