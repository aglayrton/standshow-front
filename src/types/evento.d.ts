export interface Evento {
    "uuid": "string",
    "nome": "string",
    "dataHoraFormatada": "string",
    "site": "string",
    "outro": "string",
    "clientesVinculados": [
        {
        "endereco": "string",
        "numero": 0,
        "complemento": "string",
        "bairro": "string",
        "cep": "string",
        "uf": "string",
        "municipio": "string",
        "uuid": "string",
        "site": "string",
        "cnpj": "string",
        "nomeEmpresarial": "string",
        "nomeFantasia": "string",
        "porte": "string",
        "codigoDescricao": "string",
        "logradouro": "string",
        "enderecoEletronico": "string",
        "telefone": "string",
        "telefoneComercial": "string",
        "situacaoCadastral": "string"
        }
    ],
    "endereco": "string",
    "numero": 0,
    "complemento": "string",
    "bairro": "string",
    "cep": "string",
    "uf": "string",
    "municipio": "string",
    organizador: {
        nome: string,
        responsavel: string,
        telefone: string,
        email: string
    }
}