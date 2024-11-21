// const funnyNumbers =(array) => {
//     for(let i=0; i<array.length; i++) {
//         if(i===3) return array[i]
//     }
// }

const funnyNumbers =(array) => {
    return array[3]
}
const nums = [420, 96, 12, 69, 77];

console.time('funnyNumbers');
console.log(funnyNumbers(nums));
console.timeEnd('funnyNumbers');
