
import { UpdateCallRejectedError } from "@dfinity/agent";
import {dbank_backend} from "../../declarations/dbank_backend";
import { Func } from "@dfinity/candid/lib/cjs/idl";


window.addEventListener("load", async function(){
    //await dbank_backend.compound();
    Update();
});


document.querySelector("form").addEventListener("submit", async function(){
    event.preventDefault();
    //let button = event.target.querySelector("#submit-btn");
    let button = document.getElementById("submit-btn");

    const inputtopup = parseFloat(document.getElementById("input-amount").value);
    const inputwithdraw = parseFloat(document.getElementById("withdrawal-amount").value);
    //console.log(inputtopup);

    

    button.setAttribute("disabled", true);

    if(document.getElementById("input-amount").value.length!=0){
        await dbank_backend.topUp(inputtopup);
    }

    if(document.getElementById("withdrawal-amount").value.length!=0){
        await dbank_backend.withDraw(inputwithdraw);
    }

    
    
    document.getElementById("input-amount").value = "";
    document.getElementById("withdrawal-amount").value = "";

    await dbank_backend.compound();
    Update();

    button.removeAttribute("disabled");
});


async function Update(){
    const curvalue = await dbank_backend.checkBalance();
    document.getElementById("value").innerText = Math.round(curvalue*100)/100;

}