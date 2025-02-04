class Forma {
  private _nome: string;
  protected _dimensoes: number[];
  protected _lados: number;

  // Objeto que mapeia número de lados para nome da forma
  private static nomesFormas: { [key: number]: string } = {
    3: "Triângulo",
    4: "Quadrado",
    5: "Pentágono",
    6: "Hexágono",
  };

  constructor(dimensoes: number[], lados: number) {
    this._dimensoes = dimensoes;
    this._lados = lados;
    this._nome = this.definirNomePeloNumeroDeLados(lados); // Chama o método para obter o nome
  }

  // Método privado para definir o nome com base no número de lados
  private definirNomePeloNumeroDeLados(lados: number): string {
    // Retorna o nome se existir ou uma mensagem padrão
    return Forma.nomesFormas[lados] || `Forma com ${lados} lados`;
  }

  public get nome() {
    return this._nome;
  }

  public get dimensoes() {
    return this._dimensoes;
  }

  public get lados() {
    return this._lados;
  }
}

export { Forma };
