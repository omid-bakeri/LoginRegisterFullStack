function ErrorRegister({ check }) {
  return (
    <div
      className="p-3 w-[94%] mx-auto selection:bg-slate-600 
      rounded-sm bg-red-500 text-red-100 mb-2 
                text-sm"
    >
      {check}
    </div>
  );
}

export default ErrorRegister;
