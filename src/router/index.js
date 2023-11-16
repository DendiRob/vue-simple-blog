import {createRouter, createWebHistory} from 'vue-router';
import HomePage from '../pages/HomePage.vue';
import PostDetails from '../pages/PostDetails.vue';


const router = createRouter({
	history: createWebHistory(import.meta.env.BASE_URL),
	
	routes: [
		{
			path: '/',
			name: 'HomePage',
			component: HomePage
		},
		{
			path: '/post/:postInfo',
			name: 'PostDetails',
			component: PostDetails
		}
	
	]
})

export default router