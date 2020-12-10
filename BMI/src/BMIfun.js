function calculateBmi() {
    var weight = document.bmiForm.weight.value
    var height = document.bmiForm.height.value

   
    if(weight > 0 && height > 0){	
    var finalBmi = weight/(height/100*height/100)
    document.bmiForm.bmi.value = finalBmi
    if( finalBmi < 18.5){
    document.bmiForm.meaning.value = "Underwieght."
    }
    if(finalBmi >= 18.5 && finalBmi < 25){
    document.bmiForm.meaning.value = "Normal."
    }
    if(finalBmi >= 25 && finalBmi <30){
    document.bmiForm.meaning.value = "Overweight."
    }
    if(finalBmi >= 30 && finalBmi <40){
    document.bmiFor.meaning.value ="Obese. "    
    }
    if(finalBmi >40)
    {
        document.bmiForm.meaning.value ="Super Obese. "
    }
    }
    else{
        document.bmiForm.meaning.value ="Enter the values correctly "
    }
    }