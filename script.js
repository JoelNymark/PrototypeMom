//Nl HundSport
const canvas = document.getElementById("canvas");
canvas.width = document.body.clientWidth;
canvas.height = document.body.clientHeight;
const ctx = canvas.getContext("2d");

ctx.font = "200px sans-serif";
ctx.direction = "ltr";

ctx.textAlign = "center";
ctx.fillText("Nl HundSport", canvas.width / 2, canvas.height / 2 + 50);
