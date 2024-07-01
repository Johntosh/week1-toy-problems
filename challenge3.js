//Challenge 3: Net Salary Calculator (Toy Problem)

//write a program whose major task is to calculate an individual’s Net Salary by getting the inputs of basic salary and benefits. Calculate the payee (i.e. Tax), NHIF Deductions, NSSF Deductions, gross salary, and net salary. 
//N/B: Use KRA, NHIF, and NSSF values provided in the link below.
var prompt = require('prompt-sync')();

let basicSalary= prompt('input your pay');
let bs= parseFloat(basicSalary)
let benefitsInput=prompt('input your benefits')
let benefits=parseFloat(benefitsInput)
function netSalary(bs,benefits){
    if (bs<=24000){
        console.log(0.1*bs)
    }
    else if (bs>=24001 && bs<=32333){
        console.log(0.25*bs)
    }
    else if(bs>=32334 && bs<=500000){
        console.log(0.3*bs)
    }
    else if(bs>=500001 && bs<=800000){
        console.log(0.325*bs)
    }
    else {
        console.log(0.35*bs)
    }
    }
netSalary(bs, benefits);


function nhif(gp){
    if(gp <=5999){
        console.log(150)
    }
    else if(gp>=6000 && gp<=7999){
        console.log(300)
    }
    else if(gp>=8000 && gp<=11999){
        console.log(400)
    }
    else if(gp>=12000 && gp<=14999){
        console.log(500)
    }
    else if(gp>=15000 && gp<=19999){
        console.log(600)
    }
    else if(gp>=20000 && gp<=24999){
        console.log(750)
    }
    else if(gp>=25000 && gp<=29999){
        console.log(850)
    }
    else if(gp>=30000 && gp<=34999){
        console.log(900)
    }
    else if(gp>=35000 && gp<=39999){
        console.log(950)
    }
    else if(gp>=40000 && gp<=44999){
        console.log(1000)
    }
    else if (gp>=45000 && gp<=49999){
        console.log(1100)
    }
    else if(gp>=50000 && gp<=59999){
        console.log(1200)
    }
    else if(gp>=60000 && gp<=69999){
        console.log(1300)
    }
    else if (gp>=70000 && gp<=79999){
        console.log(1400)
    }
    else if (gp>=80000 && gp<=89999){
        console.log(1500)
    }
    else if (gp>=90000 && gp<=99999){
        console.log(1600)
    }
    else{
        console.log(1700)
    }
}

function nssf(gp){
    if(gp<=7000){
        0.06*gp
    }
    else if(gp>=7001 && gp<=36000){
        0.06*gp
    }
    nssf(20000)
}
