
export const projects:any[]=[
    {
        id:'0',
        name:"portfolio",
        year:'2024',
        laptop_img:"../assets/images/portfolio_laptop.png",
        cell_img:"../assets/images/portfolio_cell.png",
        demo_url:"",
        github_url:"https://github.com/dsordes37/portfolio",
        inspirations:null,
        text:"<p>A criação de um portfolio é um evento canônico na vida de todo desenvolvedor de software, comigo não seria diferente. Essa site foi feito com angular a partir de um design de minha autoria e busca mostrar ao usuário e possível contratante informações sobre mim e sobre minhas habilidades. A aplicação usa typescript para interpretar listas de informações, contendo nomes, imagens e links dos meus projetos, e organiza-las na página e utiliza angular routes para possibilitar a navegação rápida entre a página principal e as páginas de projetos.</p>",
        logo:"../assets/images/logo.png"


        
    },

    {
        id:'1',
        name:"the blog",
        year:'2024',
        laptop_img:"../assets/images/theblog_laptop.png",
        cell_img:"../assets/images/theblog_cell.png",
        demo_url:"https://theblog-ds.netlify.app",
        github_url:"https://github.com/dsordes37/blog",
        inspirations:[
            {
                url:'https://dribbble.com/dwinawan',
                name:'Dwinawan dribbble'
            },{
                url:'https://dribbble.com/shots/18089191-Blog-Layout',
                name:'Design'
            }
        ],
        text:"<p>Esse projeto foi feito a partir do design de Dwinawan Hariwijaya como atividade prática em um bootcamp sobre angular da plataforma DIO. O site usa typescript para ler os dados listados em um arquivo local e os organiza em forma de cards, que são distribuidos na página principal e levam, por meio do angular routes, a páginas secundárias, que seriam as páginas dos artigos.</p> <p>Um caso de uso possível para essa aplicação seria como landing page de um noticiário online, bastando apenas substituir as informações hospedadas localmente pelo uso de requisições a uma API de notícias.</p>",
        logo:"../assets/images/blog_logo.png"

    },

    {
        id:'2',
        name:"translater",
        year:'2024',
        laptop_img:"../assets/images/translate_laptop.png",
        cell_img:"../assets/images/translate_cell.png",
        demo_url:"https://translate-ds.netlify.app",
        github_url:"https://github.com/dsordes37/translate_app",
        inspirations:[
            {
                url:'https://devchallenges.io/editor/solution/14923',
                name:'Desafio'
            },{
                url:'https://devchallenges.io/',
                name:'Devchallenges'
            },{
                url:'https://mymemory.translated.net/doc/spec.php',
                name:'MyMemory API'
            }
        ],
        text:"<p>Esse site foi feito a partir de um desafio frontend do site devchallenges.io como forma de ganhar experiência em angular. A aplicação utiliza typescript para integrar-se como a API de tradução de texto do MyMemory, além de outras funcionalidades como, contar número de caracteres, trocar o idioma a ser traduzido e o idioma da tradução e copiar o texto.</p>",
        logo:"../assets/images/translate_logo.png"


    }

]
