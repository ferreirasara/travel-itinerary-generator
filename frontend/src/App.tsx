import { Button, Card } from "antd";
import { useCallback, useState } from "react";
import { ItineraryData } from "./types";
import ItineraryInput from "./components/ItineraryInput";
import MainContainer from "./components/MainContainer";
import MainContainerInner from "./components/MainContainerInner";
import InputsContainer from "./components/InputsContainer";
import { generateItinerary } from "./api";

const defaultInput: ItineraryData = { city: undefined, daysNumber: undefined };

function App() {
  const [loading, setLoading] = useState<boolean>(false);
  const [inputs, setInputs] = useState<ItineraryData[]>([defaultInput]);

  const handleAddInput = useCallback(() => {
    setInputs((prev) => [...prev, defaultInput])
  }, []);

  const handleRemoveInput = useCallback((index: number) => {
    setInputs([...inputs?.filter((_, i) => i !== index)])
  }, [inputs]);

  const handleChangeCity = useCallback((value: string, index: number) => {
    setInputs([...inputs?.map((input, i) => {
      if (i === index) return { city: value, daysNumber: input?.daysNumber }
      return input;
    })])
  }, [inputs]);

  const handleChangeDaysNumber = useCallback((value: string, index: number) => {
    setInputs([...inputs?.map((input, i) => {
      if (i === index) return { city: input?.city, daysNumber: parseInt(value) }
      return input;
    })])
  }, [inputs]);

  const handleGenerate = useCallback(async () => {
    setLoading(true);
    const response = await generateItinerary(inputs);
    setLoading(false);
  }, [inputs])

  return (
    <MainContainer>
      <MainContainerInner>
        <Card
          title="Gerador de roteiro de viagem"
          actions={[
            <Button
              type="primary"
              onClick={handleGenerate}
              loading={loading}
            >
              Gerar itinerário
            </Button>
          ]}
        >
          <InputsContainer>
            {inputs?.map((cur, index) => (
              <ItineraryInput
                data={cur}
                handleAddInput={handleAddInput}
                handleChangeCity={handleChangeCity}
                handleChangeDaysNumber={handleChangeDaysNumber}
                handleRemoveInput={handleRemoveInput}
                index={index}
                inputsLength={inputs?.length}
              />
            ))}
          </InputsContainer>
        </Card>
      </MainContainerInner>
    </MainContainer>
  );
}

export default App;
