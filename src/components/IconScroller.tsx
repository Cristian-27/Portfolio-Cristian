import { useEffect, useState } from 'preact/hooks';
import type { ComponentChildren } from 'preact';

type IconScrollerProps = {
  children: ComponentChildren;
};

export default function IconScroller({ children }: IconScrollerProps) {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    // Activa la animación luego de 100ms o cuando los íconos hayan cargado realmente
    const timeout = setTimeout(() => {
      setAnimate(true);
    }, 100);

    return () => clearTimeout(timeout);
  }, []); 

  return (
    <div class="w-full max-w-[500px] overflow-hidden relative mask-fade">
      <div
        class={`flex items-center gap-4 transition-opacity whitespace-nowrap duration-600 ${
          animate ? 'animate-scroll' : ''
        }`}
        style={{ width: 'max-content' }}
      >
        {[children, children, children, children]}
      </div>
    </div>
  );
}

