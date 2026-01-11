import { Handle, Position, useReactFlow } from "@xyflow/react";
import { useState } from "react";

export function InputNode(props) {
  const [inputValue, setInputValue] = useState("");
  const { setNodes } = useReactFlow();

  function addTextNode() {
    setNodes((preNode) => [
      ...preNode,
      {
        id: crypto.randomUUID(),
        type: "text",
        position: { x: Math.random() * 200, y: Math.random() * 200 },
        data: { text: inputValue },
      },
    ]);
    setInputValue("");
  }

  return (
    <>
      <Handle type="source" position={Position.Top} />
      <div className="flex items-center justify-between gap-2">
        <input
          id="text"
          name="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          className="nodrag w-23 rounded-sm border p-1"
        />
        <button onClick={addTextNode} className="border rounded-full px-1">
          Add
        </button>
      </div>
      <Handle type="target" position={Position.Bottom} />
    </>
  );
}
