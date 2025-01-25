import { motion } from "framer-motion";
import { useDispatch } from 'react-redux';
import { limpiarFormData } from "../../store/features/form/formSlice.js";

const ModalLogout = ({ visible, message, onClose }) => {
    const dispatch = useDispatch();
    //const formDataRedux = useSelector((state) => state.form.formData);

    const handleLogout = () => {
        //console.log('datos del formulario', formDataRedux);
        dispatch(limpiarFormData());
        onClose();
    };

    if (!visible) {
        return null;
    }

    return (
        <div className="modal-overlay">
            <motion.div
                className="notification-error"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
            >
                <div>
                    <p>{message}</p>
                    <button
                        className="logout-button"
                        onClick={handleLogout}
                    >
                        Presiona para salir
                    </button>
                </div>
                <button
                    className="close-btn-error"
                    onClick={onClose}
                >
                    X
                </button>
            </motion.div>
        </div>
    );
};

export default ModalLogout;