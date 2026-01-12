import {
  addEdge,
  applyEdgeChanges,
  applyNodeChanges,
  Background,
  BackgroundVariant,
  Controls,
  MiniMap,
  ReactFlow,
  type Edge,
  type Node,
  type OnNodesChange,
  type OnEdgesChange,
  type OnConnect,
  type NodeTypes,
} from "@xyflow/react";
import "@xyflow/react/dist/style.css";
import { useCallback, useState } from "react";
import { initialEdges, initialNodes } from "./constant";
import YouTubeNode from "./components/nodes/YouTubeNode";
import { CustomEdge } from "./components/edges/CustomEdge";
import Sidebar from "./components/Sidebar";

const nodeTypes: NodeTypes = {
  youtube: YouTubeNode,
};
const edgeTypes = {
  customEdge: CustomEdge,
};

export default function App() {
  const [nodes, setNodes] = useState<Node[]>(initialNodes);
  const [edges, setEdges] = useState<Edge[]>(initialEdges);

  const onNodesChange: OnNodesChange = useCallback(
    (changes) =>
      setNodes((nodesSnapshot) => applyNodeChanges(changes, nodesSnapshot)),
    []
  );
  const onEdgesChange: OnEdgesChange = useCallback(
    (changes) =>
      setEdges((edgesSnapshot) => applyEdgeChanges(changes, edgesSnapshot)),
    []
  );
  const onConnect: OnConnect = useCallback(
    (params) =>
      setEdges((edgesSnapshot) =>
        addEdge({ ...params, animated: true }, edgesSnapshot)
      ),
    []
    //  type: "customEdge"
  );

  const handleAddContent = useCallback(
    (payload: {
      url: string;
      title: string;
      author?: string;
      thumbnail: string;
    }) => {
      const id = `yt-${Date.now()}`;
      const newNode: Node = {
        id,
        type: "youtube",
        position: {
          x: 250 + Math.random() * 200,
          y: 100 + Math.random() * 200,
        },
        data: {
          title: payload.title,
          author: payload.author,
          thumbnail: payload.thumbnail,
          url: payload.url,
        },
      };
      setNodes((nds) => nds.concat(newNode));
    },
    []
  );

  return (
    <div className="bg-[#F0F0F0]" style={{ width: "100vw", height: "100vh" }}>
      <ReactFlow
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onConnect={onConnect}
        nodeTypes={nodeTypes}
        edgeTypes={edgeTypes}
        fitView
      >
        <Sidebar onAddContent={handleAddContent} />
        <Background variant={BackgroundVariant.Dots} gap={5} size={0.5} />
        <Controls />
        <MiniMap zoomable pannable />
      </ReactFlow>
    </div>
  );
}
