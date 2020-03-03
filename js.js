Question #1
Given the following code, what would be the result of of running shark.eat()?

function Animal(attributes){
  this.name = attributes.name,
  this.fishAre = attributes.fishAre,
  this.fishAreNot = attributes.fishAreNot
}
Animal.prototype.eat = function(){
  return `Fish are ${this.fishAre} not ${this.fishAreNot}`;
}
const shark = new Animal({
  name: 'Bruce',
  fishAre: 'friends',
  fishAreNot: 'food'
})
console.log(shark.eat());

friends
 
food
 
Fish are friends not food c
 
Fish are fishAre not fishAreNot
Is something wrong with this question?
Give feedback
Question #2
.reduce() will return ________.


an array of the same length as the original array
 
a single value c
 
an array double the length of the original array
 
nothing
Is something wrong with this question?
Give feedback
Question #3
Which of the following is a difference between a callback and a higher order function?


a callback is the function that is passed into a higher order function c
 
a higher order function is the function that is passed into a callback
 
a callback is an object while a higher order function is not
 
a higher order function is an object while a callback is not
Is something wrong with this question?
Give feedback
Question #4
What array method would you use to produce an output array of [7, 9, 11, 13, 73]?


1
const myArray = [4, 6, 8, 10, 70];
2
​
3
const newArray = myArray.filter(function(item) {
4
    return(item+3);
5
})
6
​
7
console.log(newArray);
Is something wrong with this question?
Give feedback
Question #5
What does the following code return?

const fswUnits = ['Web Fundamentals', 'Web Apps I', 'Web Apps II', 'Web API'];
console.log(fswUnits[3])

Web Fundamentals
 
Web Apps I
 
Web Aps II
 
Web API c
 
Undefined
Is something wrong with this question?
Give feedback
Question #6
Which location would be the most appropriate for a LESS reset file?

<-- variables and mixins go here --> 
<-- less files below -->
@import "location_A";
@import "global_styles"; 
@import "other_file";
@import "location_B";

location_A
 
location_B
Is something wrong with this question?
Give feedback
Question #7
In this example, the text in the grandchild class would be what color?

.parent {
  color: black;
  font-size: 12px;
  border: 1px solid black;
  padding: 20px;
  
	.child {
    color: red;
    font-size: 16px;
    margin: 20px;
   
	 .grandchild {
      width: 400px;
      height: 100px;
      background: gray;
    }
  }  
} 

Black
 
Red c
 
Gray
 
Undefined

Question #8
The difference between these mobile and desktop navigation links can be most 
easily accomplished with which flex-direction value on the media query?

Mobile Nav Desktop Nav


1
@media (max-width: 500px) {
2
display: flex;
3
flex-direction: column;
4
}
Is something wrong with this question?
Give feedback
Question #9
Which tag would make this code more semantic?

<div>
  <h2>About Me</h2>
  <p>Some Body Text</p>
</div>

<section> c
 
<main> c
 
<body>
 
<span>
Is something wrong with this question?
Give feedback
Question #10
flex-direction: row; applied to flex-container would result in which of the following layouts?

<div id="flex-container">
   <div>1</div>
   <div>2</div>
   <div>3</div>
</div>

Screen Shot 2020-01-27 at 9.56.08 AM
 
Screen Shot 2020-01-27 at 9.57.08 AM
 
Screen Shot 2020-01-27 at 9.57.49 AM c
 
Screen Shot 2020-01-27 at 9.58.14 AM 
Is something wrong with this question?
Give feedback
Question #11
The git command to record changes to the local repository is ___________.


push
 
pull
 
fork
 
commit c
Is something wrong with this question?
Give feedback
Question #12
Fill in the git command to create a new branch with the name feature-X according to Lambdas git flow.


1
git checkout -b "feature-X"
Is something wrong with this question?
Give feedback
Question #13
Which of the following is an acceptable way to write a function? Select all that apply.


function speak() {
console.log("Hello World");
}
 
const function speak () {
console.log("Hello World")
}
 
const speak = () => console.log('hello world');
 
const speak = function() {
console.log("Hello World")}
Is something wrong with this question?
Give feedback
Question #14
What will be the output of the following code block?

function testThis() {
if (1 + 1 === 3) {
    return 'A';
} else if (1 + 1 === 3) {
    return 'B';
    }
    else {
        return 'C';
        }
}

testThis();

'A'
 
'B'
 
'C' c
 
Undefined
Is something wrong with this question?
Give feedback
Question #15
Which of the following are semantic HTML tags? Select all that apply.


<span>
 
<h1> c
 
<button>
 
<nav> c
Is something wrong with this question?
Give feedback
Question #16
What would be the output of the following code?

const A = 10;
const B = "10";
const C = (A == B);
console.log(C);

true c
 
false
 
10
 
1
Is something wrong with this question?
Give feedback
Question #17
What will be the output of the following code block?

let counter = 0;
for (var i = 0; i < 5; i++) {
  counter = counter + 5;
}

console.log(counter);

5
 
25 c
 
0
 
undefined