import { useState } from "react";
import { motion } from "motion/react"
import { useSelector, useDispatch } from 'react-redux'
import { updateFormData } from "../../store/features/form/formSlice.js";
import useForm from "../Hooks/useForm.js";
import ModalInfo from "../../Components/Modals/ModalInfo.jsx";
import ModalError from "../../Components/Modals/ModalError.jsx";

const FormWithMotionPrueba = ({ titleForm }) => {
    const dispatch = useDispatch();
    const { formData, handleChange } = useForm({
        module: formDataf.module,
        username: '',
        email: '',
        password: ''
    });
    const formDataf = useSelector((state) => state.form.formData)

    const [showModal, setShowModal] = useState(false);
    const [showModalErr, setShowModalErr] = useState(false);
    const [modalMessage, setModalMessage] = useState("");
    const [showPassword, setShowPassword] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();

        if (formData.password === formDataf.password) {
            setModalMessage(`¡Bienvenido, ${formData.username}!`);
            setShowModal(true);
            setShowModalErr(false);
            dispatch(updateFormData({ name: "username", value: formData.username }));
            dispatch(updateFormData({ name: "email", value: formData.email }));
            //console.log('datos', formDataf);
            //setErrorMessage("");
        } else {
            setModalMessage("");
            setShowModal(false);
            setShowModalErr(true);
        }
        //setShowModal(true);
        //console.log('datos del formulario', formData);
    };

    const onCloseModalInfo = () => {
        setShowModal(false);
    };

    const onCloseModalError = () => {
        setShowModalErr(false);
    };

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
        >
            <ModalInfo
                visible={showModal}
                message={modalMessage}
                onClose={onCloseModalInfo}
            />

            <ModalError
                visible={showModalErr}
                message="Username o password incorecto."
                onClose={onCloseModalError}
            />

            <form onSubmit={handleSubmit}>
                <motion.div
                    initial={{ x: -100 }}
                    animate={{ x: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <h3>{titleForm}</h3>
                </motion.div>
                <motion.div
                    initial={{ x: -100 }}
                    animate={{ x: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <div>
                        <label>
                            Module:
                            <input
                                type="text"
                                name="module"
                                value={formData.module}
                                readOnly
                            />
                        </label>
                    </div>
                </motion.div>
                <motion.div
                    initial={{ x: -100 }}
                    animate={{ x: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <div>
                        <label>
                            Username:
                            <input
                                type="text"
                                name="username"
                                value={formData.username}
                                onChange={handleChange}
                                required
                            />
                        </label>
                    </div>
                </motion.div>
                <motion.div
                    initial={{ x: -100 }}
                    animate={{ x: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <div>
                        <label>
                            Email:
                            <input
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                required
                            />
                        </label>
                    </div>
                </motion.div>
                <motion.div
                    initial={{ x: -100 }}
                    animate={{ x: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <div style={{ display: "flex", alignItems: "center" }}>
                        <label style={{ flexGrow: 1 }}>
                            Password:
                            <input
                                type={showPassword ? "text" : "password"}
                                name="password"
                                value={formData.password}
                                onChange={handleChange}
                                required
                                style={{ marginRight: "10px" }}
                            />
                        </label>
                        <button
                            type="button"
                            onClick={() => setShowPassword((prev) => !prev)}
                            style={{
                                padding: "5px 10px",
                                cursor: "pointer",
                                border: "1px solid #ccc",
                                backgroundColor: "#f9f9f9",
                                borderRadius: "5px",
                                color: "black",
                            }}
                        >
                            {showPassword ? "Ocultar" : "Mostrar"}
                        </button>
                    </div>
                </motion.div>
                <motion.div
                    initial={{ y: 100 }}
                    animate={{ y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <button type="submit" style={{ marginTop: '10px' }}>Enviar</button>
                </motion.div>
            </form>
        </motion.div>
    );
};
export default FormWithMotionPrueba;