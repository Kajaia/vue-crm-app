<script setup>
import { useBoardsStore } from "@/stores/boards";

const props = defineProps({
  id: String,
});

const store = useBoardsStore();

console.log(store.getBoard(props.id));
</script>

<template>{{ props.id }}</template>
