
const rolls = "\r|   \r/   \r-   \r\\  \r|  \r/  \r-  \r\\  \r|  \n"
actions = rolls.split(" ")
let count = 100
for (let dash of actions){
setTimeout(() => {
  process.stdout.write(dash);
}, count);
count += 200
}



// setTimeout(() => {
//   process.stdout.write('\r|   ');
// }, 100);

// setTimeout(() => {
//   process.stdout.write('\r/   ');
// }, 300);

// setTimeout(() => {
//   process.stdout.write('\r-   ');
// }, 500);

// setTimeout(() => {
//   process.stdout.write('\r\\  '); 
// }, 700);

// setTimeout(() => {
//   process.stdout.write('\r|  '); 
// }, 900);

// setTimeout(() => {
//   process.stdout.write('\r/  '); 
// }, 1100);

// setTimeout(() => {
//   process.stdout.write('\r-  '); 
// }, 1300);

// setTimeout(() => {
//   process.stdout.write('\r\\  '); 
// }, 1500);

// setTimeout(() => {
//   process.stdout.write('\r|  '); 
// }, 1500);
