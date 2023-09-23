import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { createContext, useState } from "react";

export const Data = createContext();

const client = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
    },
  },
});

export const days = ["Sunday", "Monday", "Tuesday", "Wednesday"];

export const DataProvider = (props) => {
  const { children } = props;
  const [value, setValue] = useState("");
  const [fetch, canFetch] = useState(false);

  const handleValue = (e) => {
    setValue(e.target.value);
    canFetch(false);
  };

  const apiCurrentUrl = `https://api.openweathermap.org/data/2.5/weather?units=metric&appid=dbad58a48796d2b9b3d11f4e05274d0b&q=${value}&lang=en`;

  const apiDailyUrl = `https://api.weatherbit.io/v2.0/forecast/daily?city=${value}&key=56d2da6f767e4e96939ea87d86b411e3`;

  const handleSubmit = (e) => {
    e.preventDefault();
    canFetch(true);
  };

  return (
    <QueryClientProvider client={client}>
      <Data.Provider
        value={{
          apiCurrentUrl,
          handleSubmit,
          handleValue,
          value,
          fetch,
          apiDailyUrl,
        }}
      >
        {children}
      </Data.Provider>
    </QueryClientProvider>
  );
};
