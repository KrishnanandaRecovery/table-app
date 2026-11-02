import { Loader2 } from "lucide-react";

function Loader() {
  return (
    <div className="w-full">
      <Loader2 className="w-25 h-25 p-5 mx-auto text-blue-500 animate-spin" />
    </div>
  );
}

export default Loader;
