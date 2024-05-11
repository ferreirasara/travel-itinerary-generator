import { QuestionCircleOutlined } from "@ant-design/icons";
import { Divider, Modal, Tag, Typography } from "antd";

interface HelpModalProps {
  open: boolean
  onClose: () => void
}
const HelpModal = ({ onClose, open }: HelpModalProps) => {
  return (
    <Modal
      open={open}
      onCancel={onClose}
      footer={null}
      title={
        <Typography.Title level={3} style={{ margin: 0 }}>
          <QuestionCircleOutlined /> Ajuda
        </Typography.Title>
      }
      centered
    >
      <Divider>Crie o seu roteiro perfeito:</Divider>

      <ol>
        <li>
          <p><strong>Insira suas informações:</strong></p>
          <ul>
            <li>
              <strong>Cidade:</strong> Informe a cidade que você deseja visitar.
            </li>
            <li>
              <strong>Dias:</strong> Selecione a quantidade de dias que você pretende ficar.
            </li>
            <li>
              <strong>Adicionar:</strong> Adicione mais cidades clicando no botão "Adicionar".
            </li>
            <li>
              <strong>Remover:</strong> Remova um destino clicando no botão "Remover".
            </li>
          </ul>
        </li>
        <li>
          <p><strong>Gere seu roteiro:</strong></p>
          <ul>
            <li>
              <strong>Gerar itinerário:</strong> Clique no botão para gerar um roteiro personalizado com base nas suas informações.
            </li>
          </ul>
        </li>
        <li>
          <p><strong>Explore seu roteiro:</strong></p>
          <ul>
            <li>
              <strong>Visualize:</strong> O roteiro gerado será exibido abaixo do formulário.
            </li>
            <li>
              <strong>Novo roteiro:</strong> Para limpar as informações e gerar um novo roteiro, clique em "Gerar novo itinerário".
            </li>
          </ul>
        </li>
      </ol>

      <Divider>Informações sobre a ferramenta:</Divider>
      <ul>
        <li>Desenvolvida para o desafio da <strong>Imersão Inteligência Artificial da Alura e do Google.</strong></li>
        <li>Tecnologias: Construída com Nest.js, React.js e Gemini API.</li>
        <li>
          <a href="https://github.com/ferreirasara/travel-itinerary-generator/" target="_blank">
            Repositório no GitHub
          </a>
        </li>
      </ul>
    </Modal>
  )
}

export default HelpModal;