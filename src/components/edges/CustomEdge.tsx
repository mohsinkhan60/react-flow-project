import {
  BaseEdge,
  EdgeLabelRenderer,
  getStraightPath,
  useReactFlow,
  type EdgeProps,
} from "@xyflow/react";
import { RxCross2 } from "react-icons/rx";

export function CustomEdge({
  id,
  sourceX,
  sourceY,
  targetX,
  targetY,
}: EdgeProps) {
  const { setEdges } = useReactFlow();
  const [edgePath, labelX, labelY] = getStraightPath({
    sourceX,
    sourceY,
    targetX,
    targetY,
  });

  const onEdgeDelete = () => {
    setEdges((edges) => edges.filter((edge) => edge.id !== id));
  };

  return (
    <>
      <BaseEdge id={id} path={edgePath} />
      <EdgeLabelRenderer>
        <div
          style={{
            position: "absolute",
            transform: `translate(-50%, -50%) translate(${labelX}px,${labelY}px)`,
            pointerEvents: "all",
          }}
        >
          <button
            onClick={onEdgeDelete}
            className="flex items-center justify-center whitespace-nowrap text-sm font-medium ring-offset-background focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 text-secondary-foreground h-3 w-3 rounded-full bg-white border border-gray-300 hover:bg-red-50 hover:border-red-400 shadow-sm hover:shadow-md transition-all duration-200 ease-in-out"
          >
            <RxCross2 className="h-2 w-2 text-gray-600 hover:text-red-600 transition-colors" />
          </button>
        </div>
      </EdgeLabelRenderer>
    </>
  );
}
