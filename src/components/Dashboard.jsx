import React, { useState, useEffect } from 'react';
import { Container, Button, Alert, Navbar, Nav, Spinner } from 'react-bootstrap';
import ItemList from './ItemList';
import ItemFormModal from './ItemFormModal';
import Swal from 'sweetalert2';
import { FaPlus, FaSignOutAlt } from 'react-icons/fa';

const publicApiUrl = 'https://jsonplaceholder.typicode.com/posts';

const Dashboard = ({ userRole, onLogout }) => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);

  const canAdd = userRole === 'Admin';
  const canEdit = userRole === 'Admin' || userRole === 'Editor';
  const canDelete = userRole === 'Admin' || userRole === 'Editor';
  const canView = true;

  useEffect(() => {
    const fetchItems = async () => {
      try {
        const response = await fetch(publicApiUrl);
        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }
        const data = await response.json();
        setItems(data.slice(0, 10));
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };
    fetchItems();
  }, []);

  const handleSave = (item) => {
    if (selectedItem) {
      setItems(items.map(i => i.id === item.id ? item : i));
      Swal.fire('Success!', 'Item has been updated.', 'success');
    } else {
      const newItem = { id: Date.now(), ...item };
      setItems([newItem, ...items]);
      Swal.fire('Success!', 'Item has been added.', 'success');
    }
    setShowModal(false);
    setSelectedItem(null);
  };

  const handleDelete = (itemId) => {
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#d33',
      cancelButtonColor: '#3085d6',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.isConfirmed) {
        setItems(items.filter(item => item.id !== itemId));
        Swal.fire('Deleted!', 'Your item has been deleted.', 'success');
      }
    });
  };

  const handleLogout = () => {
    Swal.fire({
      title: 'Are you sure?',
      text: 'You will be logged out.',
      icon: 'question',
      showCancelButton: true,
      confirmButtonColor: '#d33',
      cancelButtonColor: '#3085d6',
      confirmButtonText: 'Yes, Logout'
    }).then((result) => {
      if (result.isConfirmed) {
        onLogout();
      }
    });
  };

  const handleViewClick = (item) => {
    Swal.fire({
      title: 'Item Details',
      html: `
        <div style="text-align: left;">
          <p><strong>ID:</strong> ${item.id}</p>
          <p><strong>Title:</strong> ${item.title}</p>
          <p><strong>Body:</strong> ${item.body}</p>
        </div>
      `,
      icon: 'info',
      confirmButtonText: 'Close'
    });
  };

  const handleAddClick = () => {
    setSelectedItem(null);
    setShowModal(true);
  };

  const handleEditClick = (item) => {
    setSelectedItem(item);
    setShowModal(true);
  };

  return (
    <>
      <Navbar bg="primary" variant="dark" expand="lg" className="shadow-sm" sticky="top">
        <Container>
          <Navbar.Brand>RBAC Dashboard</Navbar.Brand>
          <Nav className="ms-auto">
            <Navbar.Text className="me-3 text-white">
              Signed in as: <span className="fw-bold">{userRole}</span>
            </Navbar.Text>
            <Button variant="outline-light" onClick={handleLogout}>
              <FaSignOutAlt className="me-1" /> Logout
            </Button>
          </Nav>
        </Container>
      </Navbar>

      <Container className="my-5">
        <div className="d-flex justify-content-between align-items-center mb-4">
          <h2>Item List</h2>
          {canAdd && (
            <Button variant="success" onClick={handleAddClick}>
              <FaPlus className="me-2" /> Add Item
            </Button>
          )}
        </div>

        {loading && (
          <div className="text-center">
            <Spinner animation="border" role="status" />
            <p>Loading items...</p>
          </div>
        )}
        {error && <Alert variant="danger">Error: {error}</Alert>}
        {!loading && !error && (
          <ItemList
            items={items}
            canView={canView}
            canEdit={canEdit}
            canDelete={canDelete}
            onView={handleViewClick}
            onEdit={handleEditClick}
            onDelete={handleDelete}
          />
        )}
      </Container>

      <ItemFormModal
        show={showModal}
        onHide={() => setShowModal(false)}
        item={selectedItem}
        onSave={handleSave}
      />
    </>
  );
};

export default Dashboard;