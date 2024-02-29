// function sum() {
//     let result = 0;
//     for(let i = 0; i < arguments.length; i++) {
//         result += arguments[i]
//     }
//     return result
// }

// console.log(sum(1, 2, 3, 4)) === 10;
// console.log(sum(1, 2, 3, 4, 5)) === 15;


// function sumTwo(...args) {
//     let result = 0;
//     for(let i = 0; i < args.length; i++) {
//         result += args[i]
//     }
//     return result
// }

// console.log(sumTwo(1, 2, 3, 4)) === 10;
// console.log(sumTwo(1, 2, 3, 4, 5)) === 15;




// class Cat {
//     constructor(name) {
//       this.name = name;
//     }
  
//     says(sound, person) {
//       console.log(`${this.name} says ${sound} to ${person}!`);
//       return true;
//     }
//   }
  
//   class Dog {
//     constructor(name) {
//       this.name = name;
//     }
//   }

//   // myBind with arguments
//   Function.prototype.myBind = function (ctx, ...bindArgs) {
//     return (...callArgs) => {
//       return this.apply(ctx, bindArgs.concat(callArgs));
//     };
//   };
  
//   const markov = new Cat("Markov");
//   const pavlov = new Dog("Pavlov");
  
//   markov.says("meow", "Ned");
//   // Markov says meow to Ned!
//   // true
  
//   // bind time args are "meow" and "Kush", no call time args
//   markov.says.myBind(pavlov, "meow", "Kush")();
//   // Pavlov says meow to Kush!
//   // true
  
//   // no bind time args (other than context), call time args are "meow" and "a tree"
//   markov.says.myBind(pavlov)("meow", "a tree");
//   // Pavlov says meow to a tree!
//   // true
  
//   // bind time arg is "meow", call time arg is "Markov"
//   markov.says.myBind(pavlov, "meow")("Markov");
//   // Pavlov says meow to Markov!
//   // true
  
//   // no bind time args (other than context), call time args are "meow" and "me"
//   const notMarkovSays = markov.says.myBind(pavlov);
//   notMarkovSays("meow", "me");
//   // Pavlov says meow to me!
//   // true



// function sumThree(num1, num2, num3) {
//     return num1 + num2 + num3;
//   }

//   Function.prototype.myCurry = function(num_args) {
//     let that = this;
//     let argList = [];
  
//     return function _curry(single_arg) {
//       argList.push(single_arg);
  
//       if (argList.length === num_args) {
//         return that(...argList);
//       } else {
//         return _curry;
//       }
//     }
//   };

  function curriedSum(num_args) {
    let numbers = [];
    let sum = 0;
    return function _curriedSum(single_arg){
        numbers.push(single_arg)
        if (numbers.length === num_args) {
            numbers.forEach((el) => sum += el);
            return sum
        } else {
            // debugger
            return _curriedSum;
        }
    } 
  }
//   arr.forEach((el) => sum += el);
//   sumThree(4, 20, 6); // == 30
  
//   // you'll write `Function#curry`!
  
//   let f1 = sumThree.curry(3); // tells `f1` to wait until 3 arguments are given before running `sumThree`
//   f1 = f1(4); // [Function]
//   f1 = f1(20); // [Function]
//   f1 = f1(6); // = 30
  
//   // or more briefly:
//   sumThree.curry(3)(4)(20)(6); // == 30
  
  
//   const sum = curriedSum(4);
  console.log(curriedSum(4)(5)(30)(20)(1))
//   console.log(sum(5)(30)(20)(1)); // => 56

