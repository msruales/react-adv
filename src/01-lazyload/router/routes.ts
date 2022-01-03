import {lazy, LazyExoticComponent} from "react";
import NoLazy from "../pages/NoLazy";

type JSXComponent = () => JSX.Element

interface Routes {
    to: string,
    path: string,
    Component: LazyExoticComponent<JSXComponent> | JSXComponent,
    name: string
}

const LazyLayout = lazy(() => import(/* webpackChunkName: "lazyLayout" */ '../../01-lazyload/layout/LazyLayout'))


export const routes: Routes[] = [
    {
        to: '/lazyload/',
        path: '/lazyload/*',
        Component: LazyLayout,
        name: 'Lazy - Dashboard'
    },
    {
        to: '/no-lazy',
        path: 'no-lazy',
        Component: NoLazy,
        name: 'no-lazy'
    },

]