const products = [
    {
        id: 1,
        name: "Luminaria Vida",
        price: 6400,
        category: "Luminarias",
        img: "../images/Luminaria1.jpeg",
        stock: 5,
        description: "Luminaria con colores vivos, incluye lámpara LED en tono cálido"
    },
    {
        id: 2,
        name: "Tutor",
        price: 1800,
        category: "Accesorios",
        img: "../images/Tutor1.jpeg",
        stock: 20,
        description: "Tutor apto para exterior. Disponible en otros tonos"
    },
    {
        id: 3,
        name: "Bandeja",
        price: 1700,
        category: "Bandejas",
        img: "../images/Bandeja1.jpeg",
        stock: 16,
        description: "Bandejas ideales para desayunar. Disponible en varios tonos"
    },
    {
        id: 4,
        name: "Posa Vaso",
        price: 500,
        category: "Accesorios",
        img: "../images/Posavasos.jpeg",
        stock: 37,
        description: "Posa Vasos universal. Personalizables en varios colores"
    },
    {
        id: 5,
        name: "Porta Espiral",
        price: 2000,
        category: "Accesorios",
        img: "../images/PortaEspiral1.jpeg",
        stock: 26,
        description: "Portaespiral en tamaño mediano. Varios colores disponibles"
    }
]

export const getProducts = () => {
    return new Promise (resolve => {
        setTimeout(() => {
            resolve(products)
        }, 2000)
    })
}