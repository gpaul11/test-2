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
            if(students[i]["program"]=="CPA")
            cpa.push(students[i]);
        }
        if(students.length==0){
            reject("no results returned");
        }
        resolve(cpa);
    })
}

module.exports.highGPA=function(){
    return new Promise((resolve, reject) => {
        let gpa;
        index=-1;
        let highest=-100.000;
        for(i in students ){
            if(students[i]["gpa"]>highest)
            index=i;
            highest=students[i]["gpa"];
        }
        if(index==-1){
            reject("no results returned");
        }
        resolve(students[index]);
    })
}
