const canvas = document.getElementById("canvas");
canvas.width = 350;
const ctx = canvas.getContext("2d");
const x = canvas.width / 2;

ctx.beginPath();
ctx.moveTo(x, 0);
ctx.stroke();

ctx.font = "30px serif";

ctx.textAlign = "left";
ctx.fillText("Dibujo Uno", x, 40);

ctx.textAlign = "center";
ctx.fillText("Prueba Uno", x, 85);

ctx.textAlign = "right";
ctx.fillText("Uno", x, 130);

ctx.beginPath();
ctx.arc(150, 200, 50, 0, Math.PI * 2, true);
ctx.stroke();