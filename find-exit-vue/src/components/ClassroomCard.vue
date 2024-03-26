<template>
  <div class="card w-64 bg-base-300 shadow-xl border-2 border-base-300 hover:border-gray-800">
    <div class="card-body p-4">
      <h2 class="pl-4 card-title">
        <div :class="'flex justify-center items-center w-7 h-7 rounded-full text-neutral-content p-1 '
          + (gatheringPoint === '1'
            ? 'bg-red-500'
            : gatheringPoint === '2'
              ? 'bg-pink-500'
              : gatheringPoint === '3'
                ? 'bg-yellow-500'
                : gatheringPoint === '4'
                  ? 'bg-green-500'
                  : gatheringPoint === '5'
                    ? 'bg-blue-500'
                    : gatheringPoint === '6'
                      ? 'bg-purple-500'
                      : 'bg-amber-600')">
          <span class="text-center">{{ gatheringPoint }}</span>
        </div>
        <div class="pr-4">
          {{ name }}
        </div>
        <div>
          <div class="w-24 border-2 py-6 px-4 border-gray-900 badge"> {{ building.charAt(0).toUpperCase() +
          building.slice(1) + "\n" + String(floor == 1 ? "P. Terra" : floor + "° Piano") }}</div>
        </div>
      </h2>
      <p class="pl-5 italic">
        {{ longName }}
      </p>
    </div>
  </div>
</template>

<script>
export default {
  props: ["name", "longName", "gatheringPoint", "floor", "building"]
}
</script>