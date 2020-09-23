import 'style.css';
//user text in an element
const formdiv = document.getElementById('form1');
formdiv.innerHTML= '<h1>Submit your details</h1>'
const form = document.getElementById('form-data');
function myfunction(event){
    event.preventDefault();
    const fname= form.elements["f-name"].value;
    const mname= form.elements["Mid-name"].value;
    const lname= form.elements["Last-name"].value;
    const gender=form.elements["gender"].value;
    const ph_numb= form.elements["Phone-number"].value;
    const email= form.elements["email"].value;
    const address= form.elements["postal-address"].value;
    const error = document.getElementById("form-errors");
    error.innerHTML = " ";
    // Tried to solve some errors
    if (fname=== ""|| lname===""|| mname==="" || ph_numb==="" || address==="" || gender==="" || email===""){
        error.innerHTML= "Some fields may be empty";
    }
    else{
        document.getElementById("Bicenter").innerHTML=`${fname + mname + lname}<br>${gender}<br>${ph_number}${"<br>" `${email}<br>${address}`}`;

        
        
    }
    
}






