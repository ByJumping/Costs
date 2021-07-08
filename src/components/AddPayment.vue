<template>
    <div>
        <input placeholder="date" v-model="date">
        <input placeholder="category" v-model="category">
        <input placeholder="value" v-model.number="value" type="number">
        <button @click="onClick">
            Добавить расходы +
        </button>
    </div>
</template>

<script>
export default {
    name: "AddPayment",
    data() {
        return {
            date: '',
            category: '',
            value: null
        }
    },
    methods: {
        onClick() {
            const { category, value } = this
            const data = {

                date: this.date || this.getCurrentDate,
                category,
                value
            }
            this.$emit('addNewPayment', data)
            console.log(data)
        }
    },
    computed: {
        getCurrentDate() {
            const today = new Date()
            const d = today.getDate()
            const m = today.getMonth() + 1
            const y = today.getFullYear()
            return `${d}.${m}.${y}`
        }
    }
}
</script>

<style scoped>

</style>