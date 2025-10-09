'use client';

import { useEffect, useState } from 'react';
import styles from './CountdownTimer.module.css';

interface TimeRemaining {
    days: number;
    hours: number;
    minutes: number;
    seconds: number;
}

export function CountdownTimer() {
    const [timeRemaining, setTimeRemaining] = useState<TimeRemaining>({
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
    });
    const [isComplete, setIsComplete] = useState(false);

    useEffect(() => {
        // Calculate launch date (30 days from now)
        const launchDate = new Date();
        launchDate.setDate(launchDate.getDate() + 30);

        const calculateTimeRemaining = (): TimeRemaining | null => {
            const now = new Date().getTime();
            const distance = launchDate.getTime() - now;

            if (distance < 0) {
                return null;
            }

            return {
                days: Math.floor(distance / (1000 * 60 * 60 * 24)),
                hours: Math.floor(
                    (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
                ),
                minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
                seconds: Math.floor((distance % (1000 * 60)) / 1000),
            };
        };

        const updateCountdown = () => {
            const remaining = calculateTimeRemaining();

            if (remaining === null) {
                setIsComplete(true);
            } else {
                setTimeRemaining(remaining);
            }
        };

        // Initial update
        updateCountdown();

        // Set up interval
        const interval = setInterval(updateCountdown, 1000);

        // Cleanup
        return () => clearInterval(interval);
    }, []);

    if (isComplete) {
        return (
            <div className={styles.countdown}>
                <h2>We&apos;re Live!</h2>
            </div>
        );
    }

    const formatNumber = (num: number): string => {
        return String(num).padStart(2, '0');
    };

    return (
        <div className={styles.countdown}>
            <div className={styles.timeUnit}>
                <span className={styles.number}>{formatNumber(timeRemaining.days)}</span>
                <span className={styles.label}>Days</span>
            </div>
            <div className={styles.separator}>:</div>
            <div className={styles.timeUnit}>
                <span className={styles.number}>{formatNumber(timeRemaining.hours)}</span>
                <span className={styles.label}>Hours</span>
            </div>
            <div className={styles.separator}>:</div>
            <div className={styles.timeUnit}>
                <span className={styles.number}>{formatNumber(timeRemaining.minutes)}</span>
                <span className={styles.label}>Minutes</span>
            </div>
            <div className={styles.separator}>:</div>
            <div className={styles.timeUnit}>
                <span className={styles.number}>{formatNumber(timeRemaining.seconds)}</span>
                <span className={styles.label}>Seconds</span>
            </div>
        </div>
    );
}
