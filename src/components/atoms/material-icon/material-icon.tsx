interface MaterialIconProps {
  name: string;
  className?: string;
  size?: number;
}

function MaterialIcon({ name, className = "", size = 16 }: MaterialIconProps) {
  return (
    <span
      className={`material-icons text-center ${className}`}
      style={{
        fontSize: `${size}px`,
        height: `${size}px`,
        width: `${size}px`,
      }}
    >
      {name}
    </span>
  );
}

export default MaterialIcon;
