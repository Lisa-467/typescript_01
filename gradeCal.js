var math = Number(prompt("enter maths marks"));
var chem = Number(prompt("enter chem marks"));
var phy = Number(prompt("enter physics marks"));
function grade(math, chem, phy) {
  var avg = (math + chem + phy) / 3;
  if (avg <= 70) {
    return "Grade is C";
  } else if (avg > 70 && avg <= 90) {
    return "Grade is B ";
  } else {
    return "Grade is A";
  }
}
console.log(grade(math, chem, phy));
