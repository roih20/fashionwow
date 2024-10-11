"use client";

import { XMarkIcon } from "@heroicons/react/24/outline";

interface Props {
  closeModal: () => void;
}

export default function CloseModalBtn({ closeModal }: Props) {
  return (
    <button onClick={closeModal} className="p-2.5 absolute top-4 right-4">
      <XMarkIcon width={24} height={24} />
    </button>
  );
}
