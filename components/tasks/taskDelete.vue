<template>
    <form class="taskDelete" @submit="deleteTask()">
        <h4>Are you sure you want to delete?</h4>
        <div class="actions">
            <button type="submit">Delete</button>
            <button type="button" @click="modalToggle.hideModal('taskDelete')">Cancel</button>
        </div>
    </form>
</template>

<script setup>
    import { useModalToggle } from '~/store/modal'
    const modalToggle = useModalToggle()

    const deleteTask = async () => {
        await useFetch(`https://63906a8d65ff41831112cdd1.mockapi.io/api/v1/tasks/${modalToggle.taskId}`, {
            method: 'DELETE',
        })
    }
</script>