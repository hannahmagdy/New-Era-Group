import { useInView } from '../hooks/useInView';

type Direction = 'up' | 'down' | 'left' | 'right' | 'fade';

interface RevealProps {
  children: React.ReactNode;
  direction?: Direction;
  delay?: number;
  duration?: number;
  className?: string;
  threshold?: number;
  as?: keyof JSX.IntrinsicElements;
}

const directionStyles: Record<Direction, string> = {
  up: 'translate-y-8',
  down: '-translate-y-8',
  left: '-translate-x-8',
  right: 'translate-x-8',
  fade: '',
};

export default function Reveal({
  children,
  direction = 'up',
  delay = 0,
  duration = 700,
  className = '',
  threshold = 0.12,
  as: Tag = 'div',
}: RevealProps) {
  const { ref, inView } = useInView(threshold);

  const base = `opacity-0 ${directionStyles[direction]}`;
  const visible = 'opacity-100 translate-x-0 translate-y-0';

  return (
    <Tag
      ref={ref as React.Ref<HTMLDivElement>}
      className={`transition-all ease-out ${inView ? visible : base} ${className}`}
      style={{
        transitionDuration: `${duration}ms`,
        transitionDelay: `${delay}ms`,
      }}
    >
      {children}
    </Tag>
  );
}
