// 1) написать программу, которая считывает через prompt число и выводит фразу "четное" или "нечетное" в зависимости от числа.

// const value = prompt(`Введите число`);

// if(value % 2 == 0){
//    console.log(`${value} четное`);

// }else{
//    console.log(`${value} нечетное`);
// }


// 2) написать программу, которая считывает два числа и выводит "делится" или "не делится" в зависимости от того, делится первое число на второе или нет.

// const value_1 = prompt(`Введите первое число`);
// const value_2 = prompt(`Введите второе число`);

// if(value_1 % value_2 == 0){
//     console.log(`${value_1} число делится`);
//  }else{
//     console.log(`${value_1} число не делится`);
// }


// 3) написать программу, которая считывает стороны прямоугольного треугольника и выводит его площадь. (a*b/2)


// let a = 8, b = 4;
// let c = Math.sqrt(S = a * b / 2)
// console.log(`Площадь: ` + S)

// ------------------------------------------------------------------------
// const value_1 = prompt(`Введите 1 сторону треуголника `);
// const value_2 = prompt(`Введите 2 сторону треуголник`);
// let a = value_1, b = value_2
   
// let c = Math.sqrt(S = a * b / 2)
// console.log(`Площадь: ` + S)


// 4) написать программу, которая получает длины катетов прямоугольного треугольника и выводит гипотенузу. 

// let a = 8, b = 4;
// let c = Math.sqrt(S = a * b / 2)
// console.log(`гипотенуза = ` + c)


// 5) написать программу, которая получает число. Если оно делится на 3 или на 7 без остатка или делится на 10 с остатком, то выведите "YES" в ином случае "NO".

const value = prompt(`Введите Число`);

if (value % 3 == 0 && value % 7 == 0 && value % 10 == 0 ){

    console.log(`${value} YES`);

    }else{
       console.log(`${value} NO`)
    }