import NavigationBar from "./NavigationBar";

function ResumePage() {
  return (
    <div>
        <NavigationBar color="dark" light="false" dark="true" expand="md" container="fluid" fixed="top" isHomeActive="false" isAboutActive="false" isPortfolioActive="false" isContactActive="false" isResumeActive="true"/>
        <div>
            <h1>Resume Page</h1>
        </div>
    </div>
  );
}

export default ResumePage;
