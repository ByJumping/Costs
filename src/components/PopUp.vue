<template>
    <div class="wrapper">
    <div>
        <button class="popUp-btn" @click="popUpDisplay = !popUpDisplay">
            Добавить расходы +
        </button>
    </div>
        <div class="popup" v-show="popUpDisplay">
            <input class="popup_input" placeholder="date" type="date" v-model="date">
            <input class="popup_input" placeholder="category" v-model="category">
            <input class="popup_input" placeholder="value" v-model.number="value" type="number">
            <button class="popUp-btn" @click="onClick">
                Добавить
            </button>
        </div>
    </div>
</template>

<script>
export default {
    name: "PopUp",
    data() {
        return {
            date: '',
            category: '',
            value: 0,
            popUpDisplay: false,
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
        },
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
    .wrapper {
        position: relative;
    }

    .popup {
        position: absolute;
        display: flex;
        justify-content: center;
        flex-direction: column;
        top: 49px;
        left: 299px;
        font-size: 13px;
        font-weight: normal;
        background: #e8edff;
        border-top: 4px solid #aabcfe;
        border-bottom: 1px solid white;
        color: #039;
        padding: 8px;
        padding-top: 32px;
    }

    .popUp-btn {
        padding: 6px;
        min-width: 130px;
        border-radius: 3px;
        border: 1px solid #006d65;
        color: #fff;
        background: #b9c9fe;
        text-transform: uppercase;
    }

    .popUp-btn:hover {
        background: #aabcfe;
    }

    .popUp-btn:active {
        background: #003399;
    }

    .popup_input {
        padding: 8px;
        margin-bottom: 2px;
        border: white;
        outline: white;
        color: #669;
    }

    .popup_input::placeholder {
        color: #669;
    }


</style>
