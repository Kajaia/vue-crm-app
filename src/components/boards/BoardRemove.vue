<script setup>
import toast from "@/alerts/toast";
import { useBoardsStore } from "@/stores/boards";
import { storeToRefs } from "pinia";
import { useCardsStore } from "../../stores/cards";

const props = defineProps({
  id: Number,
  title: String,
  color: String,
});

const store = useBoardsStore();

const cardsStore = useCardsStore();

const removeBoard = () => {
  console.log(props.id);
  store.removeBoard(props.id);

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
