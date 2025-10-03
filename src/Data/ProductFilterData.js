export const color = [
    "white",
    "red", 
    "blue",
    "yellow",
    "green",
    "black",
    "purple",
    "gray",
    "pink",
    "orange",
    "brown",
    "beige"
]

export const filters = [
    {
        id: "color",
        name: "Color",
        options: [
            { value: "white", label: "White", checked: false },
            { value: "beige", label: "Beige", checked: false },
            { value: "blue", label: "Blue", checked: true },
            { value: "brown", label: "Brown", checked: false },
            { value: "green", label: "Green", checked: false },
            { value: "purple", label: "Purple", checked: false },
        ],
    },
    {
        id: "size",
        name: "Size",
        options: [
            { value: "S", label: "S", checked: false },
            { value: "M", label: "M", checked: false },
            { value: "L", label: "L", checked: false },
            { value: "XL", label: "XL", checked: false },
            { value: "XXL", label: "XXL", checked: false },
        ],
    }
];

export const singleFilter = [
    {
        id: "price",
        name: "Price",
        options: [
            { value: "159-399", label: "159-399", checked: false },
            { value: "400-699", label: "400-699", checked: false },
            { value: "700-999", label: "700-999", checked: false },
            { value: "1000-1499", label: "1000-1499", checked: false },
            { value: "1499-9999", label: "1499-9999", checked: false },
        ]
    },

    {
        id: "discount",
        name: "Discount Range",
        options: [
            { value: "10%", label: "10% And Above", checked: false },
            { value: "20%", label: "20% And Above", checked: false },
            { value: "30%", label: "30% And Above", checked: false },
            { value: "40%", label: "40% And Above", checked: false },
            { value: "50%", label: "50% And Above", checked: false },
            { value: "60%", label: "60% And Above", checked: false },
            { value: "70%", label: "70% And Above", checked: false },
            { value: "80%", label: "80% And Above", checked: false },
        ]
    },

    {
        id: "stock",
        name: "Availability",
        options: [
            { value: "In Stock", label: "In Stock", checked: false },
            { value: "Out of Stock", label: "Out of Stock", checked: false },
        ]
    }
]

export const sortOptions = [
    { name: "Price: Low to High", href: "#", current: false },
    { name: "Price: High to Low", href: "#", current: false },
]