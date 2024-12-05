Simple Trello Clone
Un proiect de clonare a aplicației Trello, realizat ca parte dintr-un task educativ. 
Acest proiect este un exemplu simplificat al unei aplicații de gestionare a sarcinilor, inspirată de Trello, unde utilizatorii pot adăuga, muta actualiza și șterge carduri de pe liste.

Descriere
Simple Trello Clone este o aplicație web care imită funcționalitățile de bază ale aplicației Trello. 
Aceasta permite utilizatorilor să creeze și să organizeze carduri în liste. Aplicația folosește tehnologii moderne precum React pentru a crea o interfață interactivă.

Tehnologii folosite

React pentru front-end
TypeScript pentru logica aplicației
CSS pentru stilizare
GitHub pentru versionare și controlul codului sursă
Vercel pentru Deploy

Instalare
Pre-rechizite
Node.js
npm

Pași de instalare
Clonează repo-ul pe mașina ta locală:
git clone https://github.com/DCN13/Trello.git

Navighează în directorul proiectului:
cd trello

Instalează dependențele:
npm install

Rulare aplicație:
npm start

Aceasta va lansa aplicația pe http://localhost:3000 (sau alt port, în funcție de configurație).

Funcționalități

Colecție de panouri
La prima deschidere a aplicației, utilizatorul va vedea o listă de panouri afișate 
într-o vizualizare asemănătoare grilei. 

Utilizatorul poate:

Crea un panou nou și îi poate da un nume
Șterge un panou
Crea liste de carduri
Edita liste de carduri


Când un panou este selectat, se deschide o pagină cu liste de carduri, 
fiecare listă fiind afișată ca o coloană verticală. Utilizatorul poate:

Crea o nouă listă și îi poate da un nume
Șterge o listă
Edita listele


Utilizatorul poate adăuga un card nou la o listă, oferindu-i un titlu și o descriere. 
Când face clic pe un card, acesta se deschide într-o fereastră modală, unde utilizatorul poate:
Șterge cardul si edita
Colecție de valori


Aplicația va colecta date despre comportamentul utilizatorilor,
 folosind instrumente precum Posthog sau alte alternative pentru a urmări utilizarea 
 aplicației și pentru a face îmbunătățiri ulterioare bazate pe decizii datate. În acest caz, 
 urmărim următoarele valori:

Crearea ștergerea panourilor, listelor și cardurilor
Numărul de interacțiuni ale utilizatorilor cu aplicația


Build
Pentru a crea build-ul aplicației pentru producție, rulează:

npm run build

Disponibilitate
Aplicația poate fi accesată pe link-ul live.
https://trello-beryl-seven.vercel.app/


Decizii tehnologice
Am ales să folosim React și TypeScript pentru a crea aplicația datorită următoarelor motive:

React oferă o structură modulară și eficientă pentru crearea de aplicații interactive, 
iar TypeScript ne ajută să scriem un cod mai sigur și mai ușor de întreținut.

Vercel a fost ales pentru deployment datorită integrării ușoare cu Next.js (care poate fi 
utilizat ulterior pentru extinderea aplicației), rapidității în implementare și a scalabilității.


Concluzie
Acesta este un proiect educațional simplificat ce prezintă funcționalitățile de baz
ă ale unui sistem de gestionare a sarcinilor similar cu Trello. Este destinat să ofere o 
înțelegere solidă a modului în care aplicațiile de acest tip sunt construite și să ajute la 
consolidarea cunoștințelor despre React si TypeScript
