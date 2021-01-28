<template>
    <v-app>
        <v-main>
            <Banner />
            <div id="nav">
                <router-link to="/">Home</router-link> |
                <a href="https://www.etsy.com/shop/LeafandBerry">Shop</a> |
                <v-menu>
                    <template v-slot:activator="{ on, attrs }">
                        <v-btn color="primary" dark v-bind="attrs" v-on="on">
                            Gallery
                        </v-btn>
                    </template>
                    <v-list>
                        <v-list-item>
                            <router-link to="/batik">Batik</router-link>
                        </v-list-item>
                        <v-list-item>
                            <router-link to="/cyanotypes"
                                >Cyanotypes</router-link
                            >
                        </v-list-item>
                        <v-list-item>
                            <router-link to="/devore-velvet"
                                >Devore Velvet</router-link
                            >
                        </v-list-item>
                        <v-list-item>
                            <router-link to="/eco-prints"
                                >Eco Prints</router-link
                            >
                        </v-list-item>
                        <v-list-item>
                            <router-link to="/jewelry">Jewelry</router-link>
                        </v-list-item>
                        <v-list-item>
                            <router-link to="/knitting">Knitting</router-link>
                        </v-list-item>
                        <v-list-item>
                            <router-link to="/medium-prints"
                                >Medium Prints</router-link
                            >
                        </v-list-item>
                        <v-list-item>
                            <router-link to="/shibori">Shibori</router-link>
                        </v-list-item>
                        <v-list-item>
                            <router-link to="/sun-prints"
                                >Sun Prints</router-link
                            >
                        </v-list-item>
                    </v-list>
                </v-menu>
                | <router-link to="/about">About</router-link> |
                <router-link to="/contact">Contact</router-link>
            </div>
            <v-divider></v-divider>
            <router-view />
            <v-divider/>
            <Footer/>
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
        Footer
    },

    data: () => ({
        //
    }),
};
</script>
