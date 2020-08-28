import React from 'react';
import Layout from '../components/Layout';

interface contactProps { }

const contact: React.FC<contactProps> = () => {
    return(
        <Layout pageTitle="Contact">
            <h1>Contact</h1>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aut eveniet itaque ab vel, assumenda commodi voluptatem ex aliquid nam debitis quasi temporibus, autem quia molestias neque ratione, voluptas distinctio! Quam.</p>          
        </Layout>
    );
}

export default contact;