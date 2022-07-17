import NavigationBar from "./NavigationBar";

function PortfolioPage() {
  return (
    <div>
        <NavigationBar color="dark" light="false" dark="true" expand="md" container="fluid" fixed="top" isHomeActive="false" isAboutActive="false" isPortfolioActive="true" isContactActive="false" isResumeActive="false"/>
        <div>
            <h1>Portfolio Page</h1>
        </div>
    </div>
  );
}

export default PortfolioPage;
