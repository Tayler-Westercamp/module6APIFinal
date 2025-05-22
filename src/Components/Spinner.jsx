const Spinner = () => {
  const spinnerStyle = {
    width: '50px',
    height: '50px',
    border: '6px solid #fcc252',
    borderTop: '6px solid black', 
    borderRadius: '50%',
    animation: 'spin 1s linear infinite',
  };

  const containerStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    
  };

  return (
    <div style={containerStyle} role="status">
      <div style={spinnerStyle}></div>
      <span style={{ position: 'absolute', left: '-9999px' }}>Loading...</span>
    </div>
  );
};

export default Spinner;
