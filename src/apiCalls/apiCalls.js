export const addOrder= (newPurchase, options) => {
    fetch('http://localhost:3001/api/v1/purchases', options)
      .then(response => {
          console.log(response)
          if(!response.ok){
              throw Error('Error fetching orders')
          }
          return response.json();
      })

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