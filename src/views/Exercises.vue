<template>
    <div class="about">
        <header class="about-bg">
            <b-container>
                <b-row>
                    <b-col cols="12">
                        <div class="site-heading">
                            <h1 class="text-white text-uppercase fst-italic">
                                <span>Exercises</span>
                            </h1>
                        </div>
                    </b-col>
                </b-row>
            </b-container>
        </header>
        <div>
            <b-card-group>
                <b-card title="Title" class="exercise-card"
                    img-src="https://cdn.muscleandstrength.com/sites/default/files/taxonomy/image/videos/adductors.jpg"
                    img-alt="Image" img-top>
                    <b-card-text>
                        This is a wider card with supporting text below as a natural lead-in to additional content.
                        This content is a little bit longer.
                    </b-card-text>
                    <b-button align="center" href="#" variant="primary">Go somewhere</b-button>
                </b-card>

                <b-card title="Title" class="exercise-card"
                    img-src="https://cdn.muscleandstrength.com/sites/default/files/taxonomy/image/videos/biceps_0.jpg"
                    img-alt="Image" img-top>
                    <b-card-text>
                        This card has supporting text below as a natural lead-in to additional content.
                    </b-card-text>

                </b-card>

                <b-card title="Title" class="exercise-card"
                    img-src="https://cdn.muscleandstrength.com/sites/default/files/taxonomy/image/videos/calves_0.jpg"
                    img-alt="Image" img-top>
                    <b-card-text>
                        This is a wider card with supporting text below as a natural lead-in to additional content.
                        This card has even longer content than the first to show that equal height action.
                    </b-card-text>

                </b-card>
                <b-card title="Title" class="exercise-card"
                    img-src="https://cdn.muscleandstrength.com/sites/default/files/taxonomy/image/videos/adductors.jpg"
                    img-alt="Image" img-top>
                    <b-card-text>
                        This is a wider card with supporting text below as a natural lead-in to additional content.
                        This content is a little bit longer.
                    </b-card-text>

                </b-card>
            </b-card-group>
            <b-card-group>
                <b-card title="Title" class="exercise-card"
                    img-src="https://cdn.muscleandstrength.com/sites/default/files/taxonomy/image/videos/adductors.jpg"
                    img-alt="Image" img-top>
                    <b-card-text>
                        This is a wider card with supporting text below as a natural lead-in to additional content.
                        This content is a little bit longer.
                    </b-card-text>

                </b-card>

                <b-card title="Title" class="exercise-card"
                    img-src="https://cdn.muscleandstrength.com/sites/default/files/taxonomy/image/videos/biceps_0.jpg"
                    img-alt="Image" img-top>
                    <b-card-text>
                        This card has supporting text below as a natural lead-in to additional content.
                    </b-card-text>

                </b-card>

                <b-card title="Title" class="exercise-card"
                    img-src="https://cdn.muscleandstrength.com/sites/default/files/taxonomy/image/videos/calves_0.jpg"
                    img-alt="Image" img-top>
                    <b-card-text>
                        This is a wider card with supporting text below as a natural lead-in to additional content.
                        This card has even longer content than the first to show that equal height action.
                    </b-card-text>

                </b-card>
            </b-card-group>
        </div>
        <v-card>

            <v-container fluid>
                <v-row dense>
                    <v-col v-for="card in cards" :key="card.title" :cols="card.flex">
                        <v-card>
                            <v-img :src="cards.src" class="white--text align-end" height="200px">
                                <v-card-title v-text="cards.title"></v-card-title>
                            </v-img>
                        </v-card>
                    </v-col>
                </v-row>
            </v-container>
        </v-card>

    </div>
</template>

<script>
export default {
    data: () => ({
        cards: [
            { title: 'Adductors', src: 'https://cdn.muscleandstrength.com/sites/default/files/taxonomy/image/videos/adductors.jpg', flex: 6 },
            { title: 'Biceps', src: 'https://cdn.muscleandstrength.com/sites/default/files/taxonomy/image/videos/biceps_0.jpg', flex: 3 },
            { title: 'Calves', src: 'https://cdn.muscleandstrength.com/sites/default/files/taxonomy/image/videos/calves_0.jpg', flex: 3 },
            { title: 'Chest', src: 'https://cdn.muscleandstrength.com/sites/default/files/taxonomy/image/videos/chest_0.jpg', flex: 3 },
        ],
    }),
}
</script>


<style scoped>
.about-bg {
    padding: 170px 0 170px;
    position: relative;
    background-image: url("../assets/acercade.jpg");
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
}

.site-heading {
    text-align: center;
    padding: 75px 0 0;
}

span {
    color: #f30b47;
}

.exercise-card {
    margin: 40px;
}

.about-left {
    position: relative;
}

.media {
    display: flex;
    align-items: flex-start;
}

.about-left-text {
    background-color: #f30a46;
    width: 45%;
    padding: 80px 58px;
    text-transform: uppercase;
    -webkit-transform: translateY(12%);
    -ms-transform: translateY(12%);
    transform: translateY(12%);
}

.about-left-img {
    width: 55%;
}

.about-left-img img {
    width: 100%;
}

.about-right-text {
    padding: 100px 0 0;
}

.about-right-text h3 {
    font-size: 30px;
    line-height: 40px;
    color: #f30a46;
    font-weight: 500;
    padding-bottom: 10px;
}

.about-right-text p {
    text-align: justify;
}

@media (max-width: 767px) {
    .media {
        display: block;
    }

    .about-left-text {
        width: 100%;
        padding: 40px 10px;
    }

    .about-left-img {
        width: 100%;
    }

    .about-right-text {
        padding: 30px 0 0;
    }
}
</style>
