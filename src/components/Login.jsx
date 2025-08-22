// src/components/Login.jsx
import React, { useState } from 'react';
import { Form, Button, Card, Row, Col } from 'react-bootstrap';
import { FaUserShield, FaUserEdit, FaUser } from 'react-icons/fa';

const Login = ({ onLogin }) => {
  const [role, setRole] = useState('Viewer');

  const handleLogin = (e) => {
    e.preventDefault();
    if (role) {
      onLogin(role);
    }
  };

  const getRoleIcon = (selectedRole) => {
    switch (selectedRole) {
      case 'Admin':
        return <FaUserShield className="me-2" />;
      case 'Editor':
        return <FaUserEdit className="me-2" />;
      case 'Viewer':
        return <FaUser className="me-2" />;
      default:
        return null;
    }
  };

  return (
    <div className="d-flex justify-content-center align-items-center vh-100 bg-light">
      <Card style={{ width: '22rem' }} className="shadow-lg p-3">
        <Card.Body>
          <div className="text-center mb-4">
            {getRoleIcon(role)}
            <h2 className="mb-0">RBAC Dashboard</h2>
            <p className="text-muted">Login as a user</p>
          </div>
          <Form onSubmit={handleLogin}>
            <Form.Group className="mb-3">
              <Form.Label>Select Role</Form.Label>
              <Form.Select value={role} onChange={(e) => setRole(e.target.value)}>
                <option value="Admin">Admin</option>
                <option value="Editor">Editor</option>
                <option value="Viewer">Viewer</option>
              </Form.Select>
            </Form.Group>
            <div className="d-grid gap-2">
              <Button variant="primary" type="submit">
                Login
              </Button>
            </div>
          </Form>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Login;