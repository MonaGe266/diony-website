/// <reference types="react" />

declare module 'framer-motion' {
  export * from 'framer-motion/types'
}

declare global {
  namespace JSX {
    interface IntrinsicElements {
      [elemName: string]: any;
    }
  }
}

export {}; 