import Head from "next/head";

import styled from "styled-components"
import Wrapper from '../styles/boxlayout/Wrapper.js';

export default function App({ Component, pageProps }) {
    return (
        <Wrapper>
            <Head>
            <meta name='viewport' content='initial-scale=1.0, width=device-width' />
            </Head>
            <Component {...pageProps} />
            <style jsx global>
            {`
            body {
                margin: 0;
                overflow: hidden;
            }
            `}
            </style>
        </Wrapper>
    );
  } // 스타일 안 먹어서 jsx global 여기다가 다시 함