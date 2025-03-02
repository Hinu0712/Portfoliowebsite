// Projects button functionality
document.getElementById("projects-btn").addEventListener("click", function() {
  document.getElementById("projects-section").style.display = "block";
  document.getElementById("about-me-section").style.display = "none"; // Optional: Hide the other section
});

// Explore About Me button functionality
document.getElementById("explore-about-me-btn").addEventListener("click", function() {
  document.getElementById("about-me-section").style.display = "block";
  document.getElementById("projects-section").style.display = "none"; // Optional: Hide the other section
});
