import Link from "next/link";
import React from "react";

export interface EmptyStateProps {}

const EmptyState = ({}: EmptyStateProps) => (
  <div className="grid gap-y-4 justify-items-center">
    <h3 className="uppercase bold text-center">There are no customers!</h3>
    <Link
      href="/create"
      className="uppercase py-2 px-4 border border-white rounded-md"
    >
      Create
    </Link>
  </div>
);

export default EmptyState;
