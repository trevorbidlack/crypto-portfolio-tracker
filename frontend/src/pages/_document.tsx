import Document, { Html, Head, Main, NextScript } from 'next/document';
import React from 'react';
import classNames from 'classnames';

class MyDocument extends Document {
	static async getInitialProps(ctx) {
		const initialProps = await Document.getInitialProps(ctx);
		return { ...initialProps };
	}

	render() {
		return (
			<Html>
				<Head>
					<link rel='stylesheet' href='/fontawesome.css' />
				</Head>
				<body
					className={classNames(
						'scrollbar scrollbar-thin scrollbar-track-quartiary-bg'
					)}
				>
					<Main />
					<NextScript />
				</body>
			</Html>
		);
	}
}

export default MyDocument;
