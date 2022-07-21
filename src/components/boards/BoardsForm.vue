<script setup>
import { ref } from "vue";
import toast from "@/alerts/toast";
import { useBoardsStore } from "@/stores/boards";

const props = defineProps({
  toggle: Boolean,
});

const store = useBoardsStore();

const title = ref("");
const description = ref("");
const color = ref("");

const addBoard = () => {
  store.addBoard(title.value, description.value, color.value);
  toast("success", `Added "${title.value}" board`);

  title.value = "";
  description.value = "";
  color.value = "";
};
</script>

<template>
  <div v-if="props.toggle" class="col-12 my-3">
    <form @submit.prevent="addBoard" class="card shadow-sm">
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
        <div class="form-group mb-3">
          <label for="description" class="form-label">Description</label>
          <textarea
            v-model="description"
            type="text"
            id="description"
            class="form-control shadow-sm"
            placeholder="Lorem ipsum dolor, sit amet..."
            required
          ></textarea>
        </div>
        <div class="form-group mb-3">
          <label class="form-label">Choose color</label>
          <div class="d-flex align-items-center flex-wrap gap-2">
            <div class="form-check">
              <input
                class="form-check-input bg-light p-3 shadow-sm"
                type="radio"
                v-model="color"
                value="bg-light"
                checked
              />
            </div>
            <div class="form-check">
              <input
                class="form-check-input bg-dark p-3 shadow-sm"
                type="radio"
                v-model="color"
                value="bg-dark"
              />
            </div>
            <div class="form-check">
              <input
                class="form-check-input bg-primary p-3 shadow-sm"
                type="radio"
                v-model="color"
                value="bg-primary"
              />
            </div>
            <div class="form-check">
              <input
                class="form-check-input bg-secondary p-3 shadow-sm"
                type="radio"
                v-model="color"
                value="bg-secondary"
              />
            </div>
            <div class="form-check">
              <input
                class="form-check-input bg-success p-3 shadow-sm"
                type="radio"
                v-model="color"
                value="bg-success"
              />
            </div>
            <div class="form-check">
              <input
                class="form-check-input bg-warning p-3 shadow-sm"
                type="radio"
                v-model="color"
                value="bg-warning"
              />
            </div>
            <div class="form-check">
              <input
                class="form-check-input bg-danger p-3 shadow-sm"
                type="radio"
                v-model="color"
                value="bg-danger"
              />
            </div>
            <div class="form-check">
              <input
                class="form-check-input bg-info p-3 shadow-sm"
                type="radio"
                v-model="color"
                value="bg-info"
              />
            </div>
          </div>
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
