/**
 * 
 * @param {*} num 
 */
function sum(num) {

  if(n === 1) {
    return 1;
  }

  for(let index = 0; index<= arguments.length; index++){
    console.log(arguments[index]);
  }

  return n + sum(n - 1);
}
// sum(10);