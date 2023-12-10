<template>

    <div class="about">
        <h2>About Us</h2>

        <div class="team-member">
            <img src="../../../images/WhatsApp Image 2023-11-03 at 10.47.45_7447701b.jpg" alt="Tharun">
            <div class="member-info">
                <p>Tharun Kumarr A</p>
                <p>CB.EN.U4CSE22253</p>
                <a href="#" target="_blank" rel="noopener noreferrer"><i class="fab fa-linkedin"></i></a>
                <a href="#" target="_blank" rel="noopener noreferrer"><i class="fab fa-instagram"></i></a>
                <a href="#" target="_blank" rel="noopener noreferrer"><i class="fab fa-github"></i></a>
            </div>
        </div>

        <!-- Team Member 2 -->
        <div class="team-member">
            <img src="../../../images/Screenshot 2023-11-03 120613.png" alt="Bharath">
            <div class="member-info">
                <p>S Bharath</p>
                <p>CB.EN.U4CSE22245</p>
                <a href="#" target="_blank" rel="noopener noreferrer"><i class="fab fa-linkedin"></i></a>
                <a href="#" target="_blank" rel="noopener noreferrer"><i class="fab fa-instagram"></i></a>
                <a href="#" target="_blank" rel="noopener noreferrer"><i class="fab fa-github"></i></a>
            </div>
        </div>

        <!-- Team Member 3 -->
        <div class="team-member">
            <img src="../../../images/WhatsApp Image 2023-11-03 at 11.13.11_3f7217f2.jpg" alt="Naganathan">
            <div class="member-info">
                <p>Naganathan M R</p>
                <p>CB.EN.U4CSE22240</p>
                <a href="#" target="_blank" rel="noopener noreferrer"><i class="fab fa-linkedin"></i></a>
                <a href="#" target="_blank" rel="noopener noreferrer"><i class="fab fa-instagram"></i></a>
                <a href="#" target="_blank" rel="noopener noreferrer"><i class="fab fa-github"></i></a>
            </div>
        </div>

        <!-- Team Member 4 -->
        <div class="team-member">
            <img src="../../../images/Screenshot 2023-11-03 114826.png" alt="HariPrasath">
            <div class="member-info">
                <p>Hariprasath M</p>
                <p>CB.EN.U4CSE22222</p>
                <a href="#" target="_blank" rel="noopener noreferrer"><i class="fab fa-linkedin"></i></a>
                <a href="#" target="_blank" rel="noopener noreferrer"><i class="fab fa-instagram"></i></a>
                <a href="#" target="_blank" rel="noopener noreferrer"><i class="fab fa-github"></i></a>
            </div> 
        </div>
    </div>

    <Footer />
</template>

<script>
    import Navbar from '../Global/Navbar.vue';
    import MainBody from '../Index/MainBody.vue';

    export default {
    components: {
        Navbar,
        MainBody,
    },
    };
</script>

<style>
    .about {
    text-align: center;
    margin-top: 50px;
    }

    .team-member {
        display: inline-block;
        margin: 50px;
        text-align: center;
    }

    .team-member img {
        width: 250px; /* Adjust the width as needed */
        height: 250px; /* Adjust the height as needed */
        border-radius: 50%;
    }

    .member-info {
        margin-top: 10px;
    }

    .member-info a {
        color: #f8d075;
        text-decoration: none;
        margin: 0 5px;
        font-size: 18px;
    }

    .member-info a:hover {
        color: #f4bd3d;
    }
</style>