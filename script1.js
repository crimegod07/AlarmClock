
var timeHour = null;
var timeMin = null;
var timeSeconds  = null;

function perSec(){
const date = new Date();



    timeHour = document.getElementById("hour").innerHTML =  addZero(date.getHours());
    timeMin= document.getElementById("min").innerHTML =   addZero(date.getMinutes());
    timeSeconds = document.getElementById("sec").innerHTML =   addZero(date.getSeconds());

    if(saveTime.length > 0){
        let  now = timeHour + timeMin + timeSeconds ;
          for(let i=0; i<saveTime.length; i++){
          
              if(saveTime[i] == now && sound.paused){
                  sound.play();
              }
          }
          
      }
}
    
function addZero(num){
   if(num<10){
       num = "0" + num;
   }else { 
       num = num.toString();
    }
    return num;
}

setInterval(perSec,1000);



//create  function to add options
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

let setHour = createSel(23);
let setMin = createSel(59);
let setSec = createSel(59);

 document.getElementById("shr").appendChild(setHour);
 document.getElementById("smin").appendChild(setMin);
 document.getElementById("ssec").appendChild(setSec);



//add sound

var sound = new Audio("wake-up-sound.mp3");

var saveTime = [];




// set and reset
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
        saveTime.push(alarm);
      }
     createEle();
     k++;
}



let k=0;
let p=0;



function createEle(){
   
   let p= document.createElement("p");
   let del = document.createElement("button");
  
    document.getElementById("set-alarm-container").appendChild(p);
    document.getElementById("set-alarm-container").appendChild(del);
    
    del.innerHTML = "DELETE";
    p.innerHTML = alarm1;
    del.setAttribute("id", "del1");
    del.setAttribute("value", k);
    p.setAttribute("id", "time");
    p.setAttribute("value", k);
    

    var para = document.getElementById("time");
    var delete1 = document.getElementById("del1");

    function delEle(){
       
    para.parentNode.removeChild(para);
    delete1.parentNode.removeChild(delete1);
        
} 
let a = document.getElementById("time").getAttribute('value');
let b =document.getElementById("del1").getAttribute("value");
    delete1.onclick = function(){
        
        if(a == b){
        delEle();
        }
        a++;
        b++
    }
}






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

btn.onclick = set;
resetBtn.onclick = reset;


