<script setup>
import toast from "@/alerts/toast";
import { useCardsStore } from "@/stores/cards";
import { useTasksStore } from "@/stores/tasks";

const props = defineProps({
  id: Number,
  title: String,
});

const store = useCardsStore();

const tasksStore = useTasksStore();

const removeCard = () => {
  store.removeCard(props.id, props.title);
  tasksStore.clearTasksByCardId(props.id);

  toast("success", `Removed "${props.title}" card`);
};
</script>

<template>
  <button @click="removeCard" class="btn btn-sm">
    <i class="fas fa-trash fa-sm"></i>
  </button>
</template>
