/* Descrizione:
Iniziamo a lavorare alla nostra replica della nota app di messaggistica. L'esercitazione sará divisa in piú giornate, oggi iniziamo a lavorare alla prima milestone che vi
riporto di seguito:
Consigli:
lavorate ad una task per volta, finita la prima passate alla seconda
ragionate con calma sugli strumenti necessari per svolgere la seconda task,
leggete le pagine della documentazione che vi ho indicato oggi in classe.
Milestone 1☑️
Replica della grafica con la possibilità di avere messaggi scritti dall'utente (verdi) e dall'interlocutore (bianco) assegnando due classi CSS diverse
Visualizzazione dinamica della lista contatti: tramite la direttiva v-for, visualizzare nome e immagine di ogni contatto
Milestone 2☑️
● Visualizzazione dinamica dei messaggi: tramite la direttiva v-for, visualizzare tutti i
messaggi relativi al contatto attivo all’interno del pannello della conversazione
● Click sul contatto mostra la conversazione del contatto cliccato
Milestone 3☑️
● Aggiunta di un messaggio: l’utente scrive un testo nella parte bassa e digitando
“enter” il testo viene aggiunto al thread sopra, come messaggio verde
● Risposta dall’interlocutore: ad ogni inserimento di un messaggio, l’utente riceverà
un “ok” come risposta, che apparirà dopo 1 secondo.
Milestone 4
● Ricerca utenti: scrivendo qualcosa nell’input a sinistra, vengono visualizzati solo i
contatti il cui nome contiene le lettere inserite (es, Marco, Matteo Martina -> Scrivo
“mar” rimangono solo Marco e Martina)
 */

const { createApp } = Vue

createApp({
  data() {
    return {

        activeContact: 0, // numero dell'utente da visualizzare la chat

        userMsg : '',   //testo che inserisce l'utente

        userSearch : '', // testo che inserisce l'tente per cercare la chat

        contacts: [
            {
                name: 'Michele',
                avatar: './assets/img/avatar_1.jpg',
                visible: true,
                messages: [
                    {
                        date: '10/01/2020 15:30:55',
                        message: 'Hai portato a spasso il cane?',
                        status: 'sent'
                    },
                    {
                        date: '10/01/2020 15:50:00',
                        message: 'Ricordati di stendere i panni',
                        status: 'sent'
                    },
                    {
                        date: '10/01/2020 16:15:22',
                        message: 'Tutto fatto!',
                        status: 'received'
                    }
                ],
            },
            {
                name: 'Fabio',
                avatar: './assets/img/avatar_2.jpg',
                visible: true,
                messages: [
                    {
                        date: '20/03/2020 16:30:00',
                        message: 'Ciao come stai?',
                        status: 'sent'
                    },
                    {
                        date: '20/03/2020 16:30:55',
                        message: 'Bene grazie! Stasera ci vediamo?',
                        status: 'received'
                    },
                    {
                        date: '20/03/2020 16:35:00',
                        message: 'Mi piacerebbe ma devo andare a fare la spesa.',
                        status: 'sent'
                    }
                ],
            },
            {
                name: 'Samuele',
                avatar: './assets/img/avatar_3.jpg',
                visible: true,
                messages: [
                    {
                        date: '28/03/2020 10:10:40',
                        message: 'La Marianna va in campagna',
                        status: 'received'
                    },
                    {
                        date: '28/03/2020 10:20:10',
                        message: 'Sicuro di non aver sbagliato chat?',
                        status: 'sent'
                    },
                    {
                        date: '28/03/2020 16:15:22',
                        message: 'Ah scusa!',
                        status: 'received'
                    }
                ],
            },
            {
                name: 'Alessandro B.',
                avatar: './assets/img/avatar_4.jpg',
                visible: true,
                messages: [
                    {
                        date: '10/01/2020 15:30:55',
                        message: 'Lo sai che ha aperto una nuova pizzeria?',
                        status: 'sent'
                    },
                    {
                        date: '10/01/2020 15:50:00',
                        message: 'Si, ma preferirei andare al cinema',
                        status: 'received'
                    }
                ],
            },
            {
                name: 'Alessandro L.',
                avatar: './assets/img/avatar_5.jpg',
                visible: true,
                messages: [
                    {
                        date: '10/01/2020 15:30:55',
                        message: 'Ricordati di chiamare la nonna',
                        status: 'sent'
                    },
                    {
                        date: '10/01/2020 15:50:00',
                        message: 'Va bene, stasera la sento',
                        status: 'received'
                    }
                ],
            },
            {
                name: 'Claudia',
                avatar: './assets/img/avatar_5.jpg',
                visible: true,
                messages: [
                    {
                        date: '10/01/2020 15:30:55',
                        message: 'Ciao Claudia, hai novità?',
                        status: 'sent'
                    },
                    {
                        date: '10/01/2020 15:50:00',
                        message: 'Non ancora',
                        status: 'received'
                    },
                    {
                        date: '10/01/2020 15:51:00',
                        message: 'Nessuna nuova, buona nuova',
                        status: 'sent'
                    }
                ],
            },
            {
                name: 'Federico',
                avatar: './assets/img/avatar_7.jpg',
                visible: true,
                messages: [
                    {
                        date: '10/01/2020 15:30:55',
                        message: 'Fai gli auguri a Martina che è il suo compleanno!',
                        status: 'sent'
                    },
                    {
                        date: '10/01/2020 15:50:00',
                        message: 'Grazie per avermelo ricordato, le scrivo subito!',
                        status: 'received'
                    }
                ],
            },
            {
                name: 'Davide',
                avatar: './assets/img/avatar_8.jpg',
                visible: true,
                messages: [
                    {
                        date: '10/01/2020 15:30:55',
                        message: 'Ciao, andiamo a mangiare la pizza stasera?',
                        status: 'received'
                    },
                    {
                        date: '10/01/2020 15:50:00',
                        message: 'No, l\'ho già mangiata ieri, ordiniamo sushi!',
                        status: 'sent'
                    },
                    {
                        date: '10/01/2020 15:51:00',
                        message: 'OK!!',
                        status: 'received'
                    }
                ],
            }
        ]
    }

  },

  //function
  methods: {

    /**
     * 
     * @param {array or proxyModule} array expected array.messages
     * @param {string} destination expected 'received' or 'sent'
     * @returns number of object to find the last 'received' or 'sent'
     */
    
    lastMsgSend (array, destination) {
        const messageObj = [...array.messages];
        let lastSend=[];

        for (const key in messageObj) {

            if (messageObj[key].status === destination) {
                lastSend = [];
                lastSend.push(key)
            }
            
        }
        return lastSend;
    },

    sendMsg (){

        //se il campo dei messaggi non è vuoto
        if (this.userMsg !== ''){

            //recupero l'array corrispondente dei messaggi
            const dataMsg = this.contacts[this.activeContact].messages;
    
            //ottengo la data attuale
            const actualDate = new Date().toLocaleString();
    
            //pusho il nuovo messaggio nell'array corrispondente
            dataMsg.push({ date: actualDate, message:this.userMsg, status: 'sent'});
    
            //scorro in fondo alla pagina
            const chatWindow = document.querySelector('#message-window');
            chatWindow.scrollTop = chatWindow.scrollHeight;
    
            //libero il campo input una volta che ho inviato il messaggio
            this.userMsg = '';

            //risposta automatica
            this.autoResponse(dataMsg);
        }
    },

    autoResponse (dataMessage) {
        
        setTimeout(() => {

            //ottengo nuocamente la data attuale
            const actualDate = new Date().toLocaleString();

            //pusho il nuovo messaggio nell'array corrispondente
            dataMessage.push({ date: actualDate, message:'Ok!', status: 'received'});

          }, 1000);
    },

    searchContact (userInput) {
        console.log(userInput, '----------------------------------');
        let i = userInput.length;
        let nameSlice = [];
        
        this.contacts.forEach((element) => {
            const nameContact = element.name;
            nameSlice.push(nameContact.slice(0,i));
        });
        
        if (nameSlice.includes(userInput.charAt(0).toUpperCase() + userInput.slice(1))) {
            console.log('eccolo qua'); 
        } 
        console.log(nameSlice);
        console.log(userInput.charAt(0).toUpperCase() + userInput.slice(1));


        
          
// Expected output: "a"
// Expected output: "b"
// Expected output: "c"

    
    }
    
}, 

}
).mount('#app');