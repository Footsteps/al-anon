const BASE_URL = "";
const IMAGE = `${BASE_URL}/SEO.png`; 

export const seo = {
    home: {
        title: "English Speaking Al-Anon Berlin | Meetings & Roundups",
        description: "Find English-speaking Al-Anon meetings in Berlin, discover roundups and submit events.",
        url: BASE_URL,
        image: IMAGE
    },
    meetings: {
        title: "Meetings | English Speaking Al-Anon Berlin & European Conventions",
        description: "Find English-speaking Al-Anon meetings in Berlin",
        url: `${BASE_URL}/meetings`,
        image: IMAGE
    },
    events: {
        title: "Roundups | English Speaking Al-Anon Berlin & European Conventions",
        description: "Upcoming English-speaking Al-Anon roundups or events with Al-Anon participation",
        url: `${BASE_URL}/roundups`,
        image: IMAGE
    },
    contact: {
        title: "Contact Form | Meetings & Roundups",
        description: "Send a message or submit an event.",
        url: BASE_URL,
        image: IMAGE
    },


}