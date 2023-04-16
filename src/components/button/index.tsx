export const ButtonComponent = ({ text, fn }: { text: string; fn: any }) => {
  return (
    <button
      type="button"
      onClick={fn}
      className="duration-75 hover:bg-white hover:text-indigo-500 text-white border border-white rounded-full text-2xl px-14 py-2.5 text-center font-medium tracking-wider"
    >
      {text}
    </button>
  );
};
