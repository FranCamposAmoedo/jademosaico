/* Lista de productos */
const products = [
    {
        id: "1",
        name: "Luminaria Vida",
        price: 6400,
        category: "luminarias",
        img: "../images/Luminaria1.jpeg",
        stock: 5,
        description: "Luminaria con colores vivos, incluye lámpara LED en tono cálido"
    },
    {
        id: "2",
        name: "Tutor",
        price: 1800,
        category: "accesorios",
        img: "../images/Tutor1.jpeg",
        stock: 20,
        description: "Tutor apto para exterior. Disponible en otros tonos"
    },
    {
        id: "3",
        name: "Bandeja",
        price: 1700,
        category: "bandejas",
        img: "../images/Bandeja1.jpeg",
        stock: 16,
        description: "Bandejas ideales para desayunar. Disponible en varios tonos"
    },
    {
        id: "4",
        name: "Posa Vaso",
        price: 500,
        category: "accesorios",
        img: "../images/Posavasos.jpeg",
        stock: 37,
        description: "Posa Vasos universal. Personalizables en varios colores"
    },
    {
        id: "5",
        name: "Porta Espiral",
        price: 2000,
        category: "accesorios",
        img: "../images/PortaEspiral1.jpeg",
        stock: 26,
        description: "Portaespiral en tamaño mediano. Varios colores disponibles"
    },
    {
        id: "6",
        name: "Plato Giratorio",
        price: 2800,
        category: "platos",
        img: "../images/PlatoGiratorio.jpeg",
        stock: 8,
        description: "Plato giratorio de 25 cm de diámetro. Personalizable en otros colores"
    }
]

/* Lista de categorías */
const categories = [
    {id: "luminarias", description: "Luminarias"},
    {id: "bandejas", description: "Bandejas"},
    {id: "platos", description: "Platos"},
    {id: "accesorios", description: "Accesorios"}
]

/* Promesa para obtener las categorías */
export const getCategories = () => {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(categories)
        }, 500)
    })
}

/* Promesa para obtener productos (todos o los de su categoría) */
export const getProducts = (categoryId) => {
    return new Promise (resolve => {
        setTimeout(() => {
            resolve(categoryId ? products.filter(prod => prod.category === categoryId) : products)
        }, 500)
    })
}

/* Promesa para obtener el producto por el Id */
export const getProductsById = (id) => {
    return new Promise (resolve => {
        setTimeout(() => {
            resolve(products.find(prod => prod.id === id))
        }, 500)
    })
}