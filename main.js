//common text fields
const outputText = document.querySelector("#outputText");
const outputHint = document.querySelector("#outputHint");

//common functions 
function showText(text) {
    outputText.innerText = text;
}

function showHint(text) {
    outputHint.style.display = "block";
    outputHint.innerText = text;
}

function hideHint() {
    outputHint.style.display = "none";
}

// Profit & Loss - Stocks
const intitalPrice = document.querySelector("#intprice");
const quantityOfStocks = document.querySelector("#qnty");
const currentPrice = document.querySelector("#curprice");
const btnProfitnLoss = document.querySelector("#btn-profitnloss");

function roundNumber(num){
return (Math.round(num * 100) / 100);
}

function clickHandler() {
    var priceAtWhichBought = Number(intitalPrice.value);
    var priceAtWhichSold = Number(currentPrice.value);
    var quantityOfStock = Number(quantityOfStocks.value);
    var profitnloss = 0,
        totalPnL = 0,
        pnlPerc = 0,
        flag = 0;

    console.log(priceAtWhichSold);
    console.log(priceAtWhichBought);

    if(quantityOfStock > 0){
        if (priceAtWhichSold === priceAtWhichBought) {
            flag = 0;
            console.log(flag);
            profitnloss = 0;
            totalPnL = 0;
            pnlPerc = 0;
            showText("No profit, No loss.");
            showHint("Actually, you lost money on transaction fees, TTS, etc. ");
        } else if (priceAtWhichSold < priceAtWhichBought) {
            flag = -1;
            console.log(flag);
            profitnloss = priceAtWhichBought - priceAtWhichSold;
            totalPnL = profitnloss * quantityOfStock;
            pnlPerc = profitnloss * 100 / priceAtWhichBought;
            showText("Ohhoo..! Loss: Rs." + roundNumber(totalPnL) + ", and your Loss% is: " + roundNumber(pnlPerc) + "%.");
            hideHint();
        } else {
            flag = 1;
            console.log(flag);
            profitnloss = priceAtWhichSold - priceAtWhichBought;
            totalPnL = profitnloss * quantityOfStock;
            pnlPerc = profitnloss * 100 / priceAtWhichBought;
            showText("Congrats! Profit: Rs." + roundNumber(totalPnL) + ", and your Profit% is: " + roundNumber(pnlPerc) + "%.");
            hideHint();
        }
    }else{
        showText("Quantity of Stocks should be greater than 0.");
    }
}

btnProfitnLoss.addEventListener('click', clickHandler);