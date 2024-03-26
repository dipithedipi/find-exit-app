export function sortRooms(oggetti) {
    // Funzione di confronto personalizzata
    function confronto(a, b) {
        const regex = /(\d+)-(\d+)/;
        const matchA = a.Name.match(regex);
        const matchB = b.Name.match(regex);

        if (!matchA && !matchB) {
            // Entrambi i nomi non contengono numeri, quindi li ordiniamo per ROOM_ID
            return a.ROOM_ID - b.ROOM_ID;
        } else if (!matchA) {
            // Solo il nome di a non contiene numeri, quindi a viene prima
            return -1;
        } else if (!matchB) {
            // Solo il nome di b non contiene numeri, quindi b viene prima
            return 1;
        } else {
            // Entrambi i nomi contengono numeri, quindi li ordiniamo in base ai numeri
            const [, primoA, secondoA] = matchA;
            const [, primoB, secondoB] = matchB;

            if (primoA === primoB) {
                // Se i primi numeri sono uguali, ordiniamo per il secondo numero
                return secondoA - secondoB;
            } else {
                // Altrimenti, ordiniamo per il primo numero
                return primoA - primoB;
            }
        }
    }

    // Ordinare l'array di oggetti
    return oggetti.sort(confronto);
}
