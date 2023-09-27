import React from 'react'
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';


export default function table() {
    const products = [
        {

            "code": "f230fh0g3",
            "name": "Bamboo Watch",
            "description": "Product Description",
        },

    ]
    return (
        <div>
            <DataTable value={products} tableStyle={{ minWidth: '50rem' }}>
                <Column field="code" header="Code"></Column>
                <Column field="name" header="Name"></Column>
                <Column field="category" header="Category"></Column>
                <Column field="quantity" header="Quantity"></Column>
            </DataTable>
        </div>
    )
}
