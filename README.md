## Requisiti

Prima di iniziare, assicurati di avere i seguenti strumenti installati e configurati:

1. **Node.js**
   - Verifica che Node.js sia installato eseguendo il comando:
     ```bash
     node -v
     ```

## Configurazione

Dopo aver clonato il repository, segui questi passaggi:

1. **Rimozione di ESLint (opzionale)**
   - Se durante l'installazione delle dipendenze si riscontrano problemi relativi a ESLint, elimina tutte le dipendenze e configurazioni di ESLint dal progetto.
   - Apri il file `package.json` e rimuovi tutte le voci relative a ESLint.

   - Elimina anche il file di configurazione di ESLint `eslint.config.mjs`.

2. **Installa le dipendenze**
   - Esegui il seguente comando nella directory del progetto frontend per installare tutte le dipendenze necessarie:
     ```bash
     npm install
     ```

3. **Avvia l'applicazione**
   - Esegui il seguente comando per avviare l'applicazione:
     ```bash
     npm start
     ```
   - L'applicazione dovrebbe ora essere in esecuzione sulla porta specificata (di default `localhost:3000`).

I dati visualizzati su questo sito sono forniti a scopo dimostrativo e di test. Essi non sono di proprietà dell'autore, ma sono utilizzati a fini illustrativi e non commerciali. Nel caso si desideri accedere ai dati completi, si prega di visitare il sito ufficiale: geoportale.cartografia.agenziaentrate.gov.it, dove è possibile trovare tutte le informazioni pertinenti.

Questo README fornisce istruzioni chiare su come verificare le installazioni di Node.js e come installare le dipendenze e come avviare il front-end.