let Home = () =>
    import(/* webpackChunkName: "home" */ './views/Home');

export default {
    mode: 'history',

    routes: [
        {
            path: '/',
            component: Home
        }
    ]
};
