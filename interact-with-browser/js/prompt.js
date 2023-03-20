// alert ('How are you?')
const showAlert = () => alert('Taka dhar de amare')

const landMoney = () =>{
   const result =  confirm('Will You Land Me 5000 Taka')
   if(result === true){
    alert('ThankYou My Friend')
   }
   else{
    alert('DGM.......Kittua Sala')
   }
};

const getInfo = () =>{
   const name =  prompt('Tell Me Your Name');
   console.log(name);
   if(name=== null){
    alert('Naam na dile kam nai ja fooooot')
   }
   else{
    alert(`${name} Welcome to this world`)
   }
}
// JSON.stringify