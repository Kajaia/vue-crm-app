<script setup>
import { useTasksStore } from "@/stores/tasks";
import { ref } from "vue";
import toast from "@/alerts/toast";

const props = defineProps({
  cardId: Number,
});

const store = useTasksStore();

const title = ref("");

const addTask = () => {
  store.addTask(title.value, props.cardId);

  toast("success", `Task "${title.value}" created`);

  title.value = "";
};
</script>

<template>
  <form @submit.prevent="addTask" class="input-group">
    <input
      v-model="title"
      type="text"
      class="form-control py-1 shadow-sm"
      placeholder="Lorem ipsum"
      required
    />
    <button type="submit" class="btn btn-sm btn-primary shadow-sm">
      <i class="fas fa-check"></i>
    </button>
  </form>
</template>
