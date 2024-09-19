// დავალება:

// 1 ციკლის საშუალებით გამოიტანეთ  რიცხვები 5დან - 100მდე

for (let i = 5; i<100; i++ )
{
  console.log(i);
}

// 2 .მოცემულია მასივი:
// let array1= [1, 2, 4, -1, -3, 8, 7, 0, -5, 18, 12];
// ციკლის საშუალებით გამოიტანეთ მხოლოდ ის რიცხვები რომლებიც მეტია 0 ზე და 	ნაკლებია 10ზე


let array2= [1, 2, 4, -1, -3, 8, 7, 0, -5, 18, 12];
for (let index = 0; index < array2.length; index++) {
  let element = array2[index];
  if (element > 0 && element<10 ) {
    console.log(element);
  }
}

// meore varianti
let array2= [1, 2, 4, -1, -3, 8, 7, 0, -5, 18, 12];
for (let index of array2){
  if (index > 0 && index <10)
  console.log(index);
}

// 3 მოცემულია მასივi
// let array3= [1, 2, 3, 4, 5];
// ციკლის საშუალებით გამოთვალეთ რიცხვების ჯამი

let array3= [1, 2, 3, 4, 5];
let sum=0;
for (let index = 0; index < array3.length; index++) {
 sum += array3[index]
}
console.log(sum);

//meore varianti
let array3= [1, 2, 3, 4, 5];
let sum=0;
for (let index of array3) {
   sum += index;
}
     console.log(sum)   


// 4 მოცემულია მასივი:
// let array4 = [1, 2, 3, 7, 6, 9];
// გამოთვალეთ საშუალო არითმტიკული (ჯამი გავყოთ ელემნტების რაოდენობაზე)

let array4 = [1, 2, 3, 7, 6, 9];
sum=0;
for (let index = 0; index < array4.length; index++) {
 sum+=array4[index]/array4.length
}
console.log(sum);





//  5 მოცემულია ობიექტი:
// ამოიღეთ user ცვლადის სტუდენტის სტატუსი;
let user = {
  firstname: "giorgi",
  lastname: "smith",
  age: 25,
  studentstatus: "active"
};
console.log( user.studentstatus);



// 6 მოცემულია ობიექტი:
// 

// თუ უსერის ასაკი ნაკლებია 18ზე და სტუდენტის სტატუსი აქტიურია დაიბეჭდოს ტექსტი:  
// hello;
// თუ უსერის სახელი უდრის ლევანს მაშინ დაიბეჭდოს ტექსტი: hello levani;
// თუ უსერის სტუდენტის სტატუსი აქტიურია ან უსერის ასაკი ნაკლებია 25ზე დაიბეჭდოს ტექსტი: hello world;
// ყველა დანარჩენ შემთხვევაში დაილოგოს ტექსტი: error;

  let user = {
    name: 'giorgi',
    age:  18,
    studentstatus: 'active'
}
for (let key in user) {
if (user.age = 18 && user.studentstatus=='active') 
{ console.log('hello');  }
else if ( user.name== 'levan'){
  console.log('hello levani');  
}
else if (user.studentstatus=='active'|| user.age<25)
  {console.log('hello world');}
  else {
    console.log('eror');
  }
}

// 7  მოცემული მასივიდან for ციკლი ს საშუალებით კონსოლში გამოიტანეთ მხოლოდ დადებითი რიცხვები:
let array = [
  [2, -3, 5, 10],
  [25, -24, -11, 100],
  [-6, -7, 10],
];
for (let index of array){
  for (let number of index)
  if (number>0){
  console.log(number);}
}


// 8 მოცემულია მასივი
//  კონსოლში გამოიტანეთ მარტო ის ობიექტი, რომლის status property-ის მნიშვნელობა არის true;

let users = [
    {username: 'giorgi', status: false},
    {username: 'levani', status: false},
    {username: 'anna', status: true}
]
for (const property of users) {
  if (property.status === true)
  console.log(property);
}
// 9 მოცემულია ცვლადი, რომლის მნიშვნელობაა მარიამ. ახალი if ის სინტაქსით დაწერეთ,
//  თუ ცვლადის მნიშვნელობა უდრის მარიამ-ს დაიბეჭდოს - true, 
// ყველა სხვა დანარჩენ შემთხვევაში დაიბეჭდოს - false; 

let username = 'mariam';
if (username == 'mariam') { 
  console.log(true);
}
else {
  console.log(false);
}
//meore varianti

let user = prompt('enter your name', 'mariam');
(user=='mariam')?  alert(true):alert(false);


// 10 მოცემულია ცვლადი, რომლის მნიშვნელობაა მარიამ. switch case ის საშუალებით დაწერეთ, 
// თუ ცვლადის მნიშვნელობა უდრის მარიამ-ს დაიბეჭდოს - true,ყველა სხვა დანარჩენ შემთხვევაში დაიბეჭდოს - false; 

let username = 'mariam';
switch (username){
case 'mariam' :
  console.log(true);
  break;
  default :
  console.log(false);
}
