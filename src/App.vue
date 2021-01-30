<template>
    <v-app>
        <v-main>
            <div class="mx-auto justify-center" max-width="1500">
                <Banner />
                <v-card class="d-flex justify-center mb-6" flat tile>
                    <div id="nav">
                        <v-btn to="/">Home</v-btn>
                        <v-btn href="https://www.etsy.com/shop/LeafandBerry"
                            >Shop</v-btn
                        >
                        <v-menu>
                            <template v-slot:activator="{ on, attrs }">
                                <v-btn v-bind="attrs" v-on="on">
                                    Gallery
                                </v-btn>
                            </template>
                            <v-list v-for="item in gallery" :key="item.route">
                                <v-list-item>
                                    <v-btn v-bind:to="item.route">{{item.name}}</v-btn>
                                </v-list-item>
                            </v-list>
                        </v-menu>
                        <v-btn to="/about">About</v-btn>
                        <v-btn to="/contact">Contact</v-btn>
                    </div>
                </v-card>
                <v-spacer />
                <router-view class="justify-center mx-auto" />
                <v-spacer />
                <Footer />
            </div>
        </v-main>
    </v-app>
</template>

<script>
import Banner from './components/Banner';
import Footer from './components/Footer';

export default {
    name: 'App',

    components: {
        Banner,
        Footer,
    },

    data: () => ({
        gallery: [
            {
                route: '/ecoprints',
                name: 'Eco Prints',
            },
            {
                route: '/mediumprints',
                name: 'Medium Prints',
            },
            {
                route: '/devorevelvet',
                name: 'Devore Velvet',
            },
            {
                route: '/sunprints',
                name: 'Sun Prints',
            },
            {
                route: '/cyanotypes',
                name: 'Cyanotypes',
            },
            {
                route: '/shibori',
                name: 'Shibori',
            },
            {
                route: '/jewelry',
                name: 'Jewelry',
            },
            {
                route: '/knitting',
                name: 'Knitting',
            },
            {
                route: '/batik',
                name: 'Batik',
            },
        ],
    }),
};
</script>
