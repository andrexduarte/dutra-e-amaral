<template>
    <div class="content-maps">
        <div class="maps">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3761.457946168691!2d-42.52714298509262!3d-19.478923886858077!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xb001739e1eeedd%3A0x6e16d8303ed2641a!2sDutra%20%26%20Amaral%20Advocacia!5e0!3m2!1spt-BR!2sbr!4v1681495093181!5m2!1spt-BR!2sbr" width="100%" height="250" style="border:0;" allowfullscreen loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>
        <div class="redes">
            <h2 class="content-title">Nos encontre!</h2>
            <address class="adr">
                <span>
                    <i class="fa fa-map-marker" aria-hidden="true"></i>
                    Rua Juiz de Fora, 32 - Sala 403 - Centro, Ipatinga - MG
                </span>
                <span>
                    <i class="fa fa-whatsapp" aria-hidden="true"></i>
                    <a href="https://api.whatsapp.com/send?phone=5531983619686" target="_blank">
                        (31) 98361-9686
                    </a>
                </span>
                <span>
                    <span>
                        <i class="fa fa-envelope-o" aria-hidden="true"></i>
                        <a href="mailto:whenia@dutraeamaral.com.br" target="_blank">whenia@dutraeamaral.com.br</a><br>
                    </span>
                </span>
                <span>
                    <a href="https://www.facebook.com/dutraeamaraladvocacia/">
                        <i class="fa fa-facebook-official" aria-hidden="true"></i>
                        Facebook
                    </a>
                </span>
                <span>
                    <a href="https://www.instagram.com/dutraeamaraladvocacia/">
                        <i class="fa fa-instagram" aria-hidden="true"></i>
                        Instagram
                    </a>

                </span>
            </address>
        </div>
    </div>
</template>

<style lang="scss" scoped>
    .content-maps {
        display: flex;
        align-items: center;
        justify-content: space-between;
        height: 80vh;
        gap: 40px;
        box-sizing: border-box;
        .redes {
            padding-right: 40px;
            width: 100%;
            box-sizing: border-box;
        }
        .maps {
            width: 100%;
        }

        iframe {
            display: block;
            height: 80vh !important;
        }
    }

    .content-title {
        color: #FFF;
        font-size: 32px;
        text-align: left;
        font-weight: 600;
        margin: 0 0 20px;
    }

    .adr {
        color: #FFF;
        font-size: 14px;
        margin: 0;

        span {
            clear: both;
            display: block;
            margin-bottom: 8px;
            padding: 5px 0;
        }

        a {
            color: #FFF;
            text-decoration: none;
        }

        .fa {
            font-size: 25px;
            float: left;
            margin:-4px 8px 0 0;
            width: 27px;
            text-align: center;
        }
    }

    @media only screen and (max-width: 768px) {
        .content-maps {
            display: block;
            height: 100%;
            
            .redes {
                padding: 30px 15px;
                max-width: 100%;
            }
        }
    }
</style>