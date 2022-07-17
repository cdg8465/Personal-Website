import NavigationBar from "./NavigationBar";

function AboutPage() {
  return (
    <div>
        <NavigationBar color="dark" light="false" dark="true" expand="md" container="fluid" fixed="top" isHomeActive="false" isAboutActive="true" isPortfolioActive="false" isContactActive="false" isResumeActive="false"/>
        <div>
            <h1>About Page</h1>
        </div>
    </div>
  );
}

export default AboutPage;
