import { Button, Card, Space } from "antd";
import { useCallback, useMemo, useState } from "react";
import { ItineraryData } from "./types";
import ItineraryInput from "./components/ItineraryInput";
import MainContainer from "./components/MainContainer";
import MainContainerInner from "./components/MainContainerInner";
import InputsContainer from "./components/InputsContainer";
import { generateItinerary } from "./api";
import ItineraryResult from "./components/ItineraryResult";
import { ReloadOutlined, RocketOutlined, ThunderboltOutlined } from "@ant-design/icons";

const defaultInput: ItineraryData = { city: undefined, daysNumber: undefined };

function App() {
  const [inputs, setInputs] = useState<ItineraryData[]>([defaultInput]);
  const [loading, setLoading] = useState<boolean>(false);
  const [itineraryResult, setItineraryResult] = useState<string>();

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
    try {
      const response = await generateItinerary(inputs?.filter(cur => !!cur?.city && !!cur?.daysNumber && cur?.daysNumber > 0));
      setItineraryResult(response);
    } catch (e) {
      console.log(e);
    }
    setLoading(false);
  }, [inputs])

  const handleResetInputs = useCallback(() => {
    setInputs([defaultInput]);
    setItineraryResult(undefined);
  }, [])

  const hasAtLeastOneInput = useMemo(() => inputs?.some(cur => !!cur?.city && !!cur?.daysNumber), [inputs])

  return (
    <MainContainer>
      <MainContainerInner>
        <Card
          title={
            <Space>
              <RocketOutlined />
              Gerador de roteiro de viagem
            </Space>
          }
          actions={[
            itineraryResult ? <Button
              type="primary"
              onClick={handleResetInputs}
              icon={<ReloadOutlined />}
            >
              Gerar novo itinerário
            </Button>
              : <Button
                type="primary"
                onClick={handleGenerate}
                loading={loading}
                disabled={!hasAtLeastOneInput}
                icon={<ThunderboltOutlined />}
              >
                Gerar itinerário
              </Button>
          ]}
        >
          <InputsContainer>
            {inputs?.map((cur, index) => (
              <ItineraryInput
                disabled={!!itineraryResult}
                key={index}
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
          <ItineraryResult itinerary={itineraryResult} />
        </Card>
      </MainContainerInner >
    </MainContainer >
  );
}

export default App;
