var canvas = document.getElementById('c1');
var ctx = canvas.getContext('2d');
var pi = Math.PI;

//first
//брюки
ctx.beginPath();
ctx.fillStyle = "#3d75c7";
ctx.moveTo(35, 150);
ctx.lineTo(97, 150);
ctx.lineTo(97, 160);
ctx.lineTo(35, 160);
ctx.lineTo(35, 150);
ctx.fill();

//куртка
ctx.beginPath();
ctx.fillStyle = "#cc6666";
ctx.moveTo(19, 144);
ctx.quadraticCurveTo(65, 20, 110, 147);
ctx.fill();

ctx.beginPath();
ctx.fillStyle = "#cc6666";
ctx.moveTo(30, 144);
ctx.lineTo(105, 144);
ctx.lineTo(105, 150);
ctx.lineTo(30, 150);
ctx.fill();

//варежки
ctx.beginPath();
ctx.arc(28, 138, 10, 0, 2*pi, true);
ctx.fillStyle = "#ff1e41";
ctx.fill();

ctx.beginPath();
ctx.lineWidth = "0.2";
ctx.strokeStyle = "black";
ctx.arc(36, 136, 5, 0, 2*pi, true);
ctx.fillStyle = "#ff1e41";
ctx.fill();
ctx.stroke();

ctx.beginPath();
ctx.arc(102, 140, 10, 0, 2*pi, true);
ctx.fillStyle = "#ff1e41";
ctx.fill();

ctx.beginPath();
ctx.lineWidth = "0.2";
ctx.strokeStyle = "black";
ctx.arc(95, 138, 5, 0, 2*pi, true);
ctx.fillStyle = "#ff1e41";
ctx.fill();
ctx.stroke();

//дуга куртки
ctx.beginPath();
ctx.fillStyle = "#cc6666";
ctx.moveTo(30, 150);
ctx.quadraticCurveTo(60, 160, 105, 150);
ctx.fill();

//детали
ctx.beginPath();
ctx.strokeStyle = "black";
ctx.lineWidth = "1";
ctx.moveTo(64, 155);
ctx.lineTo(65, 109);
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle = "black";
ctx.lineWidth = "0.7";
ctx.moveTo(38, 132);
ctx.lineTo(40, 124);
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle = "black";
ctx.lineWidth = "0.7";
ctx.moveTo(93, 134);
ctx.lineTo(89, 124);
ctx.stroke();

ctx.beginPath();
ctx.arc(59, 125, 1.5 , 0, 2 * pi);
ctx.fillStyle = "#333333";
ctx.fill();
ctx.closePath();

ctx.beginPath();
ctx.arc(59, 136, 1.5 , 0, 2 * pi);
ctx.fillStyle = "#333333";
ctx.fill();
ctx.closePath();

ctx.beginPath();
ctx.arc(59, 147, 1.5 , 0, 2 * pi);
ctx.fillStyle = "#333333";
ctx.fill();
ctx.closePath();

ctx.beginPath();
ctx.fillStyle = "#ff1e41";
ctx.ellipse(47, 114, 7, 17, 5*pi/3 , 0, 2 * pi);
ctx.fill();

ctx.beginPath();
ctx.fillStyle = "#ff1e41";
ctx.ellipse(78, 115, 8, 15, pi/3 , 0, 2 * pi);
ctx.fill();

//лицо
ctx.beginPath();
ctx.arc(60, 70, 50, 0, 2*pi, true);
ctx.closePath();
ctx.fillStyle="#ffedc2";
ctx.fill();

//шапка
ctx.beginPath();
ctx.moveTo(60, 60);
ctx.arc(60, 70, 50, -0.1, pi, true);
ctx.fillStyle="#3872c3";
ctx.fill();

ctx.beginPath();
ctx.lineWidth = 15;
ctx.strokeStyle = "#ff1e41";
ctx.moveTo(10, 70);
ctx.quadraticCurveTo(55, 50, 110, 70);
ctx.stroke();

ctx.beginPath();
ctx.lineWidth = 2.5;
ctx.strokeStyle = "#ff1e41";
ctx.moveTo(47, 30);
ctx.lineTo(60, 13);
ctx.lineCap = "round";
ctx.stroke();

ctx.moveTo(56, 33);
ctx.lineTo(52, 10);
ctx.lineCap = "round";
ctx.stroke();

ctx.moveTo(63, 31);
ctx.lineTo(45, 13);
ctx.lineCap = "round";
ctx.stroke();

ctx.moveTo(66, 28);
ctx.lineTo(43, 17);
ctx.lineCap = "round";
ctx.stroke();

ctx.moveTo(66, 22);
ctx.lineTo(41, 22);
ctx.lineCap = "round";
ctx.stroke();

ctx.moveTo(66, 18);
ctx.lineTo(41, 26);
ctx.lineCap = "round";
ctx.stroke();

ctx.moveTo(65, 15);
ctx.lineTo(43, 29);
ctx.lineCap = "round";
ctx.stroke();

ctx.moveTo(50, 32);
ctx.lineTo(57, 11);
ctx.lineCap = "round";
ctx.stroke();



//глаза
ctx.beginPath();
ctx.lineWidth = 0.2;
ctx.strokeStyle = "#ffcc99";
ctx.fillStyle = "white";
ctx.ellipse(50, 81, 13, 15, pi / 4, 0, 2 * pi);
ctx.stroke();
ctx.fill();

ctx.beginPath();
ctx.strokeStyle = "#ffcc99";
ctx.fillStyle = "white";
ctx.ellipse(76, 81, 13, 15, 3*pi/4 , 0, 2 * pi);
ctx.fill();
ctx.stroke();
ctx.closePath();

ctx.beginPath();
ctx.lineWidth = 0.6;
ctx.strokeStyle = "black";
ctx.moveTo(62, 72);
ctx.lineTo(62, 85);
ctx.stroke();

//зрачки
ctx.beginPath();
ctx.arc(55, 81, 2, 0, 2 * pi);
ctx.fillStyle = "#333333";
ctx.fill();
ctx.closePath();

ctx.beginPath();
ctx.arc(70, 81, 2, 0, 2 * pi);
ctx.fillStyle = "#333333";
ctx.fill();
ctx.closePath();

//брови
ctx.beginPath();
ctx.strokeStyle = "black";
ctx.moveTo(35, 72);
ctx.lineWidth = "2";
ctx.lineTo(45, 60);
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle = "black";
ctx.moveTo(90, 71);
ctx.lineTo(75, 62);
ctx.stroke();

//рот
ctx.beginPath();
ctx.fillStyle = "black";
ctx.moveTo(50, 100); // первая внешняя точка
ctx.lineTo(80, 100); //вторая внешняя точка
ctx.lineTo(80, 102);
ctx.lineTo(64, 112); //третья внешняя точка
ctx.lineTo(51, 103);
ctx.fill();

//зубы
ctx.beginPath()
ctx.fillStyle = "white";
ctx.moveTo(53, 100.5);
ctx.quadraticCurveTo(53, 100.5, 90, 100.5);
ctx.quadraticCurveTo(70, 100.5, 84, 103);
ctx.quadraticCurveTo(69, 104, 86, 104);
ctx.quadraticCurveTo(53, 106, 53, 102)
ctx.fill();

ctx.beginPath();
ctx.lineWidth = "1";
ctx.strokeStyle = "black";
ctx.moveTo(58, 106);
ctx.lineTo(58, 100.5);
ctx.stroke();

ctx.beginPath();
ctx.lineWidth = "1";
ctx.strokeStyle = "black";
ctx.moveTo(65, 106);
ctx.lineTo(65, 100.5);
ctx.stroke();

ctx.beginPath();
ctx.lineWidth = "0.9";
ctx.strokeStyle = "black";
ctx.moveTo(70, 106);
ctx.lineTo(74, 100.5);
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle = "black";
ctx.moveTo(72, 106);
ctx.lineTo(79.7, 100.5);
ctx.stroke();
ctx.closePath();

//обувь
ctx.beginPath();
ctx.fillStyle = "#343034";
ctx.moveTo(25, 162);
ctx.quadraticCurveTo(50, 153, 70, 162);
ctx.fill();

ctx.beginPath();
ctx.fillStyle = "#343034";
ctx.moveTo(58, 163);
ctx.quadraticCurveTo(80, 154, 107, 163);
ctx.fill();
ctx.closePath();



//second
//брюки
ctx.beginPath();
ctx.fillStyle = "#804429";
ctx.moveTo(85, 400);
ctx.lineTo(310, 400);
ctx.lineTo(290, 445);
ctx.lineTo(105, 445);
ctx.fill();

//обувь
ctx.beginPath();
ctx.fillStyle = "#343034";
ctx.moveTo(93, 445);
ctx.quadraticCurveTo(165, 430, 205, 445);
ctx.fill();

ctx.beginPath();
ctx.fillStyle = "#343034";
ctx.moveTo(205, 445);
ctx.quadraticCurveTo(240, 430, 300, 445);
ctx.fill();
ctx.closePath();
//куртка
ctx.beginPath();
ctx.fillStyle = "#ff2246";
ctx.moveTo(75, 370);
ctx.lineTo(100, 338);
ctx.quadraticCurveTo(200, 300, 313, 360);
ctx.quadraticCurveTo(330, 400, 300, 420);
ctx.lineTo(250, 425);
ctx.quadraticCurveTo(140, 450, 85, 420);
ctx.fill();

ctx.beginPath();
ctx.moveTo(310, 365);
ctx.quadraticCurveTo(300, 320, 240, 345);
ctx.fill();

//варежки
ctx.beginPath();
ctx.fillStyle = "#ffe01d";
ctx.moveTo(65, 370);
ctx.quadraticCurveTo(80, 350, 110, 380);
ctx.quadraticCurveTo(120, 390, 105, 395);
ctx.quadraticCurveTo(60, 400, 65, 370);
ctx.fill();

ctx.beginPath();
ctx.moveTo(295, 363);
ctx.lineTo(320, 357);
ctx.quadraticCurveTo(340, 390, 310, 390);
ctx.lineTo(300,385);
ctx.quadraticCurveTo(270, 388, 295, 370);
ctx.fill();

ctx.beginPath()
ctx.lineWidth = "5";
ctx.strokeStyle = "#ffe01d";
ctx.moveTo(296, 366);
ctx.quadraticCurveTo(290, 370, 293, 380);
ctx.stroke();
//детали
ctx.beginPath();
ctx.lineWidth = "0.5";
ctx.strokeStyle = "black";
ctx.moveTo(210, 350);
ctx.lineTo(210, 432);
ctx.stroke();

ctx.beginPath();
ctx.fillStyle = "black";
ctx.ellipse(203, 371, 1.5, 4, pi , 0, 2 * pi);
ctx.ellipse(205, 395, 1.8, 4, pi , 0, 2 * pi);
ctx.fill();

ctx.beginPath();
ctx.ellipse(203, 420, 1.5, 3, pi , 0, 2 * pi);
ctx.fill();


//face
ctx.beginPath();
ctx.fillStyle = "#ffeec4"
ctx.ellipse(200, 300, 65, 90, pi / 2, 0, 2 * pi);
ctx.fill();

//шапка
ctx.beginPath();
ctx.moveTo(200, 285);
ctx.arc(200, 310, 90, -0.1, pi, true);
ctx.fillStyle="#00b9c7";
ctx.fill();

ctx.beginPath();
ctx.lineWidth = 30;
ctx.strokeStyle = "#ffeec4";
ctx.moveTo(124, 305);
ctx.quadraticCurveTo(200, 260, 275, 295);
ctx.stroke();

ctx.beginPath();
ctx.lineWidth = "5";
ctx.strokeStyle = "#ffe01d";
ctx.moveTo(111, 295);
ctx.quadraticCurveTo(200, 235, 287, 287);
ctx.stroke();

ctx.beginPath();
ctx.fillStyle = "#ffe01d";
ctx.moveTo(185, 220);
ctx.quadraticCurveTo(210, 205, 220, 218);
ctx.quadraticCurveTo(240, 225, 220, 230);
ctx.quadraticCurveTo(210, 240, 195, 230);
ctx.quadraticCurveTo(175, 242, 185, 223);
ctx.quadraticCurveTo(160, 235, 180, 215);
ctx.quadraticCurveTo(185, 210, 220, 220);
ctx.fill();


//глаза
ctx.beginPath();
ctx.lineWidth = 0.7;
ctx.strokeStyle = "#ffcc99";
ctx.fillStyle = "white";
ctx.ellipse(178, 289, 19, 24, pi / 4.5, 0, 2 * pi);
ctx.stroke();
ctx.fill();

ctx.beginPath();
ctx.strokeStyle = "#ffcc99";
ctx.fillStyle = "white";
ctx.ellipse(220, 290, 20, 24, 5*pi/6 , 0, 2 * pi);
ctx.fill();
ctx.stroke();
ctx.closePath();


ctx.beginPath();
ctx.lineWidth = 0.6;
ctx.strokeStyle = "black";
ctx.moveTo(201, 290);
ctx.quadraticCurveTo(199, 290 ,201 , 278);
ctx.stroke();

ctx.beginPath();
ctx.arc(190, 290, 2, 0, 2 * pi);
ctx.fillStyle = "#333333";
ctx.fill();
ctx.closePath();

ctx.beginPath();
ctx.arc(210, 290, 2, 0, 2 * pi);
ctx.fillStyle = "#333333";
ctx.fill();
ctx.closePath();

//рот
ctx.beginPath();
ctx.fillStyle = "black";
ctx.moveTo(185, 336);
ctx.quadraticCurveTo(195, 330, 220, 335);
ctx.quadraticCurveTo(220, 333, 210, 349);
ctx.quadraticCurveTo(190, 345, 195, 346)
ctx.fill();

ctx.beginPath();
ctx.fillStyle = "white";
ctx.moveTo(193, 335);
ctx.lineTo(216, 335);
ctx.lineTo(214, 338);
ctx.lineTo(192, 338);
ctx.fill();

ctx.beginPath();
ctx.strokeStyle = "black";
ctx.lineWidth = "1"
ctx.moveTo(199, 335);
ctx.lineTo(199, 340);
ctx.stroke();

ctx.beginPath();
ctx.moveTo(207, 335);
ctx.lineTo(207, 340);
ctx.stroke();

//подбородок
ctx.beginPath();
ctx.lineWidth = "0.5";
ctx.moveTo(190, 350);
ctx.quadraticCurveTo(203, 353, 220, 350);
ctx.stroke();

ctx.beginPath();
ctx.moveTo(134, 336);
ctx.quadraticCurveTo(200, 380, 270, 335);
ctx.stroke();