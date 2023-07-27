<template>
    <div class="list-depoimentos">
        <blockquote class="depoimento" id="depoimentos" :key="i" v-for="(item, i) in depoimentos">
            <p>
                {{ item.depoimento }}
            </p>
            <footer>
                <img :src="`/avatar/${ item.image }.jpg`" :alt="item.autor" class="avatar">
                <cite>
                     {{ item.autor }}
                </cite>
            </footer>
        </blockquote>
    </div>
  </template>
  
  <script>
    export default {
        data() {
            return {
                depoimentos: [
                    { 
                        depoimento: 'Eu quero movimento e não um curso calmo de existência. Quero excitação e perigo e a oportunidade de sacrificar-me por minhas paixões...',
                        autor: 'Leon Tolstói',
                        image: 'foto'
                    },
                    { 
                        depoimento: 'Passei por muita coisa na vida e agora penso que encontrei o que é necessário para a felicidade. Uma vida tranquila e isolada no campo, com a possibilidade de ser útil à gente para quem é fácil fazer o bem e que não está acostumada que o façam; depois trabalhar em algo que se espera ter alguma utilidade; depois descanso, natureza, livros, música, amor pelo próximo - essa é a minha idéia de felicidade. E depois, no topo de tudo isso, você como companheira, e filhos talvez - o que mais pode o coração de um homem desejar?',
                        autor: 'Leon Tolstói',
                        image: 'foto'
                    },
                    { 
                        depoimento: 'É absurdo não aceitarmos a vida como ela é, deixarmo-nos dominar pelo passado. Há que lutar para viver melhor, muito melhor.',
                        autor: 'Leon Tolstói',
                        image: 'foto'
                    },
                ]
            }
        }
    }
  </script>
  
  <style lang="scss">
   .list-depoimentos {
      display: flex;
      align-items: flex-start;
    }
  
    .depoimento {
      background: #FFF;
      margin: 0 15px 20px;
      list-style: none;
      padding: 25px 30px;
      position: relative;
      border-radius: 5px;
      text-align: left;
      box-shadow: 10px 10px 40px 0 rgba(0,0,0,0.2);
      width: 33.333%;
      
      p {
        margin: 0 0 15px;
        padding-bottom: 20px;
        position: relative;

        &::before {
            content: "\201C";
            font-size: 65px;
            color: #75362f;
            position: absolute;
            top: -19px;
            left: -26px;
        }

        &::after {
            background-color: #75362f;
            content: "";
            position: absolute;
            width: 40%;
            height: 1px;
            bottom: 0;
            left: 50%;
            margin-left: -20%;
        }
      }

      cite {
        font-weight: 600;
        font-style: normal;
      }

      footer {
        display: flex;
        align-items: center;
      }
    }

    .avatar {
        max-width: 48px;
        height: 48px;
        width: 100%;
        border-radius: 50%;
        display: inline-block;
        margin-right: 10px;
    }
    
    @media only screen and (max-width: 768px) {
      .list-depoimentos {
        flex-wrap: wrap;
        
        .depoimento {
            width: 100%;
        }
      }
    }
  </style>