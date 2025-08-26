const hearts = document.getElementsByClassName("heart");
for (let heart of hearts) {
    heart.addEventListener("click",function(){
        const heartCount =document.getElementById("heart-count");
        heartCount.innerText = parseInt(heartCount.innerText) + 1;
    })
}
const callButtons = document.getElementsByClassName("call-btn");

const coinCount = document.getElementsByClassName("coin-count")[0];

 const callHistory = document.getElementsByClassName("call-history")[0];


 const title = document.getElementsByClassName("title")[0].innerText;

for(const callButton of callButtons){
    callButton.addEventListener("click", function(){
        const text = document.getElementsByClassName("text-emergency")[0].innerText;

        const Phone = document.getElementsByClassName("phone")[0].innerText;

     
    
        // console.log(text);
        alert("📞calling" +" "+ text + " " + Phone + "....");

            let currentCoins =Number(coinCount.innerText) -20 ;
        coinCount.innerText = currentCoins;
        console.log(currentCoins);



        /* call History */
         const callItem = document.createElement("div");
    callItem.innerHTML =`
    <div class="call-history flex justify-between p-4 bg-[#FAFAFA] rounded-md mt-5">
    <div class="">
        <h1 class="font-bold">${title}</h1>
        <p class="text-[#5C5C5C]">${Phone}</p>
    </div>
    <div class="">
        <h3>${new Date().toLocaleTimeString()}</h3>
    </div>

  </div>
    `
  callHistory.appendChild(callItem);
     

    })
   

}

document.getElementById("clear-btn").addEventListener("click", function(){
    callHistory.innerHTML = "";
})




   