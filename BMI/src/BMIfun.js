function calculateBmi() {
    var weight = document.bmiForm.weight.value
    var heightf =document.bmiForm.heightf.value
    var heighti= document.bmiForm.heighti.value
    var ci=heightf*12
    var si= parseInt(ci) + parseInt(heighti);
    var m=si * 0.0254

   
    if(weight > 0 && m > 0){	
    var finalBmi = weight/(m*m)
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