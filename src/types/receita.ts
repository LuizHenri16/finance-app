type ReceitaBase = {
    valor?: number,
    descricao?: string,
}

export type ReceitaPersist = ReceitaBase;

export type ReceitaPersisted = ReceitaBase & {
    id: number
}