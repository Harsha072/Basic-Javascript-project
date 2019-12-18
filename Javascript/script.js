function submitAns(){
    var totalQues=6;
    var score = 0;

    //get user input by selecting the form using form name and the options by using name
    // we are getting the user input before submittimg to the servlet or any page or any server side program
    // we have to perform validation before submitting to the server

    var q1 = document.forms["question"]["q1"].value;
    var q2 = document.forms["question"]["q2"].value;
    var q3 = document.forms["question"]["q3"].value;
    var q4 = document.forms["question"]["q4"].value;
    var q5 = document.forms["question"]["q5"].value;
    var q6 = document.forms["question"]["q6"].value;

    // eval fuction takes string as a parameter and converts it into a variable or a function
     // since there are 6 question we will first check if the user missed any question by looping through those 6 question

     for(i=1;i<=totalQues;i++){
        if(eval('q'+i) == null || eval('q'+i) == ''){
            alert("u missed question "+ i);
            return false; 
    }   

     }
     
     var ans =["a","d","a","b","a","c"];
     for(i =1; i<=totalQues; i++){
        if(eval('q'+i) == ans[i-1]){
            score++; 
     }
    }
     alert('you scored  ' +score+' out of '+totalQues);
     
   

    return false;  
}


    
