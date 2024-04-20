import React, { ReactNode, useState } from 'react';
import { storage } from 'src/config';
import { StoreContext } from 'src/context';

const PokeCore = ({ children }: { children: ReactNode }) => {
  const [storeContextData] = useState({
    storage: storage,
  });
  return (
    <StoreContext.Provider value={storeContextData}>
      {children}
    </StoreContext.Provider>
  );
};

export { PokeCore };
