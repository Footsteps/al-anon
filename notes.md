/*Routes & Functions & Controllers*/
Contactform 
    │
    ▼
contactService: POST request to "/contact" using 
    │
    ▼
contactRoutes: uses 
    │
    ▼
middleware: upload.js to upload file 
    │
    ▼
then: post-request using router to controller: submitContactForm
    │
    ▼
contactController: calls validateSubmission and sends json back
    │
    ▼
contactService: gets json and sends it back to Contactform 
 

/*TODO*/
Fehler bündeln
Feld rot machen wo was fehlt

//////////////////////////////
Tooltip auf Handy testen wenn live
//////////////////////////////

/*Architektur*/
React
    │
    ▼
Service (fetch)
    │
    ▼
Express Route
    │
    ▼
Controller
    │
    ▼
Validator

/*Logik*/
Ist das eine Nachricht?

        │
   Ja ──┴──► Nachricht bearbeiten

        │
   Nein
        │
        ▼
Ist das ein Event?

        │
   Ja ──┴──► Event prüfen

        │
   Nein
        ▼
Fehler zurückgeben


/*Bild-Infos*/

Zugbild (Hintergrund conventions): Bild von <a href="https://pixabay.com/de/users/whitechappel79-18016358/?utm_source=link-attribution&utm_medium=referral&utm_campaign=image&utm_content=5604562">Roger Jeffreys</a> auf <a href="https://pixabay.com/de//?utm_source=link-attribution&utm_medium=referral&utm_campaign=image&utm_content=5604562">Pixabay</a>

Blumenwiese: Bild von <a href="https://pixabay.com/de/users/lum3n-1066559/?utm_source=link-attribution&utm_medium=referral&utm_campaign=image&utm_content=1406846">LUM3N</a> auf <a href="https://pixabay.com/de//?utm_source=link-attribution&utm_medium=referral&utm_campaign=image&utm_content=1406846">Pixabay</a>

Stadtmitte 
Bild von <a href="https://pixabay.com/de/users/noelsch-136390/?utm_source=link-attribution&utm_medium=referral&utm_campaign=image&utm_content=4468570">Noel</a> auf <a href="https://pixabay.com/de//?utm_source=link-attribution&utm_medium=referral&utm_campaign=image&utm_content=4468570">Pixabay</a>

UBahn 
Bild von <a href="https://pixabay.com/de/users/wal_172619-12138562/?utm_source=link-attribution&utm_medium=referral&utm_campaign=image&utm_content=9596810">wal_172619</a> auf <a href="https://pixabay.com/de//?utm_source=link-attribution&utm_medium=referral&utm_campaign=image&utm_content=9596810">Pixabay</a>



/////////////////////////////////

