import {
  useContext,
  createContext,
  useState,
  useCallback,
  useRef,
  useEffect,
} from "react";
import { PauseIcon, PlayIcon } from "..";
import ReactDOM from "react-dom";

const ModalContext = createContext();

export function ModalProvider({ children }) {
  const [isOpen, setIsOpen] = useState(false);
  const [modalContent, setModalContent] = useState(null);
  const [isSucceed, setIsSucceed] = useState(false);
  const timeRef = useRef(null);

  const openModal = useCallback((content = null, succeed = false) => {
    if (succeed === true) setIsSucceed(true);
    if (timeRef.current) {
      clearTimeout(timeRef.current);
      timeRef.current = null;
    }

    setModalContent(content);
    setIsOpen(true);

    timeRef.current = setTimeout(() => {
      setIsOpen(false);
      timeRef.current = null;
    }, 5000);
  }, []);

  const closeModal = useCallback(() => {
    if (timeRef.current) {
      clearTimeout(timeRef.current);
      timeRef.current = null;
    }
    setIsOpen(false);
  }, []);

  useEffect(() => {
    return () => {
      if (timeRef.current) {
        clearTimeout(timeRef.current);
      }
    };
  }, []);

  const value = {
    isOpen,
    modalContent,
    openModal,
    closeModal,
    isSucceed,
  };

  return (
    <ModalContext.Provider value={value}>{children}</ModalContext.Provider>
  );
}

export function Modal() {
  const { isOpen, closeModal, modalContent, isSucceed } = useModal();

  return ReactDOM.createPortal(
    <div
      className={`w-full h-full ${isOpen && "fixed"} top-0 z-50 flex justify-center`}
      onClick={() => closeModal()}
    >
      <div
        className={`modal bg-white h-16 w-56 fixed -translate-y-32 ${isOpen && "translate-y-0"} transition-all duration-300 shadow-xl rounded-lg p-4 top-14 flex items-center justify-center gap-1`}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="bg-black size-5 rounded-full flex items-center justify-center p-1 animate-pulse">
          {isSucceed ? <PlayIcon /> : <PauseIcon />}
        </div>
        <span>{modalContent}</span>
      </div>
    </div>,
    document.getElementById("modal-root"),
  );
}

export function useModal() {
  const context = useContext(ModalContext);
  if (!context) throw new Error("useModal must be used within ModalProvider");
  return context;
}
