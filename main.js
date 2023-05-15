//1.

const funct = arr => {
  let resultOfNums = 1;

  const result = [];
  result[0] = arr[0] + arr[1];
  for (let i = 2; i < arr.length; i++){
    resultOfNums *= arr[i];
  }
  result[1] = resultOfNums
  return result;
};

console.log(funct([1,2,3,4]));

//2.

const user = {
  banks: [
    {firstBank: 'tbc'},
    {secondBank: 'bog'},
    {
      address: {
        city: 'Tbilisi'
      }
    }
  ]
};

const bankLocation = ({banks: [, ,{address: {city}}]}) => `Address is ${city}` ;

console.log(bankLocation(user));

//3.

const task3 = obj => {
  const newObj = {...obj};
  return newObj;
};

console.log({a: "b"})