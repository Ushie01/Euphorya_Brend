const baseUrl = 'http://store-betta.herokuapp.com/api'

//Login n Register Export
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

//Product Export

export const getTopProductsDetails = async () => {
    try {
    return await( await fetch(`${baseUrl}/products/top`, {
    method: 'GET',
    headers: {
        'Content-type': 'application/json',
    }
    })).json()
    } catch (error) {
        console.error(error)
    } 
}


export const getProducts = async () => {
    try {
    return await( await fetch(`${baseUrl}/products`, {
    method: 'GET',
    headers: {
        'Content-type': 'application/json',
    }
    })).json()
    } catch (error) {
        console.error(error)
    } 
}


export const getSingleProductDetails = async (_id) => {
    try {
    return await( await fetch(`${baseUrl}/products/${_id}`, {
    method: 'GET',
    headers: {
        'Content-type': 'application/json',
    }
    })).json()
    } catch (error) {
        console.error(error)
    } 
}


export const getProductsDetails = async () => { 
    try {
        return await( await fetch(`${baseUrl}/products/all`, {
        method: 'GET',
        headers: {
           'Content-type': 'application/json',
        }
    })).json()
    } catch (error) {
        console.error(error)
    }   
}


export const deleteProductsDetails  = async (_id) => { 
    try {
        const userDetails = localStorage.getItem('user');
        const parsedDetails = JSON.parse(userDetails);
        return await( await fetch(`${baseUrl}/products/${_id}`, {
            method: 'DELETE',
            headers: {
               Authorization: `Bearer ${parsedDetails.token}`,
        },
    })).json()
    } catch (error) {
        console.error(error)
    }   
}


export const updateProductsDetails = async (_id, payload) => {
    try {
        const userDetails = localStorage.getItem('user');
        const parsedDetails = JSON.parse(userDetails);
        return await( await fetch(`${baseUrl}/products/${_id}`, {
            method: 'PUT',
            headers: {
                'Content-type': 'application/json',
                Authorization: `Bearer ${parsedDetails.token}`,
            },
            body: JSON.stringify(payload)
        })).json()
    } catch (error) {
        console.error(error)
    }
}


export const createProductsDetails = async (payload) => { 
    try {
        const userDetails = localStorage.getItem('user');
        const parsedDetails = JSON.parse(userDetails);
        return await( await fetch(`${baseUrl}/products`, {
        method: 'POST',
            headers: {
            'Content-type': 'application/json',
            Authorization: `Bearer ${parsedDetails.token}`,
        },
        body: JSON.stringify(payload)
    })).json()
    } catch (error) {
        console.error(error)
    }
}


//User Export 
export const getUserDetails = async () => { 
    try {
        const userDetails = localStorage.getItem('user');
        const parsedDetails = JSON.parse(userDetails);
        return await( await fetch(`${baseUrl}/users`, {
        method: 'GET',
        headers: {
            'Content-type': 'application/json',
            Authorization: `Bearer ${parsedDetails.token}`,
        }
    })).json()
    } catch (error){
        console.error(error)
    }   
}


export const getUserProfile = async (_id) => { 
    try {
        const userDetails = localStorage.getItem('user');
        const parsedDetails = JSON.parse(userDetails);
        return await( await fetch(`${baseUrl}/users/${_id}`, {
        method: 'GET',
        headers: {
            'Content-type': 'application/json',
            Authorization: `Bearer ${parsedDetails.token}`,
        }
    })).json()
    } catch (error){
        console.error(error)
    }   
}


export const updateUser = async (_id, payload) => {
    try {
        const userDetails = localStorage.getItem('user');
        const parsedDetails = JSON.parse(userDetails);
        return await( await fetch(`${baseUrl}/users/${_id}`, {
            method: 'PUT',
            headers: {
                'Content-type': 'application/json',
                Authorization: `Bearer ${parsedDetails.token}`,
            },
            body: JSON.stringify(payload)
        })).json()
    } catch (error) {
        console.error(error)
    }
}



export const userDelete = async (_id) => {
    try {
        const userDetails = localStorage.getItem('user');
        const parsedDetails = JSON.parse(userDetails);
        return await( await fetch(`${baseUrl}/users/${_id}`, {
            method: 'DELETE',
            headers: {
                'Content-type': 'application/json',
                Authorization: `Bearer ${parsedDetails.token}`,
            }
        })).json()
    } catch (error) {
        console.error(error)
    }
}


// https://api.facts.ng/v1
export const getState = async () => {
    try {
        return await (await fetch('/states', { 
            method: 'GET',
            headers: {
                'Content-type': 'application/json',
            }
        })).json()
    } catch (error) {
        console.error(error)
    }
}


export const getCity = async (_id) => {
    try {
        return await (await fetch(`/states/${_id}`,{
            method: 'GET',
            headers: {
                'Content-type' : 'application/json'
            }
        })).json()
    } catch (error) {
       console.error(error) 
    }
}

