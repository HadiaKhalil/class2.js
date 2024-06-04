// function 
// let name2  = "wasif 1234 ";  
// function greet (){
//     console.log("hello students" );
// }
// greet()  //function calling 
// greet()
// greet()
// greet() 
// greet()


// function employee (file){ // parameter 
//     console.log("working on file  " + file );
// }

// employee("abdullah") // argument 
// employee("ali ")
// employee("wasif ")
// employee("hussan ")


// function employee (file){ // parameter 
//      return "working on file  "  +  file 
// }

// let data = employee(7);
// console.log(data );

// function add (num1 , num2, num3, num4){
//     return num1 + num2 + num3 + num4;
// }

// let data = add(22, 22 , 33, 88);
//  console.log(data);
// let data2 = add(222, 22 , 333);
// console.log(data, data2);\


// closure ==== scope 

// let abc = 123 // global scope 
// function  print ( ){
//     let abc = 123 ; // local scope 
//    console.log(abc);
// }
// print()
 
// console.log( abc);  
// print()

// function  print () {
//     console.log("hello");
//     // let name =  "Abdullah";
// //    console.log(number);
//     // console.log(nam2);
//     //global scope
//     //  console.log(name + nam2);
//     // console.log(  name );
//     return function () {          // anonymous function 
//          // local scope 
//         // let name = " wasif 123 ";
//         // console.log(name);
//          let number = 5467787823323;
//          console.log(number);
//     }
// }
// let innerfunction = print();
// innerfunction()

// function sum (gh){
//     return function (ht){
//              console.log( gh + ht);
//       }
// }

// let innerfunction = sum(10 );   
// let innerfunction2 = sum (10);
// innerfunction(8)
// innerfunction2(5)