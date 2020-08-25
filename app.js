(function () {
  const grid = document.querySelector("#grid");
  const gridCells = document.querySelectorAll(".grid__cell");
  const performanceScoreDisplay = document.querySelector("#performance-score");
  const potentialScoreDisplay = document.querySelector("#potential-score");
  const loader = document.querySelector(".loader");

  let performanceScore = 0;
  let potentialScore = 0;

  gridCells.forEach((cell) => {
    cell.addEventListener("click", () => {
      const selectedGridCell = document.querySelector(".grid__cell--selected");

      if (selectedGridCell) {
        selectedGridCell.classList.remove("grid__cell--selected");
      }

      if (cell !== selectedGridCell) {
        performanceScore = cell.dataset.performance;
        potentialScore = cell.dataset.potential;
        cell.classList.add("grid__cell--selected");
      } else {
        performanceScore = 0;
        potentialScore = 0;
      }

      performanceScoreDisplay.innerText = performanceScore;
      potentialScoreDisplay.innerText = potentialScore;

      const data = {
        performance: performanceScore,
        potential: potentialScore,
      };

      // Pretend http request
      grid.classList.add("grid--saving");
      loader.classList.add("loader--show");

      setTimeout(() => {
        grid.classList.remove("grid--saving");
        loader.classList.remove("loader--show");
      }, 500);
    });
  });
})();
