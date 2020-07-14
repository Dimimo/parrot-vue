/*
 *
 *  Copyright (c) 2020 Puerto Parrot. Written by Dimitri Mostrey for https// www.puertoparrot.com
 *  Contact me at admin@puertoparrot.com or admin@puertoparrot.com
 *
 */

export function initialize(axios, store, router) {

    router.beforeEach((to, from, next) => {
        const requiresAuth = to.matched.some(record => record.meta.requiresAuth);
        const currentUser = store.state.currentUser;

        if (requiresAuth && !currentUser) {
            next("/m/login");
        }
        else if (to.path === '/m/login' && currentUser) {
            next("/m");
        }
        else {
            next();
        }
    });

    axios.interceptors.response.use(null, (error) => {
        if (error.response.status === 401) {
            store.commit('logout');
            router.push('/m/login');
        }

        return Promise.reject(error);
    });
}
