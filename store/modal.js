import { defineStore } from 'pinia'

export const useModalToggle = defineStore("modalToggle", {
  state: () => ({
    taskId: '',
    isShown: {
      taskAdd: false,
      taskUpdate: false,
      taskDelete: false,
    },
  }),
  actions: {
    showModal(...args) {
      if(args[0] == 'taskAdd')
        this.isShown.taskAdd = true

      if(args[0] == 'taskUpdate') {
        this.isShown.taskUpdate = true
        this.taskId = args[1]
      }

      if(args[0] == 'taskDelete') {
        this.isShown.taskDelete = true
        this.taskId = args[1]
      }
    },
    hideModal(type) {
      if(type == 'taskAdd')
        this.isShown.taskAdd = false

      if(type == 'taskUpdate') {
        this.isShown.taskUpdate = false
        this.taskId = ''
      }

      if(type == 'taskDelete') {
        this.isShown.taskDelete = false
        this.taskId = ''
      }
    }
  }
})