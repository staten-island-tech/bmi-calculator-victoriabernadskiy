function findBMI() {
    var height = x;
    var weight = y;
    
    if (height <= 0 || weight <= 0 || isNaN(height) || isNaN(weight)) {
      alert('Please fill all fields with valid numbers');
      return;
    }
    
    height = height / 100;
    var bmi = weight / (height * height);
    showResult(bmi);
}