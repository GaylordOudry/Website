<template>

    <div class="container">

        <h1 class="mt-5"> Add a project </h1>

        <form>

            <div class="form-group">

                <label>Project title</label>

                <input type="text" class="form-control" v-model="title">

            </div>

            <div class="form-group">

                <label>Project Description</label>

                <textarea class="form-control" v-model="desc"></textarea>

            </div>

            <div class="form-group">

                <div class="custom-file">

                    <input type="file" class="custom-file-input" @change="uploadImage">

                    <label class="custom-file-label">{{ this.fileName }}</label>

                </div>

            </div>

            <div class="form-group">

                <label>Project Git</label>

                <input type="text" class="form-control" v-model="git">

            </div>

            <button @click.prevent="submitProject" type="submit" class="btn btn-outline-primary">Submit</button>

        </form>

        <hr>

        <ul>

            <li v-for="(project, id) in projects" :key="id" class="mt-3">

                Titre : {{ project.title }}

                <button @click.prevent="removeProject(project)" class="btn btn-outline-danger">Remove</button>

            </li>

        </ul>

        <hr>

        <button class="btn btn-danger" @click="logout">Deconnexion</button>

    </div>
  
</template>

<script>

import { ProjectService } from '@/services/Project.services'
import { auth } from '@/firebase'

export default {
    name: 'Admin',
    data() {
        return {
            projects: [],
            title: '',
            desc: '',
            imgUrl: '',
            fileName: '',
            git: ''
        }
    },
    methods: {
        async submitProject() { 

            const project = { title: this.title, description: this.desc, git: this.git }
            const idProject = await ProjectService.addProject(project)
            project.id = idProject
            this.projects.push(project)

        },
        removeProject(project) {

            ProjectService.removeProject(project)

            const toDelete = this.projects.findIndex(projectItem => project.id === projectItem.id)
            this.projects.splice(toDelete, 1)

        },
        uploadImage(e) {
            
            let file = e.target.files[0]
            this.fileName = file.name
            ProjectService.uploadImage(e)

        },
        logout() {
            auth.signOut()
            this.$router.replace({ path: '/' })
        }
    },
    async mounted() {
        this.projects = await ProjectService.getProject()
    }
}

</script>

<style>



</style>