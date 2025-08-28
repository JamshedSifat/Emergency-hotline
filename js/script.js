

const hearts = document.getElementsByClassName("heart");
for (let heart of hearts) {
    heart.addEventListener("click",function(){
        const heartCount =document.getElementById("heart-count");
        heartCount.innerText = parseInt(heartCount.innerText) + 1;
    })
}

const callHistory = document.getElementsByClassName("call-history")[0];

const callBtn = document.getElementsByClassName("call-btn");
for(const btn of callBtn){
    btn.addEventListener("click", function(){
        const title = btn.parentNode.parentNode.childNodes[3].childNodes[1].innerText;
    

        const Phone = btn.parentNode.parentNode.childNodes[3].childNodes[5].innerText;

    

       
        // if(currentCoins < 20){
        //     alert("📞calling" +" "+ title + " " + Phone + "....");
        //     return;
        // }
        // else{
        //     alert("You have enough coins to make the call.");
        // }
        
        // alert("📞calling" +" "+ title + " " + Phone + "....");

        

        const createElement = document.createElement("div");
        createElement.innerHTML = `<div class="call-history md:flex justify-between md:p-4 p-2 bg-[#FAFAFA] rounded-md mt-5">
    <div class="">
        <h1 class="font-bold ">${title}</h1>
        <p class="text-[#5C5C5C]">${Phone}</p>
    </div>
    <div class="">
        <h3>${new Date().toLocaleTimeString()}</h3>
    </div>

  </div>
    `
        callHistory.appendChild(createElement);

        //    alert("📞calling" +" "+ title + " " + Phone + "....");
        const coinCount = document.getElementsByClassName("coin-count")[0];
        let currentCoins =Number(coinCount.innerText) -20 ;
        coinCount.innerText = currentCoins;
       if(currentCoins > 0){
        coinCount.innerText = 0;
       
        return;
       }
       else if(currentCoins === 0){
           alert("You haven't enough coins to make the call.");
           return
       }

    })
    document.getElementById("clear-btn").addEventListener("click", function(){
           callHistory.innerHTML = " ";
       })

}











