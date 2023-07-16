console.log("Welcome To Employee Wage Problem in Java Script!!!\n");
//UC3--Using Repititive Statements
const IS_PART_TIME = 1;
const IS_FULL_TIME = 2;
const PART_TIME_HOURS = 4;
const FULL_TIME_HOURS = 8;
const WAGE_PER_HOURS = 20;
const NUMBER_OF_WORKING_DAYS = 20;
let empCheck = 0;

function GetWorkingHours(empCheck){
    switch(empCheck){
        case IS_PART_TIME :
            return PART_TIME_HOURS;
        case IS_FULL_TIME :
            return FULL_TIME_HOURS;
            break;
        default:
            return 0;
    }
}

let totalEmpHrs = 0;
for(let day = 0;day < NUMBER_OF_WORKING_DAYS;day++){
    let empCheck = Math.floor(Math.random() *10 ) %3;
    totalEmpHrs +=GetWorkingHours(empCheck);
}
let empWage = totalEmpHrs * WAGE_PER_HOURS;
console.log("Employee Hours : "+totalEmpHrs+" EmpWage is : "+empWage);
