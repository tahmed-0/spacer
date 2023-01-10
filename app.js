function spacer() {
    let counter = 0;
let increase = document.getElementById('result');
document.addEventListener("keyup", event => {
    if(event.which === 32 ) {
        counter += 1;
        increase.innerHTML = counter;
       }

       if(event.which === 8 ) {
        counter -= 1;
        increase.innerHTML = counter;

       }
});
};

spacer();