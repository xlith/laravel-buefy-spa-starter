const state = {
    posts: []
};

const getters = {
    getPosts: state => state.posts
};

const actions = {
    async fetchPosts({ commit }) {
        const response = await axios.get(
            'https://jsonplaceholder.typicode.com/posts'
        );
        commit('setPosts', response.data);
    },
};

const mutations = {
    setPosts: (state, posts) => (state.posts = posts),
};

export default {
    state,
    getters,
    actions,
    mutations
};
