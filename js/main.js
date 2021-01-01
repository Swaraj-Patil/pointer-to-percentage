function converted(){
    var cgpa = document.getElementById("cgpa").value;
    var percentage;
    var selected = document.getElementById('university').value;
    switch(selected){
        case 'mu':
            if(cgpa == 0){
                percentage = 0;
            }else if(cgpa < 7){
                percentage = 7.1*cgpa + 12;
            }else if(10 >= cgpa && cgpa >= 7){
                percentage = 7.4*cgpa + 12;
            }else{
                alert("Please Enter a Valid CGPA")
            }
            break;
        case 'pu':
            if(cgpa <= 10){
                percentage = cgpa*8.8;
            }else if(cgpa > 10){
                alert("Please Enter a valid CGPA");
            }
            break;
        case 'iitb':
            if(cgpa <= 10){
                percentage = cgpa*10;
            }else{
                alert("Please Enter a valid CGPA");
            }
            break;
        case 'bvdu':
            if(5 < cgpa && cgpa <= 6){
                percentage = cgpa*10 - 10;
            }else if(6 < cgpa && cgpa <= 8){
                percentage = cgpa*5 + 10;
            }else if(8 < cgpa && cgpa <=9){
                percentage = cgpa*10 -20;
            }else if(9 < cgpa && cgpa <= 9.5){
                percentage = cgpa*20 - 110;
            }else if( 9.5 < cgpa && cgpa <= 10){
                percentage = cgpa*40 - 300;
            }else{
                alert("Please Enter a valid CGPA");
            }
            break;
        default:
            alert("Please Select a valid University");
    }
    percentage = percentage.toFixed(2);
    document.getElementById('resultCGPA').innerText = cgpa;
    document.getElementById('resultPercentage').innerText = percentage;
}

var input = document.getElementById('cgpa');

input.addEventListener('keyup', function(e){
    if(e.keyCode === 13){
        e.preventDefault();
        document.getElementById('btn').click();
    }
});


function inputFilter(textbox, filter){
    ['input', 'keydown', 'mousedown', 'mouseup', 'select', 'contextmenu', 'drop'].forEach(function(e){
        textbox.addEventListener(e, function(){
            if(filter(this.value)){
                this.oldValue = this.value;
                this.oldSelectionStart = this.oldSelectionStart;
                this.oldSelectionEnd = this.oldSelectionEnd;
            }else if(this.hasOwnProperty('oldValue')){
                this.value = this.oldValue;
                this.setSelectionRange(this.oldSelectionStart, this.oldSelectionEnd);
            }else{
                this.value = "";
            }
        });
    });
}

inputFilter(document.getElementById('cgpa'), function(value){
    return /^\d*\.?\d*$/.test(value);
});