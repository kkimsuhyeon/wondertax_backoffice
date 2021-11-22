import { useEffect } from 'react';

function useGlobalHandler() {
  const commonErrorHandler = (error: PromiseRejectionEvent) => {
    error.preventDefault();
    const { reason } = error;
    console.log(reason);

    return;
  };

  useEffect(() => {
    window.addEventListener('unhandledrejection', commonErrorHandler);
    return () => window.removeEventListener('unhandledrejection', commonErrorHandler);
  }, []);

  return null;
}

export default useGlobalHandler;
