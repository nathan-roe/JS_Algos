// Given a number under 100, find the least amount of U.S. coins that could be used to total to the given number.
const makeChange = (num) => {
    let coins = {"penny": 1, "nickel": 5, "dime": 10, "quarter": 25};
    let obj = {};
    while(num !== 0){
        if(num - coins["quarter"] >= 0){
            num -= coins["quarter"];
            obj["quarter"] == undefined ? obj["quarter"] = 1 : obj["quarter"] += 1;
        }
        else if(num - coins["dime"] >= 0){
            num -= coins["dime"];
            obj["dime"] == undefined ? obj["dime"] = 1 : obj["dime"] += 1;
        }
        else if(num - coins["nickel"] >= 0){
            num -= coins["nickel"];
            obj["nickel"] == undefined ? obj["nickel"] = 1 : obj["nickel"] += 1;
        }
        else if(num - coins["penny"] >= 0){
            num -= coins["penny"];
            obj["penny"] == undefined ? obj["penny"] = 1 : obj["penny"] += 1;
        }
    }
    return obj;
}
console.log(makeChange(185));