var teacher = "Sanket";
function fun() {
    console.log(subject); // undefined
    var teacher = "Pulkit";
    var subject = "Javasctipt";
    teachingAssistant = "vibhav";
    console.log(teacher);
    console.log(teachingAssistant);
}

fun();
console.log(teacher); // sanket
console.log(teachingAssistant); 
