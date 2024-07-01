const events = ["scroll", "resize", "mouseover", "mouseleave", "blur", "focus"],
      containerBSWidth = document.querySelector(".bs-flag-width")

events.forEach(eventName => {
  window.addEventListener(eventName, refreshFlag)
})

refreshFlag()

function refreshFlag() {
  const width = window.innerWidth + "px"
  containerBSWidth.textContent = width
}





const sliderElement = document.querySelector('#slider')

const carousel = new bootstrap.Carousel(sliderElement, {
  interval: 2000,
  touch: true
})
