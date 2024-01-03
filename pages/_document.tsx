import { Html, Head, Main, NextScript } from 'next/document'


export default function Document(props) {


    

    return (
        <Html data-theme={props.theme} >
            <Head />
            <body data-theme={props.theme} className="bg-base-300 lowercase" id="body">
                <Main />
                <NextScript />
            </body>
        </Html>
    )
}

