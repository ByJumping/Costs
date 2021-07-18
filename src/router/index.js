import Vue from "vue";
import Router from 'vue-router';

import Dashboard from "../views/Dashboard";
import About from "../views/About";
import NotFound from "../views/NotFound";
import AddPayment from "../components/AddPayment";

Vue.use(Router)

export default new Router({
    mode: "history",
        routes: [
            {
                path: "/dashboard",
                component: Dashboard,
                name: "dashboard"
            },
            {
                path: "/add/payment/:category/",
                component: AddPayment,
                name: "addPayment"
            },
            {
                path: "/about",
                component: About,
                name: "about"
            },
            {
                path: "/about*",
                component: About,
                name: "about"
            },
            // {
            //     path: "/notfound",
            //     component: NotFound,
            //     name: "notfound"
            // },
            {
                path: "*",
                component: NotFound
            }
        ]
})
