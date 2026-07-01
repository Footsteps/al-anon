export const meetings = {
  info: {
    de: {
      heading: "Englischsprachige Al-Anon Meetings Berlin",
      text: "Solltest Du vor verschlossener Tür stehen, kontaktiere bitte Al-Anon Deutschland: zdb@al-anon.de.",
    },
    en: {
      heading: "English speaking Al-Anon meetings Berlin",
      text: "Should you encounter closed doors, please contact Al-Anon Germany: zdb@al-anon.de.",
    },
  }, /*INFO*/

  schedule: [
    {
      day: {
        de: "MITTWOCH",
        en: "WEDNESDAY",
      },
      className: "wednesday",
      meetings: [
        {
          className: "steps-and-spirituality",
          time: {
            de: "19 Uhr",
            en: "7 pm",
          },
          title: "Steps and Spirituality",
          address: "Torstr. 190, 10115 Berlin",
          details: {
            de: [
              "Begegnungsstätte 'Mehr Mitte'",
              "Bitte klopfen oder klingeln",
            ],
            en: [
              "Begegnungsstätte 'Mehr Mitte'",
              "Please knock or ring the bell",
            ],
          },
        }, /*meeting*/
        {
          className: "serenity",
          time: {
            de: "19 Uhr",
            en: "7 pm",
          },
          title: "Serenity",
          address: "Barbarossastr. 64, 10781 Berlin",
          details: {
            de: [
              "Kiezoase, EG Seitenflügel rechts",
              "Hybrid: +49 221 98882117, Code 733350#",
            ],
            en: [
              "Kiezoase, right side wing, ground floor",
              "Hybrid: +49 221 98882117, code 733350#",
            ],
          },/*details*/
        },/*meeting item*/
      ], /*meeting arr*/
    }, /*day item*/

    {
      day: {
        de: "DONNERSTAG",
        en: "THURSDAY",
      },
      className: "thursday",
      meetings: [
        {
          className: "steps-and-traditions",
          time: {
            de: "18:30 Uhr",
            en: "6:30 pm",
          },
          title: "Steps & Traditions",
          address: "Große Hamburger Str. 29, 10115 Berlin",
          details: {
            de: [
              "Kieztreff Koeppjohann",
              "Über den Hof, linker Seitenflügel",
            ],
            en: [
              "Kieztreff Koeppjohann",
              "Through the courtyard, left side wing",
            ],
          },/*details*/
        },/*meeting item*/
      ],/*meeting arr*/
    },/*day item*/

    {
      day: {
        de: "SAMSTAG",
        en: "SATURDAY",
      },
      className: "saturday",
      meetings: [
        {
          className: "born-free",
          time: {
            de: "11:30 Uhr",
            en: "11:30 am",
          },
          title: "Born Free",
          address: "Schröderstr. 5, 10115 Berlin",
          details: {
            de: [
              "Über den Hof",
              "Linker Seitenflügel",
            ],
            en: [
              "Through the courtyard",
              "Left side wing",
            ],
          },/*details*/
        },/*meeting item*/
      ],/*meetings arr*/
    },/*day item*/
  ], /*SCHEDULE*/
}; /*MEETINGS*/