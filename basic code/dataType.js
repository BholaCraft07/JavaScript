// here there are three ways to declare string 
let name='bhola';
let name1="bhola";
let name2=`bhola`;
console.log(name,name1,name2);

// if we want to print same to same string then use single dass(' or`)
let st='he said,"it is very dirty".';
console.log(st);
console.log(typeof(st));

// Number--- int and float ,infinite,nan(not a number)
let num=49;
console.log(num);
console.log(typeof(num));
let ft=44.4;
console.log(ft);
console.log(typeof(ft));

let value=NaN;
console.log(value);
console.log(typeof value);
let inf=Infinity;
console.log(inf);
console.log(typeof inf);
console.log();

// boolean ----{true and false}
const condition1=true;
const condition2=false;
console.log(condition1);
console.log(typeof condition1);
console.log(condition2);
console.log(typeof condition2);
console.log();

// undefined and null
let und=undefined;
let not=null;
console.log(und);
console.log(typeof und);
console.log(not);
console.log(typeof not);
console.log();

// bigint
let newk=234n;
console.log(newk);
console.log(typeof newk);

// shoe value with string in one line
let nam="bhola";
let age=34;
console.log("hello,"+nam+" you are "+age+" years old");
console.log(`Hello,${nam} you are ${age} years old`);
