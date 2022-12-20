<template>
    <div class="about">
        <header class="about-bg">
            <b-container>
                <b-row>
                    <b-col cols="12">
                        <div class="site-heading">
                            <h1 class="text-white text-uppercase fst-italic">
                                <span>DIET GUIDES</span>
                            </h1>
                        </div>
                    </b-col>
                </b-row>
            </b-container>
        </header>

        <h3 align="center" class="paragraph-text">
            Confused about what diet you should follow? Our guides explain the different approaches to nutrition in
            detail. <br>
            Read these guides and choose a diet style that best suits your goals, food preferences and lifestyle.
        </h3>
        <div>
            <b-card-group>
                <b-card title="The Clean Eating Diet Plan Guide" class="exercise-card"
                    img-src="https://cdn.muscleandstrength.com/sites/default/files/clean-eating-guide-feature.jpg"
                    img-alt="Image" img-top>
                    <b-card-text>
                        Learn everything you need to know before starting the Clean Eating Diet plan including it's
                        history, guidelines &
                        components, & all of the science behind it.
                    </b-card-text>
                    <!-- <b-button align="center" href="#" variant="primary">Go somewhere</b-button> -->
                </b-card>
                <b-card title="The IIFYM & Flexible Dieting Diet Plan Guide" class="exercise-card"
                    img-src="https://cdn.muscleandstrength.com/sites/default/files/iifym-feature.jpg" img-alt="Image"
                    img-top>
                    <b-card-text>
                        Learn everything you need to know before starting the IIFYM Diet plan including it's history,
                        guidelines and components,
                        and all of the science behind it.
                    </b-card-text>
                    <!-- <b-button align="center" href="#" variant="primary">Go somewhere</b-button> -->
                </b-card>
                <b-card title="The Ketogenic & Low Carb Diet Plan Guide" class="exercise-card"
                    img-src="https://cdn.muscleandstrength.com/sites/default/files/keto-feature_0.jpg" img-alt="Image"
                    img-top>
                    <b-card-text>
                        Learn everything you need to know before starting the Keto Diet plan including it's history,
                        guidelines and components,
                        and all of the science behind it.
                    </b-card-text>
                    <!-- <b-button align="center" href="#" variant="primary">Go somewhere</b-button> -->
                </b-card>

            </b-card-group>
            <b-card-group>
                <b-card title="The Intermittent Fasting Diet Plan Guide" class="exercise-card"
                    img-src="https://cdn.muscleandstrength.com/sites/default/files/field/feature-image/article/intermittent-fasting-feature.jpg"
                    img-alt="Image" img-top>
                    <b-card-text>
                        Learn everything you need to know before starting the Intermittent Fasting plan including it's
                        history, guidelines &
                        components, & all the science behind it.
                    </b-card-text>
                </b-card>

                <b-card title="The Carb Cycling Diet Plan Guide" class="exercise-card"
                    img-src="https://cdn.muscleandstrength.com/sites/default/files/carb-cycling-feature.jpg"
                    img-alt="Image" img-top>
                    <b-card-text>
                        Learn everything you need to know before starting the Carb Cycling Diet plan including it's
                        history, guidelines &
                        components, & all the science behind it.
                    </b-card-text>
                </b-card>

                <b-card title="The Paleolithic (Paleo) Diet Plan Guide" class="exercise-card"
                    img-src="https://cdn.muscleandstrength.com/sites/default/files/paleo-feature.jpg" img-alt="Image"
                    img-top>
                    <b-card-text>
                        Learn everything you need to know before starting the Paleo Diet plan including it's history,
                        guidelines and components,
                        and all of the science behind it.
                    </b-card-text>
                </b-card>
            </b-card-group>
        </div>

    </div>
</template>

<script>
export default {
    data: () => ({
        cards: [
            {
                title: 'The Clean Eating Diet Plan Guide', src: 'https://cdn.muscleandstrength.com/sites/default/files/clean-eating-guide-feature.jpg', text: " Learn everything you need to know before starting the Clean Eating Diet plan including it's history, guidelines & components, & all of the science behind it."
            },
            {
                title: 'The IIFYM & Flexible Dieting Diet Plan Guide', src: 'https://cdn.muscleandstrength.com/sites/default/files/clean-eating-guide-feature.jpg', text: "Learn everything you need to know before starting the IIFYM Diet plan including it's history, guidelines and components, and all of the science behind it."
            },
            {
                title: 'The Ketogenic & Low Carb Diet Plan Guide', src: 'https://cdn.muscleandstrength.com/sites/default/files/keto-feature_0.jpg', text: "Learn everything you need to know before starting the Keto Diet plan including it's history, guidelines and components, and all of the science behind it."
            },
            { title: 'The Intermittent Fasting Diet Plan Guide', src: 'https://cdn.muscleandstrength.com/sites/default/files/keto-feature_0.jpg', text: "Learn everything you need to know before starting the Carb Cycling Diet plan including it's history, guidelines & components, & all the science behind it." },
            { title: 'The Carb Cycling Diet Plan Guide', src: 'https://cdn.muscleandstrength.com/sites/default/files/carb-cycling-feature.jpg', text: "Learn everything you need to know before starting the Carb Cycling Diet plan including it's history, guidelines & components, & all the science behind it." },
            {
                title: 'The Paleolithic (Paleo) Diet Plan Guide', src: 'https://cdn.muscleandstrength.com/sites/default/files/paleo-feature.jpg', text: "Learn everything you need to know before starting the Paleo Diet plan including it's history, guidelines and components, and all of the science behind it."
            },
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

.paragraph-text {
    margin-top: 40px;
}
</style>
