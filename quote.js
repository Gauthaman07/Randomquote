
let btnFun = document.getElementById('btnFunc')


btnFun.addEventListener('click',()=>{
  fetch("https://api.themotivate365.com/stoic-quote")
  .then(ip=>ip.json())
  .then((data)=>{
    document.getElementById("quote").innerHTML = data.quote;
    document.getElementById("author").innerHTML =data.author;
   
  
  })
  

})


