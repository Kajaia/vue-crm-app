import { defineStore } from "pinia";
import { computed } from "vue";
import { useCardsStore } from "@/stores/cards";

const updateTasksStorage = (tasks) => {
  localStorage.setItem("tasks", JSON.stringify(tasks));
};

export const useTasksStore = defineStore({
  id: "tasks",
  state: () => ({
    tasks: localStorage.tasks
      ? JSON.parse(localStorage.tasks)
      : [
          { id: 1, title: "Lorem ipsum", position: 1, card_id: 2 },
          { id: 2, title: "Dolor", position: 1, card_id: 1 },
          { id: 3, title: "Sit amet", position: 2, card_id: 2 },
          { id: 4, title: "Dolore ipsem", position: 1, card_id: 3 },
          { id: 5, title: "Sit dolor", position: 2, card_id: 3 },
        ],
  }),
  actions: {
    getTasksByCardId(id) {
      return this.tasks.filter((task) => task.card_id === id);
    },
    removeTask(id) {
      this.tasks = this.tasks.filter((task) => task.id !== id);

      updateTasksStorage(this.tasks);
    },
    addTask(title, cardId) {
      this.tasks.push({
        id: this.tasks.length + 1,
        title: title,
        position: this.tasks.length + 1,
        card_id: cardId,
      });

      updateTasksStorage(this.tasks);
    },
    clearTasksByCardId(cardId) {
      this.tasks = this.tasks.filter((task) => task.card_id !== cardId);

      updateTasksStorage(this.tasks);
    },
    clearTasksFromBoardCards(boardId) {
      const store = useCardsStore();

      const cards = store.getCardsByBoardId(boardId);

      cards.forEach((card) => {
        this.clearTasksByCardId(card.id);
      });
    },
  },
});
