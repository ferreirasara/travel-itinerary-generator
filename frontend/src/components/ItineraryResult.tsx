import { Divider, Typography } from "antd";
import Markdown from "react-markdown";

interface ItineraryResultProps {
  itinerary: string | undefined
}
const ItineraryResult = ({ itinerary }: ItineraryResultProps) => {
  if (!itinerary) return null;

  return <>
    <Divider>
      <Typography.Title level={2} style={{ margin: '8px 0px' }}>Resultado</Typography.Title>
    </Divider>
    <Markdown>{itinerary}</Markdown>
  </>
}

export default ItineraryResult;