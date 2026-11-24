"use strict";
const loginForm=document.getElementById('loginForm');
const errorBox=document.getElementById('loginError');
const toggle=document.getElementById('togglePass');
if(toggle) toggle.onclick=()=>{const p=document.getElementById('password');p.type=p.type==='password'?'text':'password';toggle.textContent=p.type==='password'?'إظهار':'إخفاء'};
function localSession(){try{return JSON.parse(localStorage.getItem(STORAGE.session)||'null')}catch{return null}}
function saveSession(user){localStorage.setItem(STORAGE.session,JSON.stringify({id:user.id,email:user.email,role:user.role,name:user.name}))}
function clearSession(){localStorage.removeItem(STORAGE.session)}
if(loginForm){
  const existing=localSession(); if(existing) location.href='index.html';
  loginForm.onsubmit=e=>{e.preventDefault();errorBox.textContent='';const email=document.getElementById('email').value.trim().toLowerCase();const password=document.getElementById('password').value;const user=LOCAL_USERS.find(u=>u.email===email&&u.password===password&&u.active!==false);if(!user){errorBox.textContent='البريد الإلكتروني أو كلمة المرور غير صحيحة.';return}saveSession(user);location.href='index.html'}
}
