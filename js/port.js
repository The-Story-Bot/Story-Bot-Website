

document.addEventListener('DOMContentLoaded', function() {
    
    const initBars = () => {
        ['bar1', 'bar2', 'bar3'].forEach(id => {
            const bar = document.getElementById(id);
            if (bar) {
                bar.style.transform = 'translateX(-100%)';
            }
        });
    };
    initBars();

    
    document.addEventListener('scroll', function() {
        const triggerPoints = { bar1: 200, bar2: 800, bar3: 1400 };
        Object.keys(triggerPoints).forEach(id => {
            const bar = document.getElementById(id);
            if (bar) {
                bar.style.transform = window.scrollY > triggerPoints[id] ? 'translateX(0)' : 'translateX(-100%)';
            }
        });
    });

   
});





document.addEventListener('scroll', function() {
    const scrollPosition = window.scrollY;

    
    const triggerPoint1 = 200; 
    const triggerPoint2 = 800;
    const triggerPoint3 = 1400;

    
    if (scrollPosition > triggerPoint1) {
        document.getElementById('bar1').style.transform = 'translateX(0)';
    } else {
        document.getElementById('bar1').style.transform = 'translateX(-100%)';
    }

    if (scrollPosition > triggerPoint2) {
        document.getElementById('bar2').style.transform = 'translateX(0)';
    } else {
        document.getElementById('bar2').style.transform = 'translateX(-100%)';
    }

    if (scrollPosition > triggerPoint3) {
        document.getElementById('bar3').style.transform = 'translateX(0)';
    } else {
        document.getElementById('bar3').style.transform = 'translateX(-100%)';
    }
});
let lastScrollPosition = 0;
let isThrottled = false;
let delay = 100; 

window.addEventListener('scroll', () => {
    const currentScrollPosition = window.scrollY;

    if (isThrottled) {
        return;
    }

    isThrottled = true;
    setTimeout(() => {
        isThrottled = false;
        lastScrollPosition = currentScrollPosition;

        

    }, delay);
});



var modal = document.getElementById("calendlyModal");


var btn = document.getElementById("calendlyButton");


var span = document.getElementsByClassName("close")[0];

 
btn.onclick = function() {
  modal.style.display = "block";
}


span.onclick = function() {
  modal.style.display = "none";
}


window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}






