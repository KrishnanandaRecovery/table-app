interface ErrorMessageProps {
  errorMessage: string;
  refetch?: () => void;
}

function Error(props: ErrorMessageProps) {
  const { errorMessage, refetch } = props;

  return (
    <div className="flex flex-col justify-center items-center h-screen">
      <p className="text-red-700 text-2xl mb-4">{errorMessage}</p>
      <button
        className="px-4 py-2 rounded text-white cursor-pointer bg-emerald-600"
        onClick={refetch}
      >
        Fetch Again
      </button>
    </div>
  );
}

export default Error;
