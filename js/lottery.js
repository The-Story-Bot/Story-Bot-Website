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

    // Glowing animation
    setTimeout(() => {
      digitBox.style.animation = "glow 2s ease-in-out infinite";
    }, 1000);
  });

  // Create and configure the Twitter share button
  tweetDialog.innerHTML = `
    <div style=" text-align: center;">
      <p style="font-weight: bold; color: Red; margin: 0;">Please Share your number on X to qualify</p>
    </div>
    <div style="margin-top: 10px;"></div>
    <button id="shareOnTwitterBtn" class="btn btn-primary">Share on X</button>
  `;

  // Center the "Share on Twitter" button
  const shareOnTwitterBtn = document.getElementById("shareOnTwitterBtn");
  shareOnTwitterBtn.style.display = "block";
  shareOnTwitterBtn.style.margin = "0 auto";

  shareOnTwitterBtn.addEventListener("click", () => {
    const tweetText = encodeURIComponent(`Played Story Bot Lottery  #Free for a chance at  a #NFT. \n\n Check them out at https://storybot.pro or on X @StoryBotDiscord \n\n #MYNUMSB ${randomNum} `);
    const tweetURL = `https://twitter.com/intent/tweet?text=${tweetText}`;
    window.open(tweetURL, '_blank');
  });
});