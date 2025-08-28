
//heart count
const hearts = document.getElementsByClassName("heart");
for (let heart of hearts) {
    heart.addEventListener("click", function () {
        const heartCount = document.getElementById("heart-count");
        heartCount.innerText = parseInt(heartCount.innerText) + 1;
    });
}

const callHistory = document.getElementsByClassName("call-history")[0];
const callBtn = document.getElementsByClassName("call-btn");


//call button ke kaje lagiye baki gula ber kore nei
for (const btn of callBtn) {
    btn.addEventListener("click", function () {
        const title = btn.parentNode.parentNode.childNodes[3].childNodes[1].innerText;
        const Phone = btn.parentNode.parentNode.childNodes[3].childNodes[5].innerText;

        const coinCount = document.getElementsByClassName("coin-count")[0];
        let currentCoins = Number(coinCount.innerText);

        if (currentCoins >= 20) {
            currentCoins -= 20;
            coinCount.innerText = currentCoins;

           
            alert("📞calling " + title + " " + Phone + "....");

           //added call history
            const createElement = document.createElement("div");
            createElement.innerHTML = `
              <div class="call-history md:flex justify-between md:p-4 p-2 bg-[#FAFAFA] rounded-md mt-5">
                <div>
                    <h1 class="font-bold ">${title}</h1>
                    <p class="text-[#5C5C5C]">${Phone}</p>
                </div>
                <div>
                    <h3>${new Date().toLocaleTimeString()}</h3>
                </div>
              </div>
            `;
            callHistory.appendChild(createElement);

        } else {
            alert("You haven't enough coins to make the call.");
        }
    });
//call history clear
    document.getElementById("clear-btn").addEventListener("click", function () {
        callHistory.innerHTML = "";
    });
}

//copy button functionality

const copyBtn = document.getElementsByClassName("copy-btn");
for (const btn of copyBtn){
    btn.addEventListener("click",function(){
         const Phone = btn.parentNode.parentNode.childNodes[3].childNodes[5].innerText;

          navigator.clipboard.writeText(Phone).then(() => {
        
        }).catch(err => {
            
        });

        alert("your number is copied: " + Phone)
        const copyCount = document.getElementsByClassName("copy-count")[0];
        copyCount.innerText = parseInt(copyCount.innerText) + 1;

    })
} 

       










