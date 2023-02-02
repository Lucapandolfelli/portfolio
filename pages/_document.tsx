import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang='es'>
      <Head>
        <meta charSet="UTF-8" />
        <meta name="author" content="Luca Pandolfelli" />
        <meta name="description" content="Portfolio de Luca Pandolfelli. Fullstack Javascript Developer. Técnico en Informática. Apasionado por la tecnología." />
        <link rel="icon" href="/favicon.ico" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css"></link> 
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
