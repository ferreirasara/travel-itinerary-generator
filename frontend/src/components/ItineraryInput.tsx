import { Button, Input, Space } from "antd";
import { ItineraryData } from "../types";

interface ItineraryInputProps {
  index: number
  data: ItineraryData
  inputsLength: number
  handleAddInput: () => void
  handleRemoveInput: (index: number) => void
  handleChangeCity: (value: string, index: number) => void
  handleChangeDaysNumber: (value: string, index: number) => void
}
const ItineraryInput = ({ index, data, inputsLength, handleAddInput, handleChangeCity, handleChangeDaysNumber, handleRemoveInput }: ItineraryInputProps) => {
  return (
    <Space key={index}>
      <Input
        placeholder="Cidade"
        value={data?.city}
        onChange={(e) => handleChangeCity(e?.currentTarget?.value, index)}
        style={{ width: 100 }}
      />
      <Input
        placeholder="Quantidade de dias"
        value={data?.daysNumber}
        onChange={(e) => handleChangeDaysNumber(e?.currentTarget?.value, index)}
        style={{ width: 100 }}
      />
      {inputsLength > 1 && <Button onClick={() => handleRemoveInput(index)}>
        Remover
      </Button>}
      {(index === inputsLength - 1) && <Button onClick={handleAddInput}>
        Adicionar
      </Button>}
    </Space>
  )
}
export default ItineraryInput;