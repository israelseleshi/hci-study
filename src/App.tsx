import { useState } from "react";
import { Sidebar } from "./components/Sidebar";

// Chapter 1 Components
import { Hero } from "./components/chapter1/Hero";
import { CoreComponents } from "./components/chapter1/CoreComponents";
import { WhyHCI } from "./components/chapter1/WhyHCI";
import { ThreePillars } from "./components/chapter1/ThreePillars";
import { UsabilityGoals } from "./components/chapter1/UsabilityGoals";
import { DesignPrinciples } from "./components/chapter1/DesignPrinciples";
import { InterdisciplinaryNature } from "./components/chapter1/InterdisciplinaryNature";
import { EvolutionTimeline } from "./components/chapter1/EvolutionTimeline";
import { UCDComparison } from "./components/chapter1/UCDComparison";
import { FutureHCI } from "./components/chapter1/FutureHCI";
import { Summary } from "./components/chapter1/Summary";

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

// Chapter 3 Components
import { HeroChapter3 } from "./components/chapter3/HeroChapter3";
import { UbiquitousComputing } from "./components/chapter3/UbiquitousComputing";
import { EvolutionInteractivity } from "./components/chapter3/EvolutionInteractivity";
import { InputTextEntry } from "./components/chapter3/InputTextEntry";
import { InputPointing } from "./components/chapter3/InputPointing";
import { OutputVisual } from "./components/chapter3/OutputVisual";
import { OutputBeyondScreen } from "./components/chapter3/OutputBeyondScreen";
import { ImmersiveInteraction } from "./components/chapter3/ImmersiveInteraction";
import { MemoryProcessing } from "./components/chapter3/MemoryProcessing";
import { TechnologyShapesInteraction } from "./components/chapter3/TechnologyShapesInteraction";

// Chapter 4 Components
import { HeroChapter4 } from "./components/chapter4/HeroChapter4";
import { KeyTerminologies } from "./components/chapter4/KeyTerminologies";
import { NormansSevenStages } from "./components/chapter4/NormansSevenStages";
import { GulfsExecutionEvaluation } from "./components/chapter4/GulfsExecutionEvaluation";
import { SlipsVsMistakes } from "./components/chapter4/SlipsVsMistakes";
import { AbowdBealeModel } from "./components/chapter4/AbowdBealeModel";
import { InteractionStyles } from "./components/chapter4/InteractionStyles";
import { InteractionParadigms } from "./components/chapter4/InteractionParadigms";

// Exam Component
import { Exam } from "./components/exam/Exam";

export default function App() {
  const [currentChapter, setCurrentChapter] = useState<"chapter1" | "chapter2" | "chapter3" | "chapter4" | "exam">("chapter1");

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
          ) : currentChapter === "chapter2" ? (
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
          ) : currentChapter === "chapter3" ? (
            <>
              <HeroChapter3 />
              <UbiquitousComputing />
              <EvolutionInteractivity />
              <InputTextEntry />
              <InputPointing />
              <OutputVisual />
              <OutputBeyondScreen />
              <ImmersiveInteraction />
              <MemoryProcessing />
              <TechnologyShapesInteraction />
            </>
          ) : currentChapter === "chapter4" ? (
            <>
              <HeroChapter4 />
              <KeyTerminologies />
              <NormansSevenStages />
              <GulfsExecutionEvaluation />
              <SlipsVsMistakes />
              <AbowdBealeModel />
              <InteractionStyles />
              <InteractionParadigms />
            </>
          ) : (
            <Exam />
          )}
        </main>
    </div>
  );
}
