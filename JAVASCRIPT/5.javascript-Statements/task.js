/*Check if a number is positive, negative, or zero*/


let number = 0;

if(number>0){
    console.log("number is positive");
}
else if(number==0){
    console.log("number is 0");
}
else{
    console.log("number is nagetive");
} 







/*Check if a person is eligible to vote*/
let age = 18;

if(age>=18)
{
    console.log("Eligible for Voting!");
}
else{
    console.log("Not Eligible for Voting!");
}





/*Determine the largest of three numbers*/
let a = 60;
let b = 40;
let c = 50;

if(a >= b && a >= c){
    console.log("Largest Number of A")
}
else if(b >= a && b>=c){
    console.log("Largest Number of B")
}
else{
    console.log("Largest Number of C")
}






let year = 2001;
if (year % 4 == 0){
    console.log("this year is a leap year");
 }
 else{
    console.log("this year is a not leap year");
 }



/*Determine the grade based on a score*/

let marks = 60;

if(marks>=40 && marks<50){
    console.log("Grade:F");
}
else if(marks>=50 && marks<60){
   console.log("Grade: E") ;
}
else if(marks>=60 && marks<70){
    console.log("Grade: D") ;
 }
else if(marks>=70 && marks<80){
    console.log("Grade: C") ;
 }
 else if(marks>=80 && marks<90){
    console.log("Grade: B") ;
 }
 else if(marks>=90 && marks<100){
    console.log("Grade: A") ;
 }
 else{
    console.log("Fail") ;
 }f 