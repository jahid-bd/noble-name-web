'use client';

const UserCard = ({ user }: { user: any }) => {
  return (
    <div
      className={`p-5 rounded-xl flex flex-col gap-4 relative ${
        user?.gender === 'female' ? 'bg-pink' : 'bg-blue'
      }`}
    >
      <p className="text-white text-base font-medium mb-1.5">
        Name: {user?.name}
      </p>
      <p className="text-white text-base font-medium mb-1.5">
        Email: {user?.email}
      </p>
      <p className="text-white text-base font-medium mb-1.5">
        Age Group: {user?.age}
      </p>
    </div>
  );
};

export default UserCard;
