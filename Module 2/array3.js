let nos = [1, 2, 3, 4, 5];
console.log("Initially nos are :", nos);
nos.shift(1);
console.log("Nos after shift :", nos);
nos.unshift(1);
console.log("Nos after unshift :", nos);
//deleting elements in between using splice
nos.splice(2,1);
console.log("Nos after splice deletion :", nos);
//insert elements in between using splice
nos.splice(2,0,7,8);
console.log("Nos after splice insertion :", nos);
//replacing elements in between using splice
nos.splice(2,1,6,7,8);
console.log("Nos after splice replacing :", nos);


