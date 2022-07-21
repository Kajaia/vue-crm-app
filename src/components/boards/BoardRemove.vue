<script setup>
import toast from "@/alerts/toast";
import { useBoardsStore } from "@/stores/boards";

const props = defineProps({
  id: Number,
  title: String,
  color: String,
});

const store = useBoardsStore();

const removeBoard = () => {
  console.log(props.id);
  store.removeBoard(props.id);

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
