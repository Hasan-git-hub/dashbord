const KEY = "ip-profile";
document.addEventListener("DOMContentLoaded", () => {
  const saveBtn = document.getElementById("saveBtn");
  if (saveBtn) {
    const fullName = document.getElementById("fullName");
    const birthYear = document.getElementById("birthYear");
    const email = document.getElementById("email");
    const hobby = document.getElementById("hobby");
    const gender = document.getElementById("gender");
    const msg = document.getElementById("msg");
    const clearBtn = document.getElementById("clearBtn");

    function showMsg(text){
      if (!msg) return;
      msg.style.display = "block";
      msg.textContent = text;
      setTimeout(()=> msg.style.display = "none", 3000);
    }

    function validate(){
      if (!fullName || !birthYear || !email) return false;

      if (!fullName.value.trim()){ showMsg("Ism kiriting"); return false; }
      let y = Number(birthYear.value);
      let c = new Date().getFullYear();
      if (!y || y < 1900 || y > c){ showMsg("Yaroqli yil kiriting"); return false; }
      if (!email.value.includes("@") || !email.value.includes(".")){
        showMsg("Email noto'g'ri"); return false;
      }
      return true;
    }

    saveBtn.addEventListener("click", ()=>{
      if (!validate()) return;

      const data = {
        name: fullName.value.trim(),
        birthYear: birthYear.value.trim(),
        email: email.value.trim().toLowerCase(),
        hobby: hobby ? hobby.value.trim() : "",
        gender: gender ? gender.value : ""
      };

      localStorage.setItem(KEY, JSON.stringify(data));
      window.location.href = "pages/profil.html";
    });

    if (clearBtn) {
      clearBtn.addEventListener("click", ()=>{
        if (fullName) fullName.value = "";
        if (birthYear) birthYear.value = "";
        if (email) email.value = "";
        if (hobby) hobby.value = "";
        if (gender) gender.value = "";
        localStorage.removeItem(KEY);
        showMsg("Tozalandi");
      });
    }
    try {
      const existing = JSON.parse(localStorage.getItem(KEY) || "null");
      if (existing) {
        if (fullName) fullName.value = existing.name || "";
        if (birthYear) birthYear.value = existing.birthYear || "";
        if (email) email.value = existing.email || "";
        if (hobby) hobby.value = existing.hobby || "";
        if (gender) gender.value = existing.gender || "";
      }
    } catch(e) { console.warn("parse error", e); }
  }
  const avatar = document.getElementById("avatar");
  if (avatar) {
    let d = null;
    try {
      d = JSON.parse(localStorage.getItem(KEY) || "null");
    } catch(e) {
      console.warn("parse error", e);
    }

    const resName = document.getElementById("resName");
    const resEmail = document.getElementById("resEmail");
    const resAge = document.getElementById("resAge");
    const resHobby = document.getElementById("resHobby");
    const resGender = document.getElementById("resGender");
    const editBtn = document.getElementById("editBtn");
    const deleteBtn = document.getElementById("deleteBtn");

    if (!d) {
      if (resName) resName.textContent = "Ma'lumot topilmadi";
    } else {
      const nameNorm = (d.name || "").trim();
      const displayName = nameNorm
        ? nameNorm.split(/\s+/).map(p => p.charAt(0).toUpperCase() + p.slice(1).toLowerCase()).join(" ")
        : "—";
      const age = d.birthYear ? (new Date().getFullYear() - Number(d.birthYear)) : "—";
      const hobbyText = d.hobby ? d.hobby.split(",").map(h => h.trim()).filter(Boolean).join(", ") : "—";
      function genderText(g){
        switch(g){
          case "Man": return "Man";
          case "Women": return "Women";
          case "other": return "Other";
          default: return "Not specified";
        }
      }

      avatar.textContent = displayName && displayName !== "—" ? displayName.charAt(0).toUpperCase() : "?";
      if (resName) resName.textContent = displayName;
      if (resEmail) resEmail.textContent = d.email || "—";
      if (resAge) resAge.textContent = age;
      if (resHobby) resHobby.textContent = hobbyText;
      if (resGender) resGender.textContent = genderText(d.gender);
    }

    if (editBtn) editBtn.addEventListener("click", ()=> window.location.href = "/index.html");
    if (deleteBtn) deleteBtn.addEventListener("click", ()=> { localStorage.removeItem(KEY); window.location.reload(); });
  } 
  const night = document.querySelector("#night")
  const light = document.querySelector(".light")
  const box = document.querySelector(".box")
  const fullName = document.querySelector(".fullName")
  const fullinp = document.querySelector(".fullinp")
  const h2 = document.querySelector(".h2")
  const birthYear = document.querySelector(".birthYear")
  const birthYear1 = document.querySelector(".birthYear1")
  const birthYear2 = document.querySelector(".birthYear2")
  const birthYear3 = document.querySelector(".birthYear3")
  const birthYear4 = document.querySelector(".birthYear4")
  const birthYear5 = document.querySelector(".birthYear5")
  const gender = document.querySelector(".gender")
  const gender1 = document.querySelector(".gender1")
  const gender2 = document.querySelector(".gender2")
  const gender3 = document.querySelector(".gender3")
  const gender4 = document.querySelector(".gender4")
  if (night) {  
    addEventListener("click", ()=> {
      document.body.classList.add("dark")
      night.style.display = "none"
      light.style.display = "block"
      box.style.backgroundColor = "black"
      fullName.style.color = "white"
      fullinp.style.color = "white"
      fullinp.style.backgroundColor = "black"
      fullinp.style.border = "1px solid white"
      h2.style.color = "white"
      birthYear.style.color = "white"
      birthYear1.style.color = "white"
      birthYear2.style.color = "white"
      birthYear3.style.color = "white"
      birthYear4.style.color = "white"
      birthYear5.style.color = "white"
      gender.style.color = "white"
      gender1.style.color = "black"
      gender2.style.color = "black"
      gender3.style.color = "black"
      gender4.style.color = "white"
    });
    addEventListener("dblclick", ()=>{
      document.body.classList.remove("dark")
      night.style.color = "block"
      light.style.display = "none"
      box.style.backgroundColor = "white"
      fullName.style.color = "black"
      fullinp.style.color = "white"
      fullinp.style.backgroundColor = "white"
      fullinp.style.border = "1px solid black"
      h2.style.color = "black"
      birthYear.style.color = "black"
      birthYear1.style.color = "black"
      birthYear2.style.color = "black"
      birthYear3.style.color = "black"
      birthYear4.style.color = "black"
      birthYear5.style.color = "black"
      gender.style.color = "black"
      gender1.style.color = "white"
      gender2.style.color = "white"
      gender3.style.color = "white"
      gender4.style.color = "black"
    });
  }
//   if (light) {  
//     addEventListener("click", ()=> {
//       document.body.classList.remove("dark")
//       night.style.color = "block"
//       light.style.display = "none"
//       box.style.backgroundColor = "white"
//       fullName.style.color = "black"
//       fullinp.style.color = "black"
//       fullinp.style.backgroundColor = "black"
//       fullinp.style.border = "1px solid black"
//       h2.style.color = "black"
//       birthYear.style.color = "black"
//       birthYear1.style.color = "black"
//       birthYear2.style.color = "black"
//       birthYear3.style.color = "black"
//       birthYear4.style.color = "black"
//       birthYear5.style.color = "black"
//       gender.style.color = "black"
//       gender1.style.color = "white"
//       gender2.style.color = "white"
//       gender3.style.color = "white"
//     });
//   } 

});
