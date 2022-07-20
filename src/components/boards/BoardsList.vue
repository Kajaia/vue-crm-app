<script setup>
import { storeToRefs } from "pinia";
import { useBoardsStore } from "@/stores/boards";

const store = useBoardsStore();

const { boards } = storeToRefs(store);
</script>

<template>
  <div class="row justify-content-center mt-3">
    <div
      v-for="board in boards"
      :key="board.id"
      class="col-12 col-md-6 col-lg-4 col-xl-3"
    >
      <div :class="board.color" class="card border-0 shadow-sm">
        <div class="card-body">
          <h2 class="fs-5 mb-0">{{ board.title }}</h2>
        </div>
      </div>
    </div>
  </div>
</template>
