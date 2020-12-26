import { createWebHistory, createRouter } from 'vue-router';
import HomePage from '@/views/HomePage';
import RequestList from '@/views/RequestList';
import ContactList from '@/views/ContactList';

const routes = [
    {
        path: "/",
        name: "Home",
        component: HomePage,
    },
    {
        path: "/requests",
        name: "Request List",
        component: RequestList
    },
    {
        path: "/contacts",
        name: "Contacts",
        component: ContactList
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;