// // Get the elements
// const container = document.getElementById('bounce-container');
// const rope1 = document.getElementById('rope1');
// const rope2 = document.getElementById('rope2');

// // Function to handle scroll event
// function handleScroll() {
//     // Check if the top of the container is in view
//     const rect = container.getBoundingClientRect();
//     const isTopInView = rect.top >= 0 && rect.top <= window.innerHeight;

//     // If the top of the container is in view, add the bouncing class to the container and ropes
//     if (isTopInView) {
//         container.classList.add('bouncing');
//         rope1.classList.add('bouncing');
//         rope2.classList.add('bouncing');
//     } else {
//         // If not in view, remove the bouncing class
//         container.classList.remove('bouncing');
//         rope1.classList.remove('bouncing');
//         rope2.classList.remove('bouncing');
//     }
// }

// // Add scroll event listener
// window.addEventListener('scroll', handleScroll);
