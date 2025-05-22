import { create } from "zustand";

interface formDataState {
  name: string;
  email: string;
  text: string;
}

interface formData {
  formData: formDataState;
  postFooterForm: () => Promise<void>;
}

const useFooterFormStore = create<formData>((set) => ({
  formData: {
    name: "",
    email: "",
    text: "",
  },
  postFooterForm: async () => {
    try {
      const { formData } = useFooterFormStore.getState();
      const res = await fetch(`${process.env.NEXT_PUBLIC_API}/footerform`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!res.ok) {
        throw new Error(`Failed to post footer form: ${res.statusText}`);
      }

      set({ formData: { name: "", email: "", text: "" } });
    } catch (error) {
      console.error("Error posting footer form:", error);
    }
  },
}));

export default useFooterFormStore;
