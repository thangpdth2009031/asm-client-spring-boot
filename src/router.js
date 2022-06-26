import { createWebHistory, createRouter} from "vue-router";
const routes = [
    {
        path: "/",
        name: "district",
        component: () => import("./components/district/ListDistrict")
    },
    {
        path: "/create",
        name: "create-road",
        component: () => import("./components/road/CreateRoad")
    },
    {
        path: "/roads",
        name: "roads",
        alias: "/roads",
        component: () => import("./components/road/ListRoad")
    }
];
const router = createRouter({
    history: createWebHistory(),
    routes,
});
export default router;
