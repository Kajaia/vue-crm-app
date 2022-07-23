<script setup>
import toast from "@/alerts/toast";
import { useBoardsStore } from "@/stores/boards";
import { useCardsStore } from "@/stores/cards";
import { useTasksStore } from "@/stores/tasks";

const props = defineProps({
  id: Number,
  title: String,
  color: String,
});

const store = useBoardsStore();

const cardsStore = useCardsStore();

const tasksStore = useTasksStore();

const removeBoard = () => {
  store.removeBoard(props.id);
  tasksStore.clearTasksFromBoardCards(props.id);
  cardsStore.clearCardsByBoardId(props.id);

  toast("success", `Removed "${props.title}" board`);
};
</script>

<template>
  <button
    @click="removeBoard"
    :class="props.color === 'bg-dark' ? 'text-light' : 'text-dark'"
    class="btn btn-sm"
  >
    <i class="fas fa-trash fa-sm"></i>
  </button>
</template>
