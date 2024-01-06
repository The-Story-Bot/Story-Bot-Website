document.addEventListener('DOMContentLoaded', function() {
    initRotatingWheel();

    const generateNumberBtn = document.getElementById("generate-number-btn");
    const randomNumberContainer = document.getElementById("random-number-container");
    const tweetDialog = document.getElementById("tweetDialog");

    generateNumberBtn.addEventListener("click", () => {
        // Hide the Button of Fate
        generateNumberBtn.style.display = "none";

        const randomNum = Math.floor(Math.random() * 10000000) + 1;
        randomNumberContainer.innerHTML = '';

        randomNum.toString().split('').forEach((digit) => {
            const digitBox = document.createElement('span');
            digitBox.classList.add('digit-box');
            digitBox.textContent = digit;
            randomNumberContainer.appendChild(digitBox);
        });

        randomNumberContainer.querySelectorAll('.digit-box').forEach((digitBox) => {
            digitBox.style.color = "#7c1eff";
            // Pop up animation
            digitBox.style.animation = "pop-up 1s ease-in-out forwards";
        });

        // Create and configure the Twitter share button
        tweetDialog.innerHTML = `
            <div style=" text-align: center;">
                <p style="font-weight: bold; color: Red; margin: 0;">Please Share your number on X to qualify</p>
            </div>
            <div style="margin-top: 10px;"></div>
            <button id="shareOnTwitterBtn" class="btn btn-primary">Share on X</button>
        `;

        const shareOnTwitterBtn = document.getElementById("shareOnTwitterBtn");
        shareOnTwitterBtn.style.display = "block";
        shareOnTwitterBtn.style.margin = "0 auto";

        shareOnTwitterBtn.addEventListener("click", () => {
            const tweetText = encodeURIComponent(`My number for @StoryBotDiscord free lottery is ${randomNum} \n\n You can play to at https://storybot.pro/lottery `);
            const tweetURL = `https://twitter.com/intent/tweet?text=${tweetText}`;
            window.open(tweetURL, '_blank');
        });
    });
});

function initRotatingWheel() {
    const wheel = document.querySelector('.wheel-list');
    const items = wheel.querySelectorAll('li');
    const angleStep = 360 / items.length;
    let currentAngle = 0;

    items.forEach((item, index) => {
        const angle = angleStep * index;
        item.style.transform = `rotateX(${angle}deg) translateZ(150px)`;
    });

    wheel.addEventListener('wheel', function(event) {
        event.preventDefault();
        currentAngle += event.deltaY; // Adjust rotation sensitivity if needed
        wheel.style.transform = `rotateX(${currentAngle}deg)`;
    });
}

