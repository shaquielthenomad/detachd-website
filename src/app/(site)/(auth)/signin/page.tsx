'use client'
import { useEffect } from "react";
import { Metadata } from "next";

const SigninPage = () => {
  useEffect(() => {
    // Redirect to external Detachd systems login
    window.location.href = "https://secure.detachd.systems/#/login";
  }, []);

  return (
    <div className="min-h-screen bg-detachd-dark flex items-center justify-center">
      <div className="text-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-detachd-primary mx-auto mb-4"></div>
        <p className="text-white text-lg">Redirecting to Detachd Login...</p>
        <p className="text-detachd-text-secondary mt-2">
          If you're not redirected automatically, 
          <a 
            href="https://secure.detachd.systems/#/login" 
            className="text-detachd-primary hover:text-detachd-secondary ml-1"
          >
            click here
          </a>
        </p>
      </div>
    </div>
  );
};

export default SigninPage;
