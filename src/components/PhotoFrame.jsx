import { ExternalLink } from "lucide-react";

export default function PhotoFrame(props) {
  return (
    <div style={{ backgroundImage: `url(${props.image})` }} className="min-h-[200px] w-[250px]  overflow-hidden shadow-md bg-no-repeat bg-center bg-contain">
      
    </div>
  );
}
