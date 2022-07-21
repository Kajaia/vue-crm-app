<script setup>
import toast from "../../alerts/toast";
import { useCardsStore } from "../../stores/cards";

const props = defineProps({
  id: Number,
  title: String,
});

const store = useCardsStore();

const removeCard = () => {
  store.removeCard(props.id, props.title);

  toast("success", `Removed "${props.title}" card`);
};
</script>

<template>
  <button @click="removeCard" class="btn btn-sm">
    <i class="fas fa-trash fa-sm"></i>
  </button>
</template>
