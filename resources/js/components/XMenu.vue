<template>
    <b-menu
        class="column is-fullheight section is-hidden-touch"
        :class="{'is-narrow': isMenuCollapsed, 'is-2': !isMenuCollapsed}"
    >

        <b-menu-list>
            <template slot="label" v-if="!isMenuCollapsed">MENU</template>
            <b-menu-item icon="information-outline">
                <template slot="label" slot-scope="props" v-if="!isMenuCollapsed">Info</template>
            </b-menu-item>
            <b-menu-item icon="account">
                <template slot="label" v-if="!isMenuCollapsed">My Account</template>
            </b-menu-item>
        </b-menu-list>

        <b-menu-list>
            <b-menu-item
                icon="link"
                tag="router-link"
                to="/expo">
                <template slot="label" slot-scope="props" v-if="!isMenuCollapsed">Expo</template>
            </b-menu-item>
        </b-menu-list>
        <b-menu-list>
            <template slot="label" v-if="!isMenuCollapsed">ACTIONS</template>
            <b-menu-item icon="logout">
                <template slot="label" slot-scope="props" v-if="!isMenuCollapsed">Logout</template>
            </b-menu-item>
        </b-menu-list>
    </b-menu>
</template>

<script>

     export default {
        name: "XMenu",
         data(){
             return {
             }
         },
        components: {

        },
        methods: {


        }
    }
</script>

<style scoped>
    .sticky {
        position: sticky;
        top: 60px;
    }
</style>
