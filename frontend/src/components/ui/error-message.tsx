export const ErrorMessage = ({
  message,
}: {
  message: string | null | undefined;
}) => {
  return (
    <p className="text-fuchsia-500 text-[12px] italic absolute -bottom-[12px] left-[8px]">
      {message}
    </p>
  );
};
