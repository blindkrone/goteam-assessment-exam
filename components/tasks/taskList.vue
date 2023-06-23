<template>
    <div class="taskCon">

        <div class="task" v-for="task in tasks">

            <h2>{{ task.title }}</h2>
            <p>{{ (task.desc) ? task.desc : 'No Description' }}</p>

            <span class="important" v-if="task.is_important">
                <client-only>
                    <font-awesome-icon icon="fa-solid fa-star" />
                </client-only>
            </span>

            <div class="actions">
                <client-only>
                    <button type="button" @click="modalToggle.showModal('taskUpdate', task.id)"><font-awesome-icon icon="fa-solid fa-pen-to-square" size="lg" /></button>
                    <button type="button" @click="taskComplete(task.id)"><font-awesome-icon icon="fa-solid fa-circle-check" size="lg" /></button>
                    <button type="button" @click="modalToggle.showModal('taskDelete', task.id)"><font-awesome-icon icon="fa-solid fa-trash" size="lg" /></button>       
                </client-only>
            </div>
            
        </div>

        <Modal v-if="modalToggle.isShown.taskDelete">
            <tasksTaskDelete />
        </Modal>

        <Modal v-if="modalToggle.isShown.taskUpdate">
            <tasksTaskUpdate :taskId="modalToggle.taskId" />
        </Modal>
        
    </div>
</template>

<script setup>
    import { useModalToggle } from '~/store/modal'
    const modalToggle = useModalToggle()
    
    const propData = defineProps(['tasks'])
    const tasks = propData.tasks

    const taskComplete = async (taskId) => {

        const data = {
            is_done: 'Completed'
        }

        await useFetch(`https://63906a8d65ff41831112cdd1.mockapi.io/api/v1/tasks/${taskId}`,
        {
            method: 'PUT',
            body: JSON.stringify(data)
        })
    }
</script>