/**
 * Viét CT nhập vào 1 số n và đếm xem n có bn chữ số, sau đó tính tổng các chữ số của n
 * VD 12345 có 5 chữ số, tổng các chữ số: 15
 */
let n = parseInt(prompt("please input n:"));
let number = n;
let totalvalue = 0;
let totaldigit = 0;

document.write("Số đảo ngược của n là: ")
while (n > 0) {
    totalvalue += n % 10;
    document.write(n % 10);
    n = Math.floor(n /= 10);
    totaldigit ++;
  
}
document.write(`<br>Tổng các chữ số của ${number} là ${totalvalue}  <br>`);
document.write(`${number} có ${totaldigit} chữ số`);