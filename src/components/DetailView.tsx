import { Dialog } from "@headlessui/react";
import constate from "constate";
import { useState } from "react";
import type { Token } from '../collection'

function useDetailView() {
  const [token, setToken] = useState<Token | null>(null);
  return { token, setToken };
}

export const [DetailViewProvider, useDetailViewContext] = constate(useDetailView);

export const DetailView = () => {
  const { token, setToken } = useDetailViewContext();

  return (
    <Dialog
      open={!!token}
      onClose={() => setToken(null)}
      className="fixed z-50 inset-0 overflow-y-auto"
    >
      <div className="flex items-center justify-center min-h-screen">
        <Dialog.Overlay className="fixed inset-0 bg-white/80 dark:bg-black/80 backdrop-blur" />

        <div className="relative max-w-7xl bg-red p-3 lg:p-12 mx-auto">
          {token && <img className="max-w-full" src={token.src} alt={token.title} />}
        </div>
      </div>
    </Dialog>
  );
};

