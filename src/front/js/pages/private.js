import React, { useContext, useEffect } from "react";
import { Context } from "../store/appContext";

const Private = () => {
    const { store, actions } = useContext(Context);

    useEffect(() => {
        if (!store.logged) {
            actions.verifyAuthToken();
        }
    }, [store.logged]);

    return (
        <div className="text-center">
            {store.logged ? (
                <div>
                    <h1>Bienvenid@, {store.user.email}!</h1>
                    <p>Esto es una ruta protegida.</p>
                </div>
            ) : store.logged == false ? (
                <div>
                    <h1>No dispone de autorización</h1>
                    <p>Necesitas estar registrad@ para acceder a la página.</p>
                </div>
            ) : (
                <div>
                    <h1>Autenticación</h1>
                    <p>Por favor, espere mientras verificamos su identidad.</p>
                </div>
            )}
        </div>
    );
};

export default Private;