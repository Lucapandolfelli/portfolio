import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang='es'>
      <Head>
        <meta charSet="UTF-8" />
        <meta name="author" content="Luca Pandolfelli" />
        <meta name="description" content="Portfolio de Luca Pandolfelli. Fullstack Javascript Developer. Técnico en Informática. Apasionado por la tecnología." />
        <meta property="og:title" content="Luca Pandolfelli Portfolio"/>
        <meta property="og:url" content="https://lucapandolfelli.com"/>
        <meta property="og:image" content="https://raw.githubusercontent.com/Lucapandolfelli/portfolio/main/public/images/screenshot.png"/>
        <meta property="og:image:type" content="image/png" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:alt" content="Luca Pandolfelli Portfolio Website" />
        <meta property="og:description" content="Portfolio de Luca Pandolfelli. Fullstack Javascript Developer. Técnico en Informática. Apasionado por la tecnología."/>
        <meta property="og:type" content="website"/>
        <meta property="og:determiner" content="the" />
        <meta property="og:locale" content="es_ES" />
        <meta property="og:site_name" content="Luca Pandolfelli Portfolio" />
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
