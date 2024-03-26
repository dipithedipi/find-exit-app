<template>
    <div class="w-11/12 container mx-auto">
        <div v-for="floor in floors" :key="floor">
            <details open>
                <summary class="text-xl font-medium divider" style="padding-inline-end: 0px; display: flex; align-items: center;" @click="openFloors[floor]=!openFloors[floor]">
                    <div class="pb-1">Piano {{ floor === 1 ? "Terra" : floor-1 }}</div>
                    <div v-if="isOpen(floor)" class="ml-auto">
                        <span class="material-symbols-outlined scale-150">
                            arrow_drop_down
                        </span>
                    </div>
                    <div v-else class="ml-auto">
                        <span class="material-symbols-outlined scale-150">
                            arrow_right
                        </span>
                    </div>
                </summary>
                <div class="sm:px-6 pt-3">
                    <div class="pb-12 grid grid-cols-1 gap-x-3 gap-y-6 place-items-center sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4">
                        <ClassroomCard v-for="room of roomsOnFloor(floor)" :name="room.Name" :longName="room.Longname" :gatheringPoint="room.PuntoDiRaccolta" :floor="room.Piano" :building="''"/>
                    </div>
                </div>
            </details>
        </div>
    </div>
</template>


<script>
import ClassroomCard from "../components/ClassroomCard.vue";
import { sortRooms } from "../utils/sortRooms.js";

export default {
    data() {
        return {
            rooms: [],
            palazzina: null,
            floors: 0,
            nearestCollectionPoint: null,
            colors: ['bg-red-600', 'bg-pink-600', 'bg-yellow-400', 'bg-green-800', 'bg-teal-400', 'bg-purple-800'],
            openFloors: [true, true, true, true, true]
        }
    },
    mounted() {
        this.palazzina = this.$route.params.id;
        console.log("palazzina", this.palazzina);

        fetch("../../public/rooms.json")
            .then(response => response.json())
            .then(data => {
                data = sortRooms(data);
                this.rooms = data.filter(room => room.Palazzina === this.palazzina);
                console.log(this.rooms);

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
        isOpen(floor) {
            return this.openFloors[floor];
        },
        toggleOpen(floor) {
            this.openFloors[floor] = !this.openFloors[floor];
        }
    },
    components: {
        ClassroomCard
    }
}
</script>
