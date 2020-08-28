import React from 'react';
import Layout from '../components/Layout';

interface aboutProps { }

const about: React.FC<aboutProps> = () => {
    return(
        <Layout pageTitle="About">
            <h1>About Us</h1>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aut eveniet itaque ab vel, assumenda commodi voluptatem ex aliquid nam debitis quasi temporibus, autem quia molestias neque ratione, voluptas distinctio! Quam.</p>          
        </Layout>
    );
}

export default about;