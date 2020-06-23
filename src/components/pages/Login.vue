<template>
  
    <div class="container">

        <h1 class="mt-5">Connexion</h1>

        <hr>

        <form @submit.prevent="submitConnexion">

            <div class="form-group">

                <label>Email</label>

                <input @change="initMessageError" type="email" class="form-control" v-model="email">

            </div>

            <div class="form-group">

                <label>Mot de passe</label>

                <input @change="initMessageError" type="password" class="form-control" v-model="password"> 

            </div>

            <button type="submit" class="btn btn-outline-primary">Connexion</button>

        </form>

        <hr>

        <div class="alert alert-danger" role="alert" show v-if="messageError">

            {{ messageError }}

        </div>

    </div>

</template>

<script>
import { auth } from '@/firebase'

export default {
    data() {
        return {
            email: null,
            password: null,
            messageError: false
        }
    },
    methods: {
        async submitConnexion() {
            try {
                await auth.signInWithEmailAndPassword( this.email, this.password )
                this.$router.replace({ path: '/admin' })
            } catch {
                this.messageError = "Echec de la connexion ! Le Login ou le mot de passe est incorrect"
            }
        },
        initMessageError() {
            this.messageError = false
        }
    }
}
</script>

<style>

</style>