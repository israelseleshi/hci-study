import React, { useState } from 'react';
import { FileText, Eye, EyeOff } from 'lucide-react';

interface ShortAnswerQuestion {
  id: number;
  question: string;
  points: number;
  sampleAnswer: string;
  keyPoints: string[];
}

const questions: ShortAnswerQuestion[] = [
  {
    id: 1,
    question: "Explain the fundamental difference between a System-Centered Design approach and a User-Centered Design (UCD) approach. What is the key change in focus?",
    points: 2,
    sampleAnswer: "System-Centered Design focuses on the technical capabilities and efficiency of the machine, forcing the user to adapt. User-Centered Design (UCD) focuses on the user's needs, goals, and limitations, designing the technology to fit the user. The key change is shifting the focus from the machine to the human.",
    keyPoints: [
      "System-centered focuses on technical capabilities/machine efficiency",
      "User-centered focuses on user needs, goals, and limitations", 
      "Key change is shifting focus from machine to human",
      "UCD designs technology to fit the user, not vice versa"
    ]
  },
  {
    id: 2,
    question: "What is the \"7±2\" rule, and which type of human memory does it apply to?",
    points: 1,
    sampleAnswer: "The \"7±2\" rule states that the capacity of human Short-Term (or Working) Memory is limited to roughly 5 to 9 chunks of information.",
    keyPoints: [
      "7±2 rule refers to memory capacity limitation",
      "Applies to Short-Term Memory or Working Memory",
      "Capacity is 5-9 chunks of information",
      "Can be overcome through chunking strategies"
    ]
  },
  {
    id: 3,
    question: "Describe two distinct HCI design principles. For each, provide a specific, real-world example of its successful application in a software interface you have used.",
    points: 2,
    sampleAnswer: "Visibility: The system should always keep users informed about what is going on. Example: When uploading a file, a progress bar shows the current status and how much time is left. Feedback: For every user action, there should be an immediate and clear reaction. Example: When I press a virtual key on my phone's keyboard, it vibrates slightly to confirm the key was registered.",
    keyPoints: [
      "Two distinct design principles identified",
      "Clear explanation of each principle",
      "Specific, real-world examples provided",
      "Examples demonstrate successful application"
    ]
  },
  {
    id: 4,
    question: "Define \"Direct Manipulation\" as an interaction style.",
    points: 1,
    sampleAnswer: "Direct Manipulation is an interaction style where users interact with graphical representations of objects directly, using actions that correspond to the physical world (e.g., dragging a file icon to a trash can icon to delete it). It provides a feeling of direct engagement with the data.",
    keyPoints: [
      "Interaction with graphical representations of objects",
      "Actions correspond to physical world",
      "Direct engagement with data/objects",
      "Example of dragging files to trash"
    ]
  },
  {
    id: 5,
    question: "A user reports making an error on a data entry form. Distinguish between a slip and a mistake in this context, providing a clear example of each.",
    points: 2,
    sampleAnswer: "Slip Example: A user intends to type \"500\" into a field but their finger slips and they type \"5000\". The intention was correct, but the execution was flawed. Mistake Example: The form has a \"Clear Form\" button. A user, wanting to clear the entry in just one field, clicks \"Clear Form,\" which erases all their work. The user's mental model was that the button only affected a single field; this was a mistake based on incorrect understanding.",
    keyPoints: [
      "Slip: correct intention, wrong execution",
      "Mistake: wrong intention/mental model",
      "Clear examples provided for both",
      "Distinction between intention vs execution errors"
    ]
  }
];

export function ShortAnswer() {
  const [answers, setAnswers] = useState<{ [key: number]: string }>({});
  const [showSampleAnswers, setShowSampleAnswers] = useState<{ [key: number]: boolean }>({});

  const handleAnswerChange = (questionId: number, answer: string) => {
    setAnswers(prev => ({
      ...prev,
      [questionId]: answer
    }));
  };

  const toggleSampleAnswer = (questionId: number) => {
    setShowSampleAnswers(prev => ({
      ...prev,
      [questionId]: !prev[questionId]
    }));
  };

  const getWordCount = (text: string) => {
    return text.trim().split(/\s+/).filter(word => word.length > 0).length;
  };

  return (
    <section id="short-answer" className="bg-white rounded-2xl shadow-xl p-8 border border-teal-100">
      <div className="flex items-center gap-4 mb-8">
        <div className="bg-teal-100 p-3 rounded-full">
          <FileText className="w-6 h-6 text-teal-600" />
        </div>
        <div>
          <h2 className="text-3xl font-bold text-gray-900">Part V: Short Answer</h2>
          <p className="text-gray-600 mt-1">10 Questions, variable points - 15 total points</p>
        </div>
      </div>

      <div className="bg-teal-50 border-l-4 border-teal-500 p-4 mb-8 rounded-r-lg">
        <p className="text-teal-800 font-medium">
          <strong>Instructions:</strong> Provide concise but complete answers to the following questions. 
          Your answers should demonstrate your understanding and ability to apply HCI concepts.
        </p>
      </div>

      <div className="space-y-8">
        {questions.map((question, index) => {
          const userAnswer = answers[question.id] || '';
          const wordCount = getWordCount(userAnswer);
          const showSample = showSampleAnswers[question.id];

          return (
            <div
              key={question.id}
              className="border-2 border-gray-200 rounded-lg p-6 hover:shadow-md transition-all"
            >
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-8 h-8 bg-teal-100 rounded-full flex items-center justify-center text-teal-600 font-semibold">
                  {index + 1}
                </div>
                <div className="flex-1">
                  <div className="flex items-start justify-between mb-4">
                    <p className="text-gray-900 leading-relaxed pr-4">
                      <span className="font-medium text-teal-600">({question.points} pts)</span> {question.question}
                    </p>
                  </div>
                  
                  <div className="mb-4">
                    <textarea
                      value={userAnswer}
                      onChange={(e) => handleAnswerChange(question.id, e.target.value)}
                      placeholder="Type your answer here..."
                      rows={4}
                      className="w-full p-4 border-2 border-gray-300 rounded-lg focus:border-teal-500 focus:outline-none resize-vertical transition-colors"
                    />
                    <div className="flex justify-between items-center mt-2 text-sm text-gray-500">
                      <span>Word count: {wordCount}</span>
                      <span className="text-xs">
                        {wordCount < 20 ? 'Consider adding more detail' : 
                         wordCount > 100 ? 'Consider being more concise' : 
                         'Good length'}
                      </span>
                    </div>
                  </div>

                  <div className="flex gap-3">
                    <button
                      onClick={() => toggleSampleAnswer(question.id)}
                      className="flex items-center gap-2 px-4 py-2 bg-teal-600 text-white rounded-lg hover:bg-teal-700 transition-colors"
                    >
                      {showSample ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                      {showSample ? 'Hide' : 'Show'} Sample Answer
                    </button>
                  </div>

                  {showSample && (
                    <div className="mt-4 space-y-4">
                      <div className="p-4 bg-gray-50 rounded-lg border-l-4 border-teal-500">
                        <h4 className="font-semibold text-gray-900 mb-2">Sample Answer:</h4>
                        <p className="text-gray-700 leading-relaxed">{question.sampleAnswer}</p>
                      </div>
                      
                      <div className="p-4 bg-blue-50 rounded-lg border-l-4 border-blue-500">
                        <h4 className="font-semibold text-blue-900 mb-2">Key Points to Include:</h4>
                        <ul className="list-disc list-inside space-y-1 text-blue-800">
                          {question.keyPoints.map((point, idx) => (
                            <li key={idx} className="text-sm">{point}</li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <div className="mt-8 text-center text-gray-500 text-sm">
        Showing 5 of 10 questions for demonstration purposes
      </div>

      <div className="mt-8 p-6 bg-gradient-to-r from-teal-50 to-blue-50 rounded-lg border border-teal-200">
        <h3 className="font-semibold text-gray-900 mb-3">💡 Tips for Short Answer Questions:</h3>
        <ul className="text-sm text-gray-700 space-y-2">
          <li>• <strong>Be specific:</strong> Use concrete examples and terminology from the course</li>
          <li>• <strong>Stay focused:</strong> Answer exactly what is being asked</li>
          <li>• <strong>Show understanding:</strong> Explain the reasoning behind your answers</li>
          <li>• <strong>Use course concepts:</strong> Reference specific HCI principles, laws, and frameworks</li>
        </ul>
      </div>
    </section>
  );
}
