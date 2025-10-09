'use client';

import Image from 'next/image';
import styles from './page.module.css';

export default function Home() {
    return (
        <div className={styles.container}>
            <main className={styles.content}>
                {/* Logo Section */}
                <header className={styles.logoSection}>
                    <Image
                        src="/images/logo.png"
                        alt="Foppeli - Premium Kids Wear Logo"
                        width={320}
                        height={100}
                        className={styles.logoImage}
                        priority
                    />
                </header>

                {/* Hero Section */}
                <section className={styles.heroSection} aria-labelledby="hero-title">
                    <h1 id="hero-title" className={styles.heroTitle}>
                        Launching Soon
                    </h1>
                    <p className={styles.heroSubtitle}>Premium Kids Wear • Ages 0-8</p>
                </section>

                {/* Showcase Section */}
                <section className={styles.showcaseSection} aria-label="Product showcase">
                    <div className={styles.showcaseImages}>
                        <article className={styles.showcaseItem}>
                            <Image
                                src="/images/boy_casual_wear.png"
                                alt="Young boy wearing comfortable casual clothing from Foppeli collection"
                                width={400}
                                height={533}
                                className={styles.showcaseImage}
                                loading="lazy"
                            />
                        </article>
                        <article className={styles.showcaseItem}>
                            <Image
                                src="/images/girl_casual_wear.png"
                                alt="Young girl wearing stylish casual clothing from Foppeli collection"
                                width={400}
                                height={533}
                                className={styles.showcaseImage}
                                loading="lazy"
                            />
                        </article>
                    </div>
                </section>

                {/* Story Section */}
                <section className={styles.storySection} aria-labelledby="story-heading">
                    <div className={styles.storyContent}>
                        <h2 className={styles.visuallyHidden} id="story-heading">
                            Our Story
                        </h2>
                        <p className={styles.storyText}>
                            Once upon a time, in a world where little ones grew faster than wildflowers,
                            we dreamed of creating something special. Clothes that feel like a warm hug,
                            last through countless adventures, and grow alongside your child&apos;s magical
                            journey.
                        </p>
                        <p className={styles.storyText}>
                            From first steps to playground giggles, from quiet naps to big dreams—
                            Foppeli is here to dress those precious moments in comfort and style.
                        </p>
                        <p className={styles.storyClosing}>Our story begins soon...</p>
                    </div>
                </section>

                {/* Features Section */}
                <section className={styles.features} aria-label="Key features">
                    <article className={styles.feature}>
                        <div className={styles.featureContent}>
                            <h3>Premium Quality</h3>
                            <p>Carefully selected fabrics for ultimate comfort</p>
                        </div>
                    </article>
                    <article className={styles.feature}>
                        <div className={styles.featureContent}>
                            <h3>Thoughtful Design</h3>
                            <p>Modern styles that grow with your child</p>
                        </div>
                    </article>
                    <article className={styles.feature}>
                        <div className={styles.featureContent}>
                            <h3>Ages 0-8</h3>
                            <p>Perfect fit for every developmental stage</p>
                        </div>
                    </article>
                </section>

                {/* Footer */}
                <footer className={styles.footer}>
                    <p>
                        &copy; <time dateTime="2025">2025</time> Foppeli. All rights reserved.
                    </p>
                </footer>
            </main>
        </div>
    );
}
