import { createContext, useContext, useEffect, useState, ReactNode } from 'react';
import { FrameSDK } from '@farcaster/frame-sdk';

interface FarcasterContextType {
  sdk: FrameSDK | null;
  isReady: boolean;
  error: Error | null;
  isInFrame: boolean;
}

const FarcasterContext = createContext<FarcasterContextType | undefined>(undefined);

export function useFarcaster() {
  const context = useContext(FarcasterContext);
  if (context === undefined) {
    throw new Error('useFarcaster must be used within a FarcasterProvider');
  }
  return context;
}

interface FarcasterProviderProps {
  children: ReactNode;
}

export function FarcasterProvider({ children }: FarcasterProviderProps) {
  const [sdk, setSdk] = useState<FrameSDK | null>(null);
  const [isReady, setIsReady] = useState(false);
  const [error, setError] = useState<Error | null>(null);
  const [isInFrame, setIsInFrame] = useState(false);

  useEffect(() => {
    // Check if we're running in a Farcaster/Base frame
    const checkFrameEnvironment = () => {
      // Check for Farcaster frame
      const isFarcasterFrame = window.parent !== window && 
        (document.referrer.includes('warpcast.com') || 
         document.referrer.includes('farcaster.xyz'));
      
      // Check for Base frame
      const isBaseFrame = window.parent !== window && 
        document.referrer.includes('base.org');
      
      return isFarcasterFrame || isBaseFrame;
    };

    const inFrame = checkFrameEnvironment();
    setIsInFrame(inFrame);

    if (!inFrame) {
      // Not running in a frame, SDK won't work
      setIsReady(true);
      return;
    }

    try {
      // Initialize the Frame SDK
      const frameSDK = new FrameSDK();
      
      // Wait for the SDK to be ready
      frameSDK.ready().then(() => {
        setSdk(frameSDK);
        setIsReady(true);
        setError(null);
      }).catch((err) => {
        // SDK might not be available even in frame context
        console.warn('Farcaster SDK not available:', err);
        setError(err instanceof Error ? err : new Error(String(err)));
        setIsReady(true); // Still mark as ready so app can function
      });
    } catch (err) {
      // SDK initialization failed
      console.warn('Failed to initialize Farcaster SDK:', err);
      setError(err instanceof Error ? err : new Error(String(err)));
      setIsReady(true); // Still mark as ready so app can function
    }
  }, []);

  return (
    <FarcasterContext.Provider value={{ sdk, isReady, error, isInFrame }}>
      {children}
    </FarcasterContext.Provider>
  );
}
