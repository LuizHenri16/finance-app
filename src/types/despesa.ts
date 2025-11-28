type DespesaBase = {
    valor?: number,
    descricao?: string,
}

export type DespesaPersist = DespesaBase;

export type DespesaPersisted = DespesaBase & {
    id: number
}
