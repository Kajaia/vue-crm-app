<script setup>
import { computed } from "@vue/reactivity";
import { useTasksStore } from "@/stores/tasks";
import TaskRemove from "@/components/tasks/TaskRemove.vue";

const props = defineProps({
  cardId: Number,
});

const store = useTasksStore();

const tasks = computed(() => store.getTasksByCardId(props.cardId));
</script>

<template>
  <ul v-if="tasks.length" class="m-0">
    <div
      v-for="task in tasks"
      :key="task.id"
      class="d-flex align-items-center justify-content-between"
    >
      <li>{{ task.title }}</li>
      <TaskRemove :id="task.id" :title="task.title" />
    </div>
  </ul>
  <p v-else class="mb-0 text-center">No tasks!</p>
</template>
