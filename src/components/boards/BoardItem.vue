<script setup>
import { useBoardsStore } from "@/stores/boards";
import { ref } from "vue";
import CardsList from "@/components/cards/CardsList.vue";
import CardsForm from "@/components/cards/CardsForm.vue";

const props = defineProps({
  id: String,
});

const store = useBoardsStore();
const board = store.getBoard(props.id);

const addToggle = ref(false);
</script>

<template>
  <div class="row justify-content-center">
    <router-link to="/" class="text-decoration-none">
      <small>
        <i class="fas fa-angle-left fa-sm"></i>
        Go back
      </small>
    </router-link>
    <div class="d-flex align-items-center justify-content-between mt-3">
      <h1 class="fs-4">{{ board.title }}</h1>
      <button
        v-if="!addToggle"
        @click="addToggle = true"
        class="btn btn-sm btn-link text-decoration-none"
      >
        <i class="fas fa-plus fa-sm"></i>
        Add card
      </button>
      <button
        v-else
        @click="addToggle = false"
        class="btn btn-sm btn-link text-decoration-none"
      >
        <i class="fas fa-times fa-sm"></i>
        Cancel
      </button>
    </div>
    <CardsForm :toggle="addToggle" :boardId="props.id" />
    <CardsList :id="props.id" />
  </div>
</template>
