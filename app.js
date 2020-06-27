function getNumber(num){
    console.log(num)
    var result1 = document.getElementById("result1");
result1.value += num;
}
function clearResult(){
    var result1 = document.getElementById("result1");
    result1.value = ""
}
function getresult(){
    var result1 = document.getElementById("result1");
    result1.value = eval(result1.value)
     
}