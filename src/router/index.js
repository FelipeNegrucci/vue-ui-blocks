import { createRouter, createWebHistory } from 'vue-router'

import mainView from '@/views/mainView.vue'
import contentView from '@/views/contentView.vue'
import notFoundViewer from '@/views/notFoundViewer.vue'

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'main',
            component: mainView,
            children:[
                {
                    path: '/',
                    name: 'data',
                    component: contentView,
                }
            ]
        },
        {
            path: '/:pathMatch(.*)*',
            name: 'notFound',
            component: notFoundViewer
        }
    ]
})

export default router
