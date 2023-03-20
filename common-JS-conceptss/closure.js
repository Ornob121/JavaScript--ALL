function kitchen(){
    let roast = 0;
    return function(){
        roast++;
        return roast;
    }
};

const firstServer = kitchen();
// console.log(firstServer());
// console.log(firstServer());
// console.log(firstServer());
// console.log(firstServer());
// console.log(firstServer());
// console.log(firstServer());
// console.log(firstServer());
// console.log(firstServer());



function init() {
    var name = "Ornob"; // name is a local variable created by init
    function displayName() {
      // displayName() is the inner function, that forms the closure
      console.log(name); // use variable declared in the parent function
    }
    displayName();
  }
  init();
  