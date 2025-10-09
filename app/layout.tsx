import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
    title: 'Foppeli - Coming Soon',
    description:
        'Foppeli - Premium kids wear for ages 0-8. Coming soon with thoughtfully designed, comfortable clothing for your little ones.',
    keywords: ['kids wear', 'children clothing', 'premium kids fashion', 'ages 0-8'],
    authors: [{ name: 'Foppeli' }],
    openGraph: {
        title: 'Foppeli - Premium Kids Wear Coming Soon',
        description:
            'Premium kids wear for ages 0-8. Thoughtfully designed clothes that grow with your child.',
        type: 'website',
    },
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <head>
                <link rel="icon" type="image/png" href="/images/favicon.png" />
            </head>
            <body>{children}</body>
        </html>
    );
}
