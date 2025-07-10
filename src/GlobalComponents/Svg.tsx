import type { IconsCollection } from '@/store/icons/icons';
import icons from '@/store/icons/icons';

// Застосовуємо типізацію до імпортованого об'єкта `icons`.
// Це дозволяє TypeScript розуміти структуру `icons` на етапі компіляції.
const typedIcons: IconsCollection = icons;


// Інтерфейс пропсів компонента Svg
interface SvgProps {
  width: string;
  height: string;
  fill?: string;
  iconName: string,
  iconClass?: string; // Не обовʼязковий параметр, але може передаваитися. Якщо він передається, то він йде як рядок
}

const Svg: React.FC<SvgProps> = ({ width, height, fill, iconName, iconClass } ) => {
  const iconData = typedIcons[iconName];

  if (!iconData) {
    console.warn(`Іконка з назвою "${iconName}" не знайдена у сховищі.`);
    return null;
  }

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      fill={fill}
      viewBox={iconData.viewBox}
      enableBackground="new 0 0 512 512"
      className={iconClass}
    >
      {iconData.path.map((d, index) => (
        <path
          key={index}
          d={d}
        />
      ))}
    </svg>
  );
}

export default Svg
