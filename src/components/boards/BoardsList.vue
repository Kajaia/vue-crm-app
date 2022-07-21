<script setup>
import { storeToRefs } from "pinia";
import { ref } from "vue";
import { useBoardsStore } from "@/stores/boards";
import BoardsForm from "@/components/boards/BoardsForm.vue";
import BoardRemove from "@/components/boards/BoardRemove.vue";

const store = useBoardsStore();
const { boards } = storeToRefs(store);

const addBoardToggle = ref(false);
</script>

<template>
  <div class="row justify-content-center">
    <div class="d-flex align-items-center justify-content-between">
      <h1 class="fs-4">Boards</h1>
      <button
        v-if="!addBoardToggle"
        @click="addBoardToggle = true"
        class="btn btn-sm btn-link text-decoration-none"
      >
        <i class="fas fa-plus fa-sm"></i>
        Add board
      </button>
      <button
        v-else
        @click="addBoardToggle = false"
        class="btn btn-sm btn-link text-decoration-none"
      >
        <i class="fas fa-times fa-sm"></i>
        Cancel
      </button>
    </div>
    <BoardsForm :toggle="addBoardToggle" />
    <div
      v-for="board in boards"
      :key="board.id"
      class="col-12 col-md-6 col-lg-4 col-xl-3 my-2"
    >
      <div :class="board.color" class="card border-0 shadow-sm">
        <router-link :to="`boards/${board.id}`">
          <img
            class="w-100 rounded-top"
            :src="`https://picsum.photos/id/${board.id}/250/150`"
            :alt="board.title"
          />
        </router-link>
        <div
          class="card-body d-flex align-items-center justify-content-between gap-2"
        >
          <h2 class="fs-5 mb-0">{{ board.title }}</h2>
          <BoardRemove :id="board.id" :title="board.title" />
        </div>
      </div>
    </div>
    <div v-if="!boards.length">
      <p class="mb-0 text-center">No boards!</p>
    </div>
  </div>
</template>
