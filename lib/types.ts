interface BaseOverLayProps {
  children: React.ReactNode;
  onClose?: () => void;
}
export interface LoaderComponentProps extends BaseOverLayProps {
  type: "loader";
  message: string;
  modalType?: never;
}

export interface ModalComponentProps extends BaseOverLayProps {
  type: "modal";
  modalType: "success" | "error" | "warning";
  message?: never;
}

export type OverlayComponentProps = LoaderComponentProps | ModalComponentProps;