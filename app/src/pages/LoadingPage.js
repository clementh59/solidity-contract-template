import React from "react";
import Column from "../components/Layout/Column";
import Loader from "../components/Loader";

const LoadingPage = () => {
    return (
        <Column width='100vw' height='100vh' alignItems='center' justifyContent='center'>
            <Loader/>
        </Column>
    )
}

export default LoadingPage;