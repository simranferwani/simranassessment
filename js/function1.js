"use strict";
// Read Existing data from localstorage
const getSavedData = () =>{
  const userJSON = localStorage.getItem("user");
  try {
    return userJSON ? JSON.parse(userJSON) : [];
  } catch (e) {
    return [];
  }
};

// Save User Data on Local Storage
const saveData = (data) => {
  localStorage.setItem("user", JSON.stringify(data));
};

const getCredId=(hashid)=>{
  const userObject =getSavedData().find((obj)=>obj.id===hashid);
   if(userObject === undefined) return{};
   else return userObject;
 }
 
 const getCredEmail=(email)=>{
   const userObject =getSavedData().find((obj)=>obj.email===email);
   if(userObject === undefined) return{};
   else return userObject;
 }
 
 const isEmailAvail = (email)=>{
   const avail=getSavedData().find((obj)=>obj.email===email);
   if(avail === undefined) return false;
   else return true;
   
 }
 
 
 




