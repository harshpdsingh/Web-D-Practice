let arr = [1,2,3,4,5]

// console.log(arr, typeof arr)

// console.log(arr.length)

//Arrays:-

let a = [1,2,3,4,5]

// for (let index = 0; index < a.length; index++) {
//     const element = a[index];
//     console.log(element)
// }

// a.forEach((value, index, arr) => {
//     console.log(value,index,arr)
// });

// let obj={
//     name: 'John',
//     age: 30
// }

// for (const key in obj) {
//     if (Object.prototype.hasOwnProperty.call(obj, key)) {
//         const element = obj[key];
//         console.log(key,element);
//     }
// }

// for (const element of arr) {
//     console.log(element)
// }

// let newarr = arr.map((e)=>{
//     return e*e;
// })

// const greatSeven = ((e)=>{
//     return e>7
// })

// console.log(newarr)

// console.log(newarr.filter((e)=>{
//     return e>7
// }))

const pro = ((a,b) => {
    return a+b;
})

console.log(arr.reduce(pro))

console.log(
    Array.from(`Harsh`)
)