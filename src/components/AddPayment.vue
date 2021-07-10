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
            // const today = new Date()
            // const d = today.getDate()
            // const m = today.getMonth() + 1
            // const y = today.getFullYear()
            // return `${d}.${m}.${y}`
            let today = new Date()
            let dd = today.getDate();
            if (dd < 10) dd = '0' + dd;

            let mm = today.getMonth() + 1;
            if (mm < 10) mm = '0' + mm;

            let yy = today.getFullYear() % 100;
            if (yy < 10) yy = '0' + yy;

            return dd + '.' + mm + '.' + yy;
        }
    }
}
</script>

<style scoped>

</style>
