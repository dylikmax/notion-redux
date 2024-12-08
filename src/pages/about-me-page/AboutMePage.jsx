import { useSelector } from "react-redux";

function AboutMePage() {
  const user = useSelector((state) => state.user.data);
  const createdDate = new Date(user.createTime);

  return (
    <div className="flex flex-col items-center gap-10 mt-16">
      <h1 className="text-6xl font-bold">Hello, {user.email}</h1>
      <h2 className="text-2xl">
        Your account was created at {createdDate.toLocaleDateString()} in{" "}
        {createdDate.toLocaleTimeString()}
      </h2>
    </div>
  );
}

export default AboutMePage;
