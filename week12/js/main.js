var mood="signup";
var x=document.querySelectorAll("input")
Array.from(x)
var baseEmails=[]
var y= (JSON.parse(localStorage.getItem("emails")))







//regular exprssions
var regular={
    eName:/[a-zA-z]+/,
    eEmail:/[a-zA-Z0-P]+(@)((gmail)|(yahoo)|(outlook))(.com)$/,
    ePassword:/[a-zA-Z0-9]{8,}/,
}





if(JSON.parse(localStorage.getItem("emails"))!= null){

    baseEmails = JSON.parse(localStorage.getItem("emails"))
    
}

document.querySelector(".an").addEventListener("click",signup)






//signin && sign up button status

function signup(){


    if (mood==="signup"){

        mood="login"
        
        

        document.querySelector("input").classList.add("d-block")
        document.querySelector("input").classList.remove("d-none")
    
        document.querySelector("p").innerHTML="you have an account? "
        document.querySelector(".an").innerHTML="Signin"

        document.querySelector("button").innerHTML="Sign up"
        document.querySelector(".corect").innerHTML=""

        x[0].value=""
            x[1].value=""
            x[2].value=""

            


        
}

    else if(mood==="login"){
        signin()
        mood="signup"
        document.querySelector("button").innerHTML="Login"
        document.querySelector(".corect").innerHTML=""

        document.querySelector(".orect").innerHTML=""
        document.querySelector(".incorect").innerHTML=""

        location.reload();

        

    }

}

function signin(){

    document.querySelector("input").classList.add("d-none")
    document.querySelector("input").classList.remove("d-block")

    document.querySelector("p").innerHTML="you don't have an account?"
    document.querySelector(".an").innerHTML="Sign up"

}




// login && sign up button status


document.querySelector(".lgin").addEventListener("click",signup2)




function signup2(){


    if (mood==="login"){
        var userdata={
        uName: x[0].value,
        uEmail:x[1].value,
        uPassword:x[2].value,
    }
    
    

    baseEmails.push(userdata)
    
    

    localStorage.setItem("emails",JSON.stringify(baseEmails))


    for(var i=0 ;i<y.length;i++){
        
        if(x[1].value==y[i].uEmail ){
            console.log(y[i].uEmail);
            document.querySelector(".incorect").innerHTML="this email is already signed up"
            

        }

        else{
            document.querySelector(".incorect").innerHTML="Sign up Sucsess"

           



        }
    }
    

    regex()

    
}




// login to hello page

if(mood==="signup"){

    for(i=0;i<baseEmails.length;i++) {

        
        if(x[1].value===baseEmails[i].uEmail && x[2].value===baseEmails[i].uPassword ){
            document.querySelector(".form").classList.add("d-none")
            document.querySelector(".form").classList.remove("d-block")

            document.querySelector(".hi").classList.add("d-block")
            document.querySelector(".hi").classList.remove("d-none")


            document.querySelector(".hello").innerHTML=`Hello ${baseEmails[i].uName}`


        }

        else if(x[1].value!=baseEmails[i].uEmail && x[2].value!=baseEmails[i].uPassword) {
            
            document.querySelector(".incorect").classList.add("d-block")
            document.querySelector(".incorect").classList.remove("d-none")
            document.querySelector(".incorect").innerHTML="Password and Email is incorrect"
        }

       
        
        else if (x[1].value!=baseEmails[i].uEmail) {

            
            
            document.querySelector(".incorect").classList.add("d-block")
            document.querySelector(".incorect").classList.remove("d-none")
            document.querySelector(".incorect").innerHTML="Email is incorrect"
        }

        else if( x[2].value!=baseEmails[i].uPassword) {
            
            document.querySelector(".incorect").classList.add("d-block")
            document.querySelector(".incorect").classList.remove("d-none")
            document.querySelector(".incorect").innerHTML="Password is incorrect"
        }

        

    }
}
    


}



// log out
document.querySelector(".out").addEventListener("click",function(){

    mood="signup";


            
            document.querySelector(".form").classList.add("d-block")
            document.querySelector(".form").classList.remove("d-none")

            
            document.querySelector(".hi").classList.remove("d-block")
            document.querySelector(".hi").classList.add("d-none")


            document.querySelector(".corect").innerHTML="loged out sucssful"
            document.querySelector(".incorect").innerHTML=""

            x[0].value=""
            x[1].value=""
            x[2].value=""



            document.querySelector(".name").classList.remove("is-valid")
            document.querySelector(".name").classList.remove("is-invalid")

            document.querySelector(".email").classList.remove("is-valid")
            document.querySelector(".email").classList.remove("is-invalid")

            document.querySelector(".pass").classList.remove("is-valid")
            document.querySelector(".pass").classList.remove("is-invalid")



})



//regular expressin

function regex(){

    if(regular.eName.test(x[0].value)){

        document.querySelector(".name").classList.add("is-valid")
        document.querySelector(".name").classList.remove("is-invalid")
    }
    else{

        document.querySelector(".name").classList.add("is-invalid")
        document.querySelector(".name").classList.remove("is-valid")

        


    }


    if(regular.eEmail.test(x[1].value)){

        document.querySelector(".email").classList.add("is-valid")
        document.querySelector(".email").classList.remove("is-invalid")

        document.querySelector(".orect").innerHTML=""
    }
    else{

        document.querySelector(".email").classList.add("is-invalid")
        document.querySelector(".email").classList.remove("is-valid")
        document.querySelector(".orect").innerHTML="you should write valid email"
        document.querySelector(".incorect").innerHTML=""


    }


    if(regular.ePassword.test(x[2].value)){

        document.querySelector(".pass").classList.add("is-valid")
        document.querySelector(".pass").classList.remove("is-invalid")

        document.querySelector(".orect").innerHTML=""
    }
    else{

        document.querySelector(".pass").classList.add("is-invalid")
        document.querySelector(".pass").classList.remove("is-valid")

        document.querySelector(".orect").innerHTML="you should write password more than 8 chracters"
        document.querySelector(".incorect").innerHTML=""

    }

}



