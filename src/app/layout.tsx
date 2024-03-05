import type { Metadata } from 'next'
import localFont from 'next/font/local'
import '../styles/index.scss'
import Layout from './layout/default';

declare global {
    interface Window {
      lenis: any;
    }
  }


const KH = localFont({
    src: [
        {
            path: '../fonts/KHInterference-Light.woff2',
            weight: '300',
            style: 'normal',
        },
        {
            path: '../fonts/KHInterference-Regular.woff2',
            weight: '400',
            style: 'normal',
        },
    ],
    variable: '--KHInterference',
})

export async function generateMetadata(): Promise<Metadata> {
    const metaTitle = 'DevApe - AI contributor for GitHub repositories';
    const descriptionTitle = 'DevApe is an AI teammate for busy software teams: living in your GitHub repo, organizing & triaging issues, reviewing & summarizing Pull Requests, and even pushing code, much like a developer!';


    const baseUrl = process.env.NODE_ENV === 'production'
        ? 'https://www.devape.co'
        : 'http://localhost:3000';

    const metadataBase = new URL(baseUrl);

    return {
        metadataBase,
        title: metaTitle,
        description: descriptionTitle,
        openGraph: {
            title: metaTitle,
            description: descriptionTitle,
            url: `${metadataBase}`,
            type: 'website',
            images: [{
                url: `${metadataBase}metaImage.png`,
                width: 1200,
                height: 630,
                alt: 'DevApe: AI Contributor for GitHub',
            }],
        },
        icons: [
            {
                rel: 'apple-touch-icon',
                url: `${metadataBase}apple-touch-icon.png`,
              },
              {
                rel: 'icon',
                type: 'image/png',
                sizes: '32x32',
                url: `${metadataBase}favicon-32x32.png`,
              },
              {
                rel: 'icon',
                type: 'image/png',
                sizes: '16x16',
                url: `${metadataBase}favicon-16x16.png`,
              },
              {
                rel: 'icon',
                url: `${metadataBase}favicon.ico`,
              },
        ]
    };
}


export default function RootLayout({ children, }: Readonly<{ children: React.ReactNode }>) {
    return (
        <html lang="en">
            <body className={KH.className}>
                <Layout>
                    {children}
                </Layout>
            </body>
        </html>
    )
}
