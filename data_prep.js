var students=[];
var fs = require("fs");
module.exports.prep=()=>{
    return new Promise((resolve, reject) => {
        fs.readFile('students.json',(err,data)=>{
            if (err) reject("unable to read file");
            students = JSON.parse(data);
            
                resolve();
        });
    });
};

module.exports.cpa=function(){
    return new Promise((resolve, reject) => {
        let cpa=[];
        for(i in students ){
            if(students[i]["isprogram"]==true)
            cpa.push(cpa[i]);
        }
        if(students.length==0){
            reject("no results returned");
        }
        resolve(cpa);
    })
}

module.exports.gpa=function(){
    return new Promise((resolve, reject) => {
        let gpa=[];
        for(i in students ){
            if(students[i]["isprogram"]==true)
            gpa.push(gpa[i]);
        }
        if(students.length==0){
            reject("no results returned");
        }
        resolve(gpa);
    })
}
