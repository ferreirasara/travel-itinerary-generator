import { Button, Input, Space } from "antd";
import { ItineraryData } from "../types";

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
    <Space key={index}>
      <Input
        placeholder="Cidade"
        value={data?.city}
        onChange={(e) => handleChangeCity(e?.currentTarget?.value, index)}
        style={{ width: 100 }}
        disabled={disabled}
      />
      <Input
        placeholder="Dias"
        value={data?.daysNumber}
        onChange={(e) => handleChangeDaysNumber(e?.currentTarget?.value, index)}
        style={{ width: 100 }}
        disabled={disabled}
      />
      {inputsLength > 1 && <Button onClick={() => handleRemoveInput(index)} disabled={disabled}>
        Remover
      </Button>}
      {(index === inputsLength - 1) && <Button
        onClick={handleAddInput}
        disabled={disabled || !data?.city || !data?.daysNumber}
      >
        Adicionar
      </Button>}
    </Space>
  )
}
export default ItineraryInput;