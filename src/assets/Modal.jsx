
import { useModal } from "./ModalContext";
import { motion } from "framer-motion";
import { useEffect } from "react";

export default function Modal() {
  const { modalContent, hideModal } = useModal();

  useEffect(() => {
    if (!modalContent) return;

    const timer = setTimeout(() => {
      hideModal();
    }, 5000);

    return () => clearTimeout(timer);
  }, [modalContent, hideModal]);

  if (!modalContent) return null;

  return (
    <div
      className="fixed inset-0 bg-black/70 flex items-center justify-center"
      onClick={hideModal}
    >
      <div
        className="relative bg-white w-1/3 h-1/3 overflow-hidden rounded-3xl flex flex-col items-center justify-center"
        onClick={(e) => e.stopPropagation()}
      >
        <motion.div
          className="absolute top-0 left-0 h-1.5 bg-red-500"
          initial={{ width: "0%" }}
          animate={{ width: "100%" }}
          transition={{ duration: 5, ease: "linear" }}
        />
        <div className="m-2">{modalContent}</div>
      </div>
    </div>
  );
}
