function requirements (chair, table, bed){
    let chairWood = 3;
    let tableWood = 10;
    let bedWood = 50;
   const  chairTotal = chairWood * chair;
    const tableTotal = tableWood * table;
    const bedTotal = bedWood * bed;
    const totalWood = chairTotal + tableTotal + bedTotal;
    return totalWood;
}

let quantity = requirements(3, 0, 5);
console.log(quantity);