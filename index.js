
//1.)  Write a function that takes a student’s score and logs "Passed" if it’s 180 and above, else logs "Failed". (JAMB-style)


function studentScore(theScore) {

  const score = 180
  if (theScore >= score) {
    console.log("passed");
    return ("passed");
  }

  else if (theScore > 50 && theScore < score) {
    console.log("failed");
    return ("failed");
  }
  else {
    console.log("failed woefully");
    return ("failed woefully");
  }

}

// studentScore(190)
const student1 = `You scored 190, so you ${studentScore(190)}`
document.getElementById('student1').textContent = student1


// studentScore (180)

const student2 = `You scored 180, so you ${studentScore(180)}`
document.getElementById('student2').textContent = student2

// studentScore (179)
const student3 = `You scored 179, so you ${studentScore(179)}`
document.getElementById('student3').textContent = student3

// studentScore (0)
const student4 = `You scored 0, so you ${studentScore(0)}`
document.getElementById('student4').textContent = student4



//2.)  Write a function that accepts an age and returns "You are eligible to vote" if the age is 18 or above, otherwise "Not eligible".

function ageCheck(theAge) {
  const age = 18
  const eligibilityStatus = theAge >= age ? ("You are eligible to vote") : ("Not eligible")
  console.log(eligibilityStatus);
  return (eligibilityStatus)

}

// ageCheck (18)
const age1 = `You  are 18 or above,  ${ageCheck(18)}`
document.getElementById("eligibilityStatus1").textContent = age1


// ageCheck (17)
const age2 = `You  are below 18, so you are ${ageCheck(17)}`
document.getElementById("eligibilityStatus2").textContent = age2



// 3.) Write a function that takes a name and score, then returns:
// "Excellent" if score >= 90
// "Good" if score >= 75
// "Average" if score >= 50
// "Fail" otherwise


function gradingScale(name = "user", score = 0) {

  const theScore = score >= 90 ? "Excellent" : score >= 75 ? "Good" : score >= 50 ? "Average" : "Fail"

  console.log(`Dear ${name}, your score is ${score} which is ${theScore}`);
  return (theScore)

}

// gradingScale("Titi", 90)
const portal1 = `${gradingScale("Titi", 90)}`
document.getElementById("theScore").textContent = portal1

// gradingScale("Seun David", 75)
const portal2 = `${gradingScale("Seun David", 75)}`
document.getElementById("theScore2").textContent = portal2

// gradingScale("Ope ESther ", 50)
const portal3 = `${gradingScale("Ope ESther", 50)}`
document.getElementById("theScore3").textContent = portal3

// gradingScale("Solomon King", 20)
const portal4 = `${gradingScale("Solomon King", 20)}`
document.getElementById("theScore4").textContent = portal4


// 4. Write a function that takes two boolean values: hasID and isAbove18. Return "Access granted" only if both are true.
function twoBoolen(hasID, age) {
  const isValidId = hasID = /^\d{5}$/.test(hasID) /* I have set the values of ID to be 5 digit numbers,and when user is 18 and abovee */

  const isAbove18 = age >= 18  /* I have set the year to be 18 years and above */



  if (isValidId == true && isAbove18 == true) {
    console.log("Access granted");

    return ("Access granted")
  }

  else {
    console.log("Denied")
    return ("Denied")

  }
}

twoBoolen(578, 17)
twoBoolen(12345, 18)

//5.) Use a for loop to go through an array of student scores. For each score, print "Pass" if it’s above 50 or "Fail" if it’s 50 or below.



studentScore = [20, 50, 70, 100, 80];


for (let i = 0; i < studentScore.length; i++) {
  const score = studentScore[i];

  if (score <= 50) {
    console.log(score + "failed");

  }
  else {
    console.log(score + "passed");
  }

}


// 6. Write an arrow function that returns "Yes" if a student passed both Math and English (score ≥ 50), else "No".

const Report = (Math = 0, English = 0) => {
  const mark = 50
  const passedMath = Math >= mark
  const passedEnglish = English > mark
  passedMath == true && passedEnglish ? console.log("Yes") : console.log("No");

  `${passedMath} ${passedMath}`

}
Report(90, 90)
Report(10, 90)

// 7. Create a function that checks if a user has either an email or a phone number before signing up.

function signingUp(email = "", phone = 0) {
  const newUserEmail = email;
  const newphoneNumber = phone;
  if (newUserEmail && newphoneNumber) {
    console.log("You have signed up successful");
  }
  else { console.log("Please insert name and email") }

}



signingUp()
signingUp("sam@gmail.com",09084354449)


// 8. Write a function that takes username and password. If either one is empty, return "Invalid input" using the || operator.

function userPasssword(username="", passWord="") {
  const newUserName = username;
  const newPassword = passWord;
  if (!newUserName || !newPassword) {
    console.log("Invalid input");

  }
  else {
    console.log("input Accepted")
    return ("input Accepted")
  }
}

userPasssword(username="", passWord="James2134") 
userPasssword(username="TITI", passWord="James2134") 

// 9. Write a function that accepts hours worked. If hours ≥ 40, return "Full-time", else "Part-time" using a ternary operator.

function WorkHour( hour) {
  const workHour = 40
  const theHour = hour >= workHour

  theHour ? console.log("Full-time") :console.log("Part-time");
  
}

WorkHour(70)

WorkHour(39)

// 10. Write an arrow function that takes two numbers and returns the larger one. 

const selectNumbers =(number1, number2)=>{

const numberToSelect1 = number1 
const numberToSelect2 = number2 
if(numberToSelect1> numberToSelect2 )
 console.log(number1);
else {numberToSelect2>   numberToSelect2
console.log(number2);

}
 

}


selectNumbers(90,190)
selectNumbers(90,15)