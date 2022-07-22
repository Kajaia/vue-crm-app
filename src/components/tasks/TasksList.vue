<script setup>
import { computed } from "@vue/reactivity";
import { useTasksStore } from "@/stores/tasks";

const props = defineProps({
  cardId: Number,
});

const store = useTasksStore();

const tasks = computed(() => store.getTasksByCardId(props.cardId));
</script>

<template>
  <ul v-if="tasks.length" class="m-0">
    <li v-for="task in tasks" :key="task.id">{{ task.title }}</li>
  </ul>
  <p v-else class="mb-0 text-center">No tasks!</p>
</template>
