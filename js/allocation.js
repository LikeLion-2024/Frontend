import axios from "axios";

function DueDateTime(){
  var dueDate = document.getElementById("due_date").value;
  var dueTime=document.getElementById("due_time").value;
  var dueTo = dueDate + 'T' + dueTime;
  console.log("마감기한",dueTo);
}


axios({
  method: "POST",
  url: "http://persi.likelion.site:8080/assignment/create",

})
