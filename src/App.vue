<template>
    <div id="app">
        <header>
            <h1>Мои расходы</h1>
        </header>
        <main>
            <PopUp @addNewPayment="addData"/>
            <br>
            <PaymentsDisplay :list="paymentsList"></PaymentsDisplay>
        </main>
        Общая стоимость: {{ getFPV }}
    </div>
</template>
<script>
import PaymentsDisplay from "./components/PaymentsDisplay";
// import AddPayment from "./components/AddPayment";
import PopUp from "./components/PopUp";
import { mapMutations, mapGetters, mapActions } from "vuex";
// import CategorySelect from "./components/CategorySelect";

// import HelloWorld from './components/HelloWorld.vue'
// import Calc from "./components/Calc"

export default {
    name: 'App',
    components: {PopUp, PaymentsDisplay},
    methods: {
        ...mapMutations([
            'setPaymentListData',
            'addDataToPaymentsList'
        ]),
        ...mapActions([
            "fetchData",
            "fetchCategory"
        ]),
        addData(data) {
            this.addDataToPaymentsList(data)
            // this.paymentsList.push(data)
        },
        // fetchData() {
        //     return [
        //         {
        //             date: '28.02.2020',
        //             category: 'Food',
        //             value: 169
        //         },
        //         {
        //             date: '20.04.2021',
        //             category: 'Sport',
        //             value: 400
        //         },
        //         {
        //             date: '28.05.2020',
        //             category: 'Internet',
        //             value: 200
        //         }
        //     ]
        // }
    },
    computed: {
        ...mapGetters({
            paymentsList: 'getPaymentList',
            category: 'getCategoryList'
        }),
        getFPV() {
            return this.$store.getters.getFullPaymentValue
        },
        // paymentsList() {
        //     return this.$store.getters.getPaymentList
        // }
    },
    created() {
        this.fetchData()
        if(!this.category.length) {
            this.fetchCategory()
        }
        // this.$store.dispatch('fetchData')
        // this.setPaymentListData(this.fetchData())
        // this.paymentsList = this.fetchData()
    }

}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #039;
  margin-top: 60px;
  margin-left: 120px;
  margin-right: 120px;
}
</style>
