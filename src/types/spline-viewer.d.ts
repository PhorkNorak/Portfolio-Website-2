// TypeScript shim for Spline web component used via dynamic import
// This removes the "Cannot find module '@splinetool/viewer'" error.
declare module '@splinetool/viewer';

// Let TSX accept the <spline-viewer> custom element with proper props
import * as React from 'react';

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'spline-viewer': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement> & {
        url?: string;
        loading?: 'lazy' | 'eager';
      };
    }
  }
}
