import { Button, Input, Space } from "antd";
import { ItineraryData } from "../types";
import { CloseCircleOutlined, PlusCircleOutlined } from '@ant-design/icons';
import Typography from "antd/es/typography/Typography";

interface ItineraryInputProps {
  index: number
  data: ItineraryData
  inputsLength: number
  disabled: boolean
  handleAddInput: () => void
  handleRemoveInput: (index: number) => void
  handleChangeCity: (value: string, index: number) => void
  handleChangeDaysNumber: (value: string, index: number) => void
}
const ItineraryInput = ({ index, data, inputsLength, disabled, handleAddInput, handleChangeCity, handleChangeDaysNumber, handleRemoveInput }: ItineraryInputProps) => {
  return (
    <Space>
      <Typography>Irei passar</Typography>
      <Input
        placeholder="dias"
        value={data?.daysNumber}
        onChange={(e) => handleChangeDaysNumber(e?.currentTarget?.value, index)}
        style={{ width: 50 }}
        disabled={disabled}
        variant="filled"
      />
      <Typography>dias em</Typography>
      <Input
        placeholder="cidade"
        value={data?.city}
        onChange={(e) => handleChangeCity(e?.currentTarget?.value, index)}
        style={{ width: 100 }}
        disabled={disabled}
        variant="filled"
      />
      {inputsLength > 1 && <Button
        onClick={() => handleRemoveInput(index)}
        disabled={disabled}
        icon={<CloseCircleOutlined />}
      >
        Remover
      </Button>}
      {(index === inputsLength - 1) && <Button
        onClick={handleAddInput}
        disabled={disabled || !data?.city || !data?.daysNumber}
        icon={<PlusCircleOutlined />}
      >
        Adicionar
      </Button>}
    </Space>
  )
}
export default ItineraryInput;