import { defineStore } from "pinia";

export const useCardsStore = defineStore({
  id: "cards",
  state: () => ({
    cards: [
      {
        id: 1,
        title: "ToDo",
        position: 1,
        board_id: 2,
      },
      {
        id: 2,
        title: "In Progress",
        position: 2,
        board_id: 2,
      },
      {
        id: 3,
        title: "Completed",
        position: 3,
        board_id: 2,
      },
      {
        id: 4,
        title: "ToDo",
        position: 1,
        board_id: 1,
      },
      {
        id: 5,
        title: "In Progress",
        position: 1,
        board_id: 3,
      },
      {
        id: 6,
        title: "Completed",
        position: 2,
        board_id: 3,
      },
    ],
  }),
  actions: {
    getCardsByBoardId(id) {
      return this.cards.filter((card) => card.board_id == id);
    },
    addCard(title, boardId) {
      this.cards.push({
        id: this.cards.length + 1,
        title: title,
        position: this.cards.length + 1,
        board_id: boardId,
      });
    },
  },
});
