const clockTitle = document.querySelector(".js-clock");


function calD_Day(month, day){
  const targetDate = new Date(2022,month-1,day);
  const now = new Date();
  const distance = targetDate.getTime() - now.getTime();
  const D_Day = Math.floor(distance/(1000*60*60*24));
  const D_hours =  String(23 - now.getHours()).padStart(2,"0");
  const D_minutes = String(59 - now.getMinutes()).padStart(2,"0"); 
  const D_seconds = String(60 - now.getSeconds()).padStart(2,"0");
  clockTitle.innerText = `${D_Day}d ${D_hours}h ${D_minutes}m ${D_seconds}s`
}

const init = () => {
  calD_Day(12,24);
  setInterval(function(){calD_Day(12,24);},1000);
}

init();
