import React from "react";

export function useApi<T>(url: string): {
  data: T | undefined;
  isLoading: boolean;
  error: Error | null;
  // eslint-disable-next-line @typescript-eslint/ban-types
} {
  const [data, setData] = React.useState<T | undefined>(undefined);

  const [isLoading, setIsLoading] = React.useState(false);

  const [error, setError] = React.useState<Error | null>(null);

  React.useEffect(() => {
    async function getData() {
      setIsLoading(true);

      setError(null);

      try {
        const response = await fetch(`http://localhost:3001${url}`, {});

        if (response.ok) {
          setData(await response.json());
        } else {
          console.log("! ok !", response);

          setError(new Error(response.statusText));
        }
      } catch (err: any | unknown) {
        setError(err as Error);
      } finally {
        setIsLoading(false);
      }
    }

    getData();
  }, [url]);

  return { data, isLoading, error };
}
