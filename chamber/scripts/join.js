let d = new Date();
let month = d.getMonth();
let date =d.getDate();
let year = d.getFullYear();
let hour = d.getHours();
let minute = d.getMinutes();

timestampInput = document.querySelector("#timestamp");

timestampInput.value = `${month+1}/${date}/${year} ${hour}:${minute}`;