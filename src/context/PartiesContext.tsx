"use client";
import { createContext, useContext, useState, ReactNode } from "react";

export interface Party {
  name: string;
  color: [number, number, number];
  position: [number, number];
}

interface PartiesContextType {
  parties: Party[];
  addParty: (party: Party) => void;
  updateParty: (index: number, party: Party) => void;
  removeParty: (index: number) => void;
}

const PartiesContext = createContext<PartiesContextType | undefined>(undefined);

export function PartiesProvider({ children }: { children: ReactNode }) {
  const [parties, setParties] = useState<Party[]>([
    {
      name: "Liberal National Party",
      color: [100, 149, 237],
      position: [1, 1.05],
    },
    {
      name: "One Nation",
      color: [255, 165, 0],
      position: [1.4, 3.2],
    },
    {
      name: "The Greens",
      color: [84, 199, 84],
      position: [-3.6, -3.2],
    },
    {
      name: "Australian Labor Party",
      color: [235, 10, 40],
      position: [-1, -1.4],
    },
  ]);

  const addParty = (party: Party) => {
    setParties([...parties, party]);
  };

  const updateParty = (index: number, party: Party) => {
    const newParties = [...parties];
    newParties[index] = party;
    setParties(newParties);
  };

  const removeParty = (index: number) => {
    setParties(parties.filter((_, i) => i !== index));
  };

  return (
    <PartiesContext.Provider
      value={{ parties, addParty, updateParty, removeParty }}
    >
      {children}
    </PartiesContext.Provider>
  );
}

export function useParties() {
  const context = useContext(PartiesContext);
  if (context === undefined) {
    throw new Error("useParties must be used within a PartiesProvider");
  }
  return context;
}
