import { LoaderComponentProps, ModalComponentProps, OverlayComponentProps } from "@/lib/types"
import React from "react"
import { cn } from "@/lib/utils"
import ModalComponent from "./ModalComponent";

export const OverlayWrapper: React.FC<OverlayComponentProps> = (props) => {
    const { children, type, onClose } = props;

    const isLoader = type === "loader";
    const isModal = type === "modal";

    const loaderMessage = isLoader
      ? (props as LoaderComponentProps).message
      : undefined;

    const modalSpecificType = isModal
      ? (props as ModalComponentProps).modalType
      : undefined;

    return (
      <div
        className={cn(
          "w-full h-full fixed top-0 left-0 bg-black/50 flex justify-center items-start pt-0",
          isLoader && "items-center",
          isModal && "pt-[10vh]"
        )}
      >
        {isLoader && (
          <div className="flex flex-col items-center justify-center p-4">
            {children} {/* This is typically your LoaderSpinner component */}
            {loaderMessage && (
              <p className="mt-4 text-white text-lg">{loaderMessage}</p>
            )}
          </div>
        )}

        {/* Modal Content Area - Now directly ModalComponent */}
        {isModal && (
          <ModalComponent
            type="modal"
            modalType={modalSpecificType!}
            onClose={onClose}
            // transactionData={transactionData}
          />
          // Note: `children` from OverlayWrapper are NOT passed to ModalComponent here,
          // as ModalComponent is now fully responsible for its own content based on transactionData
        )}
      </div>
    );
}

// I just thought that the data passed into the modal ModalComponent would be data fetched of transactions, with values like payment type, phone number, email, transaction ID, amount paid.