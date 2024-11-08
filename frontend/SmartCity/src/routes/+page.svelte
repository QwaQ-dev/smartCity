<script>
    import Header from "../components/Header.svelte";
    import Slider from "../components/Slider.svelte";

</script>

<div class="container">
    <div class="bg-img">
        <Header/>
        <Slider/>
    </div>
</div>

<style>
    .container {
        width: auto;
        overflow: hidden;
        height: 200vh;
        background: rgb(201,198,255);
        background: linear-gradient(90deg, rgba(201,198,255,1) 0%, rgba(142,158,244,0.6643032212885154) 80%);
    }

    .bg-img {
        height: 80vh;
        width: 100vw;
        background-image: url('../lib/imgs/bg-img.jpg');
        object-fit: contain; /* Сохраняем пропорции изображения, заполняя контейнер */
        background-size: cover;
    }
</style>