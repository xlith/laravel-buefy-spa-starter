<template>
    <div>
        <XNavbar/>
        <XHero/>
        <section class="main-content columns is-fullheight">
            <XMenu/>
            <XContent/>
        </section>
        <XFooter/>
    </div>
</template>

<script>
    import XMenu from "./components/XMenu";
    import XNavbar from "./components/XNavbar";
    import XHero from "./components/XHero";
    import XContent from "./components/XContent";
    import XFooter from "./components/XFooter";

    export default {
        name: "App",
        components: {XMenu, XNavbar, XHero, XContent, XFooter},
    }
</script>

<style scoped>

</style>
