<template>
  
    <header>

        <nav>

            <figure>

                <img src="@/assets/logo.svg" alt="Logo">

            </figure>

            <ul>

                <li><router-link to="/">Accueil</router-link></li>

                <li><router-link to="/contact">Contact</router-link></li>

            </ul>

        </nav>

    </header>

</template>

<script>

export default {
    name: 'Header',
}



</script>

<style scoped>

nav {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 80px;
    width: 100%;
    background: #000;
}

figure {
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0;
    margin-left: 15px;
}

figure, img {
    width: 50px;
    height: 50px;
}

ul {
    display: flex;
    justify-content: space-around;
    align-items: center;
    line-height: 80px;
    list-style-type: none;
    width: 200px;
    margin: 0;
    padding: 0;
}

ul li {
    display: flex;
    flex-direction: row;
    font-family: sans-serif;
    font-size: 1.2em;
    color: white;
    text-transform: uppercase;
    margin-right: 15px;
}

ul li a {
    color: white;
    text-decoration: none;
}

ul li a:hover {
    color: white;
    text-decoration: underline;
    transition: .5s;
}

@media screen and (min-width: 720px) {

    figure, img {
        height: 70px;
        width: 70px;
    }

    ul {
        width: 350px;
    }

    ul li {
        font-size: 1.3em;
        margin: 0px;
    }
    
}

</style>