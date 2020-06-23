<template>
  
    <div class="container mt-5">

        <form @submit.prevent="mail">

            <div class="form-group">

                <label>Adresse mail</label>

                <input type="email" class="form-control" name="email">

            </div>

            <div class="form-group">

                <label>Objet</label>

                <input type="text" class="form-control" name="objet">

            </div>

            <div class="form-group">

                <label>Message</label>

                <textarea name="message" class="form-control"></textarea>

            </div>

            <input type="submit" value="Envoyer un mail" class="btn btn-primary">

        </form>

    </div>

</template>

<script>
import emailjs from 'emailjs-com'

export default {
    name: 'Contact',
    methods: {
        mail(e) {
            emailjs.sendForm('vuejs-gmail', 'vuejscontact', e.target, 'user_b29zZZvNWJaxfmJE7dSx7')
        }
    },
    head() {
        return {
            title: {
                inner: 'Page de contact'
            },
            meta: [
                { name: 'description', content: 'Voici la page de contact de mon site web. Vous pourrez me contacter directement en m\'envoyant un mail.' },
                { name: 'keywords', content: 'Gaylord Oudry, Gaylord Oudry contact, développeur web, développeur freelance Yvelines, gaylord oudry, La celle saint cloud' },
                { name: 'author', content: 'Gaylord Oudry'},
            ]
        }
    }
}
</script>

<style> 


</style>