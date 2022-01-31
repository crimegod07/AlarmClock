//takes hour time min variables

var timeHour = null;
var timeMin = null;
var timeSeconds  = null;

//creating array
var saveTime = [];

//Clock ticks Per Secound Function
function perSec(){
const date = new Date();

 //appending 0 to Hour, Minute and Second By Creating AddZero Function (Check Line - 29)
    timeHour = document.getElementById("hour").innerHTML =  addZero(date.getHours());
    timeMin= document.getElementById("min").innerHTML =   addZero(date.getMinutes());
    timeSeconds = document.getElementById("sec").innerHTML =   addZero(date.getSeconds());

    
    if(saveTime.length > 0){
        let  now = timeHour + ":" + timeMin + ":" + timeSeconds ;
          for(let i=0; i<saveTime.length; i++){
          //Playing Sound When current Time And Set Time Become Equal
              if(saveTime[i] == now && sound.paused){
                  sound.play();
              }
          }
          
      }
}
setInterval(perSec,1000);


//Add Zero Function
function addZero(num){
   if(num<10){
       num = "0" + num;
   }else { 
       num = num.toString();
    }
    return num;
}


//create  function to add Select And Options
//create Select
//create options
function createSel(max){
    
    let selector = document.createElement("select"), opt;
    
    for (let i=0; i<=max; i++) {
        opt = document.createElement("option");
        i = addZero(i);
        opt.value = i;
        opt.innerHTML = i;
        selector.appendChild(opt);
      }
      return selector;
}

let setHour = createSel(23); // creating 0-23  options for hour
let setMin = createSel(59);  //creating 0-59  options for Minute
let setSec = createSel(59);  //creating 0-59 options  for second

 //now appending all child of select and options to div set alarm 
 document.getElementById("shr").appendChild(setHour); 
 document.getElementById("smin").appendChild(setMin);
 document.getElementById("ssec").appendChild(setSec);



//add sound

var sound = new Audio("wake-up-sound.mp3");


// creating Set function for creating alarm
let alarm=null;
function set(){
     alarm = setHour.value + setMin.value + setSec.value; //string cocatination
     alarm1 = setHour.value + ":" + setMin.value + ":" + setSec.value;
    setHour.disabled = true;
    setMin.disabled = true;
    setSec.disabled = true;
    tset.disabled = true;
    treset.disabled = false;

    if (alarm != null) {
        saveTime.push(alarm1);
        createEle();
      }
      //calling create element for creating elements after clicking set
     
     
}





//creating elements for paragraph and buttons 
function createEle(){
   let div1 = document.createElement("div");
   div1.style.width="200px";
   div1.style.display = "flex";
   div1.style.justifyContent = "space-between";
   div1.style.alignItems ="center";
   let p= document.createElement("p");
   let del = document.createElement("button");
   del.style.height = "20px";
   del.className = "delButton";
   div1.appendChild(p);
   div1.appendChild(del);
  
    document.getElementById("set-alarm-container").appendChild(div1);
    
    del.innerHTML = "DELETE";
    p.innerHTML = alarm1;
           
} 

//created delete function for deleting alarm

let delButton = document.getElementsByClassName("delButton");
let display =  document.getElementById("set-alarm-container");
function delDiv(){
    for(let i=0; i<delButton.length; i++){
        delButton[i].onclick= function(){
            for(let j=0; j<saveTime.length; j++){
                if(display.childNodes[i].childNodes[0].innerHTML === saveTime[j]){
                    
                    saveTime.splice(j,1);
                    
                }
            }
            display.removeChild(display.childNodes[i]);
            
        }   }
}

setInterval(delDiv, 100);


//reset function to reset my alarm  and stop playing sound
function reset(){
    if (!sound.paused) { sound.pause(); }
      alarm = null;
      setHour.disabled = false;
      setMin.disabled = false;
      setSec.disabled = false;
      tset.disabled = false;
      treset.disabled = true;
}



var btn = document.getElementById('tset');
var resetBtn= document.getElementById('treset');

//clicking ont set
btn.onclick = set;

//clicking on reset
resetBtn.onclick = reset;


