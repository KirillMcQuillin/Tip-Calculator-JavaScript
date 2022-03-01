const calcTip = function (billPrice) {
    if (billPrice <= 300 && billPrice >= 50) {
        const tipPrice = billPrice * 0.15;
        return billPrice * 0.15;
    } else {
        const tipPrice = billPrice * 0.20;
        return billPrice * 0.20;
    }
}

//You will have to change these to what you want them to be
const bills = [125, 555, 44];

//You might have to add/remove more of these if you make the bills array contain more or less than 3
const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[bills.length - 1])];

const total = [tips[0] + bills[0], tips[1] + bills[1], tips[2] + bills[2]]

console.log(calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2]));
console.log('The tips: ' + tips);
console.log('Total for each bill: ' + total);
