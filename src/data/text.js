import LanguageSwitcher from "../components/LanguageSwitcher";

export const text = {
  de: {
    navbar: {
      home: "Start",
      contact: "Kontakt",
    },
    languageSwitcher: {
      tooltip: "Switch language: english",
      switch: {
        desktop: "Switch Language",
        mobile: "EN"
      },
      ariaLabel: "Sprachauswahl",
      ariaPressed: "de"
    },

    home: {
      title: {
        mobile:
          "Al-Anon: Englischsprachige Meetings in Berlin & Infos über Conventions",
        desktop:
          "Al-Anon: Englischsprachige Meetings in Berlin & Roundups in Europa",
      },

      welcome: {
        heading: "Willkommen!",
        text: "Diese Seite ist privat - sie ist KEINE offizielle Website von Al-Anon. Sie sammelt Infos über Conventions. Meldet Euch gern, wenn ihr was habt! Außerdem kann die offizielle Al-Anon Seite al-anon.de (noch) kein Englisch, und hier springt diese Seite mit einem Überblick über alle englischsprachigen Al-Anon Meetings in Berlin ein.",
      },

      newcomer: {
        heading: "Neu bei Al-Anon?",
        text: "Herzlich Willkommen! Bitte schau' zuerst bei der offiziellen Al-Anon Seite vorbei für Wissenswertes über Al-Anon Meetings:",
      },

      meetings: {
        heading: "Meetings",
        text: "Dort gibt's eine Liste aller englischsprachigen Meetings in Berlin. Achtung: Es gibt viel mehr deutschsprachige Meetings und sogar ein polnischsprachiges – Infos bei",
      },

      events: {
        heading: "Conventions",
        text: "Eine Sammlung von Conventions innerhalb und außerhalb Deutschlands. Sie erhebt keinen Anspruch auf Vollständigkeit und freut sich sehr über Zuwachs (dafür gern das Kontaktformular nutzen).",
      },
      link: {
        href: "https://al-anon.de",
        text: "al-anon.de",
      },
    } /*home*/,
    events: {
      text: "Veranstaltungen von AA werden nur gelistet, wenn sie eine Al-Anon Beteiligung haben: Al-Anon Meetings und Al-Anon Sprecher_innen.",
      labels: {
        date: "Datum",
        city: "Ort",
        location: "Veranstaltungsort",
        address: "Adresse",
        organizer: "Organisator:in",
        language: "Sprache",
        email: "E-Mail",
        website: "Webseite",
        flyer: "Flyer (PDF öffnen)",
      } /*labels*/,
    } /*events*/,
    contact: {
      submitText: "Vielen Dank für deine Nachricht!",
      text: "Hier ist Platz für Nachrichten oder Infos über Roundups :) Bei Infos über Roundups ist es nötig, den Veranstaltungsnamen, und entweder eine Email-Adresse ODER eine Webseite ODER einen Flyer anzugeben. Oder Du schreibst mir nur eine Nachricht. :)",
      labels: {
        message: "Deine Nachricht",
        email: "Deine Email-Adresse (optional)",
        title: "Veranstaltungsname",
        startDate: "Veranstaltungsbeginn",
        endDate: "Veranstaltungsende",
        city: "Ort",
        address: "Adresse",
        organizer: "Welches Programm organisiert?",
        language: "Sprache Roundup",
        option: "Bitte wählen",
        value: {
          "de": "Deutsch", 
          "en": "Englisch", 
          "both": "Deutsch & Englisch", 
          "other": "Andere Sprache"},
        eventEmail: "Email des Events",
        website: "Webseite (beginnend mit https)",
        flyer: "Flyer (PDF oder Bild) hochladen",
        filename: "Keine Datei beigefügt",
        checkbox: "Ich bin damit einverstanden, dass die übermittelten Daten ggf. zur Veröffentlichung der Veranstaltung verarbeitet werden.",
        submit: "Absenden",
        sending: "Wird gesendet..."
      } /*labels*/,

    },/*contact*/
    footer: {
      impressum: "Impressum",
      privacy: "Datenschutz",
      credit: ["Hintergrundbild von","auf"]
    }, /*footer*/
    impressum: [
      {heading: "Angaben gemäß § 5 DDG",
        text: "Angela Schumacher, Röbellweg 14, 13125 Berlin",
      }, {
        heading: "Kontakt",
        text: "E-Mail: angelaschumacher@web.de"
      },
      {heading: "Verantwortlich für den Inhalt",
        text: "Angela Schumacher (Adresse wie oben)"
      }
    ], /*legal*/
    privacy: {
      title: "Datenschutzerklärung",
      responsible: {
        heading: "1. Verantwortliche",
        text: "Verantwortlich für diese Website ist:",
        info: {fullName: "Angela Schumacher",
              address: "Röbellweg 14, 13125 Berlin"},
      },
      contact: {
        heading: "2. Kontaktformular",
        text: "Wenn du mich über das Kontaktformular kontaktierst, werden die von dir eingegebenen Daten ausschließlich zur Bearbeitung deiner Anfrage verwendet.",
      },
      logfiles: {
        heading: "3. Server-Logfiles",
        text: "Beim Besuch dieser Website werden technisch notwendige Informationen (z. B. IP-Adresse, Browsertyp, Uhrzeit) vom Hosting-Anbieter verarbeitet."
      },
      rights: {
        heading: "4. Your Rights",
        text: "Du hast das Recht auf Auskunft, Berichtigung, Löschung, Einschränkung der Verarbeitung sowie Beschwerde bei einer Datenschutzaufsichtsbehörde."
      }
    }/*privacy*/
  },

  en: {
    navbar: {
      home: "Home",
      contact: "Contact",
    },
    languageSwitcher: {
      tooltip: "Sprache wechseln: deutsch",
      switch: {
        desktop: "Sprache wechseln",
        mobile: "DE"
      }, 
      ariaLabel: "Language selection",
      ariaPressed: "en"
    },
    home: {
      title: {
        mobile:
          "Al-Anon: English speaking meetings in Berlin & European conventions",
        desktop:
          "Al-Anon: English speaking meetings in Berlin & Conventions in Europe",
      },

      welcome: {
        heading: "Welcome!",
        text: "This is a personal page - NOT an official website of Al-Anon. It collects information about conventions. Please feel free to contact me if you have any! Also, the official German Al-Anon website isn't available in English (yet), so this site fills that gap and gives an overview of all the English speaking Al-Anon meetings in Berlin.",
      },

      newcomer: {
        heading: "New to Al-Anon?",
        text: "Welcome! Please visit the official Al-Anon page first for general information about Al-Anon:",
      },

      meetings: {
        heading: "Meetings",
        text: "You'll only find the English speaking meetings in Berlin. There are many more German speaking meetings in Berlin and even one in Polish. For more information, visit",
      },

      events: {
        heading: "Conventions",
        text: "A collection of conventions in and outside of Germany. It is by no means exhaustive—and I'd love to hear about any additions (please use the contact form for this).",
      },
      link: {
        text: "al-anon.org",
        href: "https://al-anon.org",
      },
    } /*home*/,
    events: {
      text: "AA events are listed only if they include Al-Anon participation: Al-Anon meetings and Al-Anon speakers.",
      labels: {
        date: "Date",
        city: "City",
        location: "Venue",
        address: "Address",
        organizer: "Host",
        language: "Language",
        email: "Email",
        website: "Website",
        flyer: "Flyer (open PDF)",
      },
    } /*events*/,
    contact: {
      submitText: "Thank you for your message!",
      text: "Here is a place for messages or information about Roundups :) When sending information about roundups, you'll have to provide an event title plus either an event email address OR a website OR a flyer. Or you just leave a message :)",
      labels: {
        message: "Your message",
        email: "Your Email address (optional)",
        title: "Event title",
        startDate: "Event start date",
        endDate: "Event end date",
        city: "City",
        address: "Address",
        organizer: "Which program is hosting?",
        language: "Language Roundup",
        option: "Please choose",
        value: {
          "de": "German", 
          "en": "English", 
          "both": "English & German", 
          "other": "Other language"},
        eventEmail: "Email of the event (optional)",
        website: "Website (optional, starting with https)",
        flyer: "Flyer (upload PDF or image)",
        filename: "No file attached",
        checkbox: "I agree that the submitted information may be processed for publication of the event.",
        submit: "Submit",
        sending: "Sending..."
      } /*labels*/,
    },/*contact*/
    footer: {
      impressum: "Legal Notice",
      privacy: "Privacy Policy",
      credit: ["Background image by", "at"]
    }, /*footer*/
    impressum: [
      {heading: "Information pursuant to Section 5 of the DDG",
        text: "Angela Schumacher, Röbellweg 14, 13125 Berlin",
      }, {
        heading: "Contact",
        text: "E-Mail: angelaschumacher@web.de"
      },
      {heading: "Responsible for the content",
        text: "Angela Schumacher (address as above)"
      }
    ], /*legal*/
    privacy: {
      title: "Privacy Policy",
      responsible: {
        heading: "1. Responsability",
        text: "The following person is responsible for this website:",
        info: {fullName: "Angela Schumacher",
              address: "Röbellweg 14, 13125 Berlin"},
      },
      contact: {
        heading: "2. Contact Form",
        text: "If you contact me via the contact form, the information you provide will be used solely to process your inquiry."
      },
      logfiles: {
        heading: "3. Server-Logfiles",
        text: "When you visit this website, technically necessary information (e.g., IP address, browser type, time) is processed by the hosting provider."
      },
      rights: {
        heading: "4. Your Rights",
        text: "You have the right to access, correct, or delete your personal data, to restrict its processing, and to file a complaint with a data protection supervisory authority."
      }
    }/*privacy*/
  },
};
