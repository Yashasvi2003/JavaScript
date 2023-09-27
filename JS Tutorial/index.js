//console.log("hello world", 4+4, "ANOTHER LOG");
//alert("me");
//document.write("this is document write")
//console.warning("this is a warning");
//console.error("this is an error");
// variables in javascrit
//number type
var num1=3;
var num2=6;
console.log(num1+num2);
//string type
var str1="this is a string";
var str2=' this is a string';
console.log(str1+str2);
//objects
var marks={
    ravi: 34,
    shubham: 78,
    harry: 98.77,

}
console.log(num1);
console.log(str1);
console.log(marks);
//boolean
var c=true;
var d=false;
console.log(a, b);
var und;
console.log(undefined);
var n=null;
console.log(n);
//arithmetic operator
var a=100;
var b=10;
console.log("the value of a+b",a+b);
console.log("the value of a-b",a-b);
console.log("the value of a*b",a*b);
console.log("the value of a/b",a/b);
//assignment operator
var x=b;
x+=b;
console.log(x);
//comparison operator
var i=40;
var j=50;
console.log(i==j);
console.log(i!=j);
//logical operators
console.log(true&&false);
console.log(false&&true);
//logical not
console.log(!false);
console.log(!true);
//fuction in javascript
function avg(a,b) {
    return (a+b)/2;
}
g=avg(4,6);
g1=avg(5,8);
console.log(g1);
console.log(g);
//conditionals in javascript
//var age=18;
//if(age>13){
    console.log('you are not a kid');
//}
//else{
    console.log('you are a kid ')
//}
var arr=[1,2,3,4,5,6,7];
console.log(arr);
//for(var i=0;i<arr.length;i++) {
    //console.log(arr[i]);
//} 
arr.forEach(function(element){
console.log(element);
})
let k=0;
const ac=0;
//ac=ac+1; will throw error since the variable ac is constant
//console.log(ac);
/*while(k<arr.length){
    console.log(arr[i]);
    k++;
}*/
/*do{
    console.log(arr[k]);
    k++;
}
while(k<arr.length);*/
for(let i=0;i<arr.length;i++){
    if(i==2){
        //break;
        continue;// this statement will run till 2 and then skip 3 and will continue printing from 4 to 7
    }
console.log(arr[i]);
}
let myArr=["fan","camera",34,null,true];
//array methods
 console.log(myArr.length);
 console.log(myArr.pop());//extracts the last element of the array
 myArr.push("harry");
 console.log(myArr);
 //myArr.shift(); firts element gets removed
 //console.log(myArr);
 //myArr.unshift("harry");puts the given element in the beginning
 //console.log(myArr);
 const newLen=myArr.unshift("harry");
 console.log(newLen); 
 console.log(myArr.toString());
 console.log(arr.sort());
 //string methods in javascript
 let myString="harry is a good boy good good";
 console.log(myString.length);
 console.log(myString.indexOf("harry"));
 console.log(myString.lastIndexOf("good"));
 console.log(myString.slice(0,3));
 d=myString.replace("harry","rohan");
 console.log(d,myString);
//replace method only replaces the firts occurrence of a paarticular string
let myDate=new Date();// tells the date and time 
//console.log(myDate);
//console.log(myDate.getTime());// gives the time in seconds
//console.log(myDate.getFullYear());//tells the current year
//console.log(myDate.getDay()); //gets the day number
//console.log(myDate.getHours());//gets the time in hours
//console.log(myDate.getMinutes());//gets the time in minutes
//let lm=document.getElementById('click');
//console.log(lm);
let eleClass=document.getElementsByClassName("container");
//console.log(eleClass);
//eleClass[0].style.background="yellow";
eleClass[0].classList.add("bg-primary");
eleClass[0].classList.add("text-success");
//console.log(ele.innerHTML);
//console.log(ele.innerText);
tn=document.getElementsByTagName('div');
console.log(tn);
createdElement=document.createElement('p');
createdElement.innerText="this is a paragraph";
tn[0].appendChild(createdElement);
createdElement2=document.createElement('b');
createdElement2.innerText="this is created in bold";
tn[0].replaceChild(createdElement2, createdElement);
//removeChild(element);//remives an element 
//Fuctions for console
   // document.URL:returns the URL of the page
   //document.domain:returns the domain of the page
sel=document.querySelector('.container');// gives the first container
console.log(sel);   
//.querySelectorAll('.container'): gives all the containers
//EVENTS in javascript 
//function clicked(){// calling the function from the html file 
    //console.log("the button was clicked");
//}window.onload=function(){
    //console.log("the document was loaded")
//}
//firstContainer.addEventListener('click',function(){
   // console.log("clicked on  container");
//}) 
//firtsContainer.addEventListener('mouseover',function(){
    //console.log("mouse on container");
//})
//firstConatiner.addEventListener('mouseout',function(){
    //console.log("mouse on container");
//})
//let prevHTML=document.querySelectorAll('.container')[1].innerHTML=prevHTML;
//firstContainer.removeEventListener('mouseup',function(){
   // console.log("mouse up when clicked on container");
//})  
//firstContainer.addEventListener('mousedown',function(){
    //document.querySelectorAll('.container')[1].innerHTML="<b>we have clicked</b>"
    //console.log("mouse down when clicked on container");
//Arrow functions
//function summ(a,b){
  //  return a+b;
//}
logKaro=()=>{
    console.log("i am your log");
    document.querySelectorAll('.container')[1].innerHTML="<b>we have clicked</b"
}
//setInterval setTimeout
//setTimeout(logKaro, 2000);//displays the message after two seconds i.e. 2000milliseconds
//clr=setInterval(logKaro,2000);//displays the message after every two seconds i.e. 2000milliseconds
//on the console: clearInterval(clr) then the setInterval will stop running


//JavaScript local storage
//localStorage.setItem('name','Yashasvi');
//localStorage
//Storage {name:"Yashasvi",length:1}
//localStorage.getItem('name')
//localStorage.removeItem('name') clears the particular storage item
//localStorage.clear();clears all the storage items
//JSON
//obj={name:"Yashasvi",length:1}
//jso=JSON.stringify(obj);
//console.log(jso);
//parsed=JSON.parse(`{"name":"Yashasvi","length":1" "a":{"this":"that}}`);
//console.lof(parsed); 
//template literal- backticks
a=34
console.log(`this is ${a}`);