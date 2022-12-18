<template>
    <div class="exercises">
        <header class="exercises-bg">
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
                <b-card title="Adductors" class="exercise-card" align="center" data-bs-toggle="modal"
                    data-bs-target="#staticBackdrop"
                    img-src="https://cdn.muscleandstrength.com/sites/default/files/taxonomy/image/videos/adductors.jpg"
                    img-alt="Image" img-top>
                    <a href="/videos" class="stretched-link"></a>
                    <!-- <b-button align="center" href="#" variant="primary">Go somewhere</b-button> -->
                </b-card>

                <b-card title="Biceps" class="exercise-card" align="center"
                    img-src="https://cdn.muscleandstrength.com/sites/default/files/taxonomy/image/videos/biceps_0.jpg"
                    img-alt="Image" img-top>
                    <!-- <b-card-text>
                        This card has supporting text below as a natural lead-in to additional content.
                    </b-card-text> -->

                </b-card>

                <b-card title="Abs" class="exercise-card" align="center"
                    img-src="https://cdn.muscleandstrength.com/sites/default/files/taxonomy/image/videos/abs_0.jpg"
                    img-alt="Image" img-top>
                    <!-- <b-card-text>
                        This is a wider card with supporting text below as a natural lead-in to additional content.
                        This card has even longer content than the first to show that equal height action.
                    </b-card-text> -->

                </b-card>
                <b-card title="Abductors" class="exercise-card" align="center"
                    img-src="https://cdn.muscleandstrength.com/sites/default/files/taxonomy/image/videos/abductors.jpg"
                    img-alt="Image" img-top>
                    <!-- <b-card-text>
                        This is a wider card with supporting text below as a natural lead-in to additional content.
                        This content is a little bit longer.
                    </b-card-text> -->

                </b-card>
            </b-card-group>

            <b-card-group>
                <b-card title="Calves" class="exercise-card" align="center"
                    img-src="https://cdn.muscleandstrength.com/sites/default/files/taxonomy/image/videos/calves_0.jpg"
                    img-alt="Image" img-top>
                    <!-- <b-card-text>
                        This is a wider card with supporting text below as a natural lead-in to additional content.
                        This content is a little bit longer.
                    </b-card-text> -->
                    <!-- <b-button align="center" href="#" variant="primary">Go somewhere</b-button> -->
                </b-card>
                <b-card title="Chest" class="exercise-card" align="center"
                    img-src="https://cdn.muscleandstrength.com/sites/default/files/taxonomy/image/videos/chest_0.jpg"
                    img-alt="Image" img-top>
                    <!-- <b-card-text>
                        This is a wider card with supporting text below as a natural lead-in to additional content.
                        This content is a little bit longer.
                    </b-card-text> -->
                    <!-- <b-button align="center" href="#" variant="primary">Go somewhere</b-button> -->
                </b-card>
                <b-card title="Forearms" class="exercise-card" align="center"
                    img-src="https://cdn.muscleandstrength.com/sites/default/files/taxonomy/image/videos/forearms_0.jpg"
                    img-alt="Image" img-top>
                    <!-- <b-card-text>
                        This is a wider card with supporting text below as a natural lead-in to additional content.
                        This content is a little bit longer.
                    </b-card-text> -->
                    <!-- <b-button align="center" href="#" variant="primary">Go somewhere</b-button> -->
                </b-card>
                <b-card title="Glutes" class="exercise-card" align="center"
                    img-src="https://cdn.muscleandstrength.com/sites/default/files/taxonomy/image/videos/glutes_0.jpg"
                    img-alt="Image" img-top>
                    <!-- <b-card-text>
                        This is a wider card with supporting text below as a natural lead-in to additional content.
                        This content is a little bit longer.
                    </b-card-text> -->
                    <!-- <b-button align="center" href="#" variant="primary">Go somewhere</b-button> -->
                </b-card>

            </b-card-group>

        </div>
        <!-- <b-card>
            <b-container class="bv-example-row">
                <b-row dense>
                    <b-col v-for="card in cards" :key="card.title" :cols="card.flex">
                        <b-card>
                            <b-img src="https://picsum.photos/1024/400/?image=41" fluid alt="Responsive image"></b-img>
                        </b-card>
                    </b-col>
                </b-row>
            </b-container>
        </b-card>
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
        </v-card> -->



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
.exercises-bg {
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
</style>
