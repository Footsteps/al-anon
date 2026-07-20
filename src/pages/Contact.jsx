import EventSubmissionForm from "../components/EventSubmissionForm.jsx"
import SEO from "../components/SEO.jsx";
import {seo} from "../data/seo.js"

export default function Contact({language}) {

    return (
        <>
        <SEO {...seo.contact}/>
        <main id="main-content" tabIndex={-1}>
            <EventSubmissionForm language={language}/>          
        </main>
        </>
    )    
}