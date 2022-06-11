import { createWebHistory, createRouter } from "vue-router";
import LoginMain from "@/components/LoginMain";
import RegistrationMain from "@/components/RegistrationMain";
import ProfileMain from "@/components/ProfileMain";
import ProfileEdit from "@/components/ProfileEdit";
import ContractMain from "@/components/ContractMain";
import ContractInfo from "@/components/ContractInfo";



const routes = [
    {
        path: "/login",
        name: "LoginMain",
        component: LoginMain,
    },
    {
        path: "/registration",
        name: "RegistrationMain",
        component: RegistrationMain,
    },
    {
        path: "/profile",
        name: "ProfileMain",
        component: ProfileMain,
    },
    {
        path: "/editprofile",
        name: "ProfileEdit",
        component: ProfileEdit,
    },
    {
        path: "/contract",
        name: "ContractMain",
        component: ContractMain,
    },
    {
        path: "/contract_info",
        name: "ContractInfo",
        component: ContractInfo,
    },
];


const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;