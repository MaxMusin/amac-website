const Header = ({ title, badge }: { title: string; badge: string }) => {
  return (
    <div className="">
      <p className="inline-block rounded-[32px] border border-secondary-foreground px-4 py-2 uppercase text-secondary-foreground font-medium">
        {badge}
      </p>
      <h2 className="text-4xl md:text-5xl font-bold mb-4 md:mb-6 mt-4">{title}</h2>
    </div>
  );
};

export default Header;
