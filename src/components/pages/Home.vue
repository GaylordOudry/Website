<template>
  
    <div class="container">

        <div class="row mt-5">  

            <div class="col-md-6 col-lg-4 d-flex justify-content-center" v-for="(project,index) in projects" :key="index">

                <div class="card my-3" style="max-width: 24rem;">

                    <img :src="project.imgURL" :alt="alt" style="max-height: 150px; min-height: 100px">

                    <div class="card-body">

                        <h5 class="card-title"> {{ project.title }} </h5>

                        <p class="card-text"> {{ project.description }} </p>

                        <a :href="project.git" class="btn btn-dark text-light">Voir le projet</a>

                    </div>

                </div>

            </div>

        </div>

    </div>

</template>

<script>
import { ProjectService } from '@/services/Project.services'

export default {
    name: 'Home',
    data() {
        return {
            projects: [],
            alt: 'Project Image',
            width: screen.width
        }
    },
    async mounted() {
        this.projects = await ProjectService.getProject()
    },
    head() {
        return {
            title: {
                inner: 'Page d\'accueil'
            },
            meta: [
                { name: 'description', content: 'Voici la page d\'accueil de mon site web. Vous y trouverez tous les projets auxquels j\'ai pu participer' },
                { name: 'keywords', content: 'Gaylord Oudry, développeur web, développeur freelance Yvelines, gaylord oudry, La celle saint cloud' },
                { name: 'author', content: 'Gaylord Oudry'},
            ]
        }
    }
}

</script>

<style scoped>



</style>