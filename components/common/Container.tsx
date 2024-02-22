interface childrenProps {
  children: React.ReactNode;
}

const Container: React.FC<childrenProps> = ({ children }) => {
  return (
    <div className="max-w-[1920px] xl:px-12 md:px-4 px-4 mx-auto">
      {children}
    </div>
  );
};

export default Container;
