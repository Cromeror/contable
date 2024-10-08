'use client'
import React from 'react';
import { Table } from '@/components/Table';
import { TopBar } from '@/components/TopBar';
import { SideBar } from '@/components/SideBar';

// Datos de ejemplo
const transactions = [
    { id: 1, description: 'Compra de material de oficina', date: '2024-08-10', amount: 150.75 },
    { id: 2, description: 'Pago de servicios', date: '2024-08-12', amount: 75.00 },
    { id: 3, description: 'Venta de producto X', date: '2024-08-13', amount: 300.00 },
];

const TransactionDetail = () => {
    return (
        <div>
            <Table />
            <h1>Vista Condddtable</h1>
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Descripción</th>
                        <th>Fecha</th>
                        <th>Monto</th>
                    </tr>
                </thead>
                <tbody>
                    {transactions.map(transaction => (
                        <tr key={transaction.id}>
                            <td>{transaction.id}</td>
                            <td>{transaction.description}</td>
                            <td>{transaction.date}</td>
                            <td>${transaction.amount.toFixed(2)}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default TransactionDetail;
