import React, { useState } from 'react';
import Head from 'next/head';
import { useDispatch } from 'react-redux';
import { HeaderComponent } from '../../components';
import { ActionsList } from '../../store/ducks/user';

export default function Home(): JSX.Element {
    const [email, setEmail] = useState('');

    const dispatch = useDispatch();

    function sendUserEmail() {
        dispatch(ActionsList.emailCheckRequest({ email }));
    }

    return (
        <div>
            <Head>
                <title>WebComics</title>
            </Head>

            <HeaderComponent />

            <main>
                <h3>As melhores histórias em um só lugar</h3>
                <p>Digite seu email e começe agora:</p>
                <input type="text" onChange={e => setEmail(e.target.value)} />
                <button type="button" onClick={sendUserEmail}>
                    Começar
                </button>
            </main>

            <footer>Footer</footer>
        </div>
    );
}
