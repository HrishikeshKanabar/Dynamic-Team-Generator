const inq = require('inquirer');
const file = require('fs');

// Ask questions related to manger at start of app
function appStartquestions(){

    inq.prompt([

        {
            type:"input",
            name:"fullName",
            message:"Please enter team's manager name (Required and Alphabets only):",
            validate:(fullName)=>{
                if(fullName && /^[a-zA-Z\s]+$/.test(fullName)){
                    return true;
                }
                else{
                    return "Error: Team manager name is required and should be alphabets only.";
                }
            }

        },
        {
            type:"input",
            name:"iden",
            message:"Please enter employee ID (Help: Should be number):",
            validate:(iden)=>{
                if(isNaN(iden)){
                    return "Error: Valid employee ID is required.";
                }else{
                   return true;
                }
            }

        },
        {
            type:"input",
            name:"email",
            message:"Please enter employee address (Example:smaple@net.com):",
            validate:(email)=>{
                if(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)){
                    return true;
                }else{
                    return "Error: Valid email is required.";
                }
            }

        },
        {
            type:"input",
            name:"officeNum",
            message:"Please enter office number (Help: Should be number):",
            validate:(officeNum)=>{
                if(isNaN(officeNum)){
                    return "Error: Valid office number is required.";
                }else{
                   return true;
                }
            }

        },{
            type: "list",
            message: "Select the type of team member you would you like to add?",
            name: "memberTypeToBeCreated",
            choices: [
              "Engineer",
              "Intern",
              "Finish buiding my team",
            ],
          }

    ]).then((ans)=>{
        console.log(ans);

        getMemberTypeQues(ans.memberTypeToBeCreated);
        

    });

}

// Questions for engineer

function engineerQues(){
    inq.prompt([

        {
            type:"input",
            name:"engFullName",
            message:"Please enter engineer's name (Required and Alphabets only):",
            validate:(engFullName)=>{
                if(engFullName && /^[a-zA-Z\s]+$/.test(engFullName)){
                    return true;
                }
                else{
                    return "Error: engineer's name is required and should be alphabets only.";
                }
            }

        },
        {
            type:"input",
            name:"engIden",
            message:"Please enter engineer's ID (Help: Should be number):",
            validate:(engIden)=>{
                if(isNaN(engIden)){
                    return "Error: Valid engineer's ID is required.";
                }else{
                   return true;
                }
            }

        },
        {
            type:"input",
            name:"engEmail",
            message:"Please enter engineer's email address (Example:smaple@net.com):",
            validate:(engEmail)=>{
                if(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(engEmail)){
                    return true;
                }else{
                    return "Error: Valid engineer's email is required.";
                }
            }

        },
        {
            type:"input",
            name:"engGit",
            message:"Please enter engineer's github user (Required):",
            validate:(engGit)=>{
                if(engGit){
                    return true;
                }else{
                   return "Error: Github username is required.";
                }
            }

        },{
            type: "list",
            message: "Select the type of team member you would you like to add?",
            name: "memberTypeToBeCreated",
            choices: [
              "Engineer",
              "Intern",
              "Finish buiding my team",
            ],
          }

    ]).then((engAns)=>{
        console.log(engAns);
        getMemberTypeQues(engAns.memberTypeToBeCreated);

    });


}

// Questions for Interns

function internQues(){
    inq.prompt([

        {
            type:"input",
            name:"internFullName",
            message:"Please enter Intern's name (Required and Alphabets only):",
            validate:(internFullName)=>{
                if(internFullName && /^[a-zA-Z\s]+$/.test(internFullName)){
                    return true;
                }
                else{
                    return "Error: Intern's name is required and should be alphabets only.";
                }
            }

        },
        {
            type:"input",
            name:"internIden",
            message:"Please enter Intern's ID (Help: Should be number):",
            validate:(internIden)=>{
                if(isNaN(internIden)){
                    return "Error: Valid Intern's ID is required.";
                }else{
                   return true;
                }
            }

        },
        {
            type:"input",
            name:"internEmail",
            message:"Please enter Intern's address (Example:smaple@net.com):",
            validate:(internEmail)=>{
                if(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(internEmail)){
                    return true;
                }else{
                    return "Error: Valid Intern's email is required.";
                }
            }

        },
        {
            type:"input",
            name:"internSchool",
            message:"Please enter Intern's school name (Required):",
            validate:(internSchool)=>{
                if(internSchool){
                    return true;
                }else{
                   return "Error: Intern school name is required.";
                }
            }

        },{
            type: "list",
            message: "Select the type of team member you would you like to add?",
            name: "memberTypeToBeCreated",
            choices: [
              "Engineer",
              "Intern",
              "Finish buiding my team",
            ],
          }

    ]).then((internAns)=>{
        console.log(internAns);
        getMemberTypeQues(internAns.memberTypeToBeCreated);
    });

}

// As per member type get questions

function getMemberTypeQues(memberTypeToBeCreated){
    if(memberTypeToBeCreated=="Engineer"){
        engineerQues();
    }else if(memberTypeToBeCreated=="Intern"){
        internQues();
    }else{
        appStartquestions();

    }
}


appStartquestions();