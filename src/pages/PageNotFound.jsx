import React, { useEffect } from 'react';
import ErrorPage from "../components/ErrorPage/ErrorPage";

const PageNotFound = () => {
    // update document title
    useEffect(() => {
        document.title = "HEXPRESS | No.1 Trusted Logistics Company";
      }, []);

    return (
        <>
            <ErrorPage />
        </>
    )
}

export default PageNotFound