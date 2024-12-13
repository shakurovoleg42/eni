import { create } from "zustand";

interface formDataState {
  companyName: string;
  postalAddress: string;
  phoneNumber: string;
  email: string;
}

interface formData {
  formData: formDataState;
  postModalForm: () => Promise<void>;
}

const useModalFormStore = create<formData>((set) => ({
  formData: {
    companyName: "",
    postalAddress: "",
    phoneNumber: "",
    email: "",
  },
  postModalForm: async () => {
    try {
      const res = await fetch(process.env.NEXT_PUBLIC_API + "/modalform", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          companyName: useModalFormStore.getState().formData.companyName,
          postalAddress: useModalFormStore.getState().formData.postalAddress,
          phoneNumber: useModalFormStore.getState().formData.phoneNumber,
          email: useModalFormStore.getState().formData.email,
        }),
      });
      if (!res.ok) {
        throw new Error("Failed to post modal form");
      }
      set({
        formData: {
          companyName: "",
          postalAddress: "",
          phoneNumber: "",
          email: "",
        },
      });
    } catch (error) {
      console.error("Error post modal form:", error);
    }
  },
}));

export default useModalFormStore;
