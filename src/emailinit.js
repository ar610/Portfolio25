import emailjs from '@emailjs/browser';

export function initializeEmailJS() {
  emailjs.init({
    publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
  });
}
