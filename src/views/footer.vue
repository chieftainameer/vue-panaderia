<template>
    <v-container fluid=true class="footer-container">
        <v-row>
            <v-col class="md-3">
                <p>Contact Us</p>
                <p>About Us</p>
                <p>Email Us</p>
            </v-col>
            <v-col class="md-3">
                <p>+34-612-447-137</p>
                <p>+34-612-447-137</p>
            </v-col>
            <v-col class="md-3">
                <p>FaceBook</p>
                <p>Twitter</p>
                <p>Instagram</p>
                <p>FaceBook</p>
            </v-col>
            <v-col class="md-3">
                <p>Web Development</p>
                <p>Desktop Application Development</p>
                <p>Saas Application Development</p>
                <p>Shopify Expert</p>
                <p>Wordpress Site Development</p>
            </v-col>
        </v-row>
        <v-row class="mt-3">
            <v-col class="md-12 text-center copyright">
            <p class="grey--text">Panaderia Pais-Vasco &copy; 2020</p>
            </v-col>
        </v-row>
    </v-container>
</template>
<script>
export default {
    
}
</script>
<style scoped>
.footer-container{
    position: absolute;
    top:calc(100% - 5px);
    left: 0;
    background:#163172;
    color: white;
    min-height: 250px;
    text-align: center;
    margin-bottom:4px;
}
.copyright{
    background: #151e64;
}
</style>