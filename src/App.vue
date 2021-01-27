<template>
    <v-app>
        <v-main>
          <Banner />
            <div id="nav">
                <router-link to="/">Home</router-link> |
                <a href="https://www.etsy.com/shop/LeafandBerry">Shop</a> |
                <router-link to="/gallery">Gallery</router-link> |
                <router-link to="/about">About</router-link> |
                <router-link to="/contact">Contact</router-link>
            </div>
            <v-divider></v-divider>
            <router-view/>
        </v-main>
    </v-app>
</template>

<script>
import Banner from './components/Banner';

export default {
    name: 'App',

    components: {
        Banner,
    },

    data: () => ({
        //
    }),
};
</script>
