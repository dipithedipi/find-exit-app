<template>
    <div class="container mx-auto">
        <div class="text-xl font-medium pb-4 pl-6 sm:pl-32">
            Punti di raccolta:
        </div>
        <div class="w-8/12 mx-auto">
            <div class="grid grid-cols-2 sm:grid-cols-3 place-items-center gap-y-6 gap-x-6 sm:gap-x-0">
                <button class="border-2 h-32 w-32 md:w-48 md:ml-16 border-gray-700 rounded-xl hover:border-gray-700 btn"
                    @click="getRooms(1)">
                    <div class="bg-red-600 py-8 px-6 badge">
                        <span class="line-clamp-1 scale-150 material-symbols-outlined">
                            counter_1
                        </span>
                    </div>
                </button>
                <button class="border-2 h-32 w-32 md:w-48 border-gray-700 rounded-xl hover:border-gray-700 btn"
                    @click="getRooms(2)">
                    <div class="bg-pink-600 py-8 px-6 badge">
                        <span class="line-clamp-1 scale-150 material-symbols-outlined">
                            counter_2
                        </span>
                    </div>
                </button>
                <button class="border-2 h-32 w-32 md:w-48 md:mr-16 border-gray-700 rounded-xl hover:border-gray-700 btn"
                    @click="getRooms(3)">
                    <div class="bg-yellow-400 py-8 px-6 badge">
                        <span class="line-clamp-1 scale-150 material-symbols-outlined">
                            counter_3
                        </span>
                    </div>
                </button>
                <button class="border-2 h-32 w-32 md:w-48 md:ml-16 border-gray-700 rounded-xl hover:border-gray-700 btn"
                    @click="getRooms(4)">
                    <div class="bg-green-800 py-8 px-6 badge">
                        <span class="line-clamp-1 scale-150 material-symbols-outlined">
                            counter_4
                        </span>
                    </div>
                </button>
                <button class="border-2 h-32 w-32 md:w-48 border-gray-700 rounded-xl hover:border-gray-700 btn"
                    @click="getRooms(5)">
                    <div class="bg-teal-400 py-8 px-6 badge">
                        <span class="line-clamp-1 scale-150 material-symbols-outlined">
                            counter_5
                        </span>
                    </div>
                </button>
                <button class="border-2 h-32 w-32 md:w-48 md:mr-16 border-gray-700 rounded-xl hover:border-gray-700 btn"
                    @click="getRooms(6)">
                    <div class="bg-purple-800 py-8 px-6 badge">
                        <span class="line-clamp-1 scale-150 material-symbols-outlined">
                            counter_6
                        </span>
                    </div>
                </button>
            </div>
            <div class="pt-6 flex justify-center sm:mx-2">
                <button class="border-2 h-24 w-full sm:w-10/12 border-gray-700 rounded-xl hover:border-gray-700 btn"
                    @click="getRooms(-1)">
                    <div class=" bg-gray-500 py-8 px-6 badge">
                        <span class="line-clamp-1 scale-150 border-2 rounded-lg">
                            <div class="px-1 text-white">
                                TUTTE
                            </div>
                        </span>
                    </div>
                </button>
            </div>
        </div>
        <div class="w-10/12 mx-auto pb-4">
            <div class="divider divider-neutral text-md sm:text-xl pt-6 pb-4">Aule</div>
            <div class="mx-16 grid grid-cols-1 gap-x-3 gap-y-6 place-items-center sm:grid-cols-2 md:grid-cols-3" v-if="selectedCollectionPoint != null">
                <div v-for="room in filteredRooms()" :key="room.ROOM_ID">
                    <div
                        :class="['pd-10', 'card', 'w-72', 'h-20', 'shadow-xl', 'border-gray-500', 'border-2', 'flex', 'flex-col', 'justify-center', 'items-center', getCardColor(room.PuntoDiRaccolta)]">
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
            <div class="w-fit mx-auto" v-else>
                Seleziona un punto di raccolta
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            rooms: null,
            selectedCollectionPoint: null,
            colors: ['bg-red-600', 'bg-pink-600', 'bg-yellow-400', 'bg-green-800', 'bg-teal-400', 'bg-purple-800']
        }
    },
    mounted() {
        fetch("../../public/rooms.json")
            .then(response => response.json())
            .then(data => {
                this.rooms = data;
                this.rooms = this.rooms.filter(room => room.Piano !== "0");
                console.log(this.rooms);
            });
    },
    methods: {
        getLessonHour() {
            const date = new Date()
            const hour = date.getHours()

            return hour - 7
        },
        getRooms(PuntoDiRaccolta) {
            console.log("Punto di raccolta selezionato:", PuntoDiRaccolta);
            this.selectedCollectionPoint = PuntoDiRaccolta; // Aggiorna il punto di raccolta selezionato
        },
        getCardColor(collectionPoint) {
            collectionPoint = Number(collectionPoint);
            return this.colors[collectionPoint - 1];
        },
        filteredRooms() {
            if (this.selectedCollectionPoint == -1) {
                return this.rooms;
            }
            return this.rooms.filter(room => room.PuntoDiRaccolta === String(this.selectedCollectionPoint));
        }
    }
}
</script>
