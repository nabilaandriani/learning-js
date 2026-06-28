function promiseExecutor(resolve, reject) {
  setTimeout(() => {
    resolve('You did it!');
  }, 2000);
}

export function doSomething() {
  return new Promise(promiseExecutor);
}

import { doSomething } from './utils.mjs';
 
async function promiseWithAsyncAwait() {
  console.log('Start.');
 
  const result = await doSomething();
  console.log(result);
 
  console.log('End.');
}
 
promiseWithAsyncAwait();
 
/* Output:
Start.
You did it.
End.
*/

// =============== try catch untuk tangani error jika pake async await ===============//
function promiseExecutor(resolve, reject) {
  setTimeout(() => {
    resolve('You did it!');
  }, 2000);
}

export function doSomething() {
  return new Promise(promiseExecutor);
}

import { doSomething } from './utils.mjs';

async function promiseWithAsyncAwait() {
  try {
    console.log('Start.');

    const result = await doSomething();
    console.log(result);

    console.log('End.');
  } catch (error) {
    console.log(error.message);
  }
}

promiseWithAsyncAwait();

/* Output:
Start.
You did it.
End.
*/