import { Link } from "react-router";
import { useSelector } from 'react-redux'
import { useState } from 'react';

import ModalLogout from "../../Components/Modals/ModalLogout.jsx";

const Navigator = () => {
    const formDataf = useSelector((state) => state.form.formData)
    const [showModal, setShowModal] = useState(false);

    const openModal = () => {
        setShowModal(true);
    };

    const closeModal = () => {
        setShowModal(false);
    };

    return (
        <nav className="navbar">
            <div className="nav-links">
                <Link to="/" className="nav-link">Home</Link>
                <Link to="/login" className="nav-link">Login</Link>
                <Link to="/counter" className="nav-link">Counter</Link>
                <Link to="/think" className="nav-link">Think</Link>
                <Link to="/products" className="nav-link">Product</Link>
                <Link to="/about" className="nav-link">About</Link>
            </div>
            {formDataf.username && formDataf.email && (
                <div className="nav-right">
                    <span className="welcome-text">Bienvenido, {formDataf.username} ! {formDataf.email}</span>
                    <button className="logout-button" onClick={openModal}>Logout</button>
                </div>
            )}
            <ModalLogout
                visible={showModal}
                message="¿Estás seguro de que deseas salir?"
                onClose={closeModal}
            />
        </nav>
    )
}

export default Navigator
