import EventSubmissionForm from "../components/EventSubmissionForm.jsx"
export default function Contact({language}) {

    return (
        <main id="main-content" tabIndex={-1}>
            <EventSubmissionForm language={language}/>          
        </main>
    )    
}