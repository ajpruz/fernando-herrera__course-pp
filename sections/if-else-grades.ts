export let grade: number = 60;
let gradeletter: string;

if (grade >= 90) {
  gradeletter = "A+";
} else if (grade >= 80) {
  gradeletter = "B";
} else if (grade >= 70) {
  gradeletter = "C";
} else if (grade >= 60) {
  gradeletter = "D";
} else {
  gradeletter = "E";
}
console.log(`Tu nota es de ${gradeletter}`);
