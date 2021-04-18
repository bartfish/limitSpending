const TransactionSchema = {
    name: 'Transaction',
    properties: {
        name: 'string',
        category: 'number',
        amount: 'number',
        insertTime: 'datetime',
        longtitude: 'number',
        latitude: 'number'
    }
}

export default TransactionSchema;