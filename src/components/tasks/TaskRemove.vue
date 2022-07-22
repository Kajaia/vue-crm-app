<script setup>
import { useTasksStore } from "@/stores/tasks";
import toast from "@/alerts/toast";

const props = defineProps({
  id: Number,
  title: String,
});

const store = useTasksStore();

const removeTask = () => {
  store.removeTask(props.id);

  toast("success", `Removed "${props.title}" task`);
};
</script>

<template>
  <button @click="removeTask" class="btn btn-sm">
    <i class="fas fa-times fa-sm"></i>
  </button>
</template>
