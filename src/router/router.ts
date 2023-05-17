import { createRouter ,createWebHashHistory} from "vue-router"
import MobileRoute from "./mobile/mobileRoute"
const router = createRouter({
    routes:MobileRoute,
    history:createWebHashHistory()
})
export default router