import React, { useState } from 'react';
import { CheckCircle, XCircle, HelpCircle } from 'lucide-react';

interface Question {
  id: number;
  question: string;
  options: string[];
  correctAnswer: number;
  explanation?: string;
}

const questions: Question[] = [
  {
    id: 1,
    question: "A designer creates a mobile banking app where the \"Transfer Money\" button is very large and placed at the bottom of the screen, close to where the user's thumb naturally rests. This design choice most directly and effectively applies the principles derived from:",
    options: [
      "The 7±2 Rule of Short-Term Memory",
      "Fitts's Law",
      "The Gestalt principle of closure",
      "Moore's Law"
    ],
    correctAnswer: 1,
    explanation: "Fitts's Law states that the time to acquire a target is a function of the distance to and size of the target. A large button close to the thumb reduces both distance and increases target size."
  },
  {
    id: 2,
    question: "A user intends to save their document but accidentally clicks the \"Close\" button, which is located right next to the \"Save\" icon. The system immediately closes the document without saving. Using Norman's terminology for errors, this event is best classified as:",
    options: [
      "A mistake, caused by a flawed mental model of the interface.",
      "An evaluation error, because the system's feedback was poor.",
      "A slip, because the user had the correct intention but failed to execute it correctly.",
      "A gulf of execution, because the system's actions did not match the user's goal."
    ],
    correctAnswer: 2,
    explanation: "This is a slip because the user had the correct intention (to save) but performed the wrong physical action (clicked close instead of save)."
  },
  {
    id: 3,
    question: "The ability of the human auditory system to focus on a single conversation in a noisy room is a powerful analogy for how users can handle information. This phenomenon is known as:",
    options: [
      "The Auditory Focus Effect",
      "Haptic Filtering",
      "The Cocktail Party Effect",
      "Echoic Memory Persistence"
    ],
    correctAnswer: 2,
    explanation: "The Cocktail Party Effect describes the ability to focus on a particular stimulus while filtering out others, which is analogous to selective attention in interfaces."
  },
  {
    id: 4,
    question: "A website form requires a user to enter a confirmation code that was displayed on the previous page. The user has to switch back and forth between pages because they can't remember the 10-digit code. This is a classic example of a poor design that fails to account for the limitations of:",
    options: [
      "Long-Term Memory",
      "Sensory Memory (Iconic)",
      "Short-Term (Working) Memory",
      "Episodic Memory"
    ],
    correctAnswer: 2,
    explanation: "Short-term memory has a limited capacity (7±2 items). A 10-digit code exceeds this limit, making it difficult to remember without chunking or external aids."
  },
  {
    id: 5,
    question: "Which of the following scenarios best describes a user experiencing a wide Gulf of Evaluation?",
    options: [
      "A user wants to print a document but cannot find the \"Print\" command anywhere in the application's menus.",
      "A user clicks a \"Submit\" button on a webpage, and the page freezes with no spinner, progress bar, or confirmation message, leaving the user unsure if the action was successful.",
      "A user easily finds and uses a slider to change the screen brightness, and the screen brightness changes immediately and smoothly.",
      "A user must memorize a long and complex series of command-line arguments to perform a simple file copy operation."
    ],
    correctAnswer: 1,
    explanation: "Gulf of Evaluation occurs when users cannot easily determine the system's state. The lack of feedback after clicking submit creates uncertainty about whether the action succeeded."
  }
];

export function MultipleChoice() {
  const [selectedAnswers, setSelectedAnswers] = useState<{ [key: number]: number }>({});
  const [showAnswers, setShowAnswers] = useState<{ [key: number]: boolean }>({});

  const handleAnswerSelect = (questionId: number, answerIndex: number) => {
    setSelectedAnswers(prev => ({
      ...prev,
      [questionId]: answerIndex
    }));
  };

  const handleShowAnswer = (questionId: number) => {
    setShowAnswers(prev => ({
      ...prev,
      [questionId]: true
    }));
  };

  const getAnswerStatus = (questionId: number, answerIndex: number) => {
    const selected = selectedAnswers[questionId];
    const correct = questions.find(q => q.id === questionId)?.correctAnswer;
    const showAnswer = showAnswers[questionId];

    if (!showAnswer) return null;

    if (answerIndex === correct) return 'correct';
    if (answerIndex === selected && answerIndex !== correct) return 'incorrect';
    return null;
  };

  return (
    <section id="multiple-choice" className="bg-white rounded-2xl shadow-xl p-8 border border-indigo-100">
      <div className="flex items-center gap-4 mb-8">
        <div className="bg-indigo-100 p-3 rounded-full">
          <HelpCircle className="w-6 h-6 text-indigo-600" />
        </div>
        <div>
          <h2 className="text-3xl font-bold text-gray-900">Part I: Multiple Choice</h2>
          <p className="text-gray-600 mt-1">25 Questions, 2 points each - 50 total points</p>
        </div>
      </div>

      <div className="bg-blue-50 border-l-4 border-blue-500 p-4 mb-8 rounded-r-lg">
        <p className="text-blue-800 font-medium">
          <strong>Instructions:</strong> Select the one best answer for each of the following questions.
        </p>
      </div>

      <div className="space-y-8">
        {questions.map((question, index) => (
          <div key={question.id} className="border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow">
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-8 h-8 bg-indigo-100 rounded-full flex items-center justify-center text-indigo-600 font-semibold">
                {index + 1}
              </div>
              <div className="flex-1">
                <p className="text-gray-900 mb-4 leading-relaxed">{question.question}</p>
                
                <div className="space-y-3">
                  {question.options.map((option, optionIndex) => {
                    const status = getAnswerStatus(question.id, optionIndex);
                    const isSelected = selectedAnswers[question.id] === optionIndex;
                    
                    return (
                      <button
                        key={optionIndex}
                        onClick={() => handleAnswerSelect(question.id, optionIndex)}
                        disabled={showAnswers[question.id]}
                        className={`w-full text-left p-4 rounded-lg border-2 transition-all duration-200 ${
                          status === 'correct' 
                            ? 'border-green-500 bg-green-50 text-green-800'
                            : status === 'incorrect'
                            ? 'border-red-500 bg-red-50 text-red-800'
                            : isSelected
                            ? 'border-indigo-500 bg-indigo-50 text-indigo-800'
                            : 'border-gray-200 hover:border-indigo-300 hover:bg-indigo-50'
                        } ${showAnswers[question.id] ? 'cursor-not-allowed' : 'cursor-pointer'}`}
                      >
                        <div className="flex items-center gap-3">
                          <span className="flex-shrink-0 w-6 h-6 rounded-full border-2 flex items-center justify-center text-sm font-medium">
                            {String.fromCharCode(97 + optionIndex)}
                          </span>
                          <span className="flex-1">{option}</span>
                          {status === 'correct' && <CheckCircle className="w-5 h-5 text-green-600" />}
                          {status === 'incorrect' && <XCircle className="w-5 h-5 text-red-600" />}
                        </div>
                      </button>
                    );
                  })}
                </div>

                <div className="mt-4 flex gap-3">
                  {!showAnswers[question.id] && selectedAnswers[question.id] !== undefined && (
                    <button
                      onClick={() => handleShowAnswer(question.id)}
                      className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors"
                    >
                      Show Answer
                    </button>
                  )}
                </div>

                {showAnswers[question.id] && question.explanation && (
                  <div className="mt-4 p-4 bg-gray-50 rounded-lg border-l-4 border-indigo-500">
                    <p className="text-sm text-gray-700">
                      <strong>Explanation:</strong> {question.explanation}
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-8 text-center text-gray-500 text-sm">
        Showing 5 of 25 questions for demonstration purposes
      </div>
    </section>
  );
}
