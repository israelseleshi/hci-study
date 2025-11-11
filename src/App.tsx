import { useState } from "react";
import { Sidebar } from "./components/Sidebar";
import { Hero } from "./components/Hero";
import { CoreComponents } from "./components/CoreComponents";
import { WhyHCI } from "./components/WhyHCI";
import { ThreePillars } from "./components/ThreePillars";
import { UsabilityGoals } from "./components/UsabilityGoals";
import { DesignPrinciples } from "./components/DesignPrinciples";
import { InterdisciplinaryNature } from "./components/InterdisciplinaryNature";
import { EvolutionTimeline } from "./components/EvolutionTimeline";
import { UCDComparison } from "./components/UCDComparison";
import { FutureHCI } from "./components/FutureHCI";
import { Summary } from "./components/Summary";

// Chapter 2 Components
import { HeroChapter2 } from "./components/chapter2/HeroChapter2";
import { InputOutputChannels } from "./components/chapter2/InputOutputChannels";
import { VisionEye } from "./components/chapter2/VisionEye";
import { VisionPerception } from "./components/chapter2/VisionPerception";
import { VisionColorText } from "./components/chapter2/VisionColorText";
import { HearingChannel } from "./components/chapter2/HearingChannel";
import { TouchChannel } from "./components/chapter2/TouchChannel";
import { MotorControl } from "./components/chapter2/MotorControl";
import { FittsLaw } from "./components/chapter2/FittsLaw";
import { SensoryMemory } from "./components/chapter2/SensoryMemory";
import { ShortTermMemory } from "./components/chapter2/ShortTermMemory";
import { LongTermMemory } from "./components/chapter2/LongTermMemory";
import { KnowledgeOrganization } from "./components/chapter2/KnowledgeOrganization";
import { Reasoning } from "./components/chapter2/Reasoning";
import { ErrorsEmotion } from "./components/chapter2/ErrorsEmotion";
import { IndividualDifferences } from "./components/chapter2/IndividualDifferences";

export default function App() {
  const [currentChapter, setCurrentChapter] = useState<"chapter1" | "chapter2">("chapter1");

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <Sidebar 
        currentChapter={currentChapter} 
        onChapterChange={setCurrentChapter}
      />
      
      <main className="transition-all duration-300">
          {currentChapter === "chapter1" ? (
            <>
              <Hero />
              <CoreComponents />
              <WhyHCI />
              <ThreePillars />
              <UsabilityGoals />
              <DesignPrinciples />
              <InterdisciplinaryNature />
              <EvolutionTimeline />
              <UCDComparison />
              <FutureHCI />
              <Summary />
            </>
          ) : (
            <>
              <HeroChapter2 />
              <InputOutputChannels />
              <VisionEye />
              <VisionPerception />
              <VisionColorText />
              <HearingChannel />
              <TouchChannel />
              <MotorControl />
              <FittsLaw />
              <SensoryMemory />
              <ShortTermMemory />
              <LongTermMemory />
              <KnowledgeOrganization />
              <Reasoning />
              <ErrorsEmotion />
              <IndividualDifferences />
            </>
          )}
        </main>
    </div>
  );
}
