export class Produto{
    constructor(
        public id: number,
        public nome: string,
        public desc: string,
        public descShort: string,
        public categoria: string,
        public preco: number,
        public precoCentavos: number,
        public imageUrl: string
    ){}
}