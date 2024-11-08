<script>
    import slide1 from '../lib/imgs/slider/slider1.png';
    import right from '../lib/imgs/right.png';
</script>

<div class="slider">
    <img src={right} alt="" class="left">
    <img src={right} alt="" class="right">
    <div class="slider-item">
        <div class="slider-title">
            <h2 class="title-text">Новости города</h2>
            <div class="border"></div>
        </div>
        <div class="slider-images">
            <img src={slide1} alt="">
        </div>
        <div class="slider-text">
            <h2 class="slider-suptitle">Изменение схемы светофоров на проспекте Абая</h2>
            <p class="slider-p">Проект нужен для обезопашивания пешеходов - будет добавлен целый светофор для того, чтобы люди...</p>
        </div>
    </div>
</div>

<style>
    .left {
        margin-top: 200px;
        position: absolute;
    }

    img:hover {
        cursor: pointer;
    }

    .right{
        margin-left: 520px;
        margin-top: 200px;
        transform: rotate(180deg);
        position: absolute;
    }

    .slider-item {
        margin: 0 5vw;
    }

    .slider {
        margin-top: 40vh;
        padding: 35px;
        position: relative;
        width: 640px;
        height: 422px;
        background-image: url('../lib/imgs/slider-bg.png');
        object-fit: contain; /* Сохраняем пропорции изображения, заполняя контейнер */
        background-size: cover;
    }

    .slider-title {
        font-size: 1.5vh;
    }

    .border {
        margin: 0;
        background-color: #761596;
        height: 3px;
        width: 50px;
    }

    .title-text {
        margin: 0;
    }

    .slider-images {
        margin: 3vh 0 0 0;
    }

    .slider-text {
        width: 400px;
    }

    .slider-suptitle {
        margin: 10px;
        font-weight: 400;
        font-size: 1.7vh;
    }
</style>