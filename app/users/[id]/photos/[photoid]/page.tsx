import React from "react";

interface Props {
  params: { id: number; photoid: number };
}

const UserPhoto = ({ params: { id, photoid } }: Props) => {
  return (
    <div>
      UserPhoto {id} {photoid}
    </div>
  );
};

export default UserPhoto;
