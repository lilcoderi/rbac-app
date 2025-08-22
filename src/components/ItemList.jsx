// src/components/ItemList.jsx
import React from 'react';
import { Table, Button } from 'react-bootstrap';
import { FaEye, FaEdit, FaTrashAlt } from 'react-icons/fa';

const ItemList = ({ items, canView, canEdit, canDelete, onView, onEdit, onDelete }) => {
  return (
    <Table bordered hover responsive className="shadow-sm">
      <thead>
        <tr>
          <th className="text-center fw-bold" style={{ width: '5%' }}>ID</th>
          <th className="text-center fw-bold" style={{ width: '30%' }}>Title</th>
          <th className="text-center fw-bold" style={{ width: '50%' }}>Body</th>
          <th className="text-center fw-bold" style={{ width: '15%' }}>Actions</th>
        </tr>
      </thead>
      <tbody>
        {items.map((item) => (
          <tr key={item.id}>
            <td>{item.id}</td>
            <td>{item.title}</td>
            <td>{item.body.substring(0, 100)}...</td>
            <td className="text-center">
              {canView && (
                <Button variant="outline-info" size="sm" onClick={() => onView(item)} className="me-2 custom-btn-size">
                  <FaEye />
                </Button>
              )}
              {canEdit && (
                <Button variant="outline-primary" size="sm" onClick={() => onEdit(item)} className="me-2 custom-btn-size">
                  <FaEdit />
                </Button>
              )}
              {canDelete && (
                <Button variant="outline-danger" size="sm" onClick={() => onDelete(item.id)} className="custom-btn-size">
                  <FaTrashAlt />
                </Button>
              )}
            </td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
};

export default ItemList;