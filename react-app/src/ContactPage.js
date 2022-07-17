import NavigationBar from "./NavigationBar";

function ContactPage() {
  return (
    <div>
        <NavigationBar color="dark" light="false" dark="true" expand="md" container="fluid" fixed="top" isHomeActive="false" isAboutActive="false" isPortfolioActive="false" isContactActive="true" isResumeActive="false"/>
        <div>
            <h1>Contact Page</h1>
        </div>
    </div>
  );
}

export default ContactPage;
