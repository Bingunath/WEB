// Form validation script for .
// email contact form.

function validate(form) {
    var returnValue = true;
    var usrEmail = document.emailForm.txtemail.value;
    var testEmail =
    /^\w(\.?[\w-])*@\w(\.?[\w-])*\.[a-z]{2,6}(\.[a-z]{2})?$/i;

    document.getElementById('error1').innerHTML="";
    

    if(usrEmail == "") {
        returnValue = false;
        document.getElementById('error1').innerHTML=
        " *You should enter your email Address";
        document.emailForm.txtemail.focus();


    }
    else {
        document.getElementById('error1').innerHTML="";
    }
    var checkEmail= usrEmail.split("; ");
    if(returnValue == true) {
        for(i=0; i<checkEmail.length; i++) {
            if(!testEmail.test(checkEmail[i])){
                document.getElementById('error1').innerHTML=
                " * Invalid E-Mail Adddress. Please try again!";
                document.emailForm.txtemail.focus();
                document.emailForm.txtemail.value="";

            }
            else {
                document.getElementById('error1').innerHTML="";
            }
        }
    }
    var txtMsg = document.emailForm.message.value;
    var returnValue = true;
    document.getElementById('error2').innerHTML="";
    if(txtMsg == ""){
        returnValue = false;
        document.getElementById('error2').innerHTML=
        " *You should enter your Message";  
    }
    else if(txtMsg.length<10) {
        document.getElementById('error2').innerHTML=
        " *You should enter more than 10 characters.";     
    }
    //else {
        //returnValue = true;
   // }
    

    //var radioBtn = document.emailForm.rating;
    //document.getElementById('error3').innerHTML="";
    //for(i=0; i<radioBtn.length; i++) {
        //if(radioBtn[i].checked) {
            //returnValue = true;

        //}
        //if(returnValue != true) {
            //returnValue = false;
            //document.getElementById('error3').innerHTML=
            //" *Sorry! You should choose your answer";

        //}
        //else {
            //returnValue = true;
        //}
    //}
    return returnValue;

}
// This is a Script for selection option in the form
function selectOpCheck(form) {
    var returnValue = false;
    var selectOption1 = document.emailForm.referingsource.selectedIndex;
    //var selectOption2 = selectOption1[selectOption1.selectedIndex];
    document.getElementById('error4').innerHTML="";
     if(selectOption1 == returnValue) {
         returnValue = false;
         document.getElementById('error4').innerHTML=
         "You have to select one of options";
     }
     else {
        document.getElementById('error4').innerHTML=
        "";         
     }

}

function msgLength(form) {
    var returnValue = true;
    var txtMsg = document.emailForm.message.value;
    document.getElementById('error2').innerHTML="";
    if(txtMsg.length<10) {
        returnValue = false;
        document.getElementById('error2').innerHTML=
        " *You should enter more than 10 characters.";
    }
    else {
        document.getElementById('error2').innerHTML="";
    }  

}

function radioCheck(form) {

    var radioAnswer = false;
    var radioBtn = document.emailForm.rating;

    for(i=0; i<radioBtn.length; i++) {
        if(radioBtn[i].checked) {
            radioAnswer = true;

        }
        if(radioAnswer != true) {
            radioAnswer = false;
            document.getElementById('error3').innerHTML=
            " *Sorry! You should choose your answer.";

        }
        else {
            document.getElementById('error3').innerHTML="";


        }
    }

}