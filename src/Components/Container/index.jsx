import PropTypes from "prop-types";

function Container({ children }) {
  return (
    <div className="bg-slate-800 h-screen flex items-center justify-center py-16">
      <div className="w-full max-w-sm">
        {children}
      </div>
    </div>
  );
}

Container.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Container;
