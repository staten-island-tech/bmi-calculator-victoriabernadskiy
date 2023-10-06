function calcbmi(weight, height) {
  const bmi = (weight / ((height/100)**2)).toFixed(2);
  console.log(`Bmi = ${bmi}`)
  if (bmi <= 18.5) {
    return "Underweight";
  } else if (bmi <= 25.0) {

    return "Normal";
  } else if (bmi <= 30.0) {

    return "Overweight";
  } else if (bmi > 30) {
    return "Obese";
  }
}

function outputbmi(bmi, name) {
  console.log(`${name}, you are ${bmi}`)
}


let person_obj = {
  name: prompt("Enter your name"),
  w: prompt("Enter your weight (kg)"),
  h: prompt("Enter your height (cm)")
}

bmi = calcbmi(person_obj.w, person_obj.h);
outputbmi(bmi, person_obj.name)
