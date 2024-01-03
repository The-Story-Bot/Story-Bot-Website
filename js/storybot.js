document.addEventListener('DOMContentLoaded', function() {
    initRotatingWheel();
    initChatBubbles();


function initChatBubbles() {
    const chatBubbles = document.querySelectorAll('#bot-chat .chat-bubble');
    chatBubbles.forEach(bubble => bubble.style.display = 'none'); // Hide all bubbles initially
    showChatBubble(0);
}

function showChatBubble(index) {
    const chatBubbles = document.querySelectorAll('#bot-chat .chat-bubble');
    const botIconContainer = document.querySelector('.round-frame');

    if (index < chatBubbles.length) {
        chatBubbles[index].style.display = 'block';
        setTimeout(() => showChatBubble(index + 1), 6500); // Adjust the time as needed
    } else {
        botIconContainer.classList.add('disappear-animation');
        setTimeout(() => { botIconContainer.style.display = 'none'; }, 2000); // Match the animation duration
    }
}

  // Function to initialize the rotating wheel effect for a list
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

  function showChatBubble(index) {
    const chatBubbles = document.querySelectorAll('#bot-chat .chat-bubble');
    const botIcon = document.querySelector('.round-frame');

    if (index < chatBubbles.length) {
        chatBubbles.forEach(bubble => bubble.style.display = 'none');
        chatBubbles[index].style.display = 'block';
        setTimeout(() => showChatBubble(index + 1), 5000); // Time each message is displayed
    } else {
        botIcon.classList.add('disappear-animation'); // Start animation immediately after last message
    }
}

document.addEventListener('DOMContentLoaded', () => showChatBubble(0));







// Hide all chat bubbles on initial load
document.addEventListener('DOMContentLoaded', () => {
    const chatBubbles = document.querySelectorAll('#bot-chat .chat-bubble');
    chatBubbles.forEach(bubble => bubble.style.display = 'none');
    showChatBubble(0);
});



document.addEventListener('DOMContentLoaded', () => showChatBubble(0));


document.addEventListener('DOMContentLoaded', () => showChatBubble(0));


document.addEventListener('DOMContentLoaded', () => showChatBubble(0));





  // Initialize the rotating wheel
  initRotatingWheel();

  // Start showing chat bubbles on page load
  showChatBubble(0);

  // Close the bot intro after a delay
  closeBotIntro(20000); // Adjust delay as needed
});








  