/**
 * Nhập vào số hạng đầu tiên và công sai cấp số cộng. Sau đó in ra 10 số hạng đầu tiên của cấp số cộng đó.
 */
let firtnumber = parseInt(prompt(" Nhập vào số hạng đầu tiên: "));
let congsai = parseInt(prompt(" Nhập vào công sai: "));
let a = congsai * 10;
for (let i = firtnumber; i <= a; i += congsai) {
  document.write(i + "<br>");
}
