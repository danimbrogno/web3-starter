import { useState, useEffect } from 'react';
import { useFarcaster } from '../contexts/FarcasterContext';

export function Home() {
  const { sdk, isReady, error, isInFrame } = useFarcaster();
  const [context, setContext] = useState<any>(null);
  const [user, setUser] = useState<any>(null);

  useEffect(() => {
    if (sdk && isReady) {
      // Get the context (information about where the app is running)
      sdk.context().then((ctx) => {
        setContext(ctx);
      }).catch(console.error);

      // Get user information if available
      sdk.user().then((userData) => {
        setUser(userData);
      }).catch(console.error);
    }
  }, [sdk, isReady]);

  const handleOpenUrl = async (url: string) => {
    if (sdk) {
      try {
        await sdk.openUrl({ url });
      } catch (err) {
        console.error('Failed to open URL:', err);
      }
    }
  };

  const handleClose = async () => {
    if (sdk) {
      try {
        await sdk.close();
      } catch (err) {
        console.error('Failed to close:', err);
      }
    }
  };

  return (
    <div className="page">
      <h1>Farcaster Mini App</h1>
      <p>Welcome to your Farcaster and Base compatible mini app!</p>
      
      {error && (
        <div style={{ padding: '1rem', background: '#fee', color: '#c00', borderRadius: '4px', margin: '1rem 0' }}>
          <strong>Error:</strong> {error.message}
        </div>
      )}

      <div style={{ marginTop: '2rem' }}>
        <h2>SDK Status</h2>
        <p>
          <strong>Ready:</strong> {isReady ? '✅ Yes' : '⏳ Loading...'}
        </p>
        <p>
          <strong>Running in Frame:</strong> {isInFrame ? '✅ Yes' : '❌ No (running in regular browser)'}
        </p>
        {context && (
          <div style={{ marginTop: '1rem', padding: '1rem', background: '#f5f5f5', borderRadius: '4px' }}>
            <h3>Context</h3>
            <pre style={{ fontSize: '0.9rem', overflow: 'auto' }}>
              {JSON.stringify(context, null, 2)}
            </pre>
          </div>
        )}
        {user && (
          <div style={{ marginTop: '1rem', padding: '1rem', background: '#f5f5f5', borderRadius: '4px' }}>
            <h3>User</h3>
            <pre style={{ fontSize: '0.9rem', overflow: 'auto' }}>
              {JSON.stringify(user, null, 2)}
            </pre>
          </div>
        )}
      </div>

      {isReady && sdk && (
        <div style={{ marginTop: '2rem' }}>
          <h2>Actions</h2>
          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', marginTop: '1rem' }}>
            <button
              onClick={() => handleOpenUrl('https://farcaster.xyz')}
              style={{
                padding: '0.75rem 1.5rem',
                background: '#8A63D2',
                color: 'white',
                border: 'none',
                borderRadius: '6px',
                cursor: 'pointer',
                fontWeight: '500',
              }}
            >
              Open Farcaster Website
            </button>
            <button
              onClick={() => handleOpenUrl('https://base.org')}
              style={{
                padding: '0.75rem 1.5rem',
                background: '#0052FF',
                color: 'white',
                border: 'none',
                borderRadius: '6px',
                cursor: 'pointer',
                fontWeight: '500',
              }}
            >
              Open Base Website
            </button>
            <button
              onClick={handleClose}
              style={{
                padding: '0.75rem 1.5rem',
                background: '#666',
                color: 'white',
                border: 'none',
                borderRadius: '6px',
                cursor: 'pointer',
                fontWeight: '500',
              }}
            >
              Close Mini App
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
