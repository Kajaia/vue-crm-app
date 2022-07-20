<script setup>
import { useBoardsStore } from "@/stores/boards";
import CardsList from "../cards/CardsList.vue";

const props = defineProps({
  id: String,
});

const store = useBoardsStore();
const board = store.getBoard(props.id);
</script>

<template>
  <div class="row justify-content-center">
    <router-link to="/" class="text-decoration-none">
      <small>
        <i class="fas fa-angle-left fa-sm"></i>
        Go back
      </small>
    </router-link>
    <h1 class="fs-4 mt-3 mb-4">
      {{ board.title }}
    </h1>
    <CardsList :id="props.id" />
  </div>
</template>
