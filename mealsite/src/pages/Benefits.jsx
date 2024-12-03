import React, { useEffect, useState } from "react";
import "./Benefits.css";

const Benefits = () => {
  useEffect(() => {
    const handleScroll = () => {
      const flowerContainer = document.querySelector(
        ".flower-effect-container"
      );
      if (flowerContainer) {
        const rect = flowerContainer.getBoundingClientRect();
        const isInViewport = rect.top >= 0 && rect.top <= window.innerHeight;

        // Add or remove the class based on visibility in the viewport
        if (isInViewport) {
          flowerContainer.classList.add("blossom");
        } else {
          flowerContainer.classList.remove("blossom");
        }
      }
    };

    // Attach the scroll event listener
    window.addEventListener("scroll", handleScroll);

    // Cleanup function to remove the listener
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const [showQuiz, setShowQuiz] = useState(false);
  const [quizAnswers, setQuizAnswers] = useState({});
  const [quizSubmitted, setQuizSubmitted] = useState(false);
  const [score, setScore] = useState(0);

  const quizQuestions = [
    {
      question: "Which nutrient is known as the body's main energy source?",
      options: ["Carbohydrates", "Proteins", "Fats", "Vitamins"],
      correctAnswer: "Carbohydrates",
    },
    {
      question: "Which vitamin is essential for healthy bones?",
      options: ["Vitamin A", "Vitamin C", "Vitamin D", "Vitamin E"],
      correctAnswer: "Vitamin D",
    },
    {
      question: "What is a good source of Omega-3 fatty acids?",
      options: ["Fruits", "Fish", "Dairy", "Meat"],
      correctAnswer: "Fish",
    },
    {
      question: "Which of the following is high in dietary fiber?",
      options: ["Whole grains", "Meat", "Milk", "Cheese"],
      correctAnswer: "Whole grains",
    },
    {
      question: "What is the primary benefit of antioxidants?",
      options: [
        "Building muscles",
        "Reducing inflammation",
        "Boosting immunity",
        "Protecting cells from damage",
      ],
      correctAnswer: "Protecting cells from damage",
    },
    {
      question: "Which of these foods is a probiotic?",
      options: ["Yogurt", "Apples", "Eggs", "Potatoes"],
      correctAnswer: "Yogurt",
    },
  ];

  const handleQuizToggle = () => setShowQuiz(!showQuiz);

  const handleOptionChange = (questionIndex, answer) => {
    setQuizAnswers({ ...quizAnswers, [questionIndex]: answer });
  };

  const handleQuizSubmit = () => {
    let calculatedScore = 0;
    quizQuestions.forEach((q, index) => {
      if (quizAnswers[index] === q.correctAnswer) {
        calculatedScore += 1;
      }
    });
    setScore(calculatedScore);
    setQuizSubmitted(true);
  };

  const handleQuizReset = () => {
    setQuizAnswers({});
    setQuizSubmitted(false);
    setScore(0);
    // Optionally shuffle questions
    quizQuestions.sort(() => Math.random() - 0.5);
  };

  return (
    <div>
      <header className="hero-sectionw">
        <h1>The Benefits of Healthy Eating</h1>
        <p>
          Discover how maintaining a nutritious diet can transform your
          lifestyle, boost energy, and promote overall well-being.
        </p>
      </header>

      {/* Flower Effect Section */}
      <div className="flower-effect-container">
        <div className="image-container">
          <img
            src="https://images.unsplash.com/photo-1494390248081-4e521a5940db?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YmVuZWZpdHMlMjBvZiUyMGhlYWx0aHklMjBsaXZpbmd8ZW58MHx8MHx8fDA%3D"
            alt="Healthy Meal 1"
            className="flower-image image-left"
          />
          <img
            src="https://images.unsplash.com/reserve/EnF7DhHROS8OMEp2pCkx_Dufer%20food%20overhead%20hig%20res.jpg?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGNvb2tpbmd8ZW58MHx8MHx8fDA%3D"
            alt="Healthy Meal 2"
            className="flower-image image-center"
          />
          <img
            src="https://images.unsplash.com/photo-1490474418585-ba9bad8fd0ea?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGJlbmVmaXRzJTIwb2YlMjBoZWFsdGh5JTIwbGl2aW5nfGVufDB8fDB8fHww"
            alt="Healthy Meal 3"
            className="flower-image image-right"
          />
        </div>
      </div>
      <section className="benefits-section">
        <div className="benefits-row">
          <div className="benefits-column">
            <div className="benefit-card">
              <img id="picture"
                src="https://plus.unsplash.com/premium_photo-1726217054462-a2d171ec3d7f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8ZW5lcmd5JTIwYm9vc3QlMjBmb3IlMjBmb29kfGVufDB8fDB8fHww"
                alt="Healthy food for energy"
              />
              <p>
                Balanced meals, rich in complex carbohydrates and healthy
                proteins, fuel your body throughout the day. This leads to
                sustained energy levels, preventing those mid-afternoon slumps.
              </p>
              <p>
                <strong>Quick Tip:</strong> Start your day with a protein-packed
                breakfast to kickstart your energy and metabolism.
              </p>
            </div>
            <div className="benefit-card">
              <img id="picture"
                src="https://media.istockphoto.com/id/2161469344/photo/healthy-eating-concept-with-fresh-vegetables.webp?a=1&b=1&s=612x612&w=0&k=20&c=CGIQLLPaV-rNZ7yOoxz4uFw2egnpuSaPiS2t3r1aU5A="
                alt="Brain food for focus"
              />
              <p>
                Nutrition plays a significant role in brain function. Foods rich
                in Omega-3 fatty acids, antioxidants, and whole grains help
                support cognitive function and improve focus.
              </p>
              <p>
                <strong>Try This:</strong> Include a handful of nuts and berries
                in your snack to boost concentration and productivity.
              </p>
            </div>
          </div>
          <div className="benefits-column">
            <div className="benefit-card">
              <img  id="picture"
                src="https://media.istockphoto.com/id/1220197672/photo/immunity-boosters-food.webp?a=1&b=1&s=612x612&w=0&k=20&c=Q82DhQRUqJztrk427q5lJO1IhwQjpKD4er1yk_q-N5M="
                alt="Immune system boost"
              />
              <p>
                Eating a diet rich in vitamins, minerals, and antioxidants helps
                protect your body from illnesses and supports a strong immune
                system.
              </p>
              <p>
                <strong>Did You Know?</strong> Citrus fruits, leafy greens, and
                fermented foods can enhance your immune response.
              </p>
            </div>
            <div className="benefit-card">
              <img id="picture"
                src="https://media.istockphoto.com/id/519653848/photo/stomach-eat-green-healthy-food.webp?a=1&b=1&s=612x612&w=0&k=20&c=mH1tq59yP-MeMvrRWtjW46iKwwgLV3hJG0FmeZDXLcY="
                alt="Healthy digestion"
              />
              <p>
                Fiber-rich foods help promote a healthy digestive system. Eating
                plenty of fruits, vegetables, and whole grains can help prevent
                constipation and improve gut health.
              </p>
              <p>
                <strong>Pro Tip:</strong> Stay hydrated and incorporate
                probiotic-rich foods like yogurt for optimal digestion.
              </p>
            </div>
          </div>
        </div>
      </section>
      <div className="benefits-quiz-container">
        <section className="quiz-section">
          <div className="quiz-card">
            <h2>Test Your Knowledge</h2>
            <p>
              Think you know all about nutrition and health benefits? Take this
              quick quiz to test your understanding!
            </p>
            <button className="quiz-button" onClick={handleQuizToggle}>
              {showQuiz ? "Close Quiz" : "Start Quiz"}
            </button>
            {showQuiz && (
              <form className="quiz-form" onSubmit={(e) => e.preventDefault()}>
                {quizQuestions.map((q, index) => (
                  <div key={index} className="quiz-question">
                    <p>{q.question}</p>
                    {q.options.map((option, i) => (
                      <label key={i}>
                        <input
                          type="radio"
                          name={`question-${index}`}
                          value={option}
                          onChange={() => handleOptionChange(index, option)}
                          disabled={quizSubmitted}
                        />
                        {option}
                      </label>
                    ))}
                  </div>
                ))}
                {!quizSubmitted && (
                  <button
                    type="button"
                    className="quiz-submit-button"
                    onClick={handleQuizSubmit}
                  >
                    Submit Quiz
                  </button>
                )}
                {quizSubmitted && (
                  <div className="quiz-results">
                    <p>
                      Your Score: {score} / {quizQuestions.length}
                    </p>
                    {quizQuestions.map((q, index) => (
                      <p key={index}>
                        {q.question} -{" "}
                        {quizAnswers[index] === q.correctAnswer
                          ? "Correct"
                          : "Incorrect"}
                      </p>
                    ))}
                    <button
                      type="button"
                      className="quiz-reset-button"
                      onClick={handleQuizReset}
                    >
                      Reset Quiz
                    </button>
                  </div>
                )}
              </form>
            )}
          </div>
        </section>
      </div>
    </div>
  );
};

export default Benefits;
