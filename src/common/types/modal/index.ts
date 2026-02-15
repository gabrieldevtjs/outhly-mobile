export interface CreateEditModalComponentType<T> {
  dataUpdate?: T | null;
  closeModal: () => void;
  isOpenModal: boolean;
  refetch?: () => void;
  onInputSelect?: (value: string) => void;
}

export interface CreateModalComponentType {
  closeModal: () => void;
  isOpenModal: boolean;
  refetch?: () => void;
}
