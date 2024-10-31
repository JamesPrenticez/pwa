import { useAppSelector } from "@redux/hooks";
import { useGetUserQuery } from "@redux/services";
import { Button } from "@components/ui/button";
import { capitalizeFirstLetter } from "@utils/capitalizeFirstLetter";
import { formatDate } from "@utils/formatDate";
import { ClickCounterButton } from "@components/click-counter";
import { Loading } from "@components/common/loading";
import { get, StoreName } from "@db";

export const UserSettings = () => {
  const { data, spaToken } = useAppSelector((state) => state.user);
  // TODO fix rtk query chache??
  useGetUserQuery(undefined, {
    skip: true,
  });

  if (!data) return <Loading />;

  return (
    <div className="text-primary">
      <div className="flex flex-col w-full mt-4 space-y-4 ">
        <div className="grid grid-cols-[128px_1fr] md:grid-cols-[192px_1fr] bg-glass p-4 rounded-md">
          <div
            className="w-full aspect-square rounded-full border-major border-2"
            style={{
              backgroundSize: "cover",
              backgroundPosition: "50% 50%",
              backgroundImage: `url('${data.profilePicture}')`,
            }}
          />

          <div className="p-4 overflow-hidden whitespace-nowrap text-ellipsis flex">
            <div>
              <h1 className="text-3xl md:text-6xl bold overflow-hidden whitespace-nowrap text-ellipsis">
                {capitalizeFirstLetter(data.firstName)}{" "}
                {capitalizeFirstLetter(data.lastName)}
              </h1>
              <h2 className="mt-2 ml-1 text-2xl w-full text-muted overflow-hidden whitespace-nowrap text-ellipsis">
                {data.email}
              </h2>
            </div>
            <div className="ml-auto flex items-center justify-center">
              <ClickCounterButton />
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row md:justify-between gap-4">
          <div className="w-full bg-glass rounded-md p-4">
            <h1 className="text-3xl text-muted mb-4 font-bold">Details</h1>

            <div className="grid grid-cols-2  text-2xl gap-4 ">
              <h4 className="font-bold">Subscription:</h4>
              <div className="flex">
                <p className="text-gray-400 flex">{data.subscription}</p>
                <Button
                  variant="filled"
                  color="success"
                  className="ml-auto text-sm px-[6px] py-[4px]"
                >
                  Upgrade
                </Button>
              </div>

              <h4 className="font-bold">Joined:</h4>
              <p>{formatDate(data.dateCreated ?? "")}</p>

              <h4 className="font-bold">Location:</h4>
              <p>{data.country}</p>

              <h4 className="font-bold">Phone:</h4>
              <p>{data.phone}</p>
            </div>
          </div>

          <div className="w-full md:mt-0 bg-glass rounded-md p-4">
            <h1 className="text-3xl text-muted mb-4 font-bold">Settings</h1>

            <div className="grid grid-cols-2 text-2xl gap-4 ">
              <h4 className="font-bold">SPA Token:</h4>
              <p className="text-yellow-400">{spaToken}</p>
              {/* <h4 className="font-bold">Subscription:</h4>
              <p className="text-green-600">{user.subscription}</p>

              <h4 className="font-bold">Joined:</h4>
              <p>{formatDate(user.dateCreated)}</p>

              <h4 className="font-bold">Location:</h4>
              <p>{user.country}</p>

              <h4 className="font-bold">Phone:</h4>
              <p>{user.phone}</p> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
