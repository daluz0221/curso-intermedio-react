import { lazy, LazyExoticComponent } from "react";
// import { LazyPage1 } from "../01-lazyload/pages/LazyPage1";
// import { LazyPage2 } from '../01-lazyload/pages/LazyPage2';
import { LazyPage3 } from '../01-lazyload/pages/LazyPage3';


type JSXComponent = () => JSX.Element;


interface Route {
    to:string,
    path:string,
    Component: React.LazyExoticComponent<JSXComponent> | JSXComponent,
    name: string
}


const Lazy1 = lazy(() => import(/* webpackChunkName: "LazyPage1" */ '../01-lazyload/pages/LazyPage1'));
const Lazy2 = lazy(() => import(/* webpackChunkName: "LazyPage2" */ '../01-lazyload/pages/LazyPage2'));
const Lazy3 = lazy(() => import(/* webpackChunkName: "LazyPage3" */ '../01-lazyload/pages/LazyPage3'));


export const routes: Route[] = [
    {
        to: '/lazy-1',
        path: 'lazy-1',
        Component: Lazy1,
        name: 'Lazy 1'
    },
    {
        to: '/lazy-2',
        path: 'lazy-2',
        Component: Lazy2,
        name: 'Lazy 2'
    },
    {
        to: '/lazy-3',
        path: 'lazy-3',
        Component: Lazy3,
        name: 'Lazy 3'
    },
]