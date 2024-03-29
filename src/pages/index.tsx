import Layout from "../components/Layout";
import Tabela from "../components/Tabela";

import Botao from "../components/Botao"
import Formulario from "../components/Formulario"
import useClientes from '../hooks/useClientes'




export default function Home() {



  const {
    cliente,
    clientes,
    novoCliente,
    salvarCliente,
    clienteExcluido,
    clienteSelecionado,
    tabelaVisivel,
    exibirTabela,

  } = useClientes()

  return (
    <div className={`
      flex  justify-center items-center h-screen
      bg-gradient-to-r from-blue-500 to-purple-500
      text-width
    `}>
      <Layout titulo="Cadastro Simples" >
        {tabelaVisivel ? (
          <>
            <div className="flex justify-end">

              <Botao cor="green" className="mb-4"
                onClick={novoCliente}>
                Novo Cliente
              </Botao>
            </div>

            {clientes.length ? ( 
              <Tabela clientes={clientes}
                clienteSelecionado={clienteSelecionado}
                clienteExcluido={clienteExcluido}
              />
            ) : (
              <div>Nenhum registro encontrado</div>
            )}
          </>
        ) : (
          <Formulario
            cliente={cliente}
            clienteMudou={salvarCliente}
            cancelado={() => exibirTabela}
          />
        )}
      </Layout>
    </div>
  )
}
//cliente.length > 0