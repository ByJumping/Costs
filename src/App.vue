<template>
    <div id="app">
        <header>
            <h1>Мои расходы</h1>
        </header>
        <div class="menu">
            <a href="#dashboard">Dashboard</a> /
            <a href="#about">About</a> /
            <a href="#notfound">Not Found</a>
        </div>
        <main>
            <div class="content-page">
                <About v-if="page === 'about'"/>
                <Dashboard v-if="page === 'dashboard'"/>
                <NotFound v-if="page === 'notfound'"/>
            </div>
            <PopUp @addNewPayment="addData"/>
            <br>
            <PaymentsDisplay :list="paymentsList"></PaymentsDisplay>
        </main>
        Общая стоимость: {{ getFPV }}
        <!--        <CategorySelect :category="category"/>-->
    </div>
</template>
<script>
import PaymentsDisplay from "./components/PaymentsDisplay";
import PopUp from "./components/PopUp";

import About from "./views/About";
import Dashboard from "./views/Dashboard";
import NotFound from "./views/NotFound";

import {mapMutations, mapGetters, mapActions} from "vuex";
// import CategorySelect from "./components/CategorySelect";

export default {
    name: 'App',
    components: {PopUp, PaymentsDisplay, About, Dashboard, NotFound},
    data() {
        return {
            page: ''
        }
    },
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
        setPage() {
            this.page = location.hash.slice(1)
        }
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
        if (!this.category.length) {
            this.fetchCategory()
        }
        // this.$store.dispatch('fetchData')
        // this.setPaymentListData(this.fetchData())
        // this.paymentsList = this.fetchData()
    },
    mounted() {
        this.setPage()
        window.addEventListener('hashchange', () => {
            this.setPage()
        })
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
