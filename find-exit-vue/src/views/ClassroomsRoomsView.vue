<template>
    <div class="w-11/12 container mx-auto">
        <div v-for="floor in floors" :key="floor">
            <details>
                <summary class="collapse-title text-xl font-medium">Piano {{ floor === 1 ? "Terra" : floor-1 }}</summary>
                <div class="collapse-title grid grid-cols-1 gap-x-3 gap-y-6 place-items-center sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4">
                    <div class="pl-8" v-for="room in roomsOnFloor(floor)" :key="room.ROOM_ID">
                        <div :class="['pd-10', 'card', 'w-72', 'h-20', 'shadow-xl', 'border-gray-500', 'border-2', 'flex', 'flex-col', 'justify-center', 'items-center', getCardColor(room.PuntoDiRaccolta)]">
                            <div class="flex space-x-4 justify-center items-center">
                                <div class="text-xl pl-2">{{ room.Longname }}</div>
                                <div class="flex pr-2">
                                    <span class="material-symbols-outlined">
                                    arrow_forward
                                    </span>
                                    <span class="line-clamp-1 material-symbols-outlined">
                                    counter_{{ room.PuntoDiRaccolta }}
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </details>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            rooms: [],
            palazzina: null,
            floors: 0,
            nearestCollectionPoint: null, // Aggiungi una variabile per memorizzare il punto di raccolta più vicino
            colors: ['bg-red-600', 'bg-pink-600', 'bg-yellow-400', 'bg-green-800', 'bg-teal-400', 'bg-purple-800'] // Definisci i sei colori
        }
    },
    mounted() {
        this.palazzina = this.$route.params.id;
        console.log("palazzina", this.palazzina);

        fetch("../../public/rooms.json")
            .then(response => response.json())
            .then(data => {
                this.rooms = data.filter(room => room.Palazzina === this.palazzina);
                console.log(this.rooms);

                // Calcola il numero massimo di piani per la palazzina specifica
                this.floors = Math.max(...this.rooms.map(room => Number(room.Piano)));
            });
    },
    methods: {
        roomsOnFloor(floor) {
            return this.rooms.filter(room => room.Palazzina === this.palazzina && Number(room.Piano) === floor);
        },
        getCardColor(collectionPoint) {
            collectionPoint = Number(collectionPoint);
            return this.colors[collectionPoint-1]; 
        },
    }
}
</script>
