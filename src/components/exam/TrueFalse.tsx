import React, { useState } from 'react';
import { ToggleLeft, ToggleRight, CheckCircle, XCircle } from 'lucide-react';

interface TrueFalseQuestion {
  id: number;
  statement: string;
  correctAnswer: boolean;
  explanation: string;
}

const questions: TrueFalseQuestion[] = [
  {
    id: 1,
    statement: "A key usability guideline is to always favor recall over recognition, as this makes the user feel more skilled.",
    correctAnswer: false,
    explanation: "False. Recognition is generally preferred over recall because it reduces cognitive load. Users find it easier to recognize options than to remember them from memory."
  },
  {
    id: 2,
    statement: "In Norman's model, a \"mistake\" occurs when a user has the right intention but performs the physical action incorrectly.",
    correctAnswer: false,
    explanation: "False. This describes a 'slip'. A mistake occurs when the user has the wrong intention or mental model, leading to an incorrect goal."
  },
  {
    id: 3,
    statement: "The cones in the human eye are highly sensitive to low light levels and are responsible for peripheral vision.",
    correctAnswer: false,
    explanation: "False. Rods are sensitive to low light and handle peripheral vision. Cones are responsible for color vision and work best in bright light, concentrated in the fovea."
  },
  {
    id: 4,
    statement: "The QWERTY keyboard layout was scientifically designed to be the most efficient possible layout for modern touch-typing.",
    correctAnswer: false,
    explanation: "False. QWERTY was designed to prevent mechanical typewriter jams by separating frequently used letter pairs, not for typing efficiency."
  },
  {
    id: 5,
    statement: "A \"modal\" dialog box allows the user to continue interacting with the main application window behind it.",
    correctAnswer: false,
    explanation: "False. A modal dialog prevents interaction with the main application until the dialog is dismissed. A modeless dialog allows continued interaction."
  },
  {
    id: 6,
    statement: "The Abowd and Beale framework views problems in interaction as fundamental problems in translation between different \"languages.\"",
    correctAnswer: true,
    explanation: "True. The framework identifies four translation steps between user and system languages: articulation, performance, presentation, and observation."
  },
  {
    id: 7,
    statement: "According to Fitts's Law, the corners and edges of a screen are considered extremely fast targets to acquire with a mouse.",
    correctAnswer: true,
    explanation: "True. Screen edges and corners act as 'infinite' targets because the cursor stops at the screen boundary, making them very fast to acquire."
  },
  {
    id: 8,
    statement: "Positive emotions, such as being relaxed, can narrow a user's thinking and make them less creative at problem-solving.",
    correctAnswer: false,
    explanation: "False. Positive emotions typically broaden thinking and enhance creativity. Negative emotions tend to narrow focus and reduce creative problem-solving."
  },
  {
    id: 9,
    statement: "In a computer, Long-Term Memory (like an SSD) is faster to access but has a smaller capacity than Short-Term Memory (RAM).",
    correctAnswer: false,
    explanation: "False. RAM (short-term) is much faster to access than SSD (long-term storage), but SSDs typically have much larger capacity than RAM."
  },
  {
    id: 10,
    statement: "The concept of \"Look and Feel\" refers only to the visual appearance of an interface, not its behavior.",
    correctAnswer: false,
    explanation: "False. 'Look and Feel' encompasses both visual appearance (look) and interaction behavior (feel), including how the interface responds to user actions."
  }
];

export function TrueFalse() {
  const [answers, setAnswers] = useState<{ [key: number]: boolean }>({});
  const [showAnswers, setShowAnswers] = useState<{ [key: number]: boolean }>({});

  const handleAnswer = (questionId: number, answer: boolean) => {
    setAnswers(prev => ({
      ...prev,
      [questionId]: answer
    }));
  };

  const handleShowAnswer = (questionId: number) => {
    setShowAnswers(prev => ({
      ...prev,
      [questionId]: true
    }));
  };

  const getAnswerStatus = (questionId: number) => {
    const userAnswer = answers[questionId];
    const correctAnswer = questions.find(q => q.id === questionId)?.correctAnswer;
    const showAnswer = showAnswers[questionId];

    if (!showAnswer || userAnswer === undefined) return null;
    return userAnswer === correctAnswer ? 'correct' : 'incorrect';
  };

  return (
    <section id="true-false" className="bg-white rounded-2xl shadow-xl p-8 border border-green-100">
      <div className="flex items-center gap-4 mb-8">
        <div className="bg-green-100 p-3 rounded-full">
          <ToggleRight className="w-6 h-6 text-green-600" />
        </div>
        <div>
          <h2 className="text-3xl font-bold text-gray-900">Part III: True / False</h2>
          <p className="text-gray-600 mt-1">10 Questions, 1 point each - 10 total points</p>
        </div>
      </div>

      <div className="bg-green-50 border-l-4 border-green-500 p-4 mb-8 rounded-r-lg">
        <p className="text-green-800 font-medium">
          <strong>Instructions:</strong> Mark whether the following statements are True or False.
        </p>
      </div>

      <div className="space-y-6">
        {questions.map((question, index) => {
          const status = getAnswerStatus(question.id);
          const userAnswer = answers[question.id];
          const showAnswer = showAnswers[question.id];

          return (
            <div
              key={question.id}
              className={`border-2 rounded-lg p-6 transition-all ${
                status === 'correct' 
                  ? 'border-green-500 bg-green-50'
                  : status === 'incorrect'
                  ? 'border-red-500 bg-red-50'
                  : 'border-gray-200 hover:shadow-md'
              }`}
            >
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-8 h-8 bg-green-100 rounded-full flex items-center justify-center text-green-600 font-semibold">
                  {index + 1}
                </div>
                <div className="flex-1">
                  <p className="text-gray-900 mb-4 leading-relaxed">{question.statement}</p>
                  
                  <div className="flex items-center gap-4 mb-4">
                    <button
                      onClick={() => handleAnswer(question.id, true)}
                      disabled={showAnswer}
                      className={`flex items-center gap-2 px-4 py-2 rounded-lg border-2 transition-all ${
                        showAnswer
                          ? question.correctAnswer
                            ? 'border-green-500 bg-green-100 text-green-800'
                            : userAnswer === true
                            ? 'border-red-500 bg-red-100 text-red-800'
                            : 'border-gray-300 bg-gray-100 text-gray-600'
                          : userAnswer === true
                          ? 'border-green-500 bg-green-100 text-green-800'
                          : 'border-gray-300 hover:border-green-400 hover:bg-green-50'
                      } ${showAnswer ? 'cursor-not-allowed' : 'cursor-pointer'}`}
                    >
                      {userAnswer === true ? <ToggleRight className="w-5 h-5" /> : <ToggleLeft className="w-5 h-5" />}
                      <span className="font-medium">True</span>
                      {showAnswer && question.correctAnswer && <CheckCircle className="w-4 h-4 text-green-600" />}
                      {showAnswer && !question.correctAnswer && userAnswer === true && <XCircle className="w-4 h-4 text-red-600" />}
                    </button>

                    <button
                      onClick={() => handleAnswer(question.id, false)}
                      disabled={showAnswer}
                      className={`flex items-center gap-2 px-4 py-2 rounded-lg border-2 transition-all ${
                        showAnswer
                          ? !question.correctAnswer
                            ? 'border-green-500 bg-green-100 text-green-800'
                            : userAnswer === false
                            ? 'border-red-500 bg-red-100 text-red-800'
                            : 'border-gray-300 bg-gray-100 text-gray-600'
                          : userAnswer === false
                          ? 'border-red-500 bg-red-100 text-red-800'
                          : 'border-gray-300 hover:border-red-400 hover:bg-red-50'
                      } ${showAnswer ? 'cursor-not-allowed' : 'cursor-pointer'}`}
                    >
                      {userAnswer === false ? <ToggleRight className="w-5 h-5" /> : <ToggleLeft className="w-5 h-5" />}
                      <span className="font-medium">False</span>
                      {showAnswer && !question.correctAnswer && <CheckCircle className="w-4 h-4 text-green-600" />}
                      {showAnswer && question.correctAnswer && userAnswer === false && <XCircle className="w-4 h-4 text-red-600" />}
                    </button>
                  </div>

                  {!showAnswer && userAnswer !== undefined && (
                    <button
                      onClick={() => handleShowAnswer(question.id)}
                      className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
                    >
                      Show Answer
                    </button>
                  )}

                  {showAnswer && (
                    <div className="mt-4 p-4 bg-gray-50 rounded-lg border-l-4 border-green-500">
                      <p className="text-sm text-gray-700">
                        <strong>Explanation:</strong> {question.explanation}
                      </p>
                    </div>
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
