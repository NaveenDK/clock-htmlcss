const toggle = document.querySelector('.toggle');


const days = ['Sunday','Monday',"Tuesday","Wednesday","Thursday","Friday","Saturday"]

const months = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]


toggle.addEventListener('click',(e)=>{
  const html= document.querySelector('html')

  if(html.classList.contains('dark')){
    html.classList.remove('dark')
    e.target.innerHTML='Dark mode'
  }
  else{
    html.classList.add('dark')
    e.target.innerHTML='Light mode'
  }
})


function setTime(){
  const time = new Date();
  console.log(time)
}