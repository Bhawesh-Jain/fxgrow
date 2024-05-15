const Marquee = ({ children, speed = 10 }) => {
    return (
      <div className="overflow-hidden whitespace-nowrap w-full flex items-center">
        <div
          className="flex"
          style={{
            animation: `marquee ${speed}s linear infinite`,
          }}
        >
          <div className="flex">
            {children}
            {children}
            {children}
            {children}
          </div>
        </div>
      </div>
    );
  };
  
  export default Marquee;
  
  