const baseUrl = 'http://store-betta.herokuapp.com/api'

export const createUser = async (payload) => { 
    try {
        return await( await fetch(`${baseUrl}/users`, {
        method: 'POST',
        headers: {
            'Content-type': 'application/json',
        },
        body: JSON.stringify(payload)
    })).json()
    } catch (error) {
        console.error(error)
    }
}

export const getLoginUser = async (payload) => { 
    try {
        return await( await fetch(`${baseUrl}/users/login`, {
        method: 'POST',
        headers: {
            'Content-type': 'application/json',
        },
        body: JSON.stringify(payload)
    })).json()
    } catch (error) {
        console.error(error)
    }
}

const getProductsDetails = async (_id) => { 
    try {
        return await( await fetch(`${baseUrl}/products/${_id}`, {
        method: 'GET',
        headers: {
            'Content-type': 'application/json',
            },
    })).json()
    } catch (error) {
        console.error(error)
    }
    
}
export default getProductsDetails




