import NavigationBar from "./NavigationBar";

function HomePage() {
  return (
    <div className="App">
        <NavigationBar color="dark" light="false" dark="true" expand="md" container="fluid" fixed="top" isHomeActive="true" isAboutActive="false" isPortfolioActive="false" isContactActive="false" isResumeActive="false"/>
        Home page
    </div>
  );
}

export default HomePage;
