import React from "react";
import { FaYoutube } from "react-icons/fa";
import { Handle, Position } from "@xyflow/react";

interface YouTubeNodeData {
  thumbnail?: string;
  title?: string;
  author?: string;
}

interface YouTubeNodeProps {
  data: YouTubeNodeData;
}

const YouTubeNode: React.FC<YouTubeNodeProps> = ({ data }) => {
  return (
    <div className="bg-white rounded-sm shadow p-1.5 w-40 relative">
      <Handle
        id="left"
        type="source"
        position={Position.Left}
        style={{
          width: 10,
          height: 10,
          background: "#ffffff",
          border: "1px solid #4A5565",
          borderRadius: "50%",
        }}
      />
      <Handle
        id="top"
        type="target"
        position={Position.Top}
        style={{
          width: 10,
          height: 10,
          background: "#ffffff",
          border: "1px solid #4A5565",
          borderRadius: "50%",
        }}
      />
      <Handle
        id="right"
        type="source"
        position={Position.Right}
        style={{
          width: 10,
          height: 10,
          background: "#ffffff",
          border: "1px solid #4A5565",
          borderRadius: "50%",
        }}
      />
      <Handle
        id="bottom"
        type="target"
        position={Position.Bottom}
        style={{
          width: 10,
          height: 10,
          background: "#ffffff",
          border: "1px solid #4A5565",
          borderRadius: "50%",
        }}
      />
      <FaYoutube size={10} className="text-red-600 mb-2" />
      {data?.thumbnail && (
        <div className="w-full h-16 overflow-hidden rounded">
          <img
            src={data.thumbnail}
            alt={data.title}
            className="w-full h-full object-cover"
          />
        </div>
      )}
      <div className="mt-3 mb-4">
        <div className="font-semibold text-[6px] line-clamp-2">
          {data?.title}
        </div>
        {data?.author && (
          <div className="text-[5px] text-gray-500 mt-1">{data.author}</div>
        )}
      </div>
    </div>
  );
};

export default YouTubeNode;
