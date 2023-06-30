
//-------------------------------------------Header & Footer---------------------------------------|
$(function(){
    $("#header").load("../Header_&_Footer/Header.html");
    $("#footer").load("../Header_&_Footer/Footer.html");
});

//-------------------------------------------JS logic for Login page-------------------------------|
function btnfunction(form){
    let x = form.inputBox_1.value;
    let y = form.inputBox_2.value;
    alert(verify(x,y));
}

function verify(a,b){
    if(a == "admin@admin.com" && b == 123456){
        return ("Login Successful")
    }
    else{
        return("Incorrect email or password")
    }
}

//----------------------------------------JS Logic for cart.html page---------------------------------|
let count = 0;
function increment(){
    count = add(count,1);
    display(count);

}function add(a,b){
    return a+b;
}

function sub(a,b){
    return a-b;
}

function decrement(){
    if (count>0) {
        count =  sub(count,1);
        display(count);
    }else{
        count = 0;
        display(count);
    }
}

function display(number){
    document.getElementById("displayCount").innerHTML = number;
}

function reset(){
    count = 0;
    display(count);
}