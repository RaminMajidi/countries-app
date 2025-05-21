import * as SolidIcons from "@heroicons/react/24/solid";
import * as OutlineIcons from "@heroicons/react/24/outline";

type IconType = keyof typeof SolidIcons | keyof typeof OutlineIcons;
interface IconProps {
    icon: IconType;
    className?: string;
    outline?: boolean;
}

const HeroIcon = (props: IconProps) => {

    const { icon, className = 'w-6 h-6 text-slate-300', outline = false } = props;

    const Icon = outline ? OutlineIcons[icon] : SolidIcons[icon];

    return <Icon className={className} />;
};

export default HeroIcon;