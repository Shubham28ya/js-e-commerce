document.addEventListener('DOMContentLoaded', () => {
    const slider = document.querySelector('.slider');
    const prevBtn = document.querySelector('.prev-btn');
    const nextBtn = document.querySelector('.next-btn');
    const carouselproduct = [
      { category: "Electronics ", image: "img/ele.jpg" },
      { category: "Men`s Clothing ", image: "img/mens.jpg" },
      { category: "Women`s Clothing ", image: "img/women.jpg" },
      { category: "Jwellary ", image: "img/jwellry.jpg" },
      
    ];
    let currentIndex = 0;
    const numSlides = 4; 
    // Function to create slides
    const createSlides = () => {
      let slidesHTML = '';
      for (let i = currentIndex; i < currentIndex + numSlides; i++) {
        const Product = carouselproduct[i % carouselproduct.length]; // Wrap around for infinite loop
        slidesHTML += `
          <div class="slide">
          <img src="${Product.image}" alt="${Product.category}">
          <h2>${Product.category}</h2>
          </div>
        `;
      }
      slider.innerHTML = slidesHTML;
    };
  
    // Initial slide creation
    createSlides();
  
    // Next button functionality
    nextBtn.addEventListener('click', () => {
      currentIndex = (currentIndex + 1) % products.length;
      createSlides();
    });
  
    // Previous button functionality
    prevBtn.addEventListener('click', () => {
      currentIndex = (currentIndex - 1 + products.length) % products.length;
      createSlides();
    });
  
    // Automatically slide every few seconds (optional)
    setInterval(() => {
      currentIndex = (currentIndex + 1) % products.length;
      createSlides();
    }, 5000); // Change slide every 5 seconds (adjust as needed)
  });
  