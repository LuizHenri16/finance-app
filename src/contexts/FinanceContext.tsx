import { createContext, ReactNode, useState } from "react";
import { DespesaPersist, DespesaPersisted } from "../types/despesa";
import { ReceitaPersist, ReceitaPersisted } from "../types/receita";


type FinanceContextType = {
  despesas: DespesaPersisted[];
  receitas: ReceitaPersisted[];
  addDespesa: (despesa: DespesaPersist) => void;
  removeDespesa: (id: number) => void;
  addReceita: (receita: ReceitaPersist) => void;
  removeReceita: (id: number) => void;
  saldo: number;
  totalDespesas: number;
  totalReceitas: number
};

export const FinanceContext = createContext<FinanceContextType | null>(null);

export function FinanceProvider({ children }: { children: ReactNode }) {

  const [despesas, setDespesas] = useState<DespesaPersisted[]>([]);
  const [receitas, setReceitas] = useState<ReceitaPersisted[]>([]);

  function addDespesa(despesa: DespesaPersist) {
    const novaDespesa: DespesaPersisted = { id: Date.now(), ...despesa };
    setDespesas((prev) => [...prev, novaDespesa]);
  }

  function removeDespesa(id: number) {
    setDespesas((prev) => prev.filter((d) => d.id !== id));
  }

  function addReceita(receita: ReceitaPersist) {
    const novaReceita: ReceitaPersisted = { id: Date.now(), ...receita };
    setReceitas((prev) => [...prev, novaReceita]);
  }

  function removeReceita(id: number) {
    setReceitas((prev) => prev.filter((r) => r.id !== id));
  }

  const saldo =
    receitas.reduce((acc, r) => acc + (r.valor ?? 0), 0) -
    despesas.reduce((acc, d) => acc + (d.valor ?? 0), 0);

  const totalDespesas = despesas.reduce((acc, d) => acc + (d.valor ?? 0), 0);
  const totalReceitas = receitas.reduce((acc, r) => acc + (r.valor ?? 0), 0);



  return (
    <FinanceContext.Provider value={{
      despesas,
      receitas,
      addDespesa,
      removeDespesa,
      addReceita,
      removeReceita,
      saldo,
      totalDespesas,
      totalReceitas
    }}>
      {children}
    </FinanceContext.Provider>
  );
}