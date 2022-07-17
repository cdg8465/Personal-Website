import NavigationBar from "./NavigationBar";

function HomePage() {
  return (
    <div>
        <NavigationBar color="dark" light="false" dark="true" expand="md" container="fluid" fixed="top" isHomeActive="true" isAboutActive="false" isPortfolioActive="false" isContactActive="false" isResumeActive="false"/>
        <div>
            <h1>Home Page</h1>
        </div>
    </div>
  );
}

export default HomePage;
