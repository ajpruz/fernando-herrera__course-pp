export let weekDays: number = 5;

if (weekDays <= 0) {
  throw new Error("Dia de la semana no permitido");
}

switch (weekDays) {
  case 1:
    console.log("LUNES");
    break;
  case 2:
    console.log("MARTES");
    break;
  case 3:
    console.log("MIERCOLES");
    break;
  default:
    console.log("No es ni LUNES, MARTES O MIERCOLES");
}
