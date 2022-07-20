<script setup>
import { useBoardsStore } from "@/stores/boards";

const props = defineProps({
  id: String,
});

const store = useBoardsStore();

const board = store.getBoard(props.id);
</script>

<template>{{ board.title }}</template>
