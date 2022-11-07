// falsy - false, 0, "", undefined, null,
// Trutny - falsy выражениелерге кирбегендин баары truthy болуп эсептелет
// var user = {
//     userName : 'aliher',
//     surname : 'tolgoev',
//     age : 19,
//     pol:1,
//     info:undefined,
//     doplnfo: null,
//     card: {
//         type: 'Visa',
//         num:1234566543,
//         balance: 50000,
//         valuta:'KGZ',
//     }


// }
// Тернарный оператор: условие ? значение-если-true :
// значение-если-false
//console.log(user.pol === 1 ? 'МУЖСКОЙ' : 'ЖЕНСКИЙ')



// 

// var arr = [1, 2, 3, 4, 5, 6,]
// var fruits = [ 'Яблоко', 'груша', 'Арбуз', 'Мандарины']
// fruits.push('апельсин')
// fruits.push('банан')

// var test = null
// console.log(test.length )
// console.log(fruits.length)
// console.log(fruits.length)
// console.log(fruits[fruits.length -1])



//ИНДЕКС-  0  1  2  3  4  5


// var arr = {
//     0: 1,
//     1: 2,
//     2: 3,
//     3: 4,
//     4: 5,
//     5: 6,
// }  




// if  (user.pol === 1){
// console.log('МУЖСКОЙ')

// }
// else {
// console.log('ЖЕНСКИЙ')
// }
// var arr = [1, 2, 3, 4, 5, 6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80,81,82,83,84,85,86,87,88,89,90,91,92,93,94,95,96,97,98,99,100]
// console.log(arr)
// var fruits = [ 'Яблоко', 'груша', 'Арбуз', 'Мандарины']
// fruits.push('апельсин')
// fruits.push('банaн')


// Циклы for

for (var i = 0; i <= 100; i++){
   if (i % 3 === 0 && i % 5 === 0) {
      console.log('FizzBuzz')
   }
   else if (i % 3 === 0) {
      console.log('Fizz')
   } 
   else if (i % 5 ===0){
      console.log('Buzz')
   } 
    else {
      console.log(i)
   }
   
}



