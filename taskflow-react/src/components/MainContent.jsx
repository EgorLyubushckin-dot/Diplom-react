import IntroSection from "../sections/IntroSection";
import RelevanceSection from "../sections/RelevanceSection";
import ApolloSection from "../sections/ApolloSection";
import ConceptsSection from "../sections/ConceptsSection";
import SystemParamsSection from "../sections/SystemParamsSection";
import ApolloTimeLineSection from "../sections/ApolloTimeLineSection";



const MainContent = () => {
  return (
    <main className="main-content">
      <IntroSection />
      <RelevanceSection />
      <ApolloSection />
      <ApolloTimeLineSection/>
      <ConceptsSection />
      <SystemParamsSection/>
      
    </main>
  );
};

export default MainContent;