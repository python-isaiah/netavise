'use client';

import { useEffect } from 'react';
import { usePathname, useRouter } from 'next/navigation';

export default function RouteResetGuard() {
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    // Detects if a mobile browser cold-boots or restores from an app cache directly into 
    // a deep subpage like /demos or a demo tool. If so, cleanly redirect back to root.
    const isDeepRoute = pathname !== '/' && pathname !== '';
    const isMobileDevice = window.innerWidth <= 768 || /Mobi|Android/i.test(navigator.userAgent);
    const sessionStarted = sessionStorage.getItem('netavise_session');

    if (isMobileDevice && isDeepRoute && !sessionStarted) {
      sessionStorage.setItem('netavise_session', 'active');
      router.replace('/');
    } else if (!sessionStarted) {
      sessionStorage.setItem('netavise_session', 'active');
    }
  }, [pathname, router]);

  return null;
}