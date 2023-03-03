// các thuộc tính join, reverse
let nameList = ["Anthony", "Bella","Chris"];
//  đảo ngược mảng
document.write(`Mảng trước khi reverse: ${nameList}<br>`);
nameList.reverse();
document.write(`Mảng sau khi reverse: ${nameList}<br>`);
// Sắp xếp lại các phần tử
document.write(`Mảng trước khi sort: ${nameList}<br>`);
nameList.sort();
document.write(`Mảng sau khi sort: ${nameList}<br>`);
//  nối các phần tử trong mảng thành chuỗi
document.write(nameList.join("---"));