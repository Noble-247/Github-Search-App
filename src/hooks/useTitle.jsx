import { useEffect } from 'react';

/**
 * Custom hook to manage document title
 * @param title - The title to set for the page
 * @param keepOnUnmount - Optional flag to keep the new title when component unmounts
 */
function useTitle(title, keepOnUnmount = false) {
  useEffect(() => {
    const prevTitle = document.title;
    document.title = `${title} - GitHub Search`;

    return () => {
      if (!keepOnUnmount) {
        document.title = prevTitle;
      }
    };
  }, [title, keepOnUnmount]);
}

export default useTitle;
