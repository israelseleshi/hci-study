import React, { useState } from 'react';
import { Link2, CheckCircle, XCircle, RotateCcw } from 'lucide-react';

interface MatchingPair {
  id: number;
  term: string;
  description: string;
  letter: string;
}

const matchingData: MatchingPair[] = [
  {
    id: 1,
    term: "Fitts's Law",
    description: "Explains why a small, distant button is harder to click than a large, close one.",
    letter: "C"
  },
  {
    id: 2,
    term: "WIMP",
    description: "Windows, Icons, Menus, Pointers.",
    letter: "E"
  },
  {
    id: 3,
    term: "Abductive Reasoning",
    description: "Reasoning from an observed effect to its most likely cause.",
    letter: "F"
  },
  {
    id: 4,
    term: "Ergonomics",
    description: "The scientific discipline concerned with the physical fit between the user and the system.",
    letter: "G"
  },
  {
    id: 5,
    term: "Chunking",
    description: "A cognitive process for overcoming the 7±2 limit of short-term memory.",
    letter: "I"
  },
  {
    id: 6,
    term: "Script (Memory)",
    description: "A student knows from experience how to use a restaurant menu.",
    letter: "A"
  },
  {
    id: 7,
    term: "Iconic Memory",
    description: "A temporary memory store for visual information, lasting about half a second.",
    letter: "D"
  },
  {
    id: 8,
    term: "Menu-driven Interface",
    description: "An ATM, which guides the user through a series of choices.",
    letter: "B"
  },
  {
    id: 9,
    term: "Gulf of Execution",
    description: "The difficulty of figuring out how to make the system do what you want.",
    letter: "J"
  },
  {
    id: 10,
    term: "Inductive Reasoning",
    description: "Seeing five consecutive software updates cause bugs and concluding that all updates are unreliable.",
    letter: "K"
  }
];

const allDescriptions = [
  { letter: "A", text: "A student knows from experience how to use a restaurant menu." },
  { letter: "B", text: "An ATM, which guides the user through a series of choices." },
  { letter: "C", text: "Explains why a small, distant button is harder to click than a large, close one." },
  { letter: "D", text: "A temporary memory store for visual information, lasting about half a second." },
  { letter: "E", text: "Windows, Icons, Menus, Pointers." },
  { letter: "F", text: "Reasoning from an observed effect to its most likely cause." },
  { letter: "G", text: "The scientific discipline concerned with the physical fit between the user and the system." },
  { letter: "H", text: "Seeing a user struggling and concluding their keyboard must be broken." },
  { letter: "I", text: "A cognitive process for overcoming the 7±2 limit of short-term memory." },
  { letter: "J", text: "The difficulty of figuring out how to make the system do what you want." },
  { letter: "K", text: "Seeing five consecutive software updates cause bugs and concluding that all updates are unreliable." },
  { letter: "L", text: "The process of information moving from short-term to long-term memory." }
];

export function Matching() {
  const [matches, setMatches] = useState<{ [key: number]: string }>({});
  const [showAnswers, setShowAnswers] = useState(false);

  const handleMatch = (termId: number, letter: string) => {
    setMatches(prev => ({
      ...prev,
      [termId]: letter
    }));
  };

  const resetMatches = () => {
    setMatches({});
    setShowAnswers(false);
  };

  const checkAnswers = () => {
    setShowAnswers(true);
  };

  const getMatchStatus = (termId: number) => {
    if (!showAnswers) return null;
    const selectedLetter = matches[termId];
    const correctLetter = matchingData.find(item => item.id === termId)?.letter;
    
    if (selectedLetter === correctLetter) return 'correct';
    if (selectedLetter && selectedLetter !== correctLetter) return 'incorrect';
    return 'missing';
  };

  const score = showAnswers ? 
    matchingData.filter(item => matches[item.id] === item.letter).length : 0;

  return (
    <section id="matching" className="bg-white rounded-2xl shadow-xl p-8 border border-purple-100">
      <div className="flex items-center gap-4 mb-8">
        <div className="bg-purple-100 p-3 rounded-full">
          <Link2 className="w-6 h-6 text-purple-600" />
        </div>
        <div>
          <h2 className="text-3xl font-bold text-gray-900">Part II: Matching</h2>
          <p className="text-gray-600 mt-1">10 Questions, 1 point each - 10 total points</p>
        </div>
      </div>

      <div className="bg-purple-50 border-l-4 border-purple-500 p-4 mb-8 rounded-r-lg">
        <p className="text-purple-800 font-medium">
          <strong>Instructions:</strong> Match each term from the left column with the most appropriate description 
          or example from the right column. Each description will be used only once. Not all descriptions will be used.
        </p>
      </div>

      <div className="grid lg:grid-cols-2 gap-8">
        {/* Terms Column */}
        <div className="space-y-4">
          <h3 className="text-xl font-semibold text-gray-900 mb-4">Terms</h3>
          {matchingData.map((item, index) => {
            const status = getMatchStatus(item.id);
            return (
              <div
                key={item.id}
                className={`p-4 rounded-lg border-2 transition-all ${
                  status === 'correct' 
                    ? 'border-green-500 bg-green-50'
                    : status === 'incorrect'
                    ? 'border-red-500 bg-red-50'
                    : status === 'missing'
                    ? 'border-orange-500 bg-orange-50'
                    : 'border-gray-200 bg-gray-50'
                }`}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <span className="font-semibold text-gray-700">{index + 1}.</span>
                    <span className="font-medium text-gray-900">{item.term}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    {matches[item.id] && (
                      <span className="px-2 py-1 bg-indigo-100 text-indigo-800 rounded font-medium">
                        {matches[item.id]}
                      </span>
                    )}
                    {status === 'correct' && <CheckCircle className="w-5 h-5 text-green-600" />}
                    {status === 'incorrect' && <XCircle className="w-5 h-5 text-red-600" />}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Descriptions Column */}
        <div className="space-y-4">
          <h3 className="text-xl font-semibold text-gray-900 mb-4">Descriptions / Examples</h3>
          {allDescriptions.map((desc) => {
            const isUsed = Object.values(matches).includes(desc.letter);
            const isCorrectlyUsed = showAnswers && matchingData.some(item => 
              matches[item.id] === desc.letter && item.letter === desc.letter
            );
            
            return (
              <button
                key={desc.letter}
                onClick={() => {
                  if (showAnswers) return;
                  // Find which term this should be matched with (if any selected)
                  const selectedTerm = Object.keys(matches).find(termId => 
                    matches[parseInt(termId)] === desc.letter
                  );
                  if (selectedTerm) {
                    // Remove the match
                    const newMatches = { ...matches };
                    delete newMatches[parseInt(selectedTerm)];
                    setMatches(newMatches);
                  }
                }}
                disabled={showAnswers}
                className={`w-full text-left p-4 rounded-lg border-2 transition-all ${
                  showAnswers
                    ? isCorrectlyUsed
                      ? 'border-green-500 bg-green-50 cursor-not-allowed'
                      : isUsed
                      ? 'border-red-500 bg-red-50 cursor-not-allowed'
                      : 'border-gray-200 bg-gray-100 cursor-not-allowed'
                    : isUsed
                    ? 'border-indigo-500 bg-indigo-50 cursor-pointer'
                    : 'border-gray-200 hover:border-indigo-300 hover:bg-indigo-50 cursor-pointer'
                }`}
              >
                <div className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-6 h-6 bg-gray-200 rounded-full flex items-center justify-center text-sm font-medium">
                    {desc.letter}
                  </span>
                  <span className="text-gray-900">{desc.text}</span>
                </div>
              </button>
            );
          })}
        </div>
      </div>

      {/* Matching Interface */}
      {!showAnswers && (
        <div className="mt-8 p-6 bg-gray-50 rounded-lg">
          <h4 className="font-semibold text-gray-900 mb-4">Quick Match</h4>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-2">
            {matchingData.map((item, index) => (
              <select
                key={item.id}
                value={matches[item.id] || ''}
                onChange={(e) => handleMatch(item.id, e.target.value)}
                className="p-2 border border-gray-300 rounded text-sm"
              >
                <option value="">{index + 1}. Select...</option>
                {allDescriptions.map(desc => (
                  <option key={desc.letter} value={desc.letter}>
                    {desc.letter}
                  </option>
                ))}
              </select>
            ))}
          </div>
        </div>
      )}

      <div className="mt-8 flex gap-4 justify-center">
        {!showAnswers ? (
          <button
            onClick={checkAnswers}
            disabled={Object.keys(matches).length === 0}
            className="px-6 py-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700 disabled:bg-gray-400 disabled:cursor-not-allowed transition-colors"
          >
            Check Answers
          </button>
        ) : (
          <div className="text-center">
            <div className="text-2xl font-bold text-gray-900 mb-2">
              Score: {score}/10
            </div>
            <button
              onClick={resetMatches}
              className="px-6 py-3 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition-colors flex items-center gap-2 mx-auto"
            >
              <RotateCcw className="w-4 h-4" />
              Try Again
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
