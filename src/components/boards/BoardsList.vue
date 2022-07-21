<script setup>
import { storeToRefs } from "pinia";
import { useBoardsStore } from "@/stores/boards";
import { ref } from "vue";
import BoardsForm from "./BoardsForm.vue";

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
        <div class="card-body">
          <router-link
            :to="`boards/${board.id}`"
            class="stretched-link text-decoration-none text-dark"
          >
            <h2 class="fs-5 mb-0">{{ board.title }}</h2>
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>
