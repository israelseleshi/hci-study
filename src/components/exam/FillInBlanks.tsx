import React, { useState } from 'react';
import { Edit3, CheckCircle, XCircle } from 'lucide-react';

interface FillInBlankQuestion {
  id: number;
  sentence: string;
  correctAnswer: string;
  acceptableAnswers?: string[];
}

const questions: FillInBlankQuestion[] = [
  {
    id: 1,
    sentence: "Human-Computer Interaction is a multidisciplinary field concerned with the design, evaluation, and implementation of interactive computing systems for __________ use.",
    correctAnswer: "human",
    acceptableAnswers: ["human", "humans", "people", "users"]
  },
  {
    id: 2,
    sentence: "The interaction paradigm where computing devices are embedded invisibly into the environment is known as __________ computing.",
    correctAnswer: "ubiquitous",
    acceptableAnswers: ["ubiquitous", "pervasive", "ambient"]
  },
  {
    id: 3,
    sentence: "The property of an object that suggests how it should be used (e.g., a button looks \"pressable\") is called its __________.",
    correctAnswer: "affordance",
    acceptableAnswers: ["affordance", "affordances"]
  },
  {
    id: 4,
    sentence: "Our memory for personal life events, like what we did on our last birthday, is known as __________ memory.",
    correctAnswer: "episodic",
    acceptableAnswers: ["episodic", "autobiographical"]
  },
  {
    id: 5,
    sentence: "A user's high-level desired outcome is their __________, while the specific actions taken to achieve it constitute the task.",
    correctAnswer: "goal",
    acceptableAnswers: ["goal", "objective", "intention"]
  },
  {
    id: 6,
    sentence: "In a form, a set of __________ is used to allow a user to select multiple, non-exclusive options, like pizza toppings.",
    correctAnswer: "check boxes",
    acceptableAnswers: ["check boxes", "checkboxes", "check-boxes", "checkmarks"]
  },
  {
    id: 7,
    sentence: "The gap between the system's feedback and the user's ability to understand it is called the Gulf of __________.",
    correctAnswer: "Evaluation",
    acceptableAnswers: ["evaluation", "Evaluation"]
  },
  {
    id: 8,
    sentence: "A __________ is a common graphical widget, often containing icons, that provides fast access to an application's most frequent commands.",
    correctAnswer: "toolbar",
    acceptableAnswers: ["toolbar", "tool bar", "menu bar", "ribbon"]
  },
  {
    id: 9,
    sentence: "In long-term memory, knowledge of how to do things, like riding a bike, is represented as __________ knowledge.",
    correctAnswer: "procedural",
    acceptableAnswers: ["procedural", "motor", "skill-based"]
  },
  {
    id: 10,
    sentence: "A user's action sequence Tap App -> Tap Photo -> Tap Trash Can is an example of the __________ phase of Norman's cycle.",
    correctAnswer: "execution",
    acceptableAnswers: ["execution", "action", "performance"]
  }
];

export function FillInBlanks() {
  const [answers, setAnswers] = useState<{ [key: number]: string }>({});
  const [showAnswers, setShowAnswers] = useState<{ [key: number]: boolean }>({});

  const handleAnswerChange = (questionId: number, answer: string) => {
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

  const isAnswerCorrect = (questionId: number) => {
    const userAnswer = answers[questionId]?.toLowerCase().trim();
    const question = questions.find(q => q.id === questionId);
    
    if (!question || !userAnswer) return false;
    
    const acceptableAnswers = question.acceptableAnswers || [question.correctAnswer];
    return acceptableAnswers.some(acceptable => 
      acceptable.toLowerCase() === userAnswer
    );
  };

  const getAnswerStatus = (questionId: number) => {
    const showAnswer = showAnswers[questionId];
    const hasAnswer = answers[questionId]?.trim();
    
    if (!showAnswer || !hasAnswer) return null;
    return isAnswerCorrect(questionId) ? 'correct' : 'incorrect';
  };

  const renderSentenceWithBlank = (sentence: string, questionId: number) => {
    const parts = sentence.split('__________');
    const status = getAnswerStatus(questionId);
    const showAnswer = showAnswers[questionId];
    const question = questions.find(q => q.id === questionId);
    
    return (
      <div className="text-lg leading-relaxed">
        {parts[0]}
        <span className="relative inline-block">
          <input
            type="text"
            value={answers[questionId] || ''}
            onChange={(e) => handleAnswerChange(questionId, e.target.value)}
            disabled={showAnswer}
            className={`px-3 py-1 border-b-2 bg-transparent text-center min-w-[120px] focus:outline-none transition-all ${
              status === 'correct'
                ? 'border-green-500 text-green-800 bg-green-50'
                : status === 'incorrect'
                ? 'border-red-500 text-red-800 bg-red-50'
                : 'border-indigo-400 focus:border-indigo-600'
            } ${showAnswer ? 'cursor-not-allowed' : ''}`}
            placeholder="Type answer..."
          />
          {showAnswer && !isAnswerCorrect(questionId) && (
            <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-1 px-2 py-1 bg-green-100 text-green-800 text-sm rounded border border-green-300 whitespace-nowrap">
              {question?.correctAnswer}
            </div>
          )}
        </span>
        {parts[1]}
      </div>
    );
  };

  return (
    <section id="fill-in-blanks" className="bg-white rounded-2xl shadow-xl p-8 border border-orange-100">
      <div className="flex items-center gap-4 mb-8">
        <div className="bg-orange-100 p-3 rounded-full">
          <Edit3 className="w-6 h-6 text-orange-600" />
        </div>
        <div>
          <h2 className="text-3xl font-bold text-gray-900">Part IV: Fill in the Blanks</h2>
          <p className="text-gray-600 mt-1">15 Questions, 1 point each - 15 total points</p>
        </div>
      </div>

      <div className="bg-orange-50 border-l-4 border-orange-500 p-4 mb-8 rounded-r-lg">
        <p className="text-orange-800 font-medium">
          <strong>Instructions:</strong> Complete the following sentences with the most appropriate term from the concepts studied.
        </p>
      </div>

      <div className="space-y-8">
        {questions.map((question, index) => {
          const status = getAnswerStatus(question.id);
          const showAnswer = showAnswers[question.id];
          const hasAnswer = answers[question.id]?.trim();

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
                <div className="flex-shrink-0 w-8 h-8 bg-orange-100 rounded-full flex items-center justify-center text-orange-600 font-semibold">
                  {index + 1}
                </div>
                <div className="flex-1">
                  {renderSentenceWithBlank(question.sentence, question.id)}
                  
                  <div className="mt-4 flex items-center gap-4">
                    {!showAnswer && hasAnswer && (
                      <button
                        onClick={() => handleShowAnswer(question.id)}
                        className="px-4 py-2 bg-orange-600 text-white rounded-lg hover:bg-orange-700 transition-colors"
                      >
                        Check Answer
                      </button>
                    )}
                    
                    {status === 'correct' && (
                      <div className="flex items-center gap-2 text-green-600">
                        <CheckCircle className="w-5 h-5" />
                        <span className="font-medium">Correct!</span>
                      </div>
                    )}
                    
                    {status === 'incorrect' && (
                      <div className="flex items-center gap-2 text-red-600">
                        <XCircle className="w-5 h-5" />
                        <span className="font-medium">Incorrect</span>
                      </div>
                    )}
                  </div>

                  {showAnswer && question.acceptableAnswers && question.acceptableAnswers.length > 1 && (
                    <div className="mt-4 p-3 bg-blue-50 rounded-lg border-l-4 border-blue-500">
                      <p className="text-sm text-blue-800">
                        <strong>Acceptable answers:</strong> {question.acceptableAnswers.join(', ')}
                      </p>
                    </div>
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <div className="mt-8 text-center text-gray-500 text-sm">
        Showing 10 of 15 questions for demonstration purposes
      </div>
    </section>
  );
}
