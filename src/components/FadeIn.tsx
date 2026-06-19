'use client';

import React, { useEffect, useRef, useState } from 'react';

interface FadeInProps {
  children: React.ReactNode;
  delay?: number; // in milliseconds
  duration?: number; // in milliseconds
  direction?: 'up' | 'down' | 'left' | 'right' | 'none';
  className?: string;
}

export default function FadeIn({
  children,
  delay = 0,
  duration = 750,
  direction = 'up',
  className = '',
}: FadeInProps) {
  const [isIntersecting, setIsIntersecting] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const currentRef = ref.current;
    if (!currentRef) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsIntersecting(true);
          observer.unobserve(currentRef);
        }
      },
      {
        threshold: 0.05,
        rootMargin: '0px 0px -50px 0px', // Trigger slightly before it is fully in view
      }
    );

    observer.observe(currentRef);

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);

  const getDirectionClass = () => {
    switch (direction) {
      case 'up':
        return 'translate-y-8';
      case 'down':
        return '-translate-y-8';
      case 'left':
        return 'translate-x-8';
      case 'right':
        return '-translate-x-8';
      default:
        return '';
    }
  };

  return (
    <div
      ref={ref}
      style={{
        transitionDuration: `${duration}ms`,
        transitionDelay: `${delay}ms`,
      }}
      className={`transition-all ease-out ${
        isIntersecting
          ? 'opacity-100 translate-y-0 translate-x-0'
          : `opacity-0 ${getDirectionClass()}`
      } ${className}`}
    >
      {children}
    </div>
  );
}
