import React from 'react';
import { Link } from 'react-router-dom';

const PageNotFound = () => {
    return (
        <>
            <div className="center">
                <h1>cette page n'existe pas !</h1>
                <Link to="/" className="waves-effect waves-teal btn-flat">
                    Retourner à l'accueil
                </Link>
            </div>
        </>
    );
};

export default PageNotFound;