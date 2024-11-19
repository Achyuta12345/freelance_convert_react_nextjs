/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: ['c.animaapp.com','img.daisyui.com','storage.googleapis.com','cn-strapidev-v4.s3.amazonaws.com','strapi-bus-eng-prod.s3.us-east-1.amazonaws.com','strapi-bus-eng-prod.s3.amazonaws.com'], // Add the external domain here
      }};

export default nextConfig;
