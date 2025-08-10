import { cn } from "@/utils"

const Header = ({ title, badge, dark }: { title: string; badge: string; dark?: boolean }) => {
  return (
    <div className="">
      <p className={cn("inline-block rounded-[32px] border px-4 py-2 uppercase font-medium", dark ? "border-secondary-foreground text-secondary-foreground" : "border-secondary text-secondary")}>
        {badge}
      </p>
      <h2 className={cn("text-4xl md:text-5xl font-bold mb-4 md:mb-6 mt-4", dark ? "text-white" : "text-muted")}>{title}</h2>
    </div>
  );
};

export default Header;
