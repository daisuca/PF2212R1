// Các thuộc tính và phương thức của mảng
let nameList = ["Anthony", "Bella","Chris"];
document.write(`Mảng ban đầu : ${nameList}<br>`);
// Độ dài của mảng
document.write(`Độ dài của mảng là: ${nameList.length}<br>`);
// Thêm phần tử vào mảng
nameList.push("Davis");
document.write(`Mảng sau khi thêm 'Davis': ${nameList}<br>`);
document.write(`Độ dài của mảng là: ${nameList.length}<br>`);

nameList[nameList.length] = "Emily";
document.write(`Mảng sau khi thêm 'Emily': ${nameList}<br>`);
document.write(`Độ dài của mảng là: ${nameList.length}<br>`);
//  Xoá 1 phần tử
let removedItem = nameList.shift();
document.write(`Phần tử đã bị xoá: ${removedItem}<br>`);
document.write(`Mảng sau khi shift: ${nameList}<br>`);
document.write(`Độ dài của mảng là: ${nameList.length}<br>`);
//  cách 2
 removedItem = nameList.pop();
document.write(`Phần tử đã bị xoá: ${removedItem}<br>`);
document.write(`Mảng sau khi pop: ${nameList}<br>`);
document.write(`Độ dài của mảng là: ${nameList.length}<br>`);