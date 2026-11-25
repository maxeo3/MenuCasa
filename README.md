# 🍽️ MenuCasa

Un'app web leggera per pianificare le **cene della settimana in base a cosa mangiano i bambini a pranzo** a scuola, e generare la **lista della spesa** ordinata per reparti dell'Esselunga.

![PWA](https://img.shields.io/badge/PWA-enabled-green) ![offline](https://img.shields.io/badge/offline-ready-blue)

## ✨ Caratteristiche
- **Menù scolastici sempre aggiornati**
  - 🎒 **Il grande** (scuola): una GitHub Action legge ogni mattina il menù dal sito della scuola e aggiorna `data/grande.json`.
  - 🧸 **Il piccolo** (nido): le 4 settimane a rotazione (inverno ed estate) sono in `data/piccolo.json`; la settimana corrente si calcola da sola.
- **Cene proposte con criterio**: se a pranzo hanno mangiato pesce, a cena carne/uova/legumi (e viceversa); niente pasta la sera se c'era già a pranzo; equilibrio settimanale (pesce 2-3, legumi 2-3, uova max 2…).
- **Pesce solo tra quelli graditi**: tonno, platessa, merluzzo, polipo, totano, seppie.
- **Weekend e giorni a casa**: pranzo e cena da pianificare; un bimbo malato o in vacanza si segna dal menu del giorno.
- **Lista della spesa** sommata per ingrediente, ordinata per reparti nel giro del negozio (ordine modificabile), con **condivisione su WhatsApp**.
- **Lista sempre aperta (al posto di Bring!)**: *Aggiungi prodotti* apre un catalogo di oltre 300 prodotti con le emoji, diviso per reparto, con **I soliti** e **Comprati di recente** in cima e la ricerca. Si possono aggiungere note (quantità, marca), e **Spesa fatta** toglie dalla lista quello che è nel carrello. Il catalogo si allarga in `catalog.js`.
- **Importare da Bring!**: in Bring! condividi la lista come testo e incollala in *Aggiungi prodotti → Incolla una lista* (un prodotto per riga o separati da virgole).
- **Due telefoni, una settimana**: con il *codice famiglia* i telefoni di casa vedono lo stesso piano e la stessa lista, anche le spunte fatte al supermercato.
- **Ricettario** di partenza (oltre 50 piatti) con preferiti, "mai più" e ricette personali.
- **Serata pizza** collegata a [MetroPizza](https://maxeo3.github.io/Metropizza/).

## 👨‍👩‍👧‍👦 Sincronizzazione tra telefoni
Usa Firebase (piano gratuito Spark): login anonimo + Firestore.
1. Crea un progetto su [console.firebase.google.com](https://console.firebase.google.com), aggiungi un'app **Web** e copia la configurazione in `firebase-config.js`.
2. *Authentication → Metodo di accesso*: abilita **Anonimo**.
3. *Firestore Database*: crea il database (regione europea) e incolla in *Regole* il contenuto di `firestore.rules`.
4. Nell'app: *Impostazioni → Famiglia e telefoni → Crea la famiglia*, poi **Invia** il link all'altro telefono (una volta sola).

Senza configurazione l'app funziona lo stesso, con i dati solo sul telefono. Il codice famiglia è la chiave di accesso: tenetelo per voi.

## 🔄 Aggiornare i menù
- **Il grande**: automatico (Action *Aggiorna menù del grande*, avviabile anche a mano dalla scheda *Actions*). Se il sito cambia aspetto, nell'app c'è *Impostazioni → Incolla a mano*.
- **Il piccolo**: quando arriva il nuovo PDF, aggiornare `data/piccolo.json` (stessa struttura) e, se serve, la settimana corrente da *Impostazioni*.

> Nota: GitHub sospende le Action programmate dopo 60 giorni senza attività nel repository. Se succede, basta riattivarla dalla scheda *Actions*.

## 🚀 Come usarla
Apri l'app, premi **Proponi** nella settimana, cambia quello che non ti convince toccando la cena, poi vai su **Spesa** e condividi la lista.
