/**
 * Foppeli - Coming Soon Page JavaScript
 * Enterprise-grade JavaScript with ES6+ features and best practices
 */

'use strict';

/**
 * Configuration object for application settings
 */
const CONFIG = {
  LAUNCH_DATE_OFFSET_DAYS: 30,
  COUNTDOWN_UPDATE_INTERVAL: 1000,
  SUCCESS_MESSAGE_DURATION: 5000,
  STORAGE_KEY: 'foppeliSubscribers',
  COUNTDOWN_ELEMENT_IDS: {
    days: 'days',
    hours: 'hours',
    minutes: 'minutes',
    seconds: 'seconds',
    countdown: 'countdown',
  },
  FORM_ELEMENT_IDS: {
    form: 'emailForm',
    emailInput: 'emailInput',
    instagramInput: 'instagramInput',
    successMessage: 'successMessage',
  },
};

/**
 * Countdown Timer Class
 * Manages the countdown timer functionality
 */
class CountdownTimer {
  /**
   * @param {Date} launchDate - The target launch date
   * @param {Object} config - Configuration object
   */
  constructor(launchDate, config) {
    this.launchDate = launchDate;
    this.config = config;
    this.intervalId = null;
    this.elements = this.cacheElements();
  }

  /**
   * Cache DOM elements for better performance
   * @returns {Object} Object containing cached DOM elements
   */
  cacheElements() {
    const elements = {};
    Object.entries(this.config.COUNTDOWN_ELEMENT_IDS).forEach(([key, id]) => {
      elements[key] = document.getElementById(id);
    });
    return elements;
  }

  /**
   * Calculate time remaining until launch
   * @returns {Object} Object containing days, hours, minutes, seconds
   */
  calculateTimeRemaining() {
    const now = new Date().getTime();
    const distance = this.launchDate - now;

    return {
      distance,
      days: Math.floor(distance / (1000 * 60 * 60 * 24)),
      hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
      minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
      seconds: Math.floor((distance % (1000 * 60)) / 1000),
    };
  }

  /**
   * Update countdown display
   */
  updateDisplay() {
    try {
      const { distance, days, hours, minutes, seconds } =
        this.calculateTimeRemaining();

      if (distance < 0) {
        this.handleCountdownComplete();
        return;
      }

      // Update DOM elements safely
      if (this.elements.days)
        this.elements.days.textContent = String(days).padStart(2, '0');
      if (this.elements.hours)
        this.elements.hours.textContent = String(hours).padStart(2, '0');
      if (this.elements.minutes)
        this.elements.minutes.textContent = String(minutes).padStart(2, '0');
      if (this.elements.seconds)
        this.elements.seconds.textContent = String(seconds).padStart(2, '0');
    } catch (error) {
      console.error('Error updating countdown display:', error);
      this.stop();
    }
  }

  /**
   * Handle countdown completion
   */
  handleCountdownComplete() {
    this.stop();
    if (this.elements.countdown) {
      this.elements.countdown.innerHTML = "<h2>We're Live!</h2>";
    }
  }

  /**
   * Start the countdown timer
   */
  start() {
    // Initial update
    this.updateDisplay();

    // Set interval for updates
    this.intervalId = setInterval(() => {
      this.updateDisplay();
    }, this.config.COUNTDOWN_UPDATE_INTERVAL);
  }

  /**
   * Stop the countdown timer
   */
  stop() {
    if (this.intervalId) {
      clearInterval(this.intervalId);
      this.intervalId = null;
    }
  }
}

/**
 * Subscriber Manager Class
 * Handles subscriber data management and persistence
 */
class SubscriberManager {
  /**
   * @param {string} storageKey - LocalStorage key for subscribers
   */
  constructor(storageKey) {
    this.storageKey = storageKey;
  }

  /**
   * Get all subscribers from localStorage
   * @returns {Array} Array of subscriber objects
   */
  getSubscribers() {
    try {
      const data = localStorage.getItem(this.storageKey);
      return data ? JSON.parse(data) : [];
    } catch (error) {
      console.error('Error reading subscribers from localStorage:', error);
      return [];
    }
  }

  /**
   * Add a new subscriber
   * @param {string} email - Subscriber email
   * @param {string} instagram - Subscriber Instagram handle
   * @returns {boolean} Success status
   */
  addSubscriber(email, instagram) {
    try {
      const subscribers = this.getSubscribers();
      const newSubscriber = {
        email: email.trim(),
        instagram: instagram.trim(),
        timestamp: new Date().toISOString(),
      };

      subscribers.push(newSubscriber);
      localStorage.setItem(this.storageKey, JSON.stringify(subscribers));

      console.log('Subscriber added successfully:', {
        email: newSubscriber.email,
        instagram: newSubscriber.instagram,
      });

      return true;
    } catch (error) {
      console.error('Error adding subscriber:', error);
      return false;
    }
  }

  /**
   * Validate email format
   * @param {string} email - Email to validate
   * @returns {boolean} Validation result
   */
  static validateEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }
}

/**
 * Form Handler Class
 * Manages form submission and validation
 */
class FormHandler {
  /**
   * @param {string} formId - ID of the form element
   * @param {SubscriberManager} subscriberManager - Instance of SubscriberManager
   * @param {Object} config - Configuration object
   */
  constructor(formId, subscriberManager, config) {
    this.form = document.getElementById(formId);
    this.subscriberManager = subscriberManager;
    this.config = config;
    this.elements = this.cacheElements();
  }

  /**
   * Cache form elements
   * @returns {Object} Object containing cached form elements
   */
  cacheElements() {
    const ids = this.config.FORM_ELEMENT_IDS;
    return {
      emailInput: document.getElementById(ids.emailInput),
      instagramInput: document.getElementById(ids.instagramInput),
      successMessage: document.getElementById(ids.successMessage),
    };
  }

  /**
   * Show success message
   */
  showSuccessMessage() {
    if (this.elements.successMessage) {
      this.elements.successMessage.classList.add('show');

      setTimeout(() => {
        this.hideSuccessMessage();
      }, this.config.SUCCESS_MESSAGE_DURATION);
    }
  }

  /**
   * Hide success message
   */
  hideSuccessMessage() {
    if (this.elements.successMessage) {
      this.elements.successMessage.classList.remove('show');
    }
  }

  /**
   * Handle form submission
   * @param {Event} event - Form submit event
   */
  handleSubmit(event) {
    event.preventDefault();

    const email = this.elements.emailInput?.value || '';
    const instagram = this.elements.instagramInput?.value || '';

    // Validate email
    if (!SubscriberManager.validateEmail(email)) {
      alert('Please enter a valid email address');
      return;
    }

    // Add subscriber
    const success = this.subscriberManager.addSubscriber(email, instagram);

    if (success) {
      this.showSuccessMessage();
      this.form?.reset();
    } else {
      alert('An error occurred. Please try again.');
    }
  }

  /**
   * Initialize form event listeners
   */
  init() {
    if (this.form) {
      this.form.addEventListener('submit', (e) => this.handleSubmit(e));
    }
  }
}

/**
 * Application Initializer
 * Main entry point for the application
 */
class App {
  /**
   * Initialize the application
   */
  static init() {
    try {
      // Calculate launch date
      const launchDate = new Date();
      launchDate.setDate(launchDate.getDate() + CONFIG.LAUNCH_DATE_OFFSET_DAYS);

      // Initialize countdown timer
      const countdown = new CountdownTimer(launchDate, CONFIG);
      countdown.start();

      // Initialize subscriber manager
      const subscriberManager = new SubscriberManager(CONFIG.STORAGE_KEY);

      // Initialize form handler
      const formHandler = new FormHandler(
        CONFIG.FORM_ELEMENT_IDS.form,
        subscriberManager,
        CONFIG
      );
      formHandler.init();

      console.log('Foppeli Coming Soon page initialized successfully');
    } catch (error) {
      console.error('Error initializing application:', error);
    }
  }
}

// Initialize application when DOM is ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', App.init);
} else {
  App.init();
}

// Export for testing purposes (if using module system)
if (typeof module !== 'undefined' && module.exports) {
  module.exports = {
    CountdownTimer,
    SubscriberManager,
    FormHandler,
    App,
    CONFIG,
  };
}
