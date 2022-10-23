const ofertas =
[
    {
        id: 1,
        nombre: "Channel N5",
        tipo: "fragancia",
        desc: "un aroma unico",
        precio: 15500,
        marca: "Channel",
        img: './public/multimedia/imagenes/channel-n5.png',
        cantidad:1,
        cantidadUnTotales:20,
    },

    {
        id: 2,
        nombre: "Acua di Gio",
        tipo: "fragancia",
        desc: "Para papa en su dia",
        precio: 13500,
        marca: "Armani",
        img: './public/multimedia/acua-gg.png',
        cantidad:1,
        cantidadUnTotales:20,
    },

    {
        id: 3,
        nombre: "Musa en la Sombras",
        tipo: "maquillaje",
        desc: "Para que seas una mujer diferente",
        precio: 10500,
        marca: "revlon",
        img: 'public/multimedia/sombras-njg.png',
        cantidad:1,
        cantidadUnTotales:20,
    },

    {
        id: 4,
        nombre: "Kiss of Queens",
        tipo: "maquillaje",
        desc: "La marca del deseo",
        precio: 8500,
        marca: "Kiss",
        img: 'public/multimedia/labiales-kiss.png',
        cantidad:1,
        cantidadUnTotales:20,
    },

    {
        id: 5,
        nombre: "Touch of rain",
        tipo: "cuidadoDeLaPiel",
        desc: "Refrescante como la lluvia",
        precio: 10500,
        marca: "natura",
        img: 'public/multimedia/crema-hp.png',
        cantidad:1,
        cantidadUnTotales:20,
    },
];

const fragancias =
[
    {
        id: 1,
        nombre: "Channel N5",
        tipo: "fragancia",
        desc: "un aroma unico",
        precio: 15500,
        marca: "Channel",
        img: './public/imagenes/channel-n5.png',
        cantidad:1,
        cantidadUnTotales:20,
    },

    {
        id: 2,
        nombre: "Acua di Gio",
        tipo: "fragancia",
        desc: "Para papa en su dia",
        precio: 13500,
        marca: "Armani",
        img: './public/imagenes/acua-gg.png',
        cantidad:1,
        cantidadUnTotales:20,
    },

    {
        id: 12,
        nombre: "Absolu",
        tipo: "fragancia",
        desc: "El invierno se acerca",
        precio: 10500,
        marca: "Armani",
        img: './public/imagenes/absolu-gg.png',
        cantidad:1,
        cantidadUnTotales:20,
    },

    {
        id: 24,
        nombre: "Code",
        tipo: "fragancia",
        desc: "Unlimited",
        precio: 11500,
        marca: "Armani",
        img: './public/imagenes/code-gg.png',
        cantidad:1,
        cantidadUnTotales:20,
    },

    {
        id: 32,
        nombre: "Jadore",
        tipo: "fragancia",
        desc: "fatale",
        precio: 19500,
        marca: "dior",
        img: './public/imagenes/jadore.png',
        cantidad:1,
        cantidadUnTotales:20,
    },

    {
        id: 32,
        nombre: "Joy",
        tipo: "fragancia",
        desc: "enjoy of life",
        precio: 19500,
        marca: "dior",
        img: './public/imagenes/joy.png',
        cantidad:1,
        cantidadUnTotales:20,
    },

    {
        id: 44,
        nombre: "Sauvage",
        tipo: "fragancia",
        desc: "Unique",
        precio: 19500,
        marca: "dior",
        img: './public/imagenes/savagge.png',
        cantidad:1,
        cantidadUnTotales:20,
    },
];
const maquillajes =
[
    {
        id: 3,
        nombre: "Musa en la Sombras",
        tipo: "maquillaje",
        desc: "Para que seas una mujer diferente",
        precio: 10500,
        marca: "revlon",
        img: './public/imagenes/sombras-njg.png',
        cantidad:1,
        cantidadUnTotales:20,
    },

    {
        id: 4,
        nombre: "Kiss of Queens",
        tipo: "maquillaje",
        desc: "La marca del deseo",
        precio: 8500,
        marca: "Kiss",
        img: './public/imagenes/labiales-kiss.png',
        cantidad:1,
        cantidadUnTotales:20,
    },

    {
        id: 63,
        nombre: "Phantom of Godless",
        tipo: "Maquillaje",
        desc: "Tu imagen tallada",
        precio: 10500,
        marca: "Kiss",
        img: './public/imagenes/sombras-pm.png',
        cantidad:1,
        cantidadUnTotales:20,
    },

    {
        id: 53,
        nombre: "She",
        tipo: "Maquillaje",
        desc: "Para ellas",
        precio: 11500,
        marca: "revlon",
        img: './public/imagenes/pintura-un-2.png',
        cantidad:1,
        cantidadUnTotales:20,
    },

    {
        id: 73,
        nombre: "Oreanna",
        tipo: "Maquillaje",
        desc: "fatale",
        precio: 19500,
        marca: "Loquilla",
        img: './public/imagenes/labiales-lq.png',
        cantidad:1,
        cantidadUnTotales:20,
    },

    {
        id: 83,
        nombre: "Desseo",
        tipo: "Maquillaje",
        desc: "inborrable",
        precio: 19500,
        marca: "Painter",
        img: './public/imagenes/pintura-uñs.png',
        cantidad:1,
        cantidadUnTotales:20,
    },

    {
        id: 63,
        nombre: "kiss me",
        tipo: "maquillaje",
        desc: "Una Tentacion",
        precio: 19500,
        marca: "revlon",
        img: './public/imagenes/labiales-rv.png',
        cantidad:1,
        cantidadUnTotales:20,
    },
];

 const productos=[...fragancias,...maquillajes];

 console.log(productos)

export { ofertas ,fragancias,maquillajes,productos};