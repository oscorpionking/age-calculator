
getage= document.getElementById("getage");
result=document.getElementById("results");
birthyear= document.getElementById("birthyear");
const d = new Date();
let year = d.getFullYear();


getage.addEventListener("click", () =>{
    console.log(year-birthyear.value)
    if 
    (birthyear.value===""){
        result.innerHTML= "Please input your birth year";
    }
    else
    result.innerHTML= year-birthyear.value + " years";
    
})