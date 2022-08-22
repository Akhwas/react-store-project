export const formatPrice = (num) => {
    return new Intl.NumberFormat('en-US',{style:'currency',currency:'USD'}).format(num/100)
}

export const getUniqueValues = (products,type) => {
    let filters = ['all']
    let myArray = []
    products.map((product)=>{
        myArray.push(product[type])
    })
    if (type === 'colors'){
        myArray = myArray.flat()
    }

    filters =['all',...new Set(myArray)]
    return filters

}
