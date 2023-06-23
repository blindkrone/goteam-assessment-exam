<template>
    <form class="taskAddUpdate" @submit="updateTask()">
        <input v-model="form.title" type="text" placeholder="Title..." required>
        <textarea v-model="form.desc" type="text" placeholder="I need to..." required></textarea>

        <div class="groups">
            <div class="inputGroup">
                <label for="dueDate">Due on:</label>
                <input v-model="form.due" type="date" id="dueDate" placeholder="Due Date" required>
            </div>
            <div class="inputGroup">
                <label for="dueDate">Task Status:</label>
                <select v-model="form.is_done">
                    <option value="Pending">Pending</option>
                    <option value="Completed">Completed</option>
                </select>
            </div>
        </div>

        <div class="bottom_groups">
            <div>
                <input type="checkbox" id="important" v-model="form.is_important">
                <label for="important">Mark as Important</label>
            </div>
            <div class="actions">
                <button type="submit">Update</button>
                <button type="button" @click="modalToggle.hideModal('taskUpdate')">Close</button>
            </div>
        </div>
    </form>
</template>

<script setup>
    import { useModalToggle } from '~/store/modal'
    const modalToggle = useModalToggle()

    const propData = defineProps(['taskId'])
    const taskId = propData.taskId

    const { data: task } = await useFetch(`https://63906a8d65ff41831112cdd1.mockapi.io/api/v1/tasks/${taskId}`)

    const form = ref({
        title: task._rawValue.title,
        desc: task._rawValue.desc,
        due: task._rawValue.due,
        is_done: task._rawValue.is_done,
        is_important: task._rawValue.is_important
    })

    const updateTask = async () => {
        const data = {
            title: form._rawValue.title,
            desc: form._rawValue.desc,
            due: form._rawValue.due,
            is_done: form._rawValue.is_done,
            is_important: form._rawValue.is_important,
        }

        await useFetch(`https://63906a8d65ff41831112cdd1.mockapi.io/api/v1/tasks/${taskId}`,
        {
            method: 'PUT',
            body: JSON.stringify(data)
        })
    }
</script>