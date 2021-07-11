<template>
    <div>
        <select class="popup_input" name="" id="" v-model="selected">
            <option value="" v-for="(option, idx) in category" :key="idx">
                {{ option }}
            </option>
        </select>
    </div>
</template>

<script>
export default {
    name: "CategorySelect",
    props: {
        category: {
            type: Array,
            default: () => []
        }
    },
    data() {
        return {
            selected: ''
        }
    }
}
</script>

<style scoped>

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
