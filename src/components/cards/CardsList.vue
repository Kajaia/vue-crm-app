<script setup>
import { useCardsStore } from "@/stores/cards";
import { computed } from "@vue/reactivity";
import CardRemove from "@/components/cards/CardRemove.vue";

const props = defineProps({
  id: String,
});

const store = useCardsStore();
const cards = computed(() => store.getCardsByBoardId(props.id));
</script>

<template>
  <div v-for="card in cards" :key="card.id" class="col-md-4 my-3">
    <div class="card shadow-sm">
      <div
        class="card-header d-flex align-items-center justify-content-between"
      >
        <h2 class="fs-5 mb-0">
          {{ card.title }}
        </h2>
        <CardRemove :id="card.id" :title="card.title" />
      </div>
      <div class="card-body">
        <p class="mb-0">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iste,
          maiores architecto. Nulla dolorum similique ex accusantium quisquam
          molestias doloribus doloremque necessitatibus, commodi iure nisi quod
          vero ducimus ad possimus quidem.
        </p>
      </div>
    </div>
  </div>
  <div v-if="!cards.length" class="col-12">
    <p class="mb-0 text-center">No cards!</p>
  </div>
</template>
