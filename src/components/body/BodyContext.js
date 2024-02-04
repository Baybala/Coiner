import { createContext, useContext, useEffect, useState } from "react"
import axios from "axios";
import { CoinlistEndPoint } from "../../services/APIservices";


const BodyContext = createContext()

export function useBodyContext(){
    return useContext(BodyContext)
}

export function BodyContextProvider({children}) {

    const [trendingCoins, setTrendingCoins] = useState([]);
    const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const Url = CoinlistEndPoint();
        const response = await axios.get(Url);

        setTrendingCoins(response.data);
        setLoading(false)
      } catch (error) {
        console.error("Error:", error);
      }
    };

    fetchData();
  }, []);


    return <BodyContext.Provider value={[trendingCoins, loading]}>
        {children}
    </BodyContext.Provider>
}