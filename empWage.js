console.log("Welcome To Employee Wage Problem in Java Script!!!\n");

// UC1 - Employee is Present or Absent
{
    const IS_ABSENT = 0;
    let empCheck = Math.floor(Math.random() * 10) % 2;
    if(empCheck == IS_ABSENT){
    console.log("Employee is Absent"); 
    }else{
    console.log("Employee is Present");
    }
}