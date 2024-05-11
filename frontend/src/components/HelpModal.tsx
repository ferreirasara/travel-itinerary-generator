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
      <Typography.Paragraph>
        No formulário, adicione a quantidade de dias e a cidade para a qual você pretende viajar. Você pode adicionar mais de uma cidade, clicando no botão <i>Adicionar</i>. Para remover um input, clique em <i>Remover</i>.
      </Typography.Paragraph>
      <Typography.Paragraph>
        Para gerar o itinerário para sua viajem, clique em <i>Gerar itinerário</i>.
      </Typography.Paragraph>
      <Typography.Paragraph>
        Após o itinerário ser gerado, você poderá visualizá-lo abaixo do formulário. Para limpar as informações e gerar um novo itinerário, clique em <i>Gerar novo itinerário</i>.
      </Typography.Paragraph>

      <Divider>Informações sobre a ferramenta</Divider>
      <Typography.Paragraph>Contruída como solução para o desafio proposto na <strong>Imersão Inteligência Artificial da Alura e do Google</strong>.</Typography.Paragraph>
      <Typography.Paragraph>Essa ferramenta foi desenvolvida utilizando Nest.js e React.js, justamente com a Gemini API.</Typography.Paragraph>

      <Tag>
        <a href="https://github.com/ferreirasara/travel-itinerary-generator/" target="_blank">
          Repositório no GitHub
        </a>
      </Tag>
    </Modal>
  )
}

export default HelpModal;