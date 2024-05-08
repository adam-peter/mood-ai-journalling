import { JournalEntryWithAnalysis } from "@/types";
import React from "react";

const EntryCard = ({ entry }: { entry: JournalEntryWithAnalysis }) => {
  const date = new Date(entry.createdAt).toDateString();
  return (
    <div className="divide-y divide-gray-200 overflow-hidden rounded-lg bg-white shadow">
      <div className="px-4 py-5">{date}</div>
      <div className="px-4 py-5">{entry?.analysis?.summary}</div>
      <div className="px-4 py-5">{entry?.analysis?.mood}</div>
    </div>
  );
};

export default EntryCard;
