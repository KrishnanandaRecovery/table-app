interface ErrorObjInterface {
  message: string;
}

interface ErrorInterface {
  error: ErrorObjInterface | null;
}

function Error({ error }: ErrorInterface) {
  return (
    <div>
      <div className="p-5 w-full text-center text-red-500">
        {error?.message}
      </div>
    </div>
  );
}

export default Error;
