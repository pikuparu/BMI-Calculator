


 function bmiCalculator(height,weight){
      var heightInMeters= height/100;
      var number=weight/(heightInMeters*heightInMeters);
    var result=Math.round(number*100)/100;
      return result ;

    
}

function gotClicked(){
var get=parseFloat(document.querySelector(".first").value);
 
var got=parseFloat(document.querySelector(".second").value);
 
 var calculator= bmiCalculator(get,got);
document.querySelector(".third").value=calculator+" "+ "kg/m2.";
    announcing(calculator);
}

document.getElementById("bmi").addEventListener("click",gotClicked);

function clicked(){
    document.getElementById("simplecalculator").reset();
    document.getElementById("resultpara").innerHTML="Please enter your height and weight in the table above";
}
function  announcing(cal){if (cal < 18.5){document.getElementById("resultpara").innerHTML = "you are underweight.You must try to eat well"; }else if ( cal >= 18.5 && cal<= 24.9){document.getElementById("resultpara").innerHTML = "Well Done!,Your BMI is in the healthy weight range.Keep up the good work"; } else if(cal >= 25 && cal<= 29.9){document.getElementById("resultpara").innerHTML = "You are overweight.Please keep a check on your calorie intake";} else if(cal >= 30){document.getElementById("resultpara").innerHTML = "Don't panic,Your BMI comes in the obese range.Start a healthy diet and consistent work out."; }}





