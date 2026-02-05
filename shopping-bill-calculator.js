prices = { rice: 70, oil: 180, egg: 12, sugar: 90 };
items = ["egg", "egg", "rice", "oil", "egg", "sugar"];

function calcBill(prices, items) {
  let total = 0;
  for (let price in prices) {

  }
  let itemCount = {};
  for (let item of items) {
    if (itemCount[item]) {
      itemCount[item]++;
    } else {
      itemCount[item]= 1;
    }
    if(prices[item]){
        total+=prices[item]
    }
  }

    // for(let item of items){
    //     if(itemCount.hasOwnProperty(item)){
    //         itemCount[item]++
    //     }else{
    //         itemCount[item]=1
    //     }
    // }

  return {
    total,
    itemCount,
  };
}
const total = calcBill(prices, items);
console.log(total);
