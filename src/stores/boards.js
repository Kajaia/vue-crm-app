import { defineStore } from "pinia";

export const useBoardsStore = defineStore({
  id: "boards",
  state: () => ({
    boards: [
      {
        id: 1,
        title: "Lorem",
        description: "Dolor, sit amet...",
        color: "bg-warning",
      },
      {
        id: 2,
        title: "Ipsum",
        description: "Dolor, sit amet...",
        color: "bg-danger",
      },
      {
        id: 3,
        title: "Amet",
        description: "Dolor, sit amet...",
        color: "bg-success",
      },
    ],
  }),
  actions: {
    getBoard(id) {
      return this.boards.find((board) => board.id == id);
    },
  },
});
