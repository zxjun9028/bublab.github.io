@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;600;700&display=swap');

:root {
  --blue: #007BFF;
  --orange: #FFA500;
  --light-bg: #E6F0FF;
  --white: #ffffff;
  --dark-text: #222;
}

* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  font-family: 'Poppins', sans-serif;
}

html, body {
  height: 100%;
  overflow: hidden;
  background: linear-gradient(135deg, var(--light-bg), #ffffff);
  color: var(--dark-text);
  display: flex;
  align-items: center;
  justify-content: center;
}

.container {
  width: 100%;
  max-width: 1200px;
  height: 90vh;
  background: rgba(255, 255, 255, 0.9);
  backdrop-filter: blur(4px);
  border-radius: 20px;
  box-shadow: 0 8px 30px rgba(0, 0, 0, 0.15);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 30px;
}

header {
  display: flex;
  align-items: center;
  font-size: 2.4rem;
  font-weight: 700;
  color: var(--blue);
  gap: 10px;
}

.logo span.heart {
  font-size: 2rem;
  color: var(--orange);
}

main {
  display: flex;
  flex-direction: column;
  gap: 30px;
  flex: 1;
  overflow: hidden;
}

@media (min-width: 768px) {
  main {
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
  }
}

.left {
  max-width: 500px;
}

h1 {
  font-size: 2.2rem;
  margin-bottom: 15px;
  color: var(--blue);
}

p.description {
  font-size: 1rem;
  line-height: 1.6;
  margin-bottom: 20px;
  color: #555;
}

.buttons {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.btn {
  background: var(--orange);
  border: none;
  color: var(--white);
  padding: 12px 24px;
  font-size: 1rem;
  font-weight: 600;
  border-radius: 8px;
  cursor: pointer;
  text-decoration: none;
  text-align: center;
  transition: transform 0.2s ease, opacity 0.2s ease;
}

.btn:hover {
  opacity: 0.9;
  transform: translateY(-2px);
}

.carousel-wrapper {
  position: relative;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.carousel {
  display: flex;
  gap: 15px;
  scroll-snap-type: x mandatory;
  overflow-x: auto;
  -webkit-overflow-scrolling: touch;
  padding: 10px 0;
  scrollbar-width: none;
  -ms-overflow-style: none;
}

.carousel::-webkit-scrollbar {
  display: none;
}

.carousel img {
  flex-shrink: 0;
  width: 100%;
  max-width: 260px;
  border-radius: 12px;
  scroll-snap-align: start;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.25);
  transition: transform 0.3s ease;
}

.carousel img:hover {
  transform: scale(1.05);
}

.carousel-btn {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background: rgba(0, 0, 0, 0.2);
  color: white;
  border: none;
  border-radius: 50%;
  width: 44px;
  height: 44px;
  font-size: 24px;
  cursor: pointer;
  opacity: 0;
  transition: opacity 0.3s ease;
  z-index: 10;
  pointer-events: none;
}

.carousel-wrapper:hover .carousel-btn {
  opacity: 1;
  pointer-events: auto;
}

.carousel-btn.left {
  left: -10px;
}

.carousel-btn.right {
  right: -10px;
}

footer {
  font-size: 0.85rem;
  text-align: center;
  padding-top: 10px;
  color: #666;
}
