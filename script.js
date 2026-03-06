function checkBP(){

let weight = document.getElementById("weight").value;

let bpLevel = document.getElementById("bpLevel");
let bpStatus = document.getElementById("bpStatus");

if(!weight){
bpLevel.innerHTML="--";
bpStatus.innerHTML="Enter weight first";
return;
}

let systolic;
let diastolic;
let status;
let className;

if(weight < 60){

systolic = 105;
diastolic = 70;
status = "Normal Blood Pressure";
className="normal";

}

else if(weight < 85){

systolic = 120;
diastolic = 80;
status = "Elevated Blood Pressure";
className="elevated";

}

else{

systolic = 140;
diastolic = 95;
status = "High Blood Pressure";
className="high";

}

bpLevel.innerHTML=`${systolic}/${diastolic}`;
bpStatus.innerHTML=status;

bpStatus.className=className;

}