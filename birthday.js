var dateOfBirth= document.querySelector("#date-of-birth");
var luckyNumber=document.querySelector("#lucky-number");
var checkbutton=document.querySelector("#check-button");
var output=document.querySelector("#output-box");



function compareValues(sum,luckyNumber){
    if(sum%luckyNumber===0){
        console.log("your birthday is lucky")
        output.value="Your birthday is lucky 💖" ;
    }
    else{
        console.log("Your birthday is not lucky ,work hard to make it 🥰")
        output.value="Your birthday is not lucky ,work hard to make it 🥰";
    }
}


function checkBirthdayIsLucky(dob)
{var dob=dateOfBirth.value;
    var sum=calculateSum(dob);
    if (sum&&dob)
    compareValues(sum,luckyNumber.value)
    else
    output.innerText="Please enter both values 😡"


}

function calculateSum(dob){
    dob=dob.replaceAll("-","");
    let sum=0;
    for (let index=0; index<dob.length;index++)
    {
        sum=sum+ Number(dob.charAt(index));
    }
    return sum;}


checkbutton.addEventListener("click",checkBirthdayIsLucky)