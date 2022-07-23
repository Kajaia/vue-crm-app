<script setup>
import { useCardsStore } from "@/stores/cards";
import { ref } from "vue";
import { computed } from "@vue/reactivity";
import CardRemove from "@/components/cards/CardRemove.vue";
import TasksList from "@/components/tasks/TasksList.vue";
import TasksForm from "@/components/tasks/TasksForm.vue";

const props = defineProps({
  id: String,
});

const store = useCardsStore();
const cards = computed(() => store.getCardsByBoardId(props.id));

const addTaskToggle = ref(false);
</script>

<template>
  <div v-for="card in cards" :key="card.id" class="col-md-4 my-3">
    <div class="card h-100 shadow-sm">
      <div
        class="card-header d-flex align-items-center justify-content-between"
      >
        <h2 class="fs-5 mb-0">
          {{ card.title }}
        </h2>
        <CardRemove :id="card.id" :title="card.title" />
      </div>
      <div class="card-body">
        <TasksList :cardId="card.id" />
      </div>
      <div class="card-footer">
        <TasksForm :cardId="card.id" />
      </div>
    </div>
  </div>
  <div v-if="!cards.length" class="col-12">
    <p class="mb-0 text-center">No cards!</p>
  </div>
</template>
