import { lazy, LazyExoticComponent } from "react";
// import { LazyPage1 } from "../01-lazyload/pages/LazyPage1";
// import { LazyPage2 } from '../01-lazyload/pages/LazyPage2';
import { NoLazy } from "../01-lazyload/pages/NoLazy";


type JSXComponent = () => JSX.Element;


interface Route {
    to:string,
    path:string,
    Component: React.LazyExoticComponent<JSXComponent> | JSXComponent,
    name: string
}


const LazyLayaout = lazy(() => import(/* webpackChunkName: "LazyLayout" */ '../01-lazyload/layout/LazyLayaout'));



export const routes: Route[] = [
    {
        to: '/lazyload/',
        path: '/lazyload/*',
        Component: LazyLayaout,
        name: 'Lazyload - Dash'
    },
    {
        to: '/no-lazy',
        path: 'no-lazy',
        Component: NoLazy,
        name: 'No Lazy'
    },
  
]