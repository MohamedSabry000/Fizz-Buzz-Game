let numberInput = parseInt(prompt("Enter a Number"));
if(numberInput%3 == 0 && numberInput%5 == 0){
    document.writeln("fizz buzz");
}else if(numberInput%3 == 0){
    document.writeln("fizz!");
}else if(numberInput%5 == 0){
    document.writeln("buzz!");
}else {
    document.writeln("none");
}
