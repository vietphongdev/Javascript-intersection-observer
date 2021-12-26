const cards = document.querySelectorAll(".card");

const observer = new IntersectionObserver(
  (entries) => {
    console.log(entries);
    entries.forEach((entry) => {
      entry.target.classList.toggle("show", entry.isIntersecting);
      if (entry.isIntersecting) observer.unobserve(entry.target);
    });
  },
  {
    rootMargin: "-100px",
    threshold: 1,
  }
);

// observer.observe(cards[0]);

cards.forEach((card) => {
  observer.observe(card);
});

