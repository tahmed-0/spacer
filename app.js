let counter = 0;
let increase = document.querySelector('#result');

function spacer() {
    
document.addEventListener("keyup", event => {
    if(event.which === 32 ) {
        counter += 1;
        increase.innerHTML = counter;
       }

       if(event.which === 8 ) {
        counter -= 1;
        increase.innerHTML = counter;

       }



 $('h1').click(function() {
    increase.innerHTML = 0;
});


      

    
});
};

spacer();
