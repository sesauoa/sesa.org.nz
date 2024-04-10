const Heading = (props: any) => {
  return (
    <div className="p-5 top-0 z-10 px-5" role="banner">
      <div className="navbar bg-primary rounded-3xl opacity-70">
        <div className="m-auto">
          <h2 className="text-accent text-2xl font-bold font-sans">
            {props.title}
          </h2>
        </div>
      </div>
    </div>
  );
};

export default Heading;
