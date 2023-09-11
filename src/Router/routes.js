import About from "../Pages/About";
import Main from "../Pages/Main";
import Map from './../Pages/Map';

export const publicRoutes =[
    {path: '/', component : <Main/>, exact: true},
    {path: '/about', component : <About/>, exact: true},
    {path: '/map', component : <Map/>, exact: true},
];