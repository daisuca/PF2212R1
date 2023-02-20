/**
 * Nhập vào 1 số n. In  ra bảng cửu chương của n
 */
let n = parseInt(prompt("Nhập vào số n: "));
let kp = 0;
for ( let i = 1; i <= 10; i++) {
   kp = n*i;
    document.write(`${n} x ${i} = ${kp}` + '<br>');
}