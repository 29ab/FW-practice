function test(){
    let string = "Hello";
    return string;
}

var temp = console.log;

console.log = function(){
    let msg = [];
    while(arguments.length){
        msg.push(test() + " " + msg.shift.call(arguments));
    }
    temp.apply(console.log, msg);
}

console.log("Abhishek");