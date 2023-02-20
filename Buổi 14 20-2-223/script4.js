/**
 * Viết CT nhập vào 1 số nguyên n và kiểm tra n, có phải là số nguyên tố hay không?
 */
let n = parseInt(prompt("Please input n: "));
let i = 2;
let totaldivisor = 0;
while (i < n) {
    if (n % i == 0 ) {
        totaldivisor +=1;
        break;
    } 
    i ++;
}
if (totaldivisor ==0) {
    document.write(`${n} là số nguyên tố.`);
} else {
    document.write(`${n} không phải là số nguyên tố.`);
}