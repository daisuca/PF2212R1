/**
 * Nhập vào một số nguyên dương n. Tính giai thừa của n.
 * 
 */
let n = parseInt(prompt("Please input n:"));
let giaithua = 1;
for (let i = 1; i <= n; i++) {
    giaithua *= i;
}
alert(giaithua);