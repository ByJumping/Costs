<template>
    <div id="app">
        <header>
            <h1>Мои расходы</h1>
        </header>
        <div class="menu">
            <router-link to="/dashboard">Dashboard</router-link> /
            <router-link to="/about">About</router-link> /
            <router-link to="/notfound">Not Found</router-link>
            <!--            <a href="dashboard">Dashboard</a> /-->
            <!--            <a href="about">About</a> /-->
            <!--            <a href="notfound">Not Found</a>-->
        </div>
        <main>
            <div class="content-page">
                <router-view/>
                <!--                <About v-if="page === 'about'"/>-->
                <!--                <Dashboard v-if="page === 'dashboard'"/>-->
                <!--                <NotFound v-if="page === 'notfound'"/>-->
            </div>
            <PopUp @addNewPayment="addData"/>
            <br>
            <PaymentsDisplay :list="currentElements"></PaymentsDisplay>
        </main>
        Общая стоимость: {{ getFPV }}
        <!--        <CategorySelect :category="category"/>-->
        <Pagination :cur="curPage" :n="n" :length="paymentsList.length" @paginate="onChangePage"/>
    </div>
</template>
<script>
import PaymentsDisplay from "./components/PaymentsDisplay";
import PopUp from "./components/PopUp";
import Pagination from "./components/Pagination";

// import About from "./views/About";
// import Dashboard from "./views/Dashboard";
// import NotFound from "./views/NotFound";

import {mapMutations, mapGetters, mapActions} from "vuex";
// import CategorySelect from "./components/CategorySelect";

export default {
    name: 'App',
    components: {
        PopUp,
        PaymentsDisplay,
        Pagination,
        // About,
        // Dashboard,
        // NotFound
    },
    data() {
        return {
            page: '',
            curPage: 1,
            n: 5
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
        onChangePage(p) {
            this.curPage = p
        }
        // setPage() {
        //     this.page = location.pathname.slice(1)
        // }
    },
    computed: {
        ...mapGetters({
            paymentsList: 'getPaymentList',
            category: 'getCategoryList'
        }),
        currentElements() {
            const {n, curPage } = this
            return this.paymentsList.slice(n * (curPage - 1), n * (curPage - 1) + n)
        },
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
    // mounted() {
    //     this.setPage()
    //     const links = document.querySelectorAll('a')
    //     links.forEach(link => {
    //         link.addEventListener('click', e => {
    //             e.preventDefault()
    //             history.pushState({}, "", link.href)
    //             this.setPage()
    //         })
    //     })
    //     window.addEventListener('popstate', this.setPage)
    // }
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
