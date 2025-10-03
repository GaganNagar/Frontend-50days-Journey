//create an object for a student with name, age and IsEnrolled.
let obj={
    Name:"Gagan",
    age:22,
    IsEnrolled:true,
}

//given a  dynamic key let key="age" , how will u access users[key]?
let key="age"
let obj2={
    Name:"gagan",
    age:22,
}
obj2[key]          //yaha key variable jo brackat m jakr convert ho gya keys m to value key=age h to obj m obj2.age ese kam karega



//from the object below , print the latitude
const location={
    city:"indore",
    coordinates:{
        lat:23.2,
        lng:77.4,
    }
}
location.coordinates.lat    // thats it


// destructure the key "first-name" as a variable called FirstName.

const user={
    "First-name":"gagan",
};
let {"First-name":FirstName}=user;

// use for-in loop for log all keys in this object
const course={
    title:"javascript",
    duration:"4 weeks",
}

for(let key in course){
    console.log(key);
    
}

// use object.entries() to print all key value-pairs as:
// title:"javascript"
//duration:"4 weeks"

Object.entries(course).forEach(function(val){
    console.log(val[0] + ": " + val[1] );
    
})