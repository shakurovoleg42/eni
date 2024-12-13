import { create } from "zustand";

interface formDataState {
  name: string;
  surname: string;
  email: string;
  phone: string;
}

interface formData {
  formData: formDataState;
  postContactForm: () => Promise<void>;
}

const useContactFormStore = create<formData>((set) => ({
  formData: {
    name: "",
    surname: "",
    email: "",
    phone: "",
  },
  postContactForm: async () => {
    try {
      const res = await fetch(process.env.NEXT_PUBLIC_API + "/contactform", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: useContactFormStore.getState().formData.name,
          surname: useContactFormStore.getState().formData.surname,
          email: useContactFormStore.getState().formData.email,
          phone: useContactFormStore.getState().formData.phone,
        }),
      });
      if (!res.ok) {
        throw new Error("Failed to post modal form");
      }
      set({
        formData: {
          name: "",
          surname: "",
          email: "",
          phone: "",
        },
      });
    } catch (error) {
      console.error("Error post modal form:", error);
    }
  },
}));

export default useContactFormStore;
