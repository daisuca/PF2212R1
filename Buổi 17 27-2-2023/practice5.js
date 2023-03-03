// Bài 5: Đếm xem trong array có tổng cộng bao nhiêu số 20
let array1 = [5, 10, 15, 20, 25, 50, 20];
let x=0;
for (let i in array1) {
    if (array1[i]==20) {
        x = x + 1;
    }
    document.write(`Trong array có :${x} số 20`);
}