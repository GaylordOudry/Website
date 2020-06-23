<template>
  
    <footer class="fixed-bottom d-flex justify-content-center align-items-center">

        <div>

            <a href="https://github.com/GaylordOudry">

                <i class="fab fa-github-square"></i>
                
            </a>

        </div>

        <div>

            <a href="https://www.linkedin.com/in/gaylord-oudry/">
            
                <i class="fab fa-linkedin mx-4"></i>
            
            </a>

        </div>

        <div>

            <router-link to="/contact">            

                <i class="fas fa-envelope mr-4"></i>
            
            </router-link>

        </div>

        <div>

            <i class="fas fa-phone-square mr-2"></i>

        </div>

        <p class="m-0">06.65.26.50.48</p>

    </footer>

</template>

<script>
export default {
    name: 'Footer-bottom'
}
</script>

<style scoped>

footer {
    height: 80px;
    background: #000;
    color: white;
}

i {
    font-size: 30px;
    color: white;
}

a {
    color: white;
}

a:hover, i:hover {
    color: rgba(255, 255, 255, 0.712);
}

@media screen and (min-width: 772px) {
    i {
        font-size: 40px;
    }
}

</style>