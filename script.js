function discountCalculator(totalAmount) {
    //let answer;
    //Write your code below
    let totalPurchase = 80;
    let answer;
    if (totalPurchase >= 100) {
        answer = totalPurchase * 0.9;
    } else if (totalPurchase >= 50) {
        answer = totalPurchase * 0.95;
    } else {
      answer = totalPurchase;  
    }
    console.log(answer);
return answer
}
console.log(discountCalculator(120));