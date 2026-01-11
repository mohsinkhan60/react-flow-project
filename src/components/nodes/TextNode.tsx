import { Handle, Position } from "@xyflow/react";

interface TextNodeProps {
  data?: { text?: string };
}

export function TextNode(props: TextNodeProps) {
  const data = props?.data as { text?: string } | undefined;

  return (
    <>
      <Handle type="source" position={Position.Top} />
      <div className="border w-30 h-10 p-2">
        <span>{data?.text}</span>
      </div>
      <Handle type="target" position={Position.Bottom} />
    </>
  );
}
