export const addOrder= () => {
    console.log('in addOrder')
    // return fetch()
}

export const getOrders = () => {
    return fetch('http://localhost:3001/api/v1/purchases')
        .then(response => {
            if (!response.ok) {
            throw Error('Error fetching ideas');
            }
            return response.json();
        });
}