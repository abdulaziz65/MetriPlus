
var cup = document.getElementById("cup-1");
var robo1= document.getElementById("robo-1");
var cup2= document.getElementById("cup-2");
var cat1= document.getElementById("cat");

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    //robo hand Animation
    if (document.body.scrollTop = 0 || document.documentElement.scrollTop < 10) {
        robo1.style.transform= "scaleX(1)";
      } else if(document.body.scrollTop > 10 || document.documentElement.scrollTop > 10){
        robo1.style.transform= "scaleX(0)";
        robo1.style.transition="0.5s";
      }

    //Cup1 Animation
    if (document.body.scrollTop = 0 || document.documentElement.scrollTop < 210) {
        cup.style.transform= "scaleX(1)";
    } else if(document.body.scrollTop > 210 || document.documentElement.scrollTop > 210){
        cup.style.transform= "scaleX(0)";
        cup.style.transition="0.2s";
    }
    // =============================================================
    //Cup2 Animation
    if (document.body.scrollTop = 0 || document.documentElement.scrollTop < 970) {
        cup2.style.transform= "scaleX(0)";
      } else if(document.body.scrollTop > 970 || document.documentElement.scrollTop > 970){
        cup2.style.transform= "scaleX(1)";
        cup2.style.transition="0.2s";
      }
    if(document.body.scrollTop > 1520 || document.documentElement.scrollTop > 1520){
        cup2.style.transform= "scaleX(0)";        
    }
    else if(document.body.scrollTop < 1370 && document.body.scrollTop > 970|| document.documentElement.scrollTop < 1370 &&document.body.scrollTop >970){
        cup2.style.transform= "scaleX(1)";
        cup2.style.transition="0.2s"; 
    }
    // ========================================================================
    // Cat Animation 
    if (document.body.scrollTop = 0 || document.documentElement.scrollTop < 2540) {
        cat1.style.top="-150px";
      } else if(document.body.scrollTop > 2540 || document.documentElement.scrollTop > 2540){
        cat1.style.top="-30px";
        cat1.style.transition="0.5s";
      }
      if (document.body.clientWidth >400 || document.documentElement.clientWidth > 400) {
        if (document.body.scrollTop = 0 || document.documentElement.scrollTop < 2340) {
          cat1.style.top="-150px";
        } else if(document.body.scrollTop > 2240 || document.documentElement.scrollTop > 2240){
          cat1.style.top="-30px";
          cat1.style.transition="0.5s";
        }
    
      }
    

    }



