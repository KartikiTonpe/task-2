function validation(){
    if(document.formfill.Username.value==""){
        document.getElementById("result").innerHTML="Enter Username*";
        return false;
    }
    else if(document.formfill.Username.value.length<6){
        document.getElementById("result").innerHTML="Enter atleast six letters*";
        return false;
    }
    else if(document.formfill.Contact.value.length>10){
        document.getElementById("result").innerHTML="Enter valid contact number*";
        return false;
    }
    else if(document.formfill.Password.value.length<6){
        document.getElementById("result").innerHTML="Enter atleast 6-digit password*";
        return false;
    }
    else if(document.formfill.CPassword.value!==document.formfill.Password.value){
        document.getElementById("result").innerHTML="Password does not matched*";
        return false;
    }
    
}