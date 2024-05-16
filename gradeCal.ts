let math = Number(prompt("enter maths marks"));
let chem = Number(prompt("enter chem marks"));
let phy = Number(prompt("enter physics marks"));
function grade(math: number, chem: number, phy: number) {
  let avg = (math + chem + phy) / 3;
  if (avg <= 70) {
    return `Grade is C`;
  } else if (avg > 70 && avg <= 90) {
    return `Grade is B `;
  } else {
    return `Grade is A`;
  }
}
grade(math, chem, phy);
