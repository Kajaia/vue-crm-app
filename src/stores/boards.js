import { defineStore } from "pinia";

const updateBoardsStorage = (boards) => {
  localStorage.setItem("boards", JSON.stringify(boards));
};

export const useBoardsStore = defineStore({
  id: "boards",
  state: () => ({
    boards: localStorage.boards
      ? JSON.parse(localStorage.boards)
      : [
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
          {
            id: 4,
            title: "Dolor",
            description: "Dolor, sit amet...",
            color: "bg-info",
          },
        ],
  }),
  actions: {
    getBoard(id) {
      return this.boards.find((board) => board.id == id);
    },
    addBoard(title, description, color) {
      this.boards.push({
        id: this.boards.length + 1,
        title: title,
        description: description,
        color: color,
      });

      updateBoardsStorage(this.boards);
    },
    removeBoard(id) {
      this.boards = this.boards.filter((board) => board.id !== id);

      updateBoardsStorage(this.boards);
    },
  },
});
