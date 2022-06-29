const timeDiv = document.getElementById("time");

const  dayList = ["일","월","화","수","목","금","토"]

function getTime() {
  let now = new Date();
  let hour = now.getHours(); //시 0-23분
  let minute = now.getMinutes(); // 0-59분
  let second = now.getSeconds(); // 0-59초
  let noon = "오전";

  let pmnumber = hour - 12

  let year = now.getFullYear();
  let month = now.getMonth() + 1;
  let date = now.getDate();
  let dayNumber = now.getDay();




if (dayNumber = 0) {
  dayNumber = "일"
}else if (dayNumber = 1) {
  dayNumber = "월"
}else if (dayNumber = 2) {
  dayNumber = "화"
}else if (dayNumber = 3) {
  dayNumber = "수"
}else if (dayNumber = 4) {
  dayNumber = "목"
}else if (dayNumber = 5) {
  dayNumber = "금"
}else if (dayNumber = 6) {
  dayNumber = "토"
} 





 
  if (hour > 12) {
    noon = "오후";
  }

  if (hour < 10) {
    hour = "0" + hour;
  }

  if (second < 10) {
    second = "0" + second;
  }

  if (minute < 10) {
    minute = "0" + minute;
  }
 
  if (hour < 12) { 
    timeDiv.textContent =year + "-" + month + "-" + date + "-" + dayNumber + "_" + "AM " + ": " + hour + "  :" + minute + " : " + second; 
  }else if (hour > 12) { 
    timeDiv.textContent =year + "-" + month + "-" + date + "-" + dayNumber + "_" +"PM " + ": " + pmnumber + " : " + minute + " : " + second; 
  }
  
}




setInterval(getTime, 1000);