import Home from '../Pages/Home/Home';
import DetailMovie from '../Pages/DetailMovie/DetailMovie';
import Watchmovie from '../Pages/Watchmovie/Watchmovie';
const publicRoutes = [
    { path: '/', component: Home }, 
    { path: '/detailmovie', component: DetailMovie, layout: null }, 
    { path: '/watchmovie', component: Watchmovie, layout: null }, 

]

const privateRoutes = [

]

export {publicRoutes, privateRoutes}