import type { Metadata } from 'next';
import './globals.css';

const siteUrl = 'https://foppeli.com';

export const metadata: Metadata = {
    metadataBase: new URL(siteUrl),
    title: {
        default: 'Foppeli - Premium Kids Wear for Ages 0-8 | Coming Soon',
        template: '%s | Foppeli',
    },
    description:
        'Discover Foppeli - Premium quality kids wear designed for ages 0-8. Thoughtfully crafted clothing that combines comfort, style, and durability for your little ones. Launching soon.',
    keywords: [
        'kids wear',
        'children clothing',
        'premium kids fashion',
        'ages 0-8',
        'baby clothes',
        'toddler clothing',
        'kids apparel',
        'children fashion',
        'quality kids wear',
        'comfortable kids clothes',
        'stylish children wear',
        'foppeli',
    ],
    authors: [{ name: 'Foppeli', url: siteUrl }],
    creator: 'Foppeli',
    publisher: 'Foppeli',
    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
            'max-video-preview': -1,
            'max-image-preview': 'large',
            'max-snippet': -1,
        },
    },
    openGraph: {
        type: 'website',
        locale: 'en_US',
        url: siteUrl,
        title: 'Foppeli - Premium Kids Wear for Ages 0-8 | Coming Soon',
        description:
            'Premium quality kids wear designed for ages 0-8. Thoughtfully crafted clothing that combines comfort, style, and durability. Launching soon.',
        siteName: 'Foppeli',
        images: [
            {
                url: `${siteUrl}/images/logo.png`,
                width: 320,
                height: 100,
                alt: 'Foppeli Logo - Premium Kids Wear',
            },
        ],
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Foppeli - Premium Kids Wear for Ages 0-8',
        description:
            'Premium quality kids wear designed for ages 0-8. Thoughtfully crafted, comfortable, and stylish.',
        images: [`${siteUrl}/images/logo.png`],
        creator: '@foppeli',
        site: '@foppeli',
    },
    alternates: {
        canonical: siteUrl,
    },
    category: 'Fashion',
    classification: 'Kids Fashion & Apparel',
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    const jsonLd = {
        '@context': 'https://schema.org',
        '@type': 'Organization',
        name: 'Foppeli',
        url: siteUrl,
        logo: `${siteUrl}/images/logo.png`,
        description:
            'Premium kids wear for ages 0-8. Thoughtfully designed clothing that grows with your child.',
        foundingDate: '2025',
        address: {
            '@type': 'PostalAddress',
            addressCountry: 'US',
        },
        sameAs: [],
        contactPoint: {
            '@type': 'ContactPoint',
            contactType: 'Customer Service',
            availableLanguage: 'English',
        },
    };

    const websiteJsonLd = {
        '@context': 'https://schema.org',
        '@type': 'WebSite',
        name: 'Foppeli',
        url: siteUrl,
        description:
            'Premium quality kids wear for ages 0-8. Launching soon.',
        publisher: {
            '@type': 'Organization',
            name: 'Foppeli',
            logo: {
                '@type': 'ImageObject',
                url: `${siteUrl}/images/logo.png`,
            },
        },
    };

    return (
        <html lang="en">
            <head>
                <link rel="icon" type="image/png" href="images/favicon.png" />
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
                />
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
                />
            </head>
            <body>{children}</body>
        </html>
    );
}
