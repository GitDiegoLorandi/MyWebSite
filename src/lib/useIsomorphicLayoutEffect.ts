import { useEffect, useLayoutEffect } from 'react';

// Use useLayoutEffect on client and useEffect on server to avoid hydration mismatches
export const useIsomorphicLayoutEffect = typeof window !== 'undefined' ? useLayoutEffect : useEffect; 