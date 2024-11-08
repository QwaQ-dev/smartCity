<script>
    import logo from '../lib/imgs/logo.png';
</script>

<header>
    <div class="logo">
        <img src={logo} alt="logo" class="logo-img">
    </div>
    <div class="nav">
        <a href="/" class="nav_item">Чат с акиматом</a>
        <a href="/" class="nav_item">Новости</a>
        <a href="/" class="nav_item">Карта событий</a>
        <a href="/" class="nav_item">Обращение</a>
        <a href="/" class="nav_item">Вход/Регистрация</a>
        <select name="lang" id="lang">
            <option value="ru">RU</option>
            <option value="eng">ENG</option>
        </select>
    </div>

</header>

<style>
    header {
        display: flex;
        justify-content: space-around;
        align-items: center;
        width: auto;
        height: 181px;
    }

    .nav_item {
        color: #fff;
        margin: 20px;
        font-weight: bold;
    }

    .logo-img {
        width: 150px;
        height: 150px;
    }

    a {
        color: #000;
        text-decoration: none;
    }

    select{
    border: none;
    position: relative;
    outline: none;
    padding: 5px;
    color: #fff;
    background: #4d4f54;
    }

</style>