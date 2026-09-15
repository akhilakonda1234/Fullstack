const API_URL = "http://localhost:8081/api/users";

document.getElementById("userForm").addEventListener("submit", async e => {
  e.preventDefault();
  const uid = document.getElementById("uid").value.trim();
  const name = document.getElementById("name").value.trim();
  try {
    const res = await fetch(API_URL, {
      method:"POST", headers:{"Content-Type":"application/json"},
      body:JSON.stringify({uid,name})
    });
    const json = await res.json();
    document.getElementById("status").textContent = json.message;
    if(res.ok){ clearForm(); loadUsers(); }
  } catch(e) { document.getElementById("status").textContent="Unable to connect to backend."; }
});

async function loadUsers(){
  try{
    const res=await fetch(API_URL), json=await res.json();
    document.getElementById("tbody").innerHTML=(json.data||[]).map(u=>`
      <tr><td>${u.uid}</td><td>${u.name}</td>
      <td><button onclick="editUser('${u.uid}','${u.name.replace(/'/g,"\\'")}')">Edit</button>
      <button onclick="deleteUser('${u.uid}')">Delete</button></td></tr>`).join("");
    document.getElementById("status").textContent=json.message||"";
  }catch(e){document.getElementById("status").textContent="Unable to connect to backend.";}
}

function editUser(uid,name){document.getElementById("uid").value=uid;document.getElementById("name").value=name;}

async function updateUser(){
  const uid=document.getElementById("uid").value.trim();
  const name=document.getElementById("name").value.trim();
  const res=await fetch(`${API_URL}/${encodeURIComponent(uid)}`,{
    method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify({uid,name})
  });
  const json=await res.json(); document.getElementById("status").textContent=json.message;
  if(res.ok){clearForm();loadUsers();}
}

async function searchUser(){
  const uid=document.getElementById("searchUid").value.trim();
  try{
    const res=await fetch(`${API_URL}/${encodeURIComponent(uid)}`);
    const json=await res.json();
    document.getElementById("searchResult").textContent =
      json.data ? `UID: ${json.data.uid}, Name: ${json.data.name}` : json.message;
  }catch(e){document.getElementById("searchResult").textContent="Unable to connect to backend.";}
}

async function deleteUser(uid){
  if(!confirm("Delete this user?"))return;
  const res=await fetch(`${API_URL}/${encodeURIComponent(uid)}`,{method:"DELETE"});
  const json=await res.json(); document.getElementById("status").textContent=json.message; loadUsers();
}
function clearForm(){document.getElementById("uid").value="";document.getElementById("name").value="";}
loadUsers();
