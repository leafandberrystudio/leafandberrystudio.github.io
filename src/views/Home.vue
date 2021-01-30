<template>
    <div class="home">
        <div class="d-flex flex-wrap" max-width="1500">
            <h1 class="justify-center mx-auto">
                Creating one-of-a-kind accessories with nature's bounty!
            </h1>
        </div>
        <v-spacer />

        <v-container class="d-flex flex-wrap" max-width="1500">
            <div v-for="item in items" :key="item.route">
                <v-card
                    class="pa-2"
                    tile
                    max-width="241"
                    v-bind:to="item.route"
                >
                    <v-img
                        max-height="241"
                        max-width="241"
                        v-bind:src="item.source"
                    ></v-img>
                </v-card>
                <v-card-text>{{ item.name }}</v-card-text>
            </div>
        </v-container>
    </div>
</template>

<script>
export default {
    name: 'Home',

    data: () => ({
        items: [
            {
                route: '/ecoprints',
                name: 'Eco Prints',
                source: require('../assets/ecoprints/menu.webp'),
            },
            {
                route: '/mediumprints',
                name: 'Medium Prints',
                source: require('../assets/mediumprints/menu.webp'),
            },
            {
                route: '/devorevelvet',
                name: 'Devore Velvet',
                source: require('../assets/devorevelvet/menu.webp'),
            },
            {
                route: '/sunprints',
                name: 'Sun Prints',
                source: require('../assets/sunprints/menu.webp'),
            },
            {
                route: '/cyanotypes',
                name: 'Cyanotypes',
                source: require('../assets/cyanotypes/menu.webp'),
            },
            {
                route: '/shibori',
                name: 'Shibori',
                source: require('../assets/shibori/menu.webp'),
            },
            {
                route: '/jewelry',
                name: 'Jewelry',
                source: require('../assets/jewelry/menu.webp'),
            },
            {
                route: '/knitting',
                name: 'Knitting',
                source: require('../assets/knitting/menu.webp'),
            },
            {
                route: '/batik',
                name: 'Batik',
                source: require('../assets/batik/menu.webp'),
            },
        ],
    }),
};
</script>
