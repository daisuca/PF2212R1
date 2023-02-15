// Bài 1

let btnAction = document.getElementById("btn-action");
btnAction.addEventListener("click", () => {
    let dai = parseInt(document.getElementById("dai").value);
    let rong = parseInt(document.getElementById("rong").value);
  if (dai == rong ) {
    alert("Đây là hình vuông");
  } else {
    alert("Đây là hình chữ nhật");
  }
});
// Bài 2
let btnAction2 = document.getElementById("btn-action-2");
btnAction2.addEventListener("click", () => {
    let numbera = parseFloat(document.getElementById("number-a").value);
    let numberb = parseFloat(document.getElementById("number-b").value);
  if ( numbera > numberb ) {
    alert(`Số ${numbera} lớn nhất`);
  } else {
    alert(`Số ${numberb} lớn nhất`);
  }
});
//  Bài 3
let btnAction3 = document.getElementById("btn-action-3");
btnAction3.addEventListener("click", () => {
    let n = parseInt(document.getElementById("n").value);

    if ( n >= 0) {
        alert (`Giá trị tuyệt đối là ${n}` );
    } else {
        alert(`Giá trị tuyệt đối là ${-n}`);
    }
    //  Toán tử 3 ngôi
    n >=0 ? alert (`Giá trị tuyệt đối là ${n}`) : alert(`Giá trị tuyệt đối là ${-n}`);
  
});
//  Bài 4
let btnAction4 = document.getElementById("btn-action-4");
btnAction4.addEventListener("click", () => {
    let day = parseInt(document.getElementById("day").value);

    if ( day == 2) {
        alert ("Hôm nay là Monday" );
    } else if (day == 3) {
        alert ("Hôm nay là Tuesday" );
    } else if (day == 4) {
        alert ("Hôm nay là Wednesday" );
    }else if ( day == 5) {
        alert ("Hôm nay là Thurday" );
    }else if (day == 6) {
        alert ("Hôm nay là Friday" );
    }else if ( day == 7){
        alert ("Hôm nay là Saturday" );
    }else if (day == 8) {
        alert ("Hôm nay là Sunday" );
    } else { alert(" Hãy nhập số từ 2 đến 8");}
    
  
});
//  Bài 5
let btnAction5 = document.getElementById("btn-action-5");
btnAction5.addEventListener("click", () => {
    let n1 = parseFloat(document.getElementById("n1").value);
    let n2 = parseFloat(document.getElementById("n2").value);
    let n3 = parseFloat(document.getElementById("n3").value);
  if ( n1 > n2 && n2 > n3 ) {
    alert(`Số ${n1} lớn nhất`);
  } else if (n2 > n3 && n3 > n1) {
    alert(`Số ${n2} lớn nhất`);
  }else if ( n3 > n1 && n1 > n2) {alert(`Số ${n3} lớn nhất`);}
});

