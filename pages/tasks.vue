<template>
    <div class="wrapper">
        <!-- <NuxtLink to="/">Back to Home</NuxtLink> -->

        <div class="header">
            <h1>Start Adding Tasks Here</h1>
            <button @click="modalToggle.showModal('taskAdd')" class="addTaskBtn">Add Task</button>
        </div>

        <Modal v-if="modalToggle.isShown.taskAdd">
            <TasksTaskAdd />
        </Modal>

        <tasksTaskList :tasks="tasks" />
    </div>
</template>

<script setup>
    import { useModalToggle } from '~/store/modal'
    const modalToggle = useModalToggle()

    const { data: tasks } = await useFetch('https://63906a8d65ff41831112cdd1.mockapi.io/api/v1/tasks')
</script>