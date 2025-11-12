import React from 'react';
import { MultipleChoice } from './MultipleChoice';
import { Matching } from './Matching';
import { TrueFalse } from './TrueFalse';
import { FillInBlanks } from './FillInBlanks';
import { ShortAnswer } from './ShortAnswer';
import { GraduationCap, Clock, Award } from 'lucide-react';

export function Exam() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-purple-50">
      {/* Hero Section */}
      <section id="exam-hero" className="relative py-20 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <div className="flex justify-center mb-6">
            <div className="bg-gradient-to-r from-indigo-600 to-purple-600 p-4 rounded-full">
              <GraduationCap className="w-12 h-12 text-white" />
            </div>
          </div>
          
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            INSY4112: Human-Computer Interaction
            <span className="block text-3xl text-indigo-600 mt-2">Mid-Term Examination</span>
          </h1>
          
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-indigo-100 max-w-4xl mx-auto">
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              Alright class, settle in. Welcome to your mid-term examination for INSY4112: Human-Computer Interaction.
              This exam covers the material from Chapters 1 through 4. It is designed to test not only your recall of key concepts 
              but also your ability to apply these principles to real-world scenarios.
            </p>
            
            <div className="grid md:grid-cols-3 gap-6 mb-6">
              <div className="flex items-center justify-center gap-3 bg-indigo-50 p-4 rounded-lg">
                <Clock className="w-6 h-6 text-indigo-600" />
                <div>
                  <div className="font-semibold text-indigo-900">Total Points</div>
                  <div className="text-indigo-700">100 Points</div>
                </div>
              </div>
              
              <div className="flex items-center justify-center gap-3 bg-purple-50 p-4 rounded-lg">
                <Award className="w-6 h-6 text-purple-600" />
                <div>
                  <div className="font-semibold text-purple-900">5 Sections</div>
                  <div className="text-purple-700">Interactive Format</div>
                </div>
              </div>
              
              <div className="flex items-center justify-center gap-3 bg-green-50 p-4 rounded-lg">
                <GraduationCap className="w-6 h-6 text-green-600" />
                <div>
                  <div className="font-semibold text-green-900">Chapters 1-4</div>
                  <div className="text-green-700">Comprehensive</div>
                </div>
              </div>
            </div>
            
            <p className="text-gray-600 italic">
              Read each question carefully and think critically before you answer. Some questions are intentionally 
              detailed to ensure you've understood the nuances of the topics we've discussed.
            </p>
            
            <div className="mt-6 p-4 bg-gradient-to-r from-green-50 to-blue-50 rounded-lg border-l-4 border-green-500">
              <p className="text-green-800 font-medium">
                💡 <strong>Good luck!</strong> Take a deep breath. You have studied the material, and you are prepared.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Exam Sections */}
      <div className="max-w-6xl mx-auto px-6 pb-20 space-y-16">
        <MultipleChoice />
        <Matching />
        <TrueFalse />
        <FillInBlanks />
        <ShortAnswer />
      </div>
    </div>
  );
}
