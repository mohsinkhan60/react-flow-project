import { Handle, Position, type NodeProps } from "@xyflow/react";

export function TextNode({data}: NodeProps<{ text: string }>) {
  return (
    <>
      <Handle type="source" position={Position.Top} />
      <div className="border w-30 h-10 p-2">
        <span>{data.text}</span>
      </div>
      <Handle type="target" position={Position.Bottom} />
    </>
  );
}
