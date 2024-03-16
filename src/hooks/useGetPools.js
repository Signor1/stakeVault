import { useEffect, useState } from "react";
import { getProposalsContract } from "../constants/contracts";
import { readOnlyProvider } from "../constants/provider";

const useGetPools = () => {
  const [data, setData] = useState([]);

  const contract = getProposalsContract(readOnlyProvider);

  useEffect(() => {
    contract
      .getAllProposals()
      .then((res) => {
        
        }));
      })
      .catch((err) => {
        console.log(err);
      });
  });
};

export default useGetPools;
