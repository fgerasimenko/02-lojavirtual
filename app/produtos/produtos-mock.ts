import { Produto } from './produto.model';

const semImagem: string = 'app/produtos/media/img/sem_imagem.jpeg'
export const PRODUTOS: Produto[] = [
    {
        id: 1,
        nome: 'Placa de Vídeo GTX1080ti',
        desc: 'Melhor placa de vídeo do mercado, 11GB GDDR5X e pronta para 4K',
        descShort: 'Melhor placa de vídeo',
        categoria: 'Placas de vídeo',
        preco: 4299,
        precoCentavos: 99,
        imageUrl: semImagem
    },
    {
        id: 2,
        nome: 'Processador i9 7900X',
        desc: 'Processador absurdamente rápido com uma caralhada de núcleos e threads',
        descShort: 'Processador foda',
        categoria: 'Placas de vídeo',
        preco: 1999,
        precoCentavos: 98,
        imageUrl: semImagem
    },
    {
        id: 3,
        nome: 'Placa Mãe MSI X299 p. Intel',
        desc: 'Placa Mãe para processador Intel, ATX, Chipset X299, Memória DDR4 ',
        descShort: 'Placa Mãe foderosa',
        categoria: 'Placas Mãe',
        preco: 1249,
        precoCentavos: 90,
        imageUrl: semImagem
    }
]