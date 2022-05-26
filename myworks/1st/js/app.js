
const ball = document.querySelector('.circle');
const start = document.querySelector('.start');
const stop = document.querySelector('.stop');

// ball.style.left = `500px`;
let left = 0;
let direction = 'right';
let interval = move();

function move(){
     setInterval(() => {

          if(direction === 'right'){
               left += 1;
     
               if(left > 500){
                    direction = 'left';
               }
          }else if(direction === 'left'){
               left -= 1;
     
               if(left < 0){
                    left = 0;
                    direction =  'right';
               }
          }

          ball.style.left = `${left}px`;
     
     }, 10);
}

start.addEventListener('click', () => {
     move();
})

stop.addEventListener('click', () => {
     clearInterval(interval);
});


