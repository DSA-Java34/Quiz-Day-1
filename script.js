window.onload = function () {
  document.getElementById("quiz-title").innerText = quizData.title;
  document.title = quizData.title;

  const container = document.getElementById("quiz-container");

  quizData.questions.forEach((q, i) => {
    const div = document.createElement("div");
    
    div.innerHTML = `<p>${i + 1}. ${q.question}</p>` +
      q.options.map((opt, j) =>
        `<label><input type="radio" name="q${i}" value="${j}" /> ${opt}</label><br/>`
      ).join("");
    container.appendChild(div);
  });
};


 let btn = document.getElementsByTagName("button");
   btn[0].addEventListener("click",() =>{
     btn[0].disabled = true;
      btn[0].style.backgroundColor = "red";
     console.log(btn[0])
   });








function submitQuiz() {
  let score = 0;
  quizData.questions.forEach((q, i) => {
    const selected = document.querySelector(`input[name="q${i}"]:checked`);
    
    // Highlight all options first (optional, for reset or visual clarity)
    const allOptions = document.querySelectorAll(`input[name="q${i}"]`);
    allOptions.forEach(opt => {
      opt.parentElement.style.color = ""; // reset any old color
    });

    if (selected) {
      const selectedValue = parseInt(selected.value);
      const ansLabel = selected.parentElement;

      if (selectedValue === q.answer) {
        ansLabel.style.color = "green"; // correct answer
        score++;
      } else {
        ansLabel.style.color = "red"; // wrong answer

        // Optionally also mark the correct one
        const correctOption = document.querySelector(
          `input[name="q${i}"][value="${q.answer}"]`
        );
        if (correctOption) {
          correctOption.parentElement.style.color = "green"; // show correct one too
        }
      }
    }
  });

  // Optional: Show score
  alert(`Your score: ${score} / ${quizData.questions.length}`);
  const result = document.getElementById("result");
  result.innerText = `You got ${score} out of ${quizData.questions.length} correct!`;
}