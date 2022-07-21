<script setup>
import { ref } from "vue";
import toast from "@/alerts/toast";
import { useCardsStore } from "@/stores/cards";

const props = defineProps({
  toggle: Boolean,
  boardId: String,
});

const store = useCardsStore();

const title = ref("");

const addCard = () => {
  store.addCard(title.value, parseInt(props.boardId));
  toast("success", `Added "${title.value}" card`);

  title.value = "";

  console.log(store.cards);
};
</script>

<template>
  <div v-if="props.toggle" class="col-12 my-3">
    <form @submit.prevent="addCard" class="card shadow-sm">
      <div class="card-body p-4">
        <div class="form-group mb-3">
          <label for="title" class="form-label">Title</label>
          <input
            v-model="title"
            type="text"
            id="title"
            class="form-control shadow-sm"
            placeholder="Lorem ipsum"
            required
          />
        </div>
        <div class="form-group mt-4">
          <button
            type="submit"
            class="btn btn-sm btn-primary shadow-sm px-4 rounded-pill"
          >
            <i class="fas fa-save fa-sm me-1"></i>
            Save
          </button>
        </div>
      </div>
    </form>
  </div>
</template>
