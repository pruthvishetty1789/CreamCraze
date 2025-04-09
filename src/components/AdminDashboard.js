import React from "react";
import { Container, Table, Button } from "react-bootstrap";

const AdminDashboard = () => {
  const orders = [
    { id: 1, customer: "Alice Johnson", total: "$24.99", status: "Pending" },
    { id: 2, customer: "Mark Smith", total: "$14.50", status: "Completed" },
    { id: 3, customer: "Sophia Brown", total: "$30.00", status: "Processing" },
  ];

  return (
    <Container className="my-5">
      <h2 className="text-center">Admin Dashboard</h2>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Order ID</th>
            <th>Customer</th>
            <th>Total</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {orders.map((order) => (
            <tr key={order.id}>
              <td>{order.id}</td>
              <td>{order.customer}</td>
              <td>{order.total}</td>
              <td>{order.status}</td>
              <td>
                <Button variant="success" size="sm" className="me-2">
                  Approve
                </Button>
                <Button variant="danger" size="sm">
                  Reject
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Container>
  );
};

export default AdminDashboard;
