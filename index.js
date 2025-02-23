document.addEventListener("DOMContentLoaded", function() {
  // 轮播功能
  const slides = document.querySelectorAll('.slide');
  let currentSlide = 0;
  
  function showSlide(index) {
    slides.forEach((slide, i) => {
      slide.classList.toggle('active', i === index);
    });
  }

  function nextSlide() {
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
  }

  // 容器尺寸控制
  function resizeSlideshow() {
    const container = document.querySelector('.slideshow-container');
    const aspectRatio = 16 / 9; // 可修改这个比例值（宽/高）
    const newHeight = container.offsetWidth / aspectRatio;
    container.style.height = `${newHeight}px`;
    
    // 同步更新所有slide高度
    document.querySelectorAll('.slide').forEach(slide => {
      slide.style.height = `${newHeight}px`;
    });
  }

  // 初始化设置
  function init() {
    // 启动轮播
    setInterval(nextSlide, 3000);
    showSlide(currentSlide);
    
    // 首次设置尺寸
    resizeSlideshow();
    
    // 监听窗口变化
    window.addEventListener('resize', resizeSlideshow);
    
    // 强制图片加载后刷新
    window.addEventListener('load', resizeSlideshow);
  }

  init();

  // DEBUG: 在控制台输出尺寸信息（正式使用可删除）
  console.log('Slideshow initialized with:', {
    slideCount: slides.length,
    aspectRatio: '16:9',
    resizeHandler: resizeSlideshow
  });
});
