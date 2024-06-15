var fill=document.querySelector(".fill");

var btne=document.querySelector("#btn-btnser");


btne.addEventListener("click",()=>{
    fill.style.display="block";




})


var cross=document.querySelector(".cross1");

cross.addEventListener("click",()=>{
    fill.style.display="none";
})

var form=document.querySelector("#form");

var pop2=document.querySelector(".pop22");

    form.addEventListener("click",()=>{
        pop2.style.display="block";

    })



    var check2=document.querySelector(".cross2");
    check2.addEventListener("click",()=>{

        pop2.style.display="none";
    })

 var done1=document.querySelector(".poplab2");
 var od12=document.querySelector("#od1");

 
 od12.addEventListener("click",()=>{
    done1.style.display="block";
    
 })

 var done=document.querySelector(".poplab");
 var od1=document.querySelector(".od");

 
 od1.addEventListener("click",()=>{
    done.style.display="block";
    
 })

var don=document.querySelector("#done");
 don.addEventListener("click",()=>{
done.style.display="none";
 })

 var ins=document.querySelector("#ins");

ins.addEventListener("click",()=>{

    od.style.display="block";
    od.style.marginleft="40px";

})

// var firstText=document.querySelector(".main-service");
// var hide=document.querySelector(".fill");

// firstText.addEventListener("click",()=>{
//     hide.
// })



var close5=document.querySelector(".close2");
var close10=document.querySelector(".close3");

var poplab2=document.querySelector(".poplab2");


close10.addEventListener("click",()=>{
    poplab2.style.display="none";

});
close5.addEventListener("click",()=>{
    done.style.display="none";

});








// var hourly1=document.querySelector("#hourly");
// var houly1=300;


// document.addEventListener('DOMContentLoaded', () => {
//     const form = document.getElementById('formser');
//     const button = document.querySelector('.od');
//     const displayText = document.getElementById('displayText');

//     button.addEventListener('click', () => {
//         const selectedOption = form.querySelector('input[name="option"]:checked');
//         if (selectedOption) {
//             displayText.textContent = `You selected: ${selectedOption.value}`;
//             displayText.style.display = 'block';
//         } else {
//             displayText.textContent = 'Please select an option!';
//             displayText.style.display = 'block';
//         }
//     });
// });