"use client"

import { Modal } from "@/components/ui/modal";


const SetupPage = () => {
  return (
    <div className="p-5">
       <Modal isOpen title="Test" description="Test description" onClose={() => {}}>Children</Modal>
    </div>
  );
}

export default SetupPage