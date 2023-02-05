const phones = [
    { name: 'Samsung', camera: '36MP', storage: 32, price: 90000, color: 'black' },
    { name: 'Apple', camera: '36MP', storage: 90, price: 136000, color: 'black' },
    { name: 'Xiaomi', camera: '36MP', storage: 40, price: 26000, color: 'black' },
    { name: 'HTC', camera: '36MP', storage: 120, price: 36000, color: 'black' },
    { name: 'Oppo', camera: '36MP', storage: 256, price: 20000, color: 'black' },
    { name: 'Vivo', camera: '36MP', storage: 292, price: 45000, color: 'black' },
    { name: 'Walton', camera: '36MP', storage: 164, price: 12000, color: 'black' }
];



//     function cheapestPhone(phones){
//         let cheap = phones[0];
//         for (let i = 0; i < phones.length; i++){
//             const phone = phones[i];
//             if(phone.price < cheap.price ){
//                 cheap = phone;
//             }
//         }
//         return cheap;
//     }



//    const myPhone = cheapestPhone(phones);
//    console.log(myPhone);







function bigestStorage(phones) {
    let bigStorage = phones[0];
    for (let i = 0; i < phones.length; i++) {
        const size = phones[i];
        if (bigStorage.storage < size.storage) {
            bigStorage = size;
        }
    }
    return bigStorage;
}


const result = bigestStorage(phones);
console.log(result);