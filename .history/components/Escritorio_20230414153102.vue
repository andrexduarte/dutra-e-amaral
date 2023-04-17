<template>
    <div>
        <p>
            Noso escritório está localizado na Rua Juiz de Fora, 32 - Sala 403 - Centro, Ipatinga - MG.
        </p>
        <div class="maps">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3761.457946168691!2d-42.52714298509262!3d-19.478923886858077!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xb001739e1eeedd%3A0x6e16d8303ed2641a!2sDutra%20%26%20Amaral%20Advocacia!5e0!3m2!1spt-BR!2sbr!4v1681495093181!5m2!1spt-BR!2sbr" width="100%" height="250" style="border:0;" allowfullscreen loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>

        <a href="https://www.google.com/maps/place/Dutra+%26+Amaral+Advocacia/@-19.4789239,-42.5275346,17z/data=!3m1!4b1!4m6!3m5!1s0xb001739e1eeedd:0x6e16d8303ed2641a!8m2!3d-19.4789239!4d-42.5249543!16s%2Fg%2F11n96jz4hm" target="_blank" class="btn">Abrir no Google Maps</a>
    </div>
</template>

<style scoped>
    .btn {
        background-color: #a35048;
        color: #FFF;
        font-weight: 400;
        margin: -20px auto 0;
        display: block;
        max-width: 150px;
        border-radius: 2px;
        position: relative;
        z-index: 10;
        padding-right: 30px;
    }

    .btn:after {
        content: "";
        right: 0;

    }

    p {
        font-size: 14px;
    }
</style>