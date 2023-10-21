import { Html, Head, Main, NextScript } from 'next/document'
import Script from 'next/script'

const GOOGLE_TAG_MANAGER_ID = 'G-HZ5FVTE39B'

export default function Document() {
	return (
		<Html lang='en'>
			<Head>
				<Script
					async
					src={`https://www.googletagmanager.com/gtag/js?id=${GOOGLE_TAG_MANAGER_ID}`}
				></Script>

				<Script id='google-analytics'>
					{`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
 
          gtag('config', '${GOOGLE_TAG_MANAGER_ID}');
        `}
				</Script>
			</Head>
			<body className='min-h-screen text-white bg-skin-primary bg-opacity-70'>
				<Main />
				<NextScript />
			</body>
		</Html>
	)
}
